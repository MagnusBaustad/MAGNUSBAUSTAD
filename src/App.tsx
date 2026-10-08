import { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { DesignGrid } from './components/DesignGrid';
import { ProjectDetail } from './components/ProjectDetail';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ProjectsProvider, useProjects } from './context/ProjectsContext';
import { EditToolbar } from './components/EditToolbar';

const PROJECT_SLUG_MAP: Record<string, string> = {
  'rottefella-extend': 'rottefellamove',
  'lumen-modular-kettle': 'focuswatch',
  'aura-circadian-desk-lamp': 'arglasses',
  'vita-smart-inhaler': 'vestrebench',
  'tacta-analog-synthesizer': 'erligstool',
  'kraft-ergonomic-chisel-set': 'concretesculpture',
};

const SLUG_TO_ID_MAP: Record<string, string> = {
  // Canonical slugs requested by user
  'rottefellamove': 'rottefella-extend',
  'focuswatch': 'lumen-modular-kettle',
  'arglasses': 'aura-circadian-desk-lamp',
  'vestrebench': 'vita-smart-inhaler',
  'erligstool': 'tacta-analog-synthesizer',
  'erlingstool': 'tacta-analog-synthesizer',
  'concretesculpture': 'kraft-ergonomic-chisel-set',
  'concrete sculpture': 'kraft-ergonomic-chisel-set',
  'concrete%20sculpture': 'kraft-ergonomic-chisel-set',
  'concrete-sculpture': 'kraft-ergonomic-chisel-set',

  // Hyphenated variants
  'rottefella-move': 'rottefella-extend',
  'focus-watch': 'lumen-modular-kettle',
  'ar-glasses': 'aura-circadian-desk-lamp',
  'vestre-bench': 'vita-smart-inhaler',
  'erling-stool': 'tacta-analog-synthesizer',
  'erlig-stool': 'tacta-analog-synthesizer',

  // Internal ID fallback
  'rottefella-extend': 'rottefella-extend',
  'lumen-modular-kettle': 'lumen-modular-kettle',
  'aura-circadian-desk-lamp': 'aura-circadian-desk-lamp',
  'vita-smart-inhaler': 'vita-smart-inhaler',
  'tacta-analog-synthesizer': 'tacta-analog-synthesizer',
  'kraft-ergonomic-chisel-set': 'kraft-ergonomic-chisel-set',
};

function resolveProjectId(raw: string): string {
  const decoded = decodeURIComponent(raw).trim().toLowerCase();
  if (SLUG_TO_ID_MAP[decoded]) return SLUG_TO_ID_MAP[decoded];
  const normalized = decoded.replace(/[\s\-_]+/g, '');
  if (SLUG_TO_ID_MAP[normalized]) return SLUG_TO_ID_MAP[normalized];
  return decoded;
}

function AppContent() {
  const { projects } = useProjects();
  const [currentPage, setCurrentPage] = useState<PageType>('design');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Parse hash on initial mount and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash.startsWith('project/')) {
        const rawSlug = hash.replace('project/', '');
        const pId = resolveProjectId(rawSlug);
        const exists = projects.some((p) => p.id === pId || p.slug === rawSlug || p.id === rawSlug);
        if (exists) {
          const matched = projects.find((p) => p.id === pId || p.slug === rawSlug || p.id === rawSlug);
          if (matched) {
            setSelectedProjectId(matched.id);
            setCurrentPage('design');
            return;
          }
        }
      }

      if (hash === 'about') {
        setCurrentPage('about');
        setSelectedProjectId(null);
      } else if (hash === 'contact') {
        setCurrentPage('contact');
        setSelectedProjectId(null);
      } else {
        setCurrentPage('design');
        setSelectedProjectId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [projects]);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    setSelectedProjectId(null);
    window.location.hash = page === 'design' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    const slug = PROJECT_SLUG_MAP[projectId] || projectId;
    window.location.hash = `#/project/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGrid = () => {
    setSelectedProjectId(null);
    setCurrentPage('design');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId)
    : null;

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col selection:bg-neutral-900 selection:text-white">
      {/* Sticky top navigation bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        selectedProjectId={selectedProjectId}
        onClearProject={handleBackToGrid}
      />

      {/* Main View Router */}
      <div className="flex-1 pt-[73px] md:pt-[89px]">
        {selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            onBackToGrid={handleBackToGrid}
          />
        ) : currentPage === 'design' ? (
          <DesignGrid
            projects={projects}
            onSelectProject={handleSelectProject}
          />
        ) : currentPage === 'about' ? (
          <About onNavigate={handleNavigate} />
        ) : (
          <Contact />
        )}
      </div>

      {/* Minimal Footer */}
      <footer className="w-full border-t border-neutral-100 py-8 px-6 sm:px-10 lg:px-14 flex items-center justify-center text-xs text-neutral-400">
        <div className="text-center">
          &copy; {new Date().getFullYear()} MAGNUSBAUSTAD. All rights reserved.
        </div>
      </footer>

      {/* Floating Edit Mode Toolbar */}
      <EditToolbar />
    </div>
  );
}

export default function App() {
  return (
    <ProjectsProvider>
      <AppContent />
    </ProjectsProvider>
  );
}

