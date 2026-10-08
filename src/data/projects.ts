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
    subtitle: 'A circular boiling appliance with 100% user-replaceable heating components',
    category: 'Home Appliances & Circular Design',
    year: '2024',
    clientOrContext: 'Sustainable Living Studio',
    coverImage: lumenCoverImage,
    coverImageClassName: '!object-[50%_75%]',
    processImages: [k1Image, k2Image],
    resultImages: [p1Image, p2Image, p3Image],
    problem: {
      title: 'The 2-Year Planned Obsolescence of Small Domestic Appliances',
      summary: 'Electric kettles are among the highest-turnover e-waste categories worldwide. When a simple resistive heating coil scales or fails, the entire injection-molded plastic vessel is discarded.',
      points: [
        'Microplastic leaching caused by boiling water repeatedly in polypropylene tanks.',
        'Permanent ultrasonic welding that prevents heating element inspection or descaling.',
        'Awkward pour geometry leading to wrist strain and splashing hot water.'
      ]
    },
    whatAndWhy: {
      what: 'LUMEN is an induction-ready borosilicate glass and pressed 316 stainless steel kettle with an open-source decoupled heating base.',
      why: 'Separating the thermal element from the fluid vessel eliminates mineral calcification entrapment and guarantees that the contact vessel will outlive its electronics by decades.',
      decisions: [
        {
          title: 'Thermal Glass Body',
          description: 'High-purity laboratory-grade borosilicate prevents taste contamination and visually indicates water level naturally without micro-tubes.'
        },
        {
          title: 'Precision Pour Spout',
          description: 'Calculated gooseneck spout curve allows micro-metered pour-over flow without drips or laminar turbulence.'
        },
        {
          title: 'Cold-Touch Cast Wooden Handle',
          description: 'Ergonomic FSC-certified Nordic ash handle designed with an offset balance point for zero counter-torque on wrists.'
        }
      ]
    },
    process: {
      intro: 'Prototyping focused heavily on hydrodynamic pour tests, fluid thermodynamics, and modular disassembly tolerances.',
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
    subtitle: 'Destigmatizing chronic respiratory therapy through discreet human-centric form',
    category: 'Medical Devices & Healthcare',
    year: '2024',
    clientOrContext: 'Health Tech Incubator Collaboration',
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
      title: 'Social Stigma and Poor Inhalation Adherence in Public Spaces',
      summary: 'Standard clinical metered-dose inhalers have remained virtually unchanged since the 1970s. Their loud, jarring institutional aesthetics make younger patients avoid using life-saving medication around peers.',
      points: [
        'Over 60% of patients fail to coordinate actuator press with deep lung inhalation.',
        'High incidence of forgotten doses due to lack of discreet usage tracking.',
        'Unsanitary mouthpiece exposure when carried loose in pockets or bags.'
      ]
    },
    whatAndWhy: {
      what: 'VITA is an ultra-compact, tactilely warm aerosol inhaler with an integrated twist-to-reveal hygienic cap and gentle haptic inhalation coaching.',
      why: 'By designing VITA like an exquisite pocket stone rather than a piece of clinical hospital equipment, psychological barriers disappear and therapeutic compliance jumps significantly.',
      decisions: [
        {
          title: 'Twist-Lock Hygienic Shroud',
          description: 'A 90° twisting collar seamlessly conceals the mouthpiece, keeping lint and dirt away without fragile detached caps.'
        },
        {
          title: 'Breath-Actuated Micro-Vibration',
          description: 'A silent internal air-flow sensor delivers a gentle haptic pulse when the user reaches the optimal 5-second breath intake velocity.'
        },
        {
          title: 'Warm Biocompatible Touch',
          description: 'Silky, soft-touch recycled medical-grade polymer with gentle ergonomic contours that fit naturally into the palm.'
        }
      ]
    },
    process: {
      intro: 'Extensive user research with 28 asthma and COPD patients in Oslo, analyzing pocket ergonomics and grip accessibility for diverse ages.',
      phases: []
    },
    finalResult: {
      summary: 'VITA represents the future of compassionate medical hardware: humanizing clinical technology and empowering patients with dignity.',
      specs: [
        { label: 'Battery Life', value: '45 Days on USB-C Fast Charge' },
        { label: 'Weight', value: '42 grams (with standard canister)' },
        { label: 'Dose Tracking', value: 'Low-energy Bluetooth telemetry' },
        { label: 'Biocompatibility', value: 'ISO 10993 Certified Medical Polymer' }
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
    subtitle: 'A sensory music machine eliminating digital screens for pure tactile sonic flow',
    category: 'Electronic Musical Instruments',
    year: '2025',
    clientOrContext: 'Independent Audio Research',
    coverImage: auraCoverImage,
    processImages: [e7Image, e2Image, e3Image],
    resultImages: [e4Image, e5Image, e6Image],
    problem: {
      title: 'Digital Fatigue in Modern Music Production',
      summary: 'Electronic music creation has become trapped inside computer monitors, nested menu trees, and mouse-clicking interfaces that suffocate spontaneity and musical muscle memory.',
      points: [
        'Zero tactile memory when navigating virtual software synthesizer plugins.',
        'Visual distraction from endless software waveforms rather than listening with ears.',
        'Flimsy plastic knobs with wobble and low rotational resistance.'
      ]
    },
    whatAndWhy: {
      what: 'TACTA is a 6-voice analog polyphonic synthesizer featuring custom-machined stepped dials, cherry wood side cheeks, and tactile magnetic rocker switches.',
      why: 'By allocating one physical control per sound parameter and eliminating the screen entirely, the musician builds an intimate physical dialogue with sound.',
      decisions: [
        {
          title: 'One-Knob-Per-Function Architecture',
          description: 'No hidden sub-menus, no modifier shift keys. What you see is exactly what you hear.'
        },
        {
          title: 'Weight-Balanced Anodized Knobs',
          description: 'Solid aluminum dials machined with calibrated thumb notches for blind micro-adjustments on dark stages.'
        }
      ]
    },
    process: {
      intro: 'Prototyping audio circuits on breadboards and developing mechanical switch tactile detents over several iteration cycles.',
      phases: [
        {
          phaseNumber: '01',
          title: 'Front-Panel Spatial Architecture',
          description: 'Structuring signal flow from left (Oscillators) to center (Filters) to right (Envelopes and FX) following natural human reading direction.',
          images: []
        }
      ]
    },
    finalResult: {
      summary: 'TACTA has been adopted by studio producers worldwide as an antidote to screen exhaustion, celebrated as an heirloom instrument for generations.',
      specs: [
        { label: 'Architecture', value: 'Discrete 6-Voice Analog Voltage-Controlled Synthesizer' },
        { label: 'Controls', value: '48 Solid Machined Knobs, 16 Magnetic Rockers' },
        { label: 'Chassis', value: 'Matte Black Powder-Coated Steel with Oiled Walnut Sides' }
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
      title: 'Repetitive Strain Injury in Fine Woodworking Crafts',
      summary: 'Woodworkers spend hundreds of hours paring end-grain and cutting dovetails. Standard round or octagonal handles cause intense pressure points on the thenar eminence of the hand.',
      points: [
        'Vibration shock transmission directly into wrist joints when struck with mallets.',
        'Handle splitting and collar detachment caused by varying workshop humidity.',
        'Poor indexing of the bevel angle without looking directly at the timber face.'
      ]
    },
    whatAndWhy: {
      what: 'KRAFT is a set of four bench chisels pairing hand-forged O1 high-carbon tool steel with an asymmetric biocomposite lignin handle.',
      why: 'The cross-section subtly flattens at the thumb index point, enabling the artisan to sense the exact blade angle tactilely without breaking visual concentration.',
      decisions: [
        {
          title: 'Asymmetric Thumb Shelf',
          description: 'A sculpted thumb rest transitions seamlessly into a palm swell, distributing paring pressure across 300% more contact area.'
        },
        {
          title: 'Integrated Damping Core',
          description: 'A high-density elastomer layer inside the brass strike-hoop absorbs high-frequency mallet shock before it reaches the carpals.'
        }
      ]
    },
    process: {
      intro: 'Developed in dialogue with master timber joiners in Gudbrandsdalen, balancing ancient Norwegian forging techniques with computational grip mapping.',
      phases: [
        {
          phaseNumber: '01',
          title: 'Hand Pressure Mapping',
          description: 'Utilizing dynamic capacitive pressure glove sensors during intense dovetail cutting sessions to map peak stress points.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop',
              caption: 'Tactile pressure gradient map overlaid onto clay handle impressions.',
              tag: 'Grip Study',
              type: 'sketch'
            }
          ]
        }
      ]
    },
    finalResult: {
      summary: 'KRAFT restores dignity and pain-free longevity to manual joinery, celebrated for both its ergonomic mastery and timeless toolroom aesthetic.',
      specs: [
        { label: 'Blade Steel', value: 'Cryogenically Quenched O1 Tool Steel (61-62 HRC)' },
        { label: 'Sizes', value: '6mm, 12mm, 18mm, 25mm' },
        { label: 'Handle Material', value: 'Flax-reinforced Biocomposite & Turned Brass Hoop' }
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1600&auto=format&fit=crop',
          caption: 'KRAFT set resting on workbench with hand-planed spruce shavings.',
          aspectRatio: 'wide'
        },
        {
          url: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1600&auto=format&fit=crop',
          caption: 'Detail of cryogenic blade ground to 25° primary with 30° micro-bevel.',
          aspectRatio: 'wide'
        }
      ]
    }
  }
];
