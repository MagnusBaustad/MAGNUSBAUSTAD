import { Project } from '../types';
import sonoCoverImage from '../assets/images/H7.png';
import lumenCoverImage from '../assets/images/H5.png';
import auraCoverImage from '../assets/images/H2.png';
import vitaCoverImage from '../assets/images/H13.png';
import kraftCoverImage from '../assets/images/H1.png';
import newCoverImage from '../assets/images/New.png';
import new2CoverImage from '../assets/images/New2.png';
import oriCoverImage from '../assets/images/ORI.png';
import orrCoverImage from '../assets/images/Orr.png';
import gs1Image from '../assets/images/GS1.png';
import gs2Image from '../assets/images/GS2.png';
import gs3Image from '../assets/images/GS3.png';
import r1Image from '../assets/images/R1.png';
import r2Image from '../assets/images/R2.png';
import r3Image from '../assets/images/R3.png';
import r4Image from '../assets/images/R4.png';
import r5Image from '../assets/images/R5.png';
import r7Image from '../assets/images/R7.png';
import s1Image from '../assets/images/S1.png';
import s2Image from '../assets/images/S2.png';
import k1Image from '../assets/images/K1.png';
import k2Image from '../assets/images/K2.png';
import p1Image from '../assets/images/P1.png';
import p2Image from '../assets/images/P2.png';
import p3Image from '../assets/images/P3.png';
import ffImage from '../assets/images/FF.png';
import r9Image from '../assets/images/R9.jpg';
import v1Image from '../assets/images/V1.jpg';
import v2Image from '../assets/images/V2.jpg';
import v3Image from '../assets/images/V3.jpg';
import v4Image from '../assets/images/V4.png';
import v5Image from '../assets/images/V5.jpg';
import v6Image from '../assets/images/V6.jpg';
import v7Image from '../assets/images/V7.jpg';
import v8Image from '../assets/images/V8.jpg';
import v9Image from '../assets/images/V9.jpg';
import v10Image from '../assets/images/V10.jpg';
import v11Image from '../assets/images/V11.jpg';
import v12Image from '../assets/images/V12.jpg';
import v13Image from '../assets/images/V13.jpg';
import v14Image from '../assets/images/V14.jpg';
import e1Image from '../assets/images/E1.png';
import e2Image from '../assets/images/E2.jpg';
import e3Image from '../assets/images/E3.png';
import e4Image from '../assets/images/E4.png';
import e5Image from '../assets/images/E5.png';
import e6Image from '../assets/images/E6.png';
import e7Image from '../assets/images/E7.png';
import gzImage from '../assets/images/GZ.png';
import bay1Image from '../assets/images/BAY1.png';
import bay2Image from '../assets/images/BAY2.png';
import bay3Image from '../assets/images/BAY3.png';
import ba1Image from '../assets/images/BA1.png';
import ba2Image from '../assets/images/BA2.png';
import ba3Image from '../assets/images/BA3.png';
import ty1Image from '../assets/images/TY1.png';
import ty2Image from '../assets/images/TY2.png';
import ty21Image from '../assets/images/TY2-1.png';
import ty3Image from '../assets/images/TY3.png';
import ty4Image from '../assets/images/TY4.jpeg';
import ty5Image from '../assets/images/TY5.png';
import ty6Image from '../assets/images/TY6.png';
import ty7Image from '../assets/images/Ty7.png';

export const projects: Project[] = [
  {
    id: 'rottefella-extend',
    title: 'Rottefella Move',
    subtitle: 'A micro-adjustable bike stem for gravel cyclists',
    category: 'Sports Equipment & Ergonomics',
    year: '2025',
    clientOrContext: 'Collaboration Project with Rottefella',
    coverImage: r9Image,
    coverImageClassName: '',
    processImages: [ty1Image, ty21Image, ty6Image],
    resultImages: [ty3Image, ty4Image, ty5Image],
    problem: {
      title: 'Force Vector Losses & Ice Buildup in Classic Cross-Country Bindings',
      summary:
        'Rottefella wanted to explore opportunities beyond skiing and into a broader, year-round sports context. The challenge was to identify a new market where their expertise in adjustable systems, technical performance, and precision manufacturing could translate into a meaningful product opportunity.',
      points: [
        'Energy loss through lateral micro-twisting during push-off phase.',
        'Inflexible stance balance positions requiring workbench tools to adjust.',
        'Ice compaction beneath the boot interface altering flex resistance.',
      ],
    },
    whatAndWhy: {
      what: 'The concept is an extendable stem that allows gravel cyclists to micro-adjust the position of the handlebars while riding. By changing the reach of the handlebars, the system gives the rider greater control over their riding position without requiring tools or stopping.',
      why: 'Gravel cycling moves between asphalt, gravel, and more technical terrain, with each surface demanding something different from the rider. On asphalt, a longer and more forward position supports efficiency and power transfer. As the terrain becomes more technical, a shorter position brings the handlebars closer, creating greater control and freedom of movement. The adjustable stem allows the bike to adapt to these changing conditions as the rider moves through the landscape.',
      decisions: [
        {
          title: 'Carbon-Infused Matrix',
          description: 'A continuous composite spine eliminates torsional twist while cutting overall mass by 28%.',
        },
        {
          title: 'QuickLock Stance Tuner',
          description: 'An ergonomic glove-friendly lever enables instantaneous fore/aft adjustment along the NIS profile.',
        },
        {
          title: 'Hydrophobic Contact Shield',
          description: 'Micro-textured low-surface-energy elastomers shed wet snow and prevent ice packing.',
        },
      ],
    },
    process: {
      intro:
        'Developed through biomechanical gait sensor trials, snow tunnel wind tests, and functional CNC prototypes tested across Norwegian winter trails.',
      phases: [
        {
          phaseNumber: '01',
          title: 'Biomechanical Force Mapping & CAD Architecture',
          description:
            'Analyzing stride dynamics and pressure propagation to optimize torsional rib structures and hinge pivot points.',
          images: [],
        },
      ],
    },
    finalResult: {
      summary:
        'Rottefella Extend combines sculptural Scandinavian minimalism with uncompromising athletic efficiency, delivering direct power delivery with every stride.',
      specs: [
        { label: 'Weight', value: '185g per pair' },
        { label: 'Adjustment Range', value: '±25mm tool-free fore/aft position' },
        { label: 'Materials', value: 'Carbon-reinforced Bio-Polyamide, Stainless Hardware' },
      ],
      images: [],
    },
    focus: 'Brand Identity & Expansion',
    sectionTitles: {
      contextLabel: 'Context: ',
      focusLabel: 'Focus: ',
    },
  },
  {
    id: 'lumen-modular-kettle',
    title: 'Focus Watch',
    subtitle: 'Experience time, don’t measure it',
    category: 'Home Appliances & Circular Design',
    year: '2024',
    clientOrContext: 'ArtCenter College of Design',
    coverImage: lumenCoverImage,
    coverImageClassName: '!object-[50%_75%]',
    processImages: [k1Image, k2Image],
    resultImages: [p1Image, p2Image, p3Image],
    problem: {
      title: 'The 2-Year Planned Obsolescence of Small Domestic Appliances',
      summary:
        'In a world of screens, notifications, and constant digital feedback, time is increasingly something we monitor rather than simply experience. The challenge was to rethink the wristwatch as a quieter object - one that provides information without demanding attention.',
      points: [
        'Microplastic leaching caused by boiling water repeatedly in polypropylene tanks.',
        'Permanent ultrasonic welding that prevents heating element inspection or descaling.',
        'Awkward pour geometry leading to wrist strain and splashing hot water.',
      ],
    },
    whatAndWhy: {
      what: 'The aim was to create a watch that feels like a natural extension of Teenage Engineering’s playful, minimal, and retro-inspired design language. By stripping timekeeping down to its essentials and connecting it to music, the project explores a slower and more focused relationship with the wristwatch. The watch uses an analog display that shows only the current hour, intentionally removing the precision of minutes and seconds. A small secondary interface displays the currently playing song, while wireless connectivity to earbuds allows music to become part of the experience.',
      why: 'Instead of competing for attention through notifications and constant updates, the watch focuses on two things: the current hour and the music accompanying it. The result is a more restrained wearable experience where technology supports the moment rather than interrupting it.',
      decisions: [
        {
          title: 'Thermal Glass Body',
          description:
            'High-purity laboratory-grade borosilicate prevents taste contamination and visually indicates water level naturally without micro-tubes.',
        },
        {
          title: 'Precision Pour Spout',
          description:
            'Calculated gooseneck spout curve allows micro-metered pour-over flow without drips or laminar turbulence.',
        },
        {
          title: 'Cold-Touch Cast Wooden Handle',
          description:
            'Ergonomic FSC-certified Nordic ash handle designed with an offset balance point for zero counter-torque on wrists.',
        },
      ],
    },
    process: {
      intro:
        'Prototyping focused heavily on hydrodynamic pour tests, fluid thermodynamics, and modular disassembly tolerances.',
      phases: [
        {
          phaseNumber: '01',
          title: 'Hydrodynamic Spout Prototyping',
          description:
            'Testing 14 variations of 3D printed spout geometries with food-safe silicone casting to achieve optimal water laminar flow.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
              caption: '3D printed spout test iterations hooked to hydraulic test rig.',
              tag: 'Hydraulic Rig',
              type: 'prototype',
            },
            {
              url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
              caption: 'Thermal imaging of induction coil base heat dispersion.',
              tag: 'Thermal Analysis',
              type: 'cad',
            },
          ],
        },
        {
          phaseNumber: '02',
          title: 'Disassembly Architecture',
          description:
            'Structuring every sub-assembly to be dismountable using a single standard coin or flat screwdriver.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=1200&auto=format&fit=crop',
              caption: 'Exploded mechanical CAD layout of the base module and thermal controller.',
              tag: 'Exploded CAD',
              type: 'cad',
            },
          ],
        },
      ],
    },
    finalResult: {
      summary:
        'LUMEN stands as an exemplar of the Right to Repair movement, proving domestic appliances can achieve timeless minimalist beauty while honoring ecological responsibility.',
      specs: [
        { label: 'Capacity', value: '1.0 Liters' },
        { label: 'Power', value: '1500W Induction Rapid Boil' },
        { label: 'Materials', value: 'Borosilicate Glass, 316 Stainless Steel, Solid Ash Wood' },
        { label: 'Repairability Index', value: '9.8 / 10' },
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?q=80&w=1600&auto=format&fit=crop',
          caption: 'Final production kettle on brushed stainless inductive heating base.',
          aspectRatio: 'wide',
        },
        {
          url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1600&auto=format&fit=crop',
          caption: 'Detail of steam release gasket and wood handle junction.',
          aspectRatio: 'wide',
        },
      ],
    },
    focus: 'Learning SolidWorks & CMF',
    sectionTitles: {
      contextLabel: 'Context: ',
      focusLabel: 'Focus: ',
    },
  },
  {
    id: 'aura-circadian-desk-lamp',
    title: 'AR Glasses',
    subtitle: 'Augmented reality glasses for high performance runners',
    category: 'Augmented reality glasses for high performance runners',
    year: '2024',
    clientOrContext: 'ArtCenter College of Design',
    focus: 'Learning SolidWorks & CMF',
    coverImage: r4Image,
    detailHeroImage: r4Image,
    processImages: [gs1Image, gs2Image, ffImage],
    resultImages: [r1Image, r2Image, r3Image],
    problem: {
      title: '',
      summary:
        'When running at high intensity, checking a watch can interrupt rhythm and concentration. In long-distance races, even small navigation mistakes can have significant consequences. The challenge was to make essential information accessible without forcing the runner to look away from their surroundings.',
      points: [
        'Rigid spring-arm linkages that lose balance tension and droop over time.',
        'Unnatural blue-spike LED spectra that degrade sleep latency.',
        'Clunky external plastic transformers taking up floor or socket space.',
      ],
    },
    whatAndWhy: {
      what: 'The aim was to create a pair of glasses that feels like a natural extension of On\'s performance driven aesthetic. The glasses display key running metrics on one side of the lens, while the other side provides a simplified view of the route and a virtual pacer. Physical buttons on each side allow the runner to toggle the different interfaces on and off, giving them control over how much information is visible while running. Two integrated cameras also enable the recording of runs.',
      why: 'By bringing information into the runner’s natural field of view, the glasses reduce the need to break rhythm or look down at a device. The result is an experience where performance data, navigation, and recording become accessible without competing with the act of running itself.',
      decisions: [
        {
          title: 'Zero-Spring Gravity Equilibrium',
          description:
            'A solid turned brass counterweight balances the 450mm cantilevered beam smoothly across 360° of movement.',
        },
        {
          title: 'Full-Spectrum Sun-Mimicking Diode Array',
          description:
            'CRI > 98 light engine transitions imperceptibly from energizing 5500K morning daylight to warm 1800K candle glow by twilight.',
        },
        {
          title: 'Micro-Prismatic Glare Diffuser',
          description:
            'Custom micro-honeycomb optical film ensures UGR < 12 glare-free illumination even at maximum lux.',
        },
      ],
    },
    process: {
      intro: 'Developing AURA required rigorous kinematic torque calculation and optical micro-lens refinement.',
      phases: [
        {
          phaseNumber: '01',
          title: 'Counterweight Physics Modeling',
          description:
            'Simulating center-of-gravity shifts across the full articulation envelope to ensure zero drift at any angle between 5° and 85°.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop',
              caption: 'Balancing torque calculations plotted against arm length.',
              tag: 'Kinematic Study',
              type: 'cad',
            },
            {
              url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
              caption: 'CNC machined pivot joints with embedded self-lubricating bronze bushings.',
              tag: 'Bearing Machining',
              type: 'prototype',
            },
          ],
        },
      ],
    },
    finalResult: {
      summary:
        'AURA effortlessly harmonizes mathematical kinetic precision with calm, serene light that cares for human biological rhythms.',
      specs: [
        { label: 'Reach Radius', value: '820mm Full Articulation' },
        { label: 'CCT Range', value: '1800K to 5500K Continuous' },
        { label: 'CRI Rating', value: 'Ra 98.4 (R9 > 95)' },
        { label: 'Finishes', value: 'Matte Anodized Slate / Mirror Brass' },
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1600&auto=format&fit=crop',
          caption: 'AURA positioned over a minimalist drafting table in late evening amber mode.',
          aspectRatio: 'wide',
        },
        {
          url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1600&auto=format&fit=crop',
          caption: 'Cast concrete weighted base with capacitive flush dimming slider.',
          aspectRatio: 'wide',
        },
      ],
    },
    sectionTitles: {
      contextLabel: 'Context: ',
      focusLabel: 'Focus: ',
    },
  },
  {
    id: 'vita-smart-inhaler',
    title: 'Vestre Bench',
    subtitle: 'Be private, together.',
    category: 'Urban Furniture & Public Space',
    year: '2024',
    clientOrContext: 'Collaboration Project with Vestre',
    focus: 'Sustainability & Production',
    coverImage: orrCoverImage,
    processImages: [
      v9Image,
      v11Image,
      v2Image,
      v3Image,
      v10Image,
      v14Image,
      v13Image,
      v12Image,
    ],
    processImagesFullWidth: true,
    v9TextBoxes: [
      {
        id: 'box-1',
        title: '',
        text: 'Our meeting with a representative from the Norwegian Association of the Blind gave us valuable insight into how a bench can be designed to be more inclusive and accessible for people with visual impairments.\n\nWe learned that the use of colour can be crucial for visibility and accessibility for people with visual impairments. We also gained a greater understanding of the importance of accessibility and ease of navigation. The bench should be designed with the intention that visually impaired users are able to find and approach it.',
        width: 641,
        x: 4,
        y: 7,
        theme: 'light-glass',
        fontSize: 'sm',
      },
      {
        id: 'box-2',
        title: 'Material Study',
        text: 'We had a meeting with a physiotherapist to gain insight into how a bench could be designed to be more inclusive and accessible for people with different physical challenges.\n\nThe bench needs to balance ergonomics, stability, and accessibility, making it suitable for older people, individuals with muscular discomfort, and others with mobility challenges.',
        width: 501,
        x: 52,
        y: 70,
        theme: 'light-glass',
        fontSize: 'sm',
      },
    ],
    v11TextBoxes: [
      {
        id: 'box-v11-1',
        text: 'Several people are sitting relatively close to each other. The girls sitting on the lower level appear completely separated from the others, even though they are physically quite close to them.',
        width: 237,
        x: 30,
        y: 8,
        theme: 'light-glass',
        fontSize: 'base',
      },
      {
        id: 'box-v11-2',
        text: 'These two people are sitting very close to each other, less than half a metre apart. They both maintain a sense of personal space by facing in opposite directions.',
        width: 205,
        x: 79,
        y: 68,
        theme: 'light-glass',
        fontSize: 'base',
      },
      {
        id: 'box-v11-3',
        text: 'They maintain some distance and do not sit directly next to each other, while still being relatively close, approximately one metre apart.',
        width: 222,
        x: 8,
        y: 40,
        theme: 'light-glass',
        fontSize: 'base',
      },
      {
        id: 'box-v11-4',
        text: 'Is she turning towards the sun, or is she positioning herself that way to create more personal space?',
        width: 198,
        x: 32,
        y: 73,
        theme: 'light-glass',
        fontSize: 'base',
      },
    ],
    resultImages: [v6Image, v7Image, v8Image],
    problem: {
      title: 'Social Stigma and Poor Inhalation Adherence in Public Spaces',
      summary:
        'Public spaces often bring people physically close together, while still leaving little room for personal space or retreat. The challenge was to explore how seating could support social interaction without removing the possibility of privacy.',
      points: [
        'Single damaged slats currently require replacing entire bench units.',
        'Poor drainage causing accelerated wood decay and moisture retention.',
        'Rigid static layouts that fail to accommodate natural conversational clustering.',
      ],
    },
    whatAndWhy: {
      what: 'The system consists of two primary modules: a high module and a low module. They can be positioned side by side or front to front, creating different seating configurations depending on the surrounding space and desired degree of interaction. A durable metal frame is combined with warm wooden seating surfaces.',
      why: 'The modular approach allows the furniture to respond to different social and spatial conditions without changing its fundamental design. At the same time, the simple construction supports efficient production, transportation, and assembly, making the system suitable for public environments.',
      decisions: [
        {
          title: 'Cast Aluminium Anchor Profile',
          description:
            'Optimized ribbed profile provides high load bearing capacity with integrated water run-off channels.',
        },
        {
          title: 'Independent Slat Modular Fastening',
          description:
            'Sub-surface mechanical fasteners allow single-slat replacement without dismantling adjacent elements.',
        },
        {
          title: 'Nordic Pine with Natural Patina',
          description:
            'Sustainably harvested pine with protective oil finish that weathers gracefully into an organic silver-grey.',
        },
      ],
    },
    process: {
      intro:
        'Prototyping joint tolerances, testing weight distribution, and verifying ergonomic comfort across multiple seating postures.',
      phases: [],
    },
    finalResult: {
      summary:
        'A durable, circular public seating system uniting Scandinavian craft with industrial precision.',
      specs: [
        { label: 'Material', value: 'Hydro CIRCAL Recycled Aluminium & Nordic Pine' },
        { label: 'Lifecycle', value: '100% Circular / Design for Disassembly (DfD)' },
        { label: 'Coating', value: 'Solvent-free architectural powder coat' },
        { label: 'Warranty', value: 'Lifetime structural guarantee on metal components' },
      ],
      images: [
        {
          url: v6Image,
          caption: 'Vestre Bench result 01.',
          aspectRatio: 'wide',
        },
        {
          url: v7Image,
          caption: 'Vestre Bench result 02.',
          aspectRatio: 'wide',
        },
        {
          url: v8Image,
          caption: 'Vestre Bench result 03.',
          aspectRatio: 'wide',
        },
      ],
    },
    sectionTitles: {
      contextLabel: 'Context: ',
      focusLabel: 'Focus: ',
    },
  },
  {
    id: 'tacta-analog-synthesizer',
    title: 'Erling Stool',
    subtitle: 'A tribute to our great Erling Braut Haaland',
    category: 'Furniture Design & Seating',
    year: '2025',
    clientOrContext: 'The Oslo School of Architecture and Design',
    focus: 'Sustainability & Material Integrity',
    coverImage: auraCoverImage,
    processImages: [e7Image, e2Image, e3Image],
    resultImages: [e4Image, e5Image, e6Image],
    problem: {
      title: 'Digital Fatigue in Modern Music Production',
      summary:
        'The project began with two simple constraints: the stool had to be made entirely from wood and fit within a 50 × 50 × 50 cm volume. Rather than treating these limitations as restrictions, they became a framework for exploring proportion, structure, and construction through minimal means.',
      points: [
        'Weak joint corners vulnerable to dynamic torsional loading.',
        'Excessive material mass making informal repositioning difficult.',
        'Lack of natural material warmth in austere industrial furniture.',
      ],
    },
    whatAndWhy: {
      what: 'The goal was to create a stool that feels stable and refined while allowing its construction to become part of its character. The stool is constructed from beechwood, selected for its strength and subtle grain. Precise load-bearing connections provide the structural foundation, while walnut dowels reinforce the joints and introduce a contrasting material detail at key connection points.',
      why: 'Rather than hiding the construction, the stool uses its joints as an integral part of the visual language. The combination of beech and walnut creates a restrained contrast, while the precise joinery allows a simple form to achieve both durability and character.',
      decisions: [
        {
          title: 'Interlocking Cast Frame',
          description:
            'High-rigidity aluminum geometry provides structural integrity while keeping the overall unit lightweight.',
        },
        {
          title: 'Ergonomic Dished Seat',
          description:
            'Subtle concave seat profile distributes body weight evenly for prolonged comfort without bulky upholstery.',
        },
      ],
    },
    process: {
      intro:
        'Prototyping seat curvatures, testing leg taper angles, and verifying joinery tolerances under cyclical stress testing.',
      phases: [
        {
          phaseNumber: '01',
          title: 'Joint Tolerances & Weight Distribution',
          description:
            'Refining the interface between cast metal sockets and CNC-milled timber dowels to accommodate seasonal wood movement.',
          images: [],
        },
      ],
    },
    finalResult: {
      summary: 'A robust, sculptural stool balancing Scandinavian craft honesty with industrial permanence.',
      specs: [
        { label: 'Materials', value: 'Sand-Cast Recycled Aluminum & Solid Nordic Oak' },
        { label: 'Weight', value: '3.4 kg' },
        { label: 'Stackability', value: 'Up to 4 units' },
        { label: 'Finish', value: 'Raw tumbled aluminum & natural hardwax oil' },
      ],
      images: [],
    },
    sectionTitles: {
      contextLabel: 'Context: ',
      focusLabel: 'Focus: ',
    },
  },
  {
    id: 'kraft-ergonomic-chisel-set',
    title: 'Concrete Sculpture',
    subtitle: 'Where landscape, design, and technology meet.',
    category: 'Sculpture & Spatial Objects',
    year: '2024',
    clientOrContext: 'Design Competition by Veidekke & MIL',
    focus: 'Technology & Surrounding Environment',
    coverImage: gzImage,
    detailHeroImage: gzImage,
    processImages: [bay1Image, bay2Image],
    resultImages: [bay3Image],
    phoneResultImages: [ba1Image, ba2Image, ba3Image],
    problem: {
      title: 'Repetitive Strain Injury in Fine Woodworking Crafts',
      summary:
        'Designed for Wilds Minne School in Kristiansand, the project explored how a 3D-printed concrete structure could respond to its surrounding landscape while creating an inviting space for people. The challenge was not only to develop the form, but also to translate it into a new method of architectural fabrication.',
      points: [
        'Vibration shock transmission directly into wrist joints when struck with mallets.',
        'Handle splitting and collar detachment caused by varying workshop humidity.',
        'Poor indexing of the bevel angle without looking directly at the timber face.',
      ],
    },
    whatAndWhy: {
      what: 'The design was inspired by the surrounding landscape and developed around an embracing form intended to create a sense of warmth and welcome. The sculpture was designed not simply as an object to look at, but as a space that people could enter, inhabit, and use.',
      why: 'As one of the early examples of 3D-printed concrete structures in Norway, the project became an exploration of both form and fabrication. Working with multiple stakeholders also introduced the complexity of a real-world architectural project, where design development, technical constraints, and approvals continuously influence the final result.',
      decisions: [
        {
          title: 'Precision Multi-Part Tooling',
          description:
            'Flexible multi-part silicone molds yield crisp knife-edges and flawless surface density.',
        },
        {
          title: 'Through-Body Mineral Pigmentation',
          description:
            'Integrally tinted with raw iron oxide pigments for consistent through-body tone and subtle patina.',
        },
      ],
    },
    process: {
      intro:
        'Testing aggregate ratios, curing humidity chambers, and demolding timing to eliminate shrinkage and cracking.',
      phases: [],
    },
    finalResult: {
      summary: 'A study in architectural permanence, quiet balance, and material sensitivity.',
      specs: [
        { label: 'Material', value: 'UHPC Micro-Aggregate Cement' },
        { label: 'Finish', value: 'Honed matte with hydrophobic breathable sealant' },
        { label: 'Dimensions', value: 'Variable modular compositions' },
        { label: 'Curing', value: '28-day water-submerged cure' },
      ],
      images: [],
    },
    sectionTitles: {
      contextLabel: 'Context: ',
      focusLabel: 'Focus: ',
    },
  },
];
