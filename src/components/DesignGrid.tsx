import React from 'react';
import { Project } from '../types';

interface DesignGridProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
}

// Order mapping:
// On phone (mobile): 2 columns, 3 rows in order:
// 1. AR Glasses, 2. Vestre, 3. Erling Stool, 4. Concrete Sculpture, 5. Rottefella, 6. Watch
// On desktop (md:): Preserves the original desktop order:
// 1. Rottefella, 2. Watch, 3. AR Glasses, 4. Vestre, 5. Erling Stool, 6. Concrete Sculpture
const projectOrderClasses: Record<string, string> = {
  'aura-circadian-desk-lamp': 'order-1 md:order-3',    // AR Glasses
  'vita-smart-inhaler': 'order-2 md:order-4',          // Vestre Bench
  'tacta-analog-synthesizer': 'order-3 md:order-5',    // Erling Stool
  'kraft-ergonomic-chisel-set': 'order-4 md:order-6',  // Concrete Sculpture
  'rottefella-extend': 'order-5 md:order-1',           // Rottefella Extend
  'lumen-modular-kettle': 'order-6 md:order-2',        // Focus Watch
};

export const DesignGrid: React.FC<DesignGridProps> = ({
  projects,
  onSelectProject,
}) => {
  return (
    <main id="design-grid-page" className="w-full pb-16">
      {/* 
        Phone version: 1 project in width, making 6 rows, no spacing to each end.
        Desktop version (md:): 3 projects in width, original order preserved.
      */}
      <div
        id="projects-edge-to-edge-grid"
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 bg-black"
      >
        {projects
          .filter((project) => !project.isComingSoon)
          .map((project, index) => {
            const orderClass = projectOrderClasses[project.id] || '';
            return (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project.id)}
                className={`group relative w-full aspect-[4/3] overflow-hidden cursor-pointer bg-neutral-900 ${orderClass}`}
              >
                {/* Primary Cover Image: completely static on phone, defuse and scale transition on desktop */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover object-center md:image-defuse ${project.coverImageClassName || ''}`}
                />

                {/* Desktop only: Subtle diffusion overlay that dims on hover to highlight centered white typography */}
                <div className="hidden md:block absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 pointer-events-none" />

                {/* Desktop only: Centered Project Title that appears when hovered */}
                <div
                  id={`project-overlay-${project.id}`}
                  className="hidden md:flex absolute inset-0 z-10 flex-col items-center justify-center text-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                >
                  <h2 className="m-0 p-0 text-xs sm:text-sm md:text-base font-medium tracking-tight text-white max-w-[90%] text-center leading-snug drop-shadow-sm select-none">
                    {project.title}
                  </h2>
                </div>
              </article>
            );
          })}
      </div>
    </main>
  );
};
