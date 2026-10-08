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
  statementLine1: "Hi! I'm Magnus, a human centric,",
  statementLine2: "Industrial Designer specialising in",
  statementLine3: "creating life improving products.",
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
  bioParagraph1: "I’m an industrial design student in my final year at the Oslo School of Architecture and Design.",
  bioParagraph2:
    "I’m interested in designing products that make everyday life a little better. I’m especially drawn to the things we use every day, and to how thoughtful design can improve the way we live, move, work, and interact with our surroundings.",
  bioParagraph3:
    "I use real materials, production methods, technical limitations, and contextual constraints as important parts of my design process. I like getting close to how something is actually made, and I’m often most engaged when an idea moves from the screen into the workshop.",
  bioParagraph4:
    "My work spans products and furniture, with a focus on creating practical objects that have a clear connection between their purpose, material, and way of being made.",
  ctaText: "Let's collaborate",
  methodologyTitle: "Methodology & Core Disciplines",
  methodologies: [
    {
      id: '01',
      title: 'Human Ergonomics',
      description:
        'Ergonomic analysis, tactile feedback calibration, interviews and observational user research.',
    },
    {
      id: '02',
      title: 'Materiality & CMF',
      description:
        'Exploration of circular bio-composites, cast aluminum, CNC brass and textured finishes.',
    },
    {
      id: '03',
      title: 'Circular Assembly',
      description:
        'Design for disassembly, zero-glue joints, design for repairability and easy recycling.',
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
