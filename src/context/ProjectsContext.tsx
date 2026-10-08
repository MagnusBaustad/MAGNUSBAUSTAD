import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project } from '../types';
import { projects as defaultProjects } from '../data/projects';
import {
  AboutContent,
  ContactContent,
  defaultAboutContent,
  defaultContactContent,
} from '../data/siteContent';

interface ProjectsContextType {
  projects: Project[];
  aboutContent: AboutContent;
  contactContent: ContactContent;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleEditMode: () => void;
  updateField: (projectId: string, path: (string | number)[], value: any) => void;
  updateAboutContent: (field: keyof AboutContent, value: any) => void;
  updateContactContent: (field: keyof ContactContent, value: any) => void;
  resetToOriginal: () => void;
  lastSaved: Date | null;
  exportAsCode: () => string;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

const PROJECTS_STORAGE_KEY = 'mb_portfolio_custom_projects_v2';
const ABOUT_STORAGE_KEY = 'mb_portfolio_custom_about_v2';
const CONTACT_STORAGE_KEY = 'mb_portfolio_custom_contact_v2';

function setNestedValue(obj: any, path: (string | number)[], value: any): any {
  if (path.length === 0) return value;
  const [head, ...tail] = path;
  const target = obj !== null && typeof obj === 'object' ? obj : {};
  if (Array.isArray(target)) {
    const idx = Number(head);
    const newArr = [...target];
    newArr[idx] = setNestedValue(target[idx], tail, value);
    return newArr;
  }
  return {
    ...target,
    [head]: setNestedValue(target[head], tail, value),
  };
}

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Projects State - completely unlinked per project with deep cloning
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(PROJECTS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return defaultProjects.map((def) => {
            const custom = parsed.find((p: Project) => p.id === def.id);
            if (!custom) return JSON.parse(JSON.stringify(def));
            const effectiveTitle = custom.title || def.title;
            return {
              ...JSON.parse(JSON.stringify(def)),
              ...custom,
              title: effectiveTitle,
              isComingSoon: def.isComingSoon,
              comingSoonText: (custom.comingSoonText && custom.comingSoonText.trim() !== '') ? custom.comingSoonText : 'Coming soon...',
              coverImage: def.coverImage,
              detailHeroImage: (custom.detailHeroImage && (custom.detailHeroImage.startsWith('data:') || custom.detailHeroImage.startsWith('blob:'))) ? custom.detailHeroImage : ((def.id === 'aura-circadian-desk-lamp' || def.id === 'kraft-ergonomic-chisel-set') ? def.detailHeroImage : (custom.detailHeroImage || def.detailHeroImage)),
              processImages: (custom.processImages && custom.processImages.some((img: string) => typeof img === 'string' && (img.startsWith('data:') || img.startsWith('blob:'))))
                ? custom.processImages
                : ((def.id === 'vita-smart-inhaler' || def.id === 'tacta-analog-synthesizer' || def.id === 'kraft-ergonomic-chisel-set' || def.id === 'rottefella-extend' || !custom.processImages || custom.processImages.length === 0) ? def.processImages : custom.processImages),
              processImagesFullWidth: def.processImagesFullWidth ?? custom.processImagesFullWidth,
              resultImages: (custom.resultImages && custom.resultImages.some((img: string) => typeof img === 'string' && (img.startsWith('data:') || img.startsWith('blob:'))))
                ? custom.resultImages
                : ((def.id === 'vita-smart-inhaler' || def.id === 'tacta-analog-synthesizer' || def.id === 'aura-circadian-desk-lamp' || def.id === 'kraft-ergonomic-chisel-set' || def.id === 'rottefella-extend' || !custom.resultImages || custom.resultImages.length === 0) ? def.resultImages : custom.resultImages),
              phoneResultImages: (custom.phoneResultImages && custom.phoneResultImages.some((img: string) => typeof img === 'string' && (img.startsWith('data:') || img.startsWith('blob:'))))
                ? custom.phoneResultImages
                : ((def.id === 'kraft-ergonomic-chisel-set' || !custom.phoneResultImages || custom.phoneResultImages.length === 0) ? def.phoneResultImages : custom.phoneResultImages),
              v9TextBoxes: def.id === 'vita-smart-inhaler' ? ((custom.v9TextBoxes && custom.v9TextBoxes.length > 0) ? custom.v9TextBoxes : def.v9TextBoxes) : undefined,
              v11TextBoxes: def.id === 'vita-smart-inhaler' ? ((custom.v11TextBoxes && custom.v11TextBoxes.length > 0) ? custom.v11TextBoxes : def.v11TextBoxes) : undefined,
              sectionTitles: {
                ...(def.sectionTitles || {}),
                ...(custom.sectionTitles || {}),
                contextLabel: custom.sectionTitles?.contextLabel
                  ? (custom.sectionTitles.contextLabel.endsWith(' ')
                      ? custom.sectionTitles.contextLabel
                      : `${custom.sectionTitles.contextLabel.trimEnd()} `)
                  : 'Context: ',
                focusLabel: custom.sectionTitles?.focusLabel
                  ? (custom.sectionTitles.focusLabel.endsWith(' ')
                      ? custom.sectionTitles.focusLabel
                      : `${custom.sectionTitles.focusLabel.trimEnd()} `)
                  : 'Focus: ',
              },
            };
          });
        }
      }
    } catch {
      // fallback
    }
    return JSON.parse(JSON.stringify(defaultProjects));
  });

  // 2. About Content State
  const [aboutContent, setAboutContent] = useState<AboutContent>(() => {
    try {
      const saved = localStorage.getItem(ABOUT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultAboutContent,
          ...parsed,
          bioParagraph2: (parsed.bioParagraph2 && parsed.bioParagraph2.trim()) ? parsed.bioParagraph2 : defaultAboutContent.bioParagraph2,
          bioParagraph3: (parsed.bioParagraph3 && parsed.bioParagraph3.trim()) ? parsed.bioParagraph3 : defaultAboutContent.bioParagraph3,
          bioParagraph4: (parsed.bioParagraph4 && parsed.bioParagraph4.trim()) ? parsed.bioParagraph4 : defaultAboutContent.bioParagraph4,
        };
      }
    } catch {
      // fallback
    }
    return defaultAboutContent;
  });

  // 3. Contact Content State
  const [contactContent, setContactContent] = useState<ContactContent>(() => {
    try {
      const saved = localStorage.getItem(CONTACT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const sub = parsed.subheadline;
        const needsUpdate = !sub || (typeof sub === 'string' && sub.includes('Currently available for select') && sub.split('\n').length < 3);
        return {
          ...defaultContactContent,
          ...parsed,
          subheadline: needsUpdate ? defaultContactContent.subheadline : sub,
        };
      }
    } catch {
      // fallback
    }
    return defaultContactContent;
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Keyboard shortcut: Cmd+E or Ctrl+E to toggle edit mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'e') {
        const active = document.activeElement;
        const isEditingInput =
          active &&
          (active.tagName === 'INPUT' ||
            active.tagName === 'TEXTAREA' ||
            active.getAttribute('contenteditable') === 'true');

        if (!isEditingInput) {
          e.preventDefault();
          setIsEditMode((prev) => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update Project Field - fully unlinked and isolated per projectId
  const updateField = (projectId: string, path: (string | number)[], value: any) => {
    setProjects((prevProjects) => {
      const updated = prevProjects.map((p) => {
        if (p.id !== projectId) return p;
        return setNestedValue(p, path, value);
      });
      try {
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(updated));
        setLastSaved(new Date());
      } catch (err) {
        console.error('Failed to save projects to localStorage', err);
      }
      return updated;
    });
  };

  // Update About Content
  const updateAboutContent = (field: keyof AboutContent, value: any) => {
    setAboutContent((prev) => {
      const updated = { ...prev, [field]: value };
      try {
        localStorage.setItem(ABOUT_STORAGE_KEY, JSON.stringify(updated));
        setLastSaved(new Date());
      } catch (err) {
        console.error('Failed to save about content to localStorage', err);
      }
      return updated;
    });
  };

  // Update Contact Content
  const updateContactContent = (field: keyof ContactContent, value: any) => {
    setContactContent((prev) => {
      const updated = { ...prev, [field]: value };
      try {
        localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(updated));
        setLastSaved(new Date());
      } catch (err) {
        console.error('Failed to save contact content to localStorage', err);
      }
      return updated;
    });
  };

  // Reset all to defaults
  const resetToOriginal = () => {
    try {
      localStorage.removeItem(PROJECTS_STORAGE_KEY);
      localStorage.removeItem(ABOUT_STORAGE_KEY);
      localStorage.removeItem(CONTACT_STORAGE_KEY);
    } catch {}
    setProjects(defaultProjects);
    setAboutContent(defaultAboutContent);
    setContactContent(defaultContactContent);
    setLastSaved(new Date());
  };

  // Export updated content as TypeScript code
  const exportAsCode = () => {
    return `// ==========================================\n// 1. UPDATED ABOUT CONTENT (src/data/siteContent.ts)\n// ==========================================\nexport const defaultAboutContent = ${JSON.stringify(
      aboutContent,
      null,
      2
    )};\n\n// ==========================================\n// 2. UPDATED CONTACT CONTENT (src/data/siteContent.ts)\n// ==========================================\nexport const defaultContactContent = ${JSON.stringify(
      contactContent,
      null,
      2
    )};\n\n// ==========================================\n// 3. UPDATED PROJECTS (src/data/projects.ts)\n// ==========================================\nexport const projects = ${JSON.stringify(
      projects,
      null,
      2
    )};\n`;
  };

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        aboutContent,
        contactContent,
        isEditMode,
        setIsEditMode,
        toggleEditMode,
        updateField,
        updateAboutContent,
        updateContactContent,
        resetToOriginal,
        lastSaved,
        exportAsCode,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = (): ProjectsContextType => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};
