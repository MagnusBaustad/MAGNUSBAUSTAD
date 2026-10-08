import React from 'react';
import { ArrowRight, MapPin, Plus, Trash2 } from 'lucide-react';
import { PageType } from '../types';
import portraitImg from '../assets/images/regenerated_image_1790080455082.png';
import { useProjects } from '../context/ProjectsContext';
import { EditableText } from './EditableText';

interface AboutProps {
  onNavigate: (page: PageType) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const { aboutContent, updateAboutContent, isEditMode } = useProjects();

  const handleUpdateMethodology = (index: number, field: 'title' | 'description', val: string) => {
    const updated = [...aboutContent.methodologies];
    updated[index] = { ...updated[index], [field]: val };
    updateAboutContent('methodologies', updated);
  };

  const handleUpdateTool = (index: number, val: string) => {
    const updated = [...aboutContent.tools];
    updated[index] = val;
    updateAboutContent('tools', updated);
  };

  const handleRemoveTool = (index: number) => {
    const updated = aboutContent.tools.filter((_, i) => i !== index);
    updateAboutContent('tools', updated);
  };

  const handleAddTool = () => {
    const newTool = prompt('Enter new tool/capability name:');
    if (newTool && newTool.trim()) {
      updateAboutContent('tools', [...aboutContent.tools, newTool.trim()]);
    }
  };

  return (
    <main id="about-page" className="w-full bg-white text-black min-h-screen">
      <div className="w-full px-6 sm:px-10 lg:px-14 pt-0 pb-16 sm:pb-20">
        
        {/* Main hero row: frameless portrait on left, primary statement scaled bigger and left-aligned, bottom-aligned with portrait */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-8 lg:gap-12 xl:gap-14 pt-16 sm:pt-24 lg:pt-36 pb-14 sm:pb-18 border-b border-neutral-200">
          
          {/* Frameless double-size portrait - positioned flush left aligning with 'M' in MAGNUSBAUSTAD */}
          <div className="shrink-0 flex flex-col justify-end">
            <div id="about-portrait-card" className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 aspect-[4/5] overflow-hidden">
              <img
                src={portraitImg}
                alt="Magnus Baustad - Industrial Designer"
                className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-700 block"
              />
            </div>
          </div>

          {/* Primary Statement - Moved to the right (sm:ml-auto w-fit) so 'n' in 'in' aligns with 't' in 'contact', text remains left-aligned with itself, bottom-aligned with image */}
          <div className="sm:ml-auto flex flex-col justify-end items-start w-fit">
            <h1 id="about-primary-statement" className="w-fit text-left text-3xl sm:text-4xl md:text-[clamp(36px,3.4vw,52px)] lg:text-[clamp(44px,3.9vw,70px)] xl:text-[clamp(52px,4.3vw,80px)] font-medium tracking-tight leading-[1.08] m-0 text-black">
              <span className="block sm:whitespace-nowrap text-left">
                <EditableText
                  as="span"
                  value={aboutContent.statementLine1}
                  onSave={(val) => updateAboutContent('statementLine1', val)}
                  isEditMode={isEditMode}
                  className="text-left"
                  placeholder="Line 1 statement..."
                />
              </span>
              <span className="block sm:whitespace-nowrap text-left">
                <EditableText
                  as="span"
                  value={aboutContent.statementLine2}
                  onSave={(val) => updateAboutContent('statementLine2', val)}
                  isEditMode={isEditMode}
                  className="text-left"
                  placeholder="Line 2 statement..."
                />
              </span>
              <span className="block sm:whitespace-nowrap text-left">
                <EditableText
                  as="span"
                  value={aboutContent.statementLine3}
                  onSave={(val) => updateAboutContent('statementLine3', val)}
                  isEditMode={isEditMode}
                  className="text-left"
                  placeholder="Line 3 statement..."
                />
              </span>
            </h1>
          </div>
        </div>

        {/* 50/50 Split Section: On desktop: Tools & Capabilities on left (col 1), Bio/Practice on right (col 2). On phone: Bio/Practice first, Tools & Capabilities second. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-14 sm:pt-16 pb-14 sm:pb-20 border-b border-neutral-200">
          
          {/* Left half on desktop (md:order-1), second on phone (order-2): Tools & Capabilities */}
          <div id="about-tools-section" className="flex flex-col order-2 md:order-1 pt-14 border-t border-neutral-200 md:border-t-0 md:pt-0">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-4">
              <EditableText
                as="span"
                value={aboutContent.toolsTitle}
                onSave={(val) => updateAboutContent('toolsTitle', val)}
                isEditMode={isEditMode}
                placeholder="Tools Title..."
              />
            </span>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider font-medium">
              {aboutContent.tools.map((tool, i) => (
                <span
                  key={i}
                  className="group/tool relative inline-flex items-center px-3 py-2 bg-neutral-50 hover:bg-neutral-100 text-neutral-900 border border-neutral-200/80 transition-colors"
                >
                  <EditableText
                    as="span"
                    value={tool}
                    onSave={(val) => handleUpdateTool(i, val)}
                    isEditMode={isEditMode}
                    placeholder="Tool name..."
                  />
                  {isEditMode && (
                    <button
                      type="button"
                      onClick={() => handleRemoveTool(i)}
                      title="Remove tool"
                      className="ml-1.5 text-neutral-400 hover:text-red-600 cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </span>
              ))}

              {isEditMode && (
                <button
                  type="button"
                  onClick={handleAddTool}
                  className="inline-flex items-center gap-1 px-3 py-2 bg-black text-white text-xs uppercase tracking-wider rounded cursor-pointer hover:bg-neutral-800 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Tool</span>
                </button>
              )}
            </div>
          </div>

          {/* Right half on desktop (md:order-2), first on phone (order-1): Practice / Bio ("I'm an industrial design student...") */}
          <div id="about-practice-section" className="flex flex-col justify-between order-1 md:order-2">
            <div>
              <div className="space-y-2.5 sm:space-y-3 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                <EditableText
                  as="p"
                  multiline
                  value={aboutContent.bioParagraph1}
                  onSave={(val) => updateAboutContent('bioParagraph1', val)}
                  isEditMode={isEditMode}
                  placeholder="I'm an industrial design student..."
                  className="leading-relaxed"
                />
                <EditableText
                  as="p"
                  multiline
                  value={aboutContent.bioParagraph2 || ''}
                  onSave={(val) => updateAboutContent('bioParagraph2', val)}
                  isEditMode={isEditMode}
                  placeholder="Second text box..."
                  className="leading-relaxed"
                />
                <EditableText
                  as="p"
                  multiline
                  value={aboutContent.bioParagraph3 || ''}
                  onSave={(val) => updateAboutContent('bioParagraph3', val)}
                  isEditMode={isEditMode}
                  placeholder="Third text box..."
                  className="leading-relaxed"
                />
                <EditableText
                  as="p"
                  multiline
                  value={aboutContent.bioParagraph4 || ''}
                  onSave={(val) => updateAboutContent('bioParagraph4', val)}
                  isEditMode={isEditMode}
                  placeholder="Fourth text box..."
                  className="leading-relaxed"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 pb-14 md:pb-0 flex items-end">
              <button
                id="btn-about-contact-cta"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors cursor-pointer rounded-md"
              >
                <EditableText
                  as="span"
                  value={aboutContent.ctaText}
                  onSave={(val) => updateAboutContent('ctaText', val)}
                  isEditMode={isEditMode}
                  placeholder="Button text..."
                />
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Competencies & Studio Practice Section */}
        <div className="pt-14 pb-16 sm:py-20">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-10">
            <EditableText
              as="span"
              value={aboutContent.methodologyTitle}
              onSave={(val) => updateAboutContent('methodologyTitle', val)}
              isEditMode={isEditMode}
              placeholder="Section Title..."
            />
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.methodologies.map((item, idx) => (
              <div key={item.id || idx} className="p-6 border border-neutral-200 bg-white">
                <h3 className="text-lg font-bold tracking-tight mb-3">
                  <EditableText
                    as="span"
                    value={item.title}
                    onSave={(val) => handleUpdateMethodology(idx, 'title', val)}
                    isEditMode={isEditMode}
                    placeholder="Discipline Title..."
                  />
                </h3>
                <EditableText
                  as="p"
                  multiline
                  value={item.description}
                  onSave={(val) => handleUpdateMethodology(idx, 'description', val)}
                  isEditMode={isEditMode}
                  placeholder="Discipline description..."
                  className="text-sm text-neutral-600 leading-relaxed"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};
