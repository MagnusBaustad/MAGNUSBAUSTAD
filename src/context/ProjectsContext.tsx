import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { projects as defaultProjects } from '../data/projects';
import {
  AboutContent,
  ContactContent,
  defaultAboutContent,
  defaultContactContent,
} from '../data/siteContent';
import { persistedData } from '../data/persistedContent';
import { isPreviewEnvironment } from '../utils/preview';
import { resolveAssetUrl } from '../utils/assetResolver';

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
  syncStatus: 'idle' | 'syncing' | 'synced' | 'error';
  syncToFiles: () => Promise<boolean>;
  importData: (jsonStr: string) => boolean;
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
  // 1. Projects State - reads from localStorage, falls back to persistedData, then defaultProjects
  const [projects, setProjects] = useState<Project[]>(() => {
    let customList: any[] | null = null;
    try {
      const saved = localStorage.getItem(PROJECTS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          customList = parsed;
        }
      }
    } catch {
      // ignore
    }

    if (!customList && persistedData && Array.isArray(persistedData.projects) && persistedData.projects.length > 0) {
      customList = persistedData.projects;
    }

    if (customList) {
      return defaultProjects.map((def) => {
        const custom = customList!.find((p: Project) => p.id === def.id);
        if (!custom) {
          return {
            ...def,
            coverImage: resolveAssetUrl(def.coverImage),
            detailHeroImage: resolveAssetUrl(def.detailHeroImage || def.coverImage),
            processImages: (def.processImages || []).map(resolveAssetUrl),
            resultImages: (def.resultImages || []).map(resolveAssetUrl),
            phoneResultImages: (def.phoneResultImages || []).map(resolveAssetUrl),
          };
        }
        const effectiveTitle = custom.title || def.title;
        return {
          ...def,
          ...custom,
          title: effectiveTitle,
          isComingSoon: def.isComingSoon,
          comingSoonText: (custom.comingSoonText && custom.comingSoonText.trim() !== '') ? custom.comingSoonText : 'Coming soon...',
          slug: custom.slug || def.slug,
          projectType: custom.projectType || def.projectType,
          focus: custom.focus || def.focus,
          clientOrContext: custom.clientOrContext || def.clientOrContext,
          coverImage: resolveAssetUrl(def.coverImage),
          detailHeroImage: (custom.detailHeroImage && (custom.detailHeroImage.startsWith('data:') || custom.detailHeroImage.startsWith('blob:')))
            ? custom.detailHeroImage
            : resolveAssetUrl(def.detailHeroImage || def.coverImage),
          processImages: (() => {
            if (!custom.processImages || custom.processImages.length === 0) return (def.processImages || []).map(resolveAssetUrl);
            const hasUploads = custom.processImages.some(
              (img: string) => typeof img === 'string' && (img.startsWith('data:') || img.startsWith('blob:'))
            );
            if (!hasUploads) {
              return (def.processImages || []).map(resolveAssetUrl);
            }
            return custom.processImages.map((img: string, idx: number) => {
              if (typeof img === 'string' && (img.startsWith('data:') || img.startsWith('blob:'))) {
                return img;
              }
              return (def.processImages && def.processImages[idx] ? resolveAssetUrl(def.processImages[idx]) : resolveAssetUrl(img));
            });
          })(),
          processImagesFullWidth: def.processImagesFullWidth ?? custom.processImagesFullWidth,
          resultImages: (() => {
            if (!custom.resultImages || custom.resultImages.length === 0) return (def.resultImages || []).map(resolveAssetUrl);
            const hasUploads = custom.resultImages.some(
              (img: string) => typeof img === 'string' && (img.startsWith('data:') || img.startsWith('blob:'))
            );
            if (!hasUploads) {
              return (def.resultImages || []).map(resolveAssetUrl);
            }
            return custom.resultImages.map((img: string, idx: number) => {
              if (typeof img === 'string' && (img.startsWith('data:') || img.startsWith('blob:'))) {
                return img;
              }
              return (def.resultImages && def.resultImages[idx] ? resolveAssetUrl(def.resultImages[idx]) : resolveAssetUrl(img));
            });
          })(),
          phoneResultImages: (() => {
            if (!custom.phoneResultImages || custom.phoneResultImages.length === 0) return (def.phoneResultImages || []).map(resolveAssetUrl);
            const hasUploads = custom.phoneResultImages.some(
              (img: string) => typeof img === 'string' && (img.startsWith('data:') || img.startsWith('blob:'))
            );
            if (!hasUploads) {
              return (def.phoneResultImages || []).map(resolveAssetUrl);
            }
            return custom.phoneResultImages.map((img: string, idx: number) => {
              if (typeof img === 'string' && (img.startsWith('data:') || img.startsWith('blob:'))) {
                return img;
              }
              return (def.phoneResultImages && def.phoneResultImages[idx] ? resolveAssetUrl(def.phoneResultImages[idx]) : resolveAssetUrl(img));
            });
          })(),
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

    return defaultProjects.map((def) => ({
      ...def,
      coverImage: resolveAssetUrl(def.coverImage),
      detailHeroImage: resolveAssetUrl(def.detailHeroImage || def.coverImage),
      processImages: (def.processImages || []).map(resolveAssetUrl),
      resultImages: (def.resultImages || []).map(resolveAssetUrl),
      phoneResultImages: (def.phoneResultImages || []).map(resolveAssetUrl),
    }));
  });

  // 2. About Content State
  const [aboutContent, setAboutContent] = useState<AboutContent>(() => {
    let rawAbout: any = null;
    try {
      const saved = localStorage.getItem(ABOUT_STORAGE_KEY);
      if (saved) {
        rawAbout = JSON.parse(saved);
      }
    } catch {
      // fallback
    }

    if (!rawAbout && persistedData && persistedData.aboutContent) {
      rawAbout = persistedData.aboutContent;
    }

    if (rawAbout) {
      return {
        ...defaultAboutContent,
        ...rawAbout,
        bioParagraph2: (rawAbout.bioParagraph2 && rawAbout.bioParagraph2.trim()) ? rawAbout.bioParagraph2 : defaultAboutContent.bioParagraph2,
        bioParagraph3: (rawAbout.bioParagraph3 && rawAbout.bioParagraph3.trim()) ? rawAbout.bioParagraph3 : defaultAboutContent.bioParagraph3,
        bioParagraph4: (rawAbout.bioParagraph4 && rawAbout.bioParagraph4.trim()) ? rawAbout.bioParagraph4 : defaultAboutContent.bioParagraph4,
      };
    }
    return defaultAboutContent;
  });

  // 3. Contact Content State
  const [contactContent, setContactContent] = useState<ContactContent>(() => {
    let rawContact: any = null;
    try {
      const saved = localStorage.getItem(CONTACT_STORAGE_KEY);
      if (saved) {
        rawContact = JSON.parse(saved);
      }
    } catch {
      // fallback
    }

    if (!rawContact && persistedData && persistedData.contactContent) {
      rawContact = persistedData.contactContent;
    }

    if (rawContact) {
      const sub = rawContact.subheadline;
      const needsUpdate = !sub || (typeof sub === 'string' && sub.includes('Currently available for select') && sub.split('\n').length < 3);
      return {
        ...defaultContactContent,
        ...rawContact,
        subheadline: needsUpdate ? defaultContactContent.subheadline : sub,
      };
    }
    return defaultContactContent;
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle');
  const syncTimeoutRef = useRef<any>(null);

  // Sync current data to backend files (/api/sync-content)
  const syncToFiles = async (
    overrideProjects?: Project[],
    overrideAbout?: AboutContent,
    overrideContact?: ContactContent
  ): Promise<boolean> => {
    setSyncStatus('syncing');
    try {
      const p = overrideProjects || projects;
      const a = overrideAbout || aboutContent;
      const c = overrideContact || contactContent;

      const res = await fetch('/api/sync-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projects: p,
          aboutContent: a,
          contactContent: c,
          lastUpdated: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setSyncStatus('synced');
        return true;
      } else {
        setSyncStatus('error');
        return false;
      }
    } catch {
      // fetch may fail if static or offline
      setSyncStatus('idle');
      return false;
    }
  };

  // Schedule background sync to files
  const scheduleSync = (
    updatedProjects?: Project[],
    updatedAbout?: AboutContent,
    updatedContact?: ContactContent
  ) => {
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }
    syncTimeoutRef.current = setTimeout(() => {
      syncToFiles(updatedProjects, updatedAbout, updatedContact);
    }, 1000);
  };

  // Initial mount auto-sync: persists whatever is currently in state / localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      syncToFiles();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard shortcut: Cmd+E or Ctrl+E to toggle edit mode (preview only)
  useEffect(() => {
    if (!isPreviewEnvironment()) return;

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
      scheduleSync(updated, undefined, undefined);
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
      scheduleSync(undefined, updated, undefined);
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
      scheduleSync(undefined, undefined, updated);
      return updated;
    });
  };

  // Import JSON snapshot
  const importData = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.projects && Array.isArray(parsed.projects)) {
        setProjects(parsed.projects);
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(parsed.projects));
      }
      if (parsed.aboutContent) {
        setAboutContent(parsed.aboutContent);
        localStorage.setItem(ABOUT_STORAGE_KEY, JSON.stringify(parsed.aboutContent));
      }
      if (parsed.contactContent) {
        setContactContent(parsed.contactContent);
        localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(parsed.contactContent));
      }
      setLastSaved(new Date());
      syncToFiles(parsed.projects, parsed.aboutContent, parsed.contactContent);
      return true;
    } catch (err) {
      console.error('Failed to parse import data', err);
      return false;
    }
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
    syncToFiles(defaultProjects, defaultAboutContent, defaultContactContent);
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
    if (!isPreviewEnvironment()) return;
    setIsEditMode((prev) => !prev);
  };

  const effectiveIsEditMode = isPreviewEnvironment() ? isEditMode : false;

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        aboutContent,
        contactContent,
        isEditMode: effectiveIsEditMode,
        setIsEditMode: (val) => {
          if (!isPreviewEnvironment()) return;
          setIsEditMode(val);
        },
        toggleEditMode,
        updateField,
        updateAboutContent,
        updateContactContent,
        resetToOriginal,
        lastSaved,
        exportAsCode,
        syncStatus,
        syncToFiles,
        importData,
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

