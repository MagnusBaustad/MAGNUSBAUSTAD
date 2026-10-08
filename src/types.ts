export type PageType = 'design' | 'about' | 'contact';

export interface ProcessImage {
  url: string;
  caption: string;
  tag?: string;
  type?: 'sketch' | 'foam' | 'cad' | 'cmf' | 'prototype';
}

export interface ProcessPhase {
  phaseNumber: string;
  title: string;
  description: string;
  images: ProcessImage[];
}

export interface ProjectDecision {
  title: string;
  description: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface FinalResultImage {
  url: string;
  caption: string;
  aspectRatio?: 'wide' | 'tall' | 'square';
}

export interface ProjectSectionTitles {
  timelineLabel?: string;
  focusLabel?: string;
  contextLabel?: string;
  challengeTitle?: string;
  designIntentTitle?: string;
  whatItIsTitle?: string;
  whyItMattersTitle?: string;
  processTitle?: string;
  resultTitle?: string;
  backButtonText?: string;
}

export interface ImageOverlayTextBox {
  id: string;
  title?: string;
  text: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  theme?: 'light-glass' | 'dark-glass' | 'solid-white' | 'solid-black';
  fontSize?: 'xs' | 'sm' | 'base' | 'lg';
}

export interface Project {
  id: string;
  slug?: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  clientOrContext: string;
  focus?: string;
  projectType?: string;
  coverImage: string;
  detailHeroImage?: string;
  coverImageClassName?: string;
  isComingSoon?: boolean;
  comingSoonText?: string;
  aspectRatio?: string;
  processImages?: string[];
  processImagesFullWidth?: boolean;
  v9TextBoxes?: ImageOverlayTextBox[];
  v11TextBoxes?: ImageOverlayTextBox[];
  resultImages?: string[];
  phoneResultImages?: string[];
  sectionTitles?: ProjectSectionTitles;
  processDescription?: string;
  resultDescription?: string;
  problem: {
    title: string;
    summary: string;
    points: string[];
  };
  whatAndWhy: {
    what: string;
    why: string;
    decisions: ProjectDecision[];
  };
  process: {
    intro: string;
    phases: ProcessPhase[];
  };
  finalResult: {
    summary: string;
    specs: SpecItem[];
    images: FinalResultImage[];
  };
}
