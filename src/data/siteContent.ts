export interface MethodologyItem {
  id: string;
  title: string;
  description: string;
}

export interface AboutContent {
  statementLine1: string;
  statementLine2: string;
  statementLine3: string;
  nameBadge: string;
  locationBadge: string;
  toolsTitle: string;
  tools: string[];
  bioParagraph1: string;
  bioParagraph2?: string;
  bioParagraph3?: string;
  bioParagraph4?: string;
  ctaText: string;
  methodologyTitle: string;
  methodologies: MethodologyItem[];
}

export interface ContactContent {
  headline: string;
  subheadline: string;
  email: string;
  formIntro?: string;
}

export const defaultAboutContent: AboutContent = {
  statementLine1: "Hi! I'm Magnus, a human-centric,",
  statementLine2: "Industrial Designer specialising in",
  statementLine3: "creating life-improving products.",
  nameBadge: "Magnus Baustad",
  locationBadge: "Oslo, Norway",
  toolsTitle: "Tools & Capabilities",
  tools: [
    'Blender',
    'Rhino 3D',
    'SolidWorks',
    'KeyShot Rendering',
    'Fusion 360',
    'AI Sufficient',
    'Rapid Foam Prototyping',
    'CNC Milling & Lathe',
    'SLA / FDM 3D Printing',
    'Silicone Molding',
    'Adobe Creative Suite',
    'Figma',
    'Design for Manufacturing (DFM)',
    'Mechanical Disassembly',
  ],
  bioParagraph1: "I'm an industrial design student",
  bioParagraph2:
    "Rooted in Scandinavian design traditions of functional honesty, physical craftsmanship, and deep empathy for human daily rituals.",
  bioParagraph3:
    "From rapid tactile foam prototypes in the workshop to micron-tolerance parametric CAD surfaces, every curve and parting line is tested physically.",
  bioParagraph4:
    "Passionate about circular product architecture, tool-free repairability, and durable life-improving objects.",
  ctaText: "Let's collaborate",
  methodologyTitle: "Methodology & Core Disciplines",
  methodologies: [
    {
      id: '01',
      title: 'Human Ergonomics',
      description:
        'Biomechanical grip analysis, tactile feedback calibration, and observational user research to craft intuitive physical interactions.',
    },
    {
      id: '02',
      title: 'Materiality & CMF',
      description:
        'Exploration of circular bio-composites, cast aluminum, CNC brass, and textured finishes engineered to age gracefully with natural patina.',
    },
    {
      id: '03',
      title: 'Circular Assembly',
      description:
        'Design for Disassembly (DfD), zero-glue mechanical joints, and modular architectures designed for repairability and easy recycling.',
    },
  ],
};

export const defaultContactContent: ContactContent = {
  headline: "Let's build meaningful\nproducts together.",
  subheadline:
    "Currently available for select industrial design\ncommissions, in-house roles, and exploratory\nR&D collaborations.",
  email: "baustadmagnus@gmail.com",
  formIntro: "Network and contact",
};
