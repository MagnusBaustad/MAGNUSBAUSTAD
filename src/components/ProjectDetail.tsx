import React, { useState, useRef } from 'react';
import { Project } from '../types';
import { ArrowLeft, X } from 'lucide-react';
import { useProjects } from '../context/ProjectsContext';
import { EditableText } from './EditableText';
import { OverlayTextBox } from './OverlayTextBox';
import { ProjectImageSlot } from './ProjectImageSlot';
import gs1Image from '../assets/images/GS1.png';
import gs2Image from '../assets/images/GS2.png';
import gs3Image from '../assets/images/GS3.png';
import r1Image from '../assets/images/R1.png';
import r2Image from '../assets/images/R2.png';
import r3Image from '../assets/images/R3.png';
import r4Image from '../assets/images/R4.png';
import r7Image from '../assets/images/R7.png';
import s1Image from '../assets/images/S1.png';
import s2Image from '../assets/images/S2.png';
import k1Image from '../assets/images/K1.png';
import k2Image from '../assets/images/K2.png';
import p1Image from '../assets/images/P1.png';
import p2Image from '../assets/images/P2.png';
import p3Image from '../assets/images/P3.png';
import ffImage from '../assets/images/FF.png';
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

interface ProjectDetailProps {
  project: Project;
  onBackToGrid: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBackToGrid,
}) => {
  const [lightboxImage, setLightboxImage] = useState<{ url: string; caption: string } | null>(null);
  const { isEditMode, updateField } = useProjects();
  const v9ContainerRef = useRef<HTMLDivElement>(null);
  const v11ContainerRef = useRef<HTMLDivElement>(null);

  const processImages = (project.processImages && project.processImages.length > 0)
    ? project.processImages
    : (project.id === 'rottefella-extend'
        ? [ty1Image, ty21Image, ty6Image]
        : (project.id === 'tacta-analog-synthesizer'
            ? [e7Image, e2Image, e3Image]
            : (project.id === 'kraft-ergonomic-chisel-set'
                ? [bay1Image, bay2Image]
                : (project.id === 'vita-smart-inhaler'
                    ? [v9Image, v2Image, v3Image, v10Image, v5Image]
                    : (project.id === 'lumen-modular-kettle'
                        ? [k1Image, k2Image]
                        : (project.id === 'aura-circadian-desk-lamp'
                            ? [gs1Image, gs2Image, ffImage]
                            : (project.process?.phases?.flatMap((phase) => phase.images.map((img) => img.url)) || [])))))));

  const rawResultImages = (project.resultImages && project.resultImages.length > 0)
    ? project.resultImages
    : (project.id === 'rottefella-extend'
        ? [ty3Image, ty4Image, ty5Image]
        : (project.id === 'tacta-analog-synthesizer'
            ? [e4Image, e5Image, e6Image]
            : (project.id === 'kraft-ergonomic-chisel-set'
                ? [bay3Image]
                : (project.id === 'vita-smart-inhaler'
                    ? [v6Image, v7Image, v8Image]
                    : (project.id === 'lumen-modular-kettle'
                        ? [p1Image, p2Image, p3Image]
                        : (project.id === 'aura-circadian-desk-lamp'
                            ? [r1Image, r2Image, r3Image]
                            : (project.finalResult?.images?.map((img) => img.url) || [])))))));

  const desktopResultImages =
    project.id === 'kraft-ergonomic-chisel-set'
      ? rawResultImages.slice(0, 1)
      : rawResultImages;

  const phoneResultImages =
    project.id === 'kraft-ergonomic-chisel-set'
      ? (project.phoneResultImages && project.phoneResultImages.length > 0 ? project.phoneResultImages : [ba1Image, ba2Image, ba3Image])
      : rawResultImages;

  const resultImages = desktopResultImages;

  const heroImage =
    project.id === 'kraft-ergonomic-chisel-set'
      ? (project.detailHeroImage || gzImage || project.coverImage)
      : (project.detailHeroImage || project.coverImage);

  const handleHeroImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      updateField(project.id, ['detailHeroImage'], dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleProcessImageUpload = (file: File, index: number) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const nextImages = [...processImages];
      nextImages[index] = dataUrl;
      updateField(project.id, ['processImages'], nextImages);
    };
    reader.readAsDataURL(file);
  };

  const handleResultImageUpload = (file: File, index: number) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const nextImages = [...desktopResultImages];
      nextImages[index] = dataUrl;
      updateField(project.id, ['resultImages'], nextImages);
    };
    reader.readAsDataURL(file);
  };

  const handlePhoneResultImageUpload = (file: File, index: number) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (project.id === 'kraft-ergonomic-chisel-set') {
        const nextImages = [...phoneResultImages];
        nextImages[index] = dataUrl;
        updateField(project.id, ['phoneResultImages'], nextImages);
      } else {
        const nextImages = [...phoneResultImages];
        nextImages[index] = dataUrl;
        updateField(project.id, ['resultImages'], nextImages);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <article id={`project-detail-${project.id}`} className="w-full bg-white text-black min-h-screen">
      {/* Project Header Overview */}
      <header className="w-full px-6 sm:px-10 lg:px-14 pt-2 sm:pt-3 pb-5 sm:pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1 max-w-3xl">
            <div className="pt-2 sm:pt-2.5">
              <EditableText
                as="h1"
                value={project.title}
                onSave={(val) => updateField(project.id, ['title'], val)}
                isEditMode={isEditMode}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight"
                placeholder="Prosjekttittel..."
              />
            </div>
            <div className="mt-0.5 sm:mt-1">
              <EditableText
                as="p"
                value={project.subtitle}
                multiline
                onSave={(val) => updateField(project.id, ['subtitle'], val)}
                isEditMode={isEditMode}
                className="text-base sm:text-lg text-neutral-600 font-normal leading-normal"
                placeholder="Undertittel eller ingress..."
              />
            </div>
          </div>

          {/* Focus and Context: hidden on mobile, shown on desktop (md:block) */}
          <div className="hidden md:block text-xs tracking-wider uppercase text-neutral-500 space-y-1.5 md:text-right shrink-0">
            <div>
              <EditableText
                as="span"
                value={
                  project.sectionTitles?.focusLabel
                    ? (project.sectionTitles.focusLabel.endsWith(' ')
                        ? project.sectionTitles.focusLabel
                        : `${project.sectionTitles.focusLabel.trimEnd()} `)
                    : 'Focus: '
                }
                onSave={(val) => {
                  const withSpace = val.endsWith(' ') ? val : `${val.trimEnd()} `;
                  updateField(project.id, ['sectionTitles', 'focusLabel'], withSpace);
                }}
                isEditMode={isEditMode}
                className="text-neutral-400"
                placeholder="Focus label..."
              />
              {' '}
              <EditableText
                as="span"
                value={project.focus || 'Learning SolidWorks and CMF'}
                onSave={(val) => updateField(project.id, ['focus'], val)}
                isEditMode={isEditMode}
                className="font-medium text-neutral-700"
                placeholder="Fokusområde..."
              />
            </div>
            <div>
              <EditableText
                as="span"
                value={
                  project.sectionTitles?.contextLabel
                    ? (project.sectionTitles.contextLabel.endsWith(' ')
                        ? project.sectionTitles.contextLabel
                        : `${project.sectionTitles.contextLabel.trimEnd()} `)
                    : 'Context: '
                }
                onSave={(val) => {
                  const withSpace = val.endsWith(' ') ? val : `${val.trimEnd()} `;
                  updateField(project.id, ['sectionTitles', 'contextLabel'], withSpace);
                }}
                isEditMode={isEditMode}
                className="text-neutral-400"
                placeholder="Context label..."
              />
              {' '}
              <EditableText
                as="span"
                value={project.clientOrContext}
                onSave={(val) => updateField(project.id, ['clientOrContext'], val)}
                isEditMode={isEditMode}
                className="font-medium text-neutral-700"
                placeholder="Kontekst / oppdragsgiver..."
              />
            </div>
          </div>
        </div>
      </header>

      {/* Full-width Hero Showcase - Edge-to-edge */}
      <div className="w-full mb-5 sm:mb-6 overflow-hidden">
        {project.id === 'kraft-ergonomic-chisel-set' ? (
          <div className="w-full bg-neutral-100 overflow-hidden relative group">
            <ProjectImageSlot
              src={heroImage}
              alt={project.title}
              label={`${project.title} • Hero Showcase`}
              className="w-full h-auto block"
              onUpload={handleHeroImageUpload}
              onOpenLightbox={() => !isEditMode && setLightboxImage({ url: heroImage, caption: project.title })}
              isEditMode={isEditMode}
            />
          </div>
        ) : (
          <div className="w-full aspect-[16/9] bg-neutral-100 overflow-hidden relative group">
            <ProjectImageSlot
              src={heroImage}
              alt={project.title}
              label={`${project.title} • Hero Showcase`}
              className="w-full h-full object-cover"
              onUpload={handleHeroImageUpload}
              onOpenLightbox={() => !isEditMode && setLightboxImage({ url: heroImage, caption: project.title })}
              isEditMode={isEditMode}
            />
          </div>
        )}
      </div>

      {/* Phone version only: Focus and Context text below the first image, before challenge section */}
      <div className="block md:hidden w-full px-6 mb-5 text-[10px] font-sans font-normal normal-case tracking-normal text-neutral-600 space-y-1">
        <div>
          <EditableText
            as="span"
            value={
              project.sectionTitles?.focusLabel
                ? (project.sectionTitles.focusLabel.endsWith(' ')
                    ? project.sectionTitles.focusLabel
                    : `${project.sectionTitles.focusLabel.trimEnd()} `)
                : 'Focus: '
            }
            onSave={(val) => {
              const withSpace = val.endsWith(' ') ? val : `${val.trimEnd()} `;
              updateField(project.id, ['sectionTitles', 'focusLabel'], withSpace);
            }}
            isEditMode={isEditMode}
            className="text-neutral-600 font-normal normal-case text-[10px]"
            placeholder="Focus label..."
          />
          {' '}
          <EditableText
            as="span"
            value={project.focus || 'Learning SolidWorks and CMF'}
            onSave={(val) => updateField(project.id, ['focus'], val)}
            isEditMode={isEditMode}
            className="text-neutral-600 font-normal normal-case text-[10px]"
            placeholder="Fokusområde..."
          />
        </div>
        <div>
          <EditableText
            as="span"
            value={
              project.sectionTitles?.contextLabel
                ? (project.sectionTitles.contextLabel.endsWith(' ')
                    ? project.sectionTitles.contextLabel
                    : `${project.sectionTitles.contextLabel.trimEnd()} `)
                : 'Context: '
            }
            onSave={(val) => {
              const withSpace = val.endsWith(' ') ? val : `${val.trimEnd()} `;
              updateField(project.id, ['sectionTitles', 'contextLabel'], withSpace);
            }}
            isEditMode={isEditMode}
            className="text-neutral-600 font-normal normal-case text-[10px]"
            placeholder="Context label..."
          />
          {' '}
          <EditableText
            as="span"
            value={project.clientOrContext}
            onSave={(val) => updateField(project.id, ['clientOrContext'], val)}
            isEditMode={isEditMode}
            className="text-neutral-600 font-normal normal-case text-[10px]"
            placeholder="Kontekst / oppdragsgiver..."
          />
        </div>
      </div>

      {/* Section 1: Problem / Challenge */}
      <section id="section-problem" className="w-full px-6 sm:px-10 lg:px-14 mb-5 sm:mb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <EditableText
              as="span"
              value={project.sectionTitles?.challengeTitle || 'Challenge'}
              onSave={(val) => updateField(project.id, ['sectionTitles', 'challengeTitle'], val)}
              isEditMode={isEditMode}
              className="text-xs font-normal uppercase tracking-widest text-neutral-400 block mb-2"
              placeholder="Challenge Title..."
            />
          </div>
          <div className="md:col-span-8 space-y-6">
            <EditableText
              as="p"
              value={project.problem?.summary || ''}
              multiline
              onSave={(val) => updateField(project.id, ['problem', 'summary'], val)}
              isEditMode={isEditMode}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal"
              placeholder="Beskriv problemstillingen..."
            />
          </div>
        </div>
      </section>

      {/* Section 2: Hva og Hvorfor (What & Why / Design Intent) */}
      <section id="section-what-and-why" className="w-full bg-neutral-50 py-5 sm:py-6 mb-5 sm:mb-6 border-y border-neutral-100">
        <div className="w-full px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <EditableText
                as="span"
                value={project.sectionTitles?.designIntentTitle || 'Design Intent'}
                onSave={(val) => updateField(project.id, ['sectionTitles', 'designIntentTitle'], val)}
                isEditMode={isEditMode}
                className="text-xs font-normal uppercase tracking-widest text-neutral-400 block mb-2"
                placeholder="Section Title..."
              />
            </div>
            <div className="md:col-span-8 space-y-6">
              <div>
                <EditableText
                  as="span"
                  value={project.sectionTitles?.whatItIsTitle || 'What It Is:'}
                  onSave={(val) => updateField(project.id, ['sectionTitles', 'whatItIsTitle'], val)}
                  isEditMode={isEditMode}
                  className="text-xs font-normal uppercase tracking-wider text-neutral-400 block mb-2"
                  placeholder="Subheading..."
                />
                <EditableText
                  as="p"
                  value={project.whatAndWhy?.what || ''}
                  multiline
                  onSave={(val) => updateField(project.id, ['whatAndWhy', 'what'], val)}
                  isEditMode={isEditMode}
                  className="text-base sm:text-lg font-normal text-neutral-600 leading-relaxed"
                  placeholder="Hva er løsningen..."
                />
              </div>

              <div>
                <EditableText
                  as="span"
                  value={project.sectionTitles?.whyItMattersTitle || 'Why It Matters:'}
                  onSave={(val) => updateField(project.id, ['sectionTitles', 'whyItMattersTitle'], val)}
                  isEditMode={isEditMode}
                  className="text-xs font-normal uppercase tracking-wider text-neutral-400 block mb-2"
                  placeholder="Subheading..."
                />
                <EditableText
                  as="p"
                  value={project.whatAndWhy?.why || ''}
                  multiline
                  onSave={(val) => updateField(project.id, ['whatAndWhy', 'why'], val)}
                  isEditMode={isEditMode}
                  className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal"
                  placeholder="Hvorfor har dette verdi..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Process (Prosess) */}
      <section id="section-process" className="w-full mb-5 sm:mb-6">
        <div className={`w-full px-6 sm:px-10 lg:px-14 ${project.id === 'lumen-modular-kettle' ? 'mb-1.5 sm:mb-2' : 'mb-4 sm:mb-5'}`}>
          <EditableText
            as="span"
            value={project.sectionTitles?.processTitle || 'Design Process'}
            onSave={(val) => updateField(project.id, ['sectionTitles', 'processTitle'], val)}
            isEditMode={isEditMode}
            className="text-xs font-normal uppercase tracking-widest text-neutral-400 block"
            placeholder="Process Title..."
          />
        </div>

        {/* Process Images: Full bleed edge-to-edge if full-width, or standard container width */}
        {processImages.length > 0 && (
          <div
            className={
              project.processImagesFullWidth || project.id === 'vita-smart-inhaler'
                ? "w-full flex flex-col m-0 p-0"
                : "w-full px-6 sm:px-10 lg:px-14 flex flex-col"
            }
          >
            {processImages.map((imgSrc, idx) => {
              // Zero spacing between consecutive images in V10 -> V14 -> V13 -> V12 block
              const isTouchingNext =
                (project.id === 'vita-smart-inhaler' && idx >= 4 && idx < processImages.length - 1) ||
                (idx < processImages.length - 1 &&
                  (processImages[idx] === v10Image ||
                    processImages[idx] === v14Image ||
                    processImages[idx] === v13Image ||
                    String(processImages[idx]).includes('V10') ||
                    String(processImages[idx]).includes('V14') ||
                    String(processImages[idx]).includes('V13')) &&
                  (processImages[idx + 1] === v14Image ||
                    processImages[idx + 1] === v13Image ||
                    processImages[idx + 1] === v12Image ||
                    String(processImages[idx + 1]).includes('V14') ||
                    String(processImages[idx + 1]).includes('V13') ||
                    String(processImages[idx + 1]).includes('V12')));

              const isTouchingPrevious =
                (project.id === 'vita-smart-inhaler' && idx >= 5 && idx <= 7) ||
                (idx > 0 &&
                  (processImages[idx - 1] === v10Image ||
                    processImages[idx - 1] === v14Image ||
                    processImages[idx - 1] === v13Image ||
                    String(processImages[idx - 1]).includes('V10') ||
                    String(processImages[idx - 1]).includes('V14') ||
                    String(processImages[idx - 1]).includes('V13')) &&
                  (imgSrc === v14Image ||
                    imgSrc === v13Image ||
                    imgSrc === v12Image ||
                    String(imgSrc).includes('V14') ||
                    String(imgSrc).includes('V13') ||
                    String(imgSrc).includes('V12')));

              const isV9 =
                project.id === 'vita-smart-inhaler' &&
                (idx === 0 || imgSrc === v9Image);

              const isV11 =
                project.id === 'vita-smart-inhaler' &&
                (idx === 1 || imgSrc === v11Image);

              const v9TextBoxes =
                project.v9TextBoxes && project.v9TextBoxes.length > 0
                  ? project.v9TextBoxes
                  : [
                      {
                        id: 'box-1',
                        text: 'Early volumetric mockups and ergonomics explorations for public space integration.',
                        width: 320,
                        x: 6,
                        y: 8,
                        theme: 'light-glass' as const,
                        fontSize: 'base' as const,
                      },
                      {
                        id: 'box-2',
                        text: 'Evaluating durable Nordic pine slats combined with powder-coated steel framework.',
                        width: 320,
                        x: 6,
                        y: 52,
                        theme: 'light-glass' as const,
                        fontSize: 'base' as const,
                      },
                    ];

              const v11TextBoxes =
                project.v11TextBoxes && project.v11TextBoxes.length > 0
                  ? project.v11TextBoxes
                  : [
                      {
                        id: 'box-v11-1',
                        text: 'Form architecture and structural rib placement optimized for outdoor resilience.',
                        width: 340,
                        x: 6,
                        y: 8,
                        theme: 'light-glass' as const,
                        fontSize: 'base' as const,
                      },
                      {
                        id: 'box-v11-2',
                        text: 'Material tolerance testing between cast aluminium anchors and Nordic pine slats.',
                        width: 340,
                        x: 52,
                        y: 8,
                        theme: 'light-glass' as const,
                        fontSize: 'base' as const,
                      },
                      {
                        id: 'box-v11-3',
                        text: 'Modular connection details enabling fast maintenance and single-slat replacement.',
                        width: 340,
                        x: 6,
                        y: 52,
                        theme: 'light-glass' as const,
                        fontSize: 'base' as const,
                      },
                      {
                        id: 'box-v11-4',
                        text: 'Full-scale ergonomic verification under variable public seating postures.',
                        width: 340,
                        x: 52,
                        y: 52,
                        theme: 'light-glass' as const,
                        fontSize: 'base' as const,
                      },
                    ];

              return (
                <div
                  key={idx}
                  ref={isV9 ? v9ContainerRef : (isV11 ? v11ContainerRef : undefined)}
                  style={{
                    ...(isTouchingPrevious ? { marginTop: 0, paddingTop: 0 } : {}),
                    ...(isTouchingNext ? { marginBottom: 0, paddingBottom: 0 } : {}),
                  }}
                  className={`relative w-full overflow-hidden ${
                    idx === 0 || isTouchingPrevious ? 'mt-0 pt-0' : 'mt-4 sm:mt-6'
                  } ${isTouchingNext ? 'mb-0 pb-0' : ''}`}
                >
                  <ProjectImageSlot
                    src={imgSrc}
                    alt={`Design Process ${idx + 1}`}
                    label={project.id === 'kraft-ergonomic-chisel-set' ? `BAY${idx + 1} • Design Process 0${idx + 1}` : `Design Process 0${idx + 1}`}
                    style={
                      isTouchingPrevious || isTouchingNext
                        ? { display: 'block', margin: 0, padding: 0 }
                        : undefined
                    }
                    className="w-full h-auto block align-middle m-0 p-0"
                    onUpload={(file) => handleProcessImageUpload(file, idx)}
                    onOpenLightbox={() => !isEditMode && setLightboxImage({ url: imgSrc, caption: `Design Process 0${idx + 1}` })}
                    isEditMode={isEditMode}
                  />

                  {/* Two adjustable text boxes over Image V9 (Vestre Bench only - hidden on mobile) */}
                  {project.id === 'vita-smart-inhaler' && isV9 && (
                    <div className="hidden md:contents">
                      {v9TextBoxes.map((box, boxIdx) => (
                        <OverlayTextBox
                          key={box.id || boxIdx}
                          box={box}
                          index={boxIdx}
                          isEditMode={isEditMode}
                          containerRef={v9ContainerRef}
                          onUpdate={(field, val) => {
                            updateField(project.id, ['v9TextBoxes', boxIdx, field], val);
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Four adjustable text boxes over Image V11 (Vestre Bench only - hidden on mobile) */}
                  {project.id === 'vita-smart-inhaler' && isV11 && (
                    <div className="hidden md:contents">
                      {v11TextBoxes.map((box, boxIdx) => (
                        <OverlayTextBox
                          key={box.id || boxIdx}
                          box={box}
                          index={boxIdx}
                          isEditMode={isEditMode}
                          containerRef={v11ContainerRef}
                          onUpdate={(field, val) => {
                            updateField(project.id, ['v11TextBoxes', boxIdx, field], val);
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Section 4: Result (White Section, Edge-to-Edge Images) */}
      <section id="section-result" className="w-full bg-white mb-5 sm:mb-6">
        <div className="w-full px-6 sm:px-10 lg:px-14 mb-4 sm:mb-5">
          <EditableText
            as="span"
            value={project.sectionTitles?.resultTitle || 'Result'}
            onSave={(val) => updateField(project.id, ['sectionTitles', 'resultTitle'], val)}
            isEditMode={isEditMode}
            className="text-xs font-normal uppercase tracking-widest text-neutral-400 block"
            placeholder="Result Title..."
          />
        </div>

        {/* Desktop Result Images: hidden on mobile */}
        {desktopResultImages.length > 0 && (
          <div className="hidden md:flex flex-col w-full">
            {desktopResultImages.map((imgSrc, idx) => {
              const isE4 =
                imgSrc === e4Image ||
                String(imgSrc).includes('E4') ||
                (project.id === 'tacta-analog-synthesizer' && idx === 0);

              const isContainerAligned =
                isE4 ||
                imgSrc === bay3Image ||
                String(imgSrc).includes('BAY3') ||
                project.id === 'kraft-ergonomic-chisel-set';

              const isTacta = project.id === 'tacta-analog-synthesizer';
              const isTactaFirstResult = isTacta && idx === 0;

              if (isContainerAligned) {
                const label =
                  project.id === 'kraft-ergonomic-chisel-set'
                    ? `BAY3 • Result 01`
                    : `Result 0${idx + 1}`;

                return (
                  <div
                    key={idx}
                    className={`w-full px-6 sm:px-10 lg:px-14 flex flex-col ${
                      isTactaFirstResult
                        ? 'mb-8 sm:mb-9 md:mb-4 md:sm:mb-6'
                        : isTacta
                        ? 'mb-0 md:mb-4 md:sm:mb-6'
                        : 'mb-0 md:mb-0'
                    } last:mb-0 m-0 p-0`}
                  >
                    <ProjectImageSlot
                      src={imgSrc}
                      alt={`Result ${idx + 1}`}
                      label={label}
                      className="w-full h-auto block align-middle m-0 p-0"
                      onUpload={(file) => handleResultImageUpload(file, idx)}
                      onOpenLightbox={() => !isEditMode && setLightboxImage({ url: imgSrc, caption: `Result 0${idx + 1}` })}
                      isEditMode={isEditMode}
                    />
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className={
                    isTacta
                      ? "w-full overflow-hidden mb-0 md:mb-4 md:sm:mb-6 md:last:mb-0 m-0 p-0 block leading-none"
                      : "w-full overflow-hidden m-0 p-0 mb-0 md:mb-0 block leading-none"
                  }
                >
                  <ProjectImageSlot
                    src={imgSrc}
                    alt={`Result ${idx + 1}`}
                    label={`Result 0${idx + 1}`}
                    className="w-full h-auto block align-middle m-0 p-0"
                    onUpload={(file) => handleResultImageUpload(file, idx)}
                    onOpenLightbox={() => !isEditMode && setLightboxImage({ url: imgSrc, caption: `Result 0${idx + 1}` })}
                    isEditMode={isEditMode}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Phone Result Images: visible on mobile only */}
        {phoneResultImages.length > 0 && (
          <div className="flex md:hidden flex-col w-full">
            {phoneResultImages.map((imgSrc, idx) => {
              const isE4 =
                imgSrc === e4Image ||
                String(imgSrc).includes('E4') ||
                (project.id === 'tacta-analog-synthesizer' && idx === 0);

              const isContainerAligned =
                isE4 && project.id !== 'kraft-ergonomic-chisel-set';

              const isTacta = project.id === 'tacta-analog-synthesizer';
              const isTactaFirstResult = isTacta && idx === 0;

              const label =
                project.id === 'kraft-ergonomic-chisel-set'
                  ? `BA${idx + 1} • Result 0${idx + 1}`
                  : `Result 0${idx + 1}`;

              if (isContainerAligned) {
                return (
                  <div
                    key={idx}
                    className={`w-full px-6 flex flex-col ${
                      isTactaFirstResult ? 'mb-8' : 'mb-0'
                    } last:mb-0 m-0 p-0`}
                  >
                    <ProjectImageSlot
                      src={imgSrc}
                      alt={`Result ${idx + 1}`}
                      label={label}
                      className="w-full h-auto block align-middle m-0 p-0"
                      onUpload={(file) => handlePhoneResultImageUpload(file, idx)}
                      onOpenLightbox={() => !isEditMode && setLightboxImage({ url: imgSrc, caption: `Result 0${idx + 1}` })}
                      isEditMode={isEditMode}
                    />
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="w-full overflow-hidden m-0 p-0 mb-0 block leading-none"
                >
                  <ProjectImageSlot
                    src={imgSrc}
                    alt={`Result ${idx + 1}`}
                    label={label}
                    className="w-full h-auto block align-middle m-0 p-0"
                    onUpload={(file) => handlePhoneResultImageUpload(file, idx)}
                    onOpenLightbox={() => !isEditMode && setLightboxImage({ url: imgSrc, caption: `Result 0${idx + 1}` })}
                    isEditMode={isEditMode}
                  />
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Back to Projects Footer Bar (Grey section below) */}
      <footer className="w-full border-t border-neutral-200 py-5 sm:py-6 bg-neutral-50">
        <div className="w-full px-6 sm:px-10 lg:px-14 flex items-center justify-center">
          <button
            onClick={onBackToGrid}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <EditableText
              as="span"
              value={project.sectionTitles?.backButtonText || 'Back to all projects'}
              onSave={(val) => updateField(project.id, ['sectionTitles', 'backButtonText'], val)}
              isEditMode={isEditMode}
              placeholder="Button text..."
            />
          </button>
        </div>
      </footer>

      {/* Lightbox Modal for Process / Final Images */}
      {lightboxImage && (
        <div
          id="image-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 focus:outline-none cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="max-w-5xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.url}
              alt={lightboxImage.caption}
              className="max-w-full max-h-[75vh] object-contain"
            />
            <p className="text-neutral-300 text-sm mt-4 text-center">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}
    </article>
  );
};
