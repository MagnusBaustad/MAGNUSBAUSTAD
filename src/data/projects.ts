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
    title: 'Rottefella Extend',
    subtitle: 'Dynamic Nordic binding system engineered for seamless biomechanical force transmission',
    category: 'Sports Equipment & Ergonomics',
    year: '2025',
    clientOrContext: 'Rottefella / Outdoor Innovation',
    coverImage: r9Image,
    coverImageClassName: '',
    processImages: [ty1Image, ty21Image, ty6Image],
    resultImages: [ty3Image, ty4Image, ty5Image],
    problem: {
      title: 'Force Vector Losses & Ice Buildup in Classic Cross-Country Bindings',
      summary: 'Conventional Nordic bindings experience torsional play during dynamic skate and classic strides, wasting critical metabolic energy and collecting compacted snow under changing track conditions.',
      points: [
        'Energy loss through lateral micro-twisting during push-off phase.',
        'Inflexible stance balance positions requiring workbench tools to adjust.',
        'Ice compaction beneath the boot interface altering flex resistance.'
      ]
    },
    whatAndWhy: {
      what: 'Rottefella Extend is an ultra-rigid, lightweight Nordic binding architecture featuring instant tool-free dynamic positioning.',
      why: 'By refining boot-to-ski contact geometry and incorporating a single-touch lever, athletes can reposition their center of gravity on-the-fly to adapt to shifting snow and gradient conditions.',
      decisions: [
        {
          title: 'Carbon-Infused Matrix',
          description: 'A continuous composite spine eliminates torsional twist while cutting overall mass by 28%.'
        },
        {
          title: 'QuickLock Stance Tuner',
          description: 'An ergonomic glove-friendly lever enables instantaneous fore/aft adjustment along the NIS profile.'
        },
        {
          title: 'Hydrophobic Contact Shield',
          description: 'Micro-textured low-surface-energy elastomers shed wet snow and prevent ice packing.'
        }
      ]
    },
    process: {
      intro: 'Developed through biomechanical gait sensor trials, snow tunnel wind tests, and functional CNC prototypes tested across Norwegian winter trails.',
      phases: [
        {
          phaseNumber: '01',
          title: 'Biomechanical Force Mapping & CAD Architecture',
          description: 'Analyzing stride dynamics and pressure propagation to optimize torsional rib structures and hinge pivot points.',
          images: []
        }
      ]
    },
    finalResult: {
      summary: 'Rottefella Extend combines sculptural Scandinavian minimalism with uncompromising athletic efficiency, delivering direct power delivery with every stride.',
      specs: [
        { label: 'Weight', value: '185g per pair' },
        { label: 'Adjustment Range', value: '±25mm tool-free fore/aft position' },
        { label: 'Materials', value: 'Carbon-reinforced Bio-Polyamide, Stainless Hardware' }
      ],
      images: []
    }
  },
  {
    id: 'lumen-modular-kettle',
    title: 'Focus Watch',
    subtitle: 'A distilled timepiece balancing mechanical presence with distraction-free utility',
    category: 'Wearable Technology & Horology',
    year: '2024',
    clientOrContext: 'Independent Exploration',
    coverImage: lumenCoverImage,
    coverImageClassName: '!object-[50%_75%]',
    processImages: [k1Image, k2Image],
    resultImages: [p1Image, p2Image, p3Image],
    problem: {
      title: 'Notification Overload and Digital Fatigue in Modern Wearables',
      summary: 'Modern smartwatches create perpetual interruptions and screen dependency, eroding intentional focus and time consciousness.',
      points: [
        'Constant haptic alerts that fracture deep creative focus.',
        'Fragile glass touchscreens requiring constant battery recharges.',
        'Disposable consumer electronics lifecycles with non-serviceable components.'
      ]
    },
    whatAndWhy: {
      what: 'Focus Watch is a mechanical-digital hybrid timepiece crafted from brushed 316L stainless steel and sapphire crystal, engineered for intentional living.',
      why: 'By prioritizing high-contrast physical hands over glowing notifications, the wearer regains calm ownership over their daily hours.',
      decisions: [
        {
          title: 'Monolithic Steel Case',
          description: 'CNC-milled 316L stainless steel provides high corrosion resistance, durability, and satisfying wrist presence.'
        },
        {
          title: 'High-Legibility Dial Architecture',
          description: 'Subtle laser-etched indexes and matte markers optimized for instantaneous reading under all lighting conditions.'
        },
        {
          title: 'Tool-Free Quick-Release Lugs',
          description: 'Integrated spring-bar system enabling seamless strap swaps across vegetable-tanned leather and woven nylon.'
        }
      ]
    },
    process: {
      intro: 'Iterating case ergonomics, crown knurling patterns, and lug angles to achieve balanced wrist comfort across various wrist sizes.',
      phases: [
        {
          phaseNumber: '01',
          title: 'Hydrodynamic Spout Prototyping',
          description: 'Testing 14 variations of 3D printed spout geometries with food-safe silicone casting to achieve optimal water laminar flow.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
              caption: '3D printed spout test iterations hooked to hydraulic test rig.',
              tag: 'Hydraulic Rig',
              type: 'prototype'
            },
            {
              url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
              caption: 'Thermal imaging of induction coil base heat dispersion.',
              tag: 'Thermal Analysis',
              type: 'cad'
            }
          ]
        },
        {
          phaseNumber: '02',
          title: 'Disassembly Architecture',
          description: 'Structuring every sub-assembly to be dismountable using a single standard coin or flat screwdriver.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=1200&auto=format&fit=crop',
              caption: 'Exploded mechanical CAD layout of the base module and thermal controller.',
              tag: 'Exploded CAD',
              type: 'cad'
            }
          ]
        }
      ]
    },
    finalResult: {
      summary: 'LUMEN stands as an exemplar of the Right to Repair movement, proving domestic appliances can achieve timeless minimalist beauty while honoring ecological responsibility.',
      specs: [
        { label: 'Capacity', value: '1.0 Liters' },
        { label: 'Power', value: '1500W Induction Rapid Boil' },
        { label: 'Materials', value: 'Borosilicate Glass, 316 Stainless Steel, Solid Ash Wood' },
        { label: 'Repairability Index', value: '9.8 / 10' }
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?q=80&w=1600&auto=format&fit=crop',
          caption: 'Final production kettle on brushed stainless inductive heating base.',
          aspectRatio: 'wide'
        },
        {
          url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1600&auto=format&fit=crop',
          caption: 'Detail of steam release gasket and wood handle junction.',
          aspectRatio: 'wide'
        }
      ]
    }
  },
  {
    id: 'aura-circadian-desk-lamp',
    title: 'AR Glasses',
    subtitle: 'Augmented reality glasses for high performance runners',
    category: 'Augmented reality glasses for high performance runners',
    year: '2024',
    clientOrContext: 'Workspace Well-being Initiative',
    focus: 'Learning SolidWorks and CMF',
    coverImage: r4Image,
    detailHeroImage: r4Image,
    processImages: [gs1Image, gs2Image, ffImage],
    resultImages: [r1Image, r2Image, r3Image],
    problem: {
      title: '',
      summary: 'Typical desk lamps provide fixed color-temperature illumination that over-stimulates cortisol production late in the evening and casts harsh shadows across reading and sketching planes.',
      points: [
        'Rigid spring-arm linkages that lose balance tension and droop over time.',
        'Unnatural blue-spike LED spectra that degrade sleep latency.',
        'Clunky external plastic transformers taking up floor or socket space.'
      ]
    },
    whatAndWhy: {
      what: 'AURA is a fluid counterweighted cantilever luminaire featuring gravity-governed positioning and dynamic circadian spectrum shifting.',
      why: 'Gravity never fatigues. By balancing a brass counter-mass against an ultra-thin carbon-fiber arm, the user can glide the light head with a single fingertip touch.',
      decisions: [
        {
          title: 'Zero-Spring Gravity Equilibrium',
          description: 'A solid turned brass counterweight balances the 450mm cantilevered beam smoothly across 360° of movement.'
        },
        {
          title: 'Full-Spectrum Sun-Mimicking Diode Array',
          description: 'CRI > 98 light engine transitions imperceptibly from energizing 5500K morning daylight to warm 1800K candle glow by twilight.'
        },
        {
          title: 'Micro-Prismatic Glare Diffuser',
          description: 'Custom micro-honeycomb optical film ensures UGR < 12 glare-free illumination even at maximum lux.'
        }
      ]
    },
    process: {
      intro: 'Developing AURA required rigorous kinematic torque calculation and optical micro-lens refinement.',
      phases: [
        {
          phaseNumber: '01',
          title: 'Counterweight Physics Modeling',
          description: 'Simulating center-of-gravity shifts across the full articulation envelope to ensure zero drift at any angle between 5° and 85°.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop',
              caption: 'Balancing torque calculations plotted against arm length.',
              tag: 'Kinematic Study',
              type: 'cad'
            },
            {
              url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
              caption: 'CNC machined pivot joints with embedded self-lubricating bronze bushings.',
              tag: 'Bearing Machining',
              type: 'prototype'
            }
          ]
        }
      ]
    },
    finalResult: {
      summary: 'AURA effortlessly harmonizes mathematical kinetic precision with calm, serene light that cares for human biological rhythms.',
      specs: [
        { label: 'Reach Radius', value: '820mm Full Articulation' },
        { label: 'CCT Range', value: '1800K to 5500K Continuous' },
        { label: 'CRI Rating', value: 'Ra 98.4 (R9 > 95)' },
        { label: 'Finishes', value: 'Matte Anodized Slate / Mirror Brass' }
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1600&auto=format&fit=crop',
          caption: 'AURA positioned over a minimalist drafting table in late evening amber mode.',
          aspectRatio: 'wide'
        },
        {
          url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1600&auto=format&fit=crop',
          caption: 'Cast concrete weighted base with capacitive flush dimming slider.',
          aspectRatio: 'wide'
        }
      ]
    }
  },
  {
    id: 'vita-smart-inhaler',
    title: 'Vestre Bench',
    subtitle: 'Modular public bench architecture engineered for circular urban longevity',
    category: 'Urban Furniture & Public Space',
    year: '2024',
    clientOrContext: 'Vestre / Urban Innovation',
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
        text: 'Early volumetric mockups and ergonomics explorations for public space integration.',
        width: 320,
        x: 6,
        y: 10,
        theme: 'light-glass',
        fontSize: 'base',
      },
      {
        id: 'box-2',
        text: 'Evaluating durable Nordic pine slats combined with powder-coated steel framework.',
        width: 320,
        x: 6,
        y: 52,
        theme: 'light-glass',
        fontSize: 'base',
      },
    ],
    v11TextBoxes: [
      {
        id: 'box-v11-1',
        text: 'Form architecture and structural rib placement optimized for outdoor resilience.',
        width: 340,
        x: 6,
        y: 8,
        theme: 'light-glass',
        fontSize: 'base',
      },
      {
        id: 'box-v11-2',
        text: 'Material tolerance testing between cast aluminium anchors and Nordic pine slats.',
        width: 340,
        x: 52,
        y: 8,
        theme: 'light-glass',
        fontSize: 'base',
      },
      {
        id: 'box-v11-3',
        text: 'Modular connection details enabling fast maintenance and single-slat replacement.',
        width: 340,
        x: 6,
        y: 52,
        theme: 'light-glass',
        fontSize: 'base',
      },
      {
        id: 'box-v11-4',
        text: 'Full-scale ergonomic verification under variable public seating postures.',
        width: 340,
        x: 52,
        y: 52,
        theme: 'light-glass',
        fontSize: 'base',
      },
    ],
    resultImages: [v6Image, v7Image, v8Image],
    problem: {
      title: 'Wear and Inflexible Maintenance in Public Seating',
      summary: 'Public street furniture is subjected to heavy weather and vandalism, often leading to premature disposal due to non-modular assemblies.',
      points: [
        'Single damaged slats currently require replacing entire bench units.',
        'Poor drainage causing accelerated wood decay and moisture retention.',
        'Rigid static layouts that fail to accommodate natural conversational clustering.'
      ]
    },
    whatAndWhy: {
      what: 'A circular urban bench system engineered with low-carbon aluminium castings and sustainably sourced Nordic pine slats.',
      why: 'By designing for zero-glue mechanical disassembly, individual slats can be serviced in minutes while monolithic cast brackets ensure decades of structural integrity.',
      decisions: [
        {
          title: 'Cast Aluminium Anchor Profile',
          description: 'Optimized ribbed profile provides high load bearing capacity with integrated water run-off channels.'
        },
        {
          title: 'Independent Slat Modular Fastening',
          description: 'Sub-surface mechanical fasteners allow single-slat replacement without dismantling adjacent elements.'
        },
        {
          title: 'Nordic Pine with Natural Patina',
          description: 'Sustainably harvested pine with protective oil finish that weathers gracefully into an organic silver-grey.'
        }
      ]
    },
    process: {
      intro: 'Prototyping joint tolerances, testing weight distribution, and verifying ergonomic comfort across multiple seating postures.',
      phases: []
    },
    finalResult: {
      summary: 'A durable, circular public seating system uniting Scandinavian craft with industrial precision.',
      specs: [
        { label: 'Material', value: 'Hydro CIRCAL Recycled Aluminium & Nordic Pine' },
        { label: 'Lifecycle', value: '100% Circular / Design for Disassembly (DfD)' },
        { label: 'Coating', value: 'Solvent-free architectural powder coat' },
        { label: 'Warranty', value: 'Lifetime structural guarantee on metal components' }
      ],
      images: [
        {
          url: v6Image,
          caption: 'Vestre Bench result 01.',
          aspectRatio: 'wide'
        },
        {
          url: v7Image,
          caption: 'Vestre Bench result 02.',
          aspectRatio: 'wide'
        },
        {
          url: v8Image,
          caption: 'Vestre Bench result 03.',
          aspectRatio: 'wide'
        }
      ]
    }
  },
  {
    id: 'tacta-analog-synthesizer',
    title: 'Erling Stool',
    subtitle: 'Cast aluminum and sculpted wood seating exploring structural minimalism and tactile comfort',
    category: 'Furniture Design & Seating',
    year: '2025',
    clientOrContext: 'Studio Exploration',
    coverImage: auraCoverImage,
    processImages: [e7Image, e2Image, e3Image],
    resultImages: [e4Image, e5Image, e6Image],
    problem: {
      title: 'Overcomplicated Joinery and Bulky Secondary Seating',
      summary: 'Occasional seating is frequently cumbersome to reposition, prone to loosening joinery over time, and visually dominant in intimate spaces.',
      points: [
        'Weak joint corners vulnerable to dynamic torsional loading.',
        'Excessive material mass making informal repositioning difficult.',
        'Lack of natural material warmth in austere industrial furniture.'
      ]
    },
    whatAndWhy: {
      what: 'Erling is a compact stackable stool combining sand-cast recycled aluminum legs with a gently contoured solid timber seat.',
      why: 'By concentrating structural support into three interlocking cast anchors, the stool achieves maximum stability with a minimal physical and visual footprint.',
      decisions: [
        {
          title: 'Interlocking Cast Frame',
          description: 'High-rigidity aluminum geometry provides structural integrity while keeping the overall unit lightweight.'
        },
        {
          title: 'Ergonomic Dished Seat',
          description: 'Subtle concave seat profile distributes body weight evenly for prolonged comfort without bulky upholstery.'
        }
      ]
    },
    process: {
      intro: 'Prototyping seat curvatures, testing leg taper angles, and verifying joinery tolerances under cyclical stress testing.',
      phases: [
        {
          phaseNumber: '01',
          title: 'Joint Tolerances & Weight Distribution',
          description: 'Refining the interface between cast metal sockets and CNC-milled timber dowels to accommodate seasonal wood movement.',
          images: []
        }
      ]
    },
    finalResult: {
      summary: 'A robust, sculptural stool balancing Scandinavian craft honesty with industrial permanence.',
      specs: [
        { label: 'Materials', value: 'Sand-Cast Recycled Aluminum & Solid Nordic Oak' },
        { label: 'Weight', value: '3.4 kg' },
        { label: 'Stackability', value: 'Up to 4 units' },
        { label: 'Finish', value: 'Raw tumbled aluminum & natural hardwax oil' }
      ],
      images: []
    }
  },
  {
    id: 'kraft-ergonomic-chisel-set',
    title: 'Concrete Sculpture',
    subtitle: 'Monolithic concrete explorations in balance, texture, and spatial weight',
    category: 'Sculpture & Spatial Objects',
    year: '2024',
    clientOrContext: 'Material Exploration',
    coverImage: gzImage,
    detailHeroImage: gzImage,
    processImages: [bay1Image, bay2Image],
    resultImages: [bay3Image],
    phoneResultImages: [ba1Image, ba2Image, ba3Image],
    problem: {
      title: 'Perceived Heaviness and Texture in Cast Objects',
      summary: 'Concrete is commonly perceived as cold and brutalist, masking its capacity for subtle surface texture and delicate spatial balance.',
      points: [
        'Surface air voids and brittle edges in conventional mortar casting.',
        'Lack of dynamic interaction between natural light and cast shadow planes.',
        'Heavy unrefined massing without poetic architectural equilibrium.'
      ]
    },
    whatAndWhy: {
      what: 'A series of cast ultra-high-performance concrete volumes balancing slender cantilevered planes against monolithic mass.',
      why: 'By experimenting with micro-aggregate mixes and precision silicone mold techniques, the concrete takes on a silky, stone-like presence that invites touch.',
      decisions: [
        {
          title: 'Precision Multi-Part Tooling',
          description: 'Flexible multi-part silicone molds yield crisp knife-edges and flawless surface density.'
        },
        {
          title: 'Through-Body Mineral Pigmentation',
          description: 'Integrally tinted with raw iron oxide pigments for consistent through-body tone and subtle patina.'
        }
      ]
    },
    process: {
      intro: 'Testing aggregate ratios, curing humidity chambers, and demolding timing to eliminate shrinkage and cracking.',
      phases: []
    },
    finalResult: {
      summary: 'A study in architectural permanence, quiet balance, and material sensitivity.',
      specs: [
        { label: 'Material', value: 'UHPC Micro-Aggregate Cement' },
        { label: 'Finish', value: 'Honed matte with hydrophobic breathable sealant' },
        { label: 'Dimensions', value: 'Variable modular compositions' },
        { label: 'Curing', value: '28-day water-submerged cure' }
      ],
      images: []
    }
  }
];
