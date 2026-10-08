import React, { useState } from 'react';
import { useProjects } from '../context/ProjectsContext';
import { isPreviewEnvironment } from '../utils/preview';
import {
  Edit3,
  Check,
  Copy,
  RotateCcw,
  Eye,
  Sliders,
  X,
  FileText,
  Briefcase,
  Mail,
  UploadCloud,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';

export const EditToolbar: React.FC = () => {
  // If viewing the final deployed website (outside AI Studio preview), do not render the toolbar at all
  if (!isPreviewEnvironment()) {
    return null;
  }

  const {
    isEditMode,
    toggleEditMode,
    resetToOriginal,
    exportAsCode,
    lastSaved,
    aboutContent,
    updateAboutContent,
    contactContent,
    updateContactContent,
    projects,
    updateField,
    syncStatus,
    syncToFiles,
    importData,
  } = useProjects();

  const [copied, setCopied] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showQuickEditor, setShowQuickEditor] = useState(false);
  const [showDeploySuccess, setShowDeploySuccess] = useState(false);
  const [editorTab, setEditorTab] = useState<'about' | 'contact' | 'projects'>('about');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleCopy = () => {
    const code = exportAsCode();
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleManualSync = async () => {
    const ok = await syncToFiles();
    if (ok) {
      setShowDeploySuccess(true);
      setTimeout(() => setShowDeploySuccess(false), 5000);
    }
  };

  const handleReset = () => {
    resetToOriginal();
    setShowResetConfirm(false);
  };

  return (
    <>
      {/* Floating Toolbar Container */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        {!isEditMode ? (
          <button
            onClick={toggleEditMode}
            className="flex items-center gap-2 px-4 py-2.5 bg-black text-white text-xs font-medium uppercase tracking-wider shadow-2xl hover:bg-neutral-800 transition-all rounded-full border border-white/20 cursor-pointer group"
            title="Click to edit texts directly on the page (Cmd+E / Ctrl+E)"
          >
            <Edit3 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform text-white" />
            <span>Edit Text</span>
            <span className="hidden sm:inline-block text-[10px] text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded font-mono">
              ⌘E
            </span>
          </button>
        ) : (
          <div className="bg-neutral-900 text-white px-4 py-2.5 rounded-full shadow-2xl border border-neutral-700 flex items-center gap-3 sm:gap-4 text-xs">
            {/* Active Status */}
            <div className="flex items-center gap-2 pr-2 border-r border-neutral-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold uppercase tracking-wider text-[11px] text-emerald-400">
                Editing
              </span>
            </div>

            {/* Quick status text */}
            <span className="hidden md:inline text-neutral-300 text-[11px]">
              Click any text to type
            </span>

            {/* Edit All Texts Panel Button */}
            <button
              onClick={() => setShowQuickEditor(true)}
              className="flex items-center gap-1.5 px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-full transition-colors cursor-pointer text-[11px] uppercase tracking-wider"
              title="Open full text editor modal"
            >
              <Sliders className="w-3 h-3 text-neutral-300" />
              <span>Edit Panel</span>
            </button>

            {/* Saved Indicator */}
            {lastSaved && (
              <span className="text-[10px] text-emerald-400 hidden lg:inline font-mono">
                Saved {lastSaved.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </span>
            )}

            {/* Save for Vercel Deploy Button */}
            <button
              onClick={handleManualSync}
              disabled={syncStatus === 'syncing'}
              className="flex items-center gap-1.5 px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-colors cursor-pointer text-[11px] uppercase tracking-wider font-semibold shadow-xs"
              title="Save all changes to codebase files for Vercel deployment"
            >
              {syncStatus === 'syncing' ? (
                <>
                  <RefreshCw className="w-3 h-3 animate-spin text-white" />
                  <span>Saving...</span>
                </>
              ) : syncStatus === 'synced' ? (
                <>
                  <CheckCircle2 className="w-3 h-3 text-white" />
                  <span>Saved to Code!</span>
                </>
              ) : (
                <>
                  <UploadCloud className="w-3 h-3 text-white" />
                  <span>Save for Deploy</span>
                </>
              )}
            </button>

            {/* Copy / Export Code Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-full transition-colors cursor-pointer text-[11px] uppercase tracking-wider"
              title="Copy code snapshot to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-neutral-400" />
                  <span>Copy code</span>
                </>
              )}
            </button>

            {/* Reset Button */}
            <button
              onClick={() => setShowResetConfirm(true)}
              className="flex items-center gap-1 px-2 py-1 text-neutral-400 hover:text-red-400 rounded-full transition-colors cursor-pointer text-[11px]"
              title="Reset all texts to original"
            >
              <RotateCcw className="w-3 h-3" />
            </button>

            {/* Close / Preview button */}
            <button
              onClick={toggleEditMode}
              className="flex items-center gap-1.5 pl-2 border-l border-neutral-700 text-neutral-300 hover:text-white font-medium text-[11px] uppercase tracking-wider cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Done</span>
            </button>
          </div>
        )}
      </div>

      {/* Quick Text Editor Modal */}
      {showQuickEditor && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowQuickEditor(false)}
        >
          <div
            className="bg-white text-black rounded-lg border border-neutral-200 w-full max-w-3xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-neutral-200 bg-neutral-50">
              <div className="flex items-center gap-3">
                <Sliders className="w-5 h-5 text-black" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Text Editing Center
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Edit any content below — changes auto-save in real time.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowQuickEditor(false)}
                className="text-neutral-400 hover:text-black p-1.5 rounded cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-neutral-200 px-5 pt-3 gap-6 bg-white text-xs uppercase tracking-wider font-semibold">
              <button
                onClick={() => setEditorTab('about')}
                className={`pb-3 flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
                  editorTab === 'about'
                    ? 'border-black text-black'
                    : 'border-transparent text-neutral-400 hover:text-black'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>About Page</span>
              </button>
              <button
                onClick={() => setEditorTab('contact')}
                className={`pb-3 flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
                  editorTab === 'contact'
                    ? 'border-black text-black'
                    : 'border-transparent text-neutral-400 hover:text-black'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Page</span>
              </button>
              <button
                onClick={() => setEditorTab('projects')}
                className={`pb-3 flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
                  editorTab === 'projects'
                    ? 'border-black text-black'
                    : 'border-transparent text-neutral-400 hover:text-black'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Projects</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-xs">
              {/* About Page Tab */}
              {editorTab === 'about' && (
                <div className="space-y-5">
                  <div className="bg-neutral-50 p-4 border border-neutral-200 rounded space-y-3">
                    <span className="font-bold uppercase tracking-wider text-neutral-500 block">
                      Primary Headline Statement (3 lines)
                    </span>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-neutral-600 block mb-1">
                        Line 1
                      </label>
                      <input
                        type="text"
                        value={aboutContent.statementLine1}
                        onChange={(e) => updateAboutContent('statementLine1', e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm font-medium focus:border-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-neutral-600 block mb-1">
                        Line 2
                      </label>
                      <input
                        type="text"
                        value={aboutContent.statementLine2}
                        onChange={(e) => updateAboutContent('statementLine2', e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm font-medium focus:border-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-neutral-600 block mb-1">
                        Line 3
                      </label>
                      <input
                        type="text"
                        value={aboutContent.statementLine3}
                        onChange={(e) => updateAboutContent('statementLine3', e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm font-medium focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                        Name Badge
                      </label>
                      <input
                        type="text"
                        value={aboutContent.nameBadge}
                        onChange={(e) => updateAboutContent('nameBadge', e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                        Location Badge
                      </label>
                      <input
                        type="text"
                        value={aboutContent.locationBadge}
                        onChange={(e) => updateAboutContent('locationBadge', e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                      Narrative — Text Box 1
                    </label>
                    <textarea
                      rows={2}
                      value={aboutContent.bioParagraph1}
                      onChange={(e) => updateAboutContent('bioParagraph1', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm leading-relaxed focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                      Narrative — Text Box 2
                    </label>
                    <textarea
                      rows={2}
                      value={aboutContent.bioParagraph2 || ''}
                      onChange={(e) => updateAboutContent('bioParagraph2', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm leading-relaxed focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                      Narrative — Text Box 3
                    </label>
                    <textarea
                      rows={2}
                      value={aboutContent.bioParagraph3 || ''}
                      onChange={(e) => updateAboutContent('bioParagraph3', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm leading-relaxed focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                      Narrative — Text Box 4
                    </label>
                    <textarea
                      rows={2}
                      value={aboutContent.bioParagraph4 || ''}
                      onChange={(e) => updateAboutContent('bioParagraph4', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm leading-relaxed focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                      Button CTA Text
                    </label>
                    <input
                      type="text"
                      value={aboutContent.ctaText}
                      onChange={(e) => updateAboutContent('ctaText', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Contact Page Tab */}
              {editorTab === 'contact' && (
                <div className="space-y-4">
                  <div>
                    <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                      Contact Main Headline
                    </label>
                    <input
                      type="text"
                      value={contactContent.headline}
                      onChange={(e) => updateContactContent('headline', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                      Contact Subheadline
                    </label>
                    <textarea
                      rows={2}
                      value={contactContent.subheadline}
                      onChange={(e) => updateContactContent('subheadline', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                      Direct Email Address
                    </label>
                    <input
                      type="email"
                      value={contactContent.email}
                      onChange={(e) => updateContactContent('email', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {editorTab === 'projects' && (
                <div className="space-y-4">
                  <div>
                    <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                      Select Project to Edit
                    </label>
                    <select
                      value={selectedProjectIndex}
                      onChange={(e) => setSelectedProjectIndex(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm font-medium focus:border-black focus:outline-none"
                    >
                      {projects
                        .map((p, idx) => ({ p, idx }))
                        .filter(({ p }) => !p.isComingSoon)
                        .map(({ p, idx }) => (
                          <option key={p.id} value={idx}>
                            {p.title} ({p.id})
                          </option>
                        ))}
                    </select>
                  </div>

                  {projects[selectedProjectIndex] && (
                    <div className="space-y-4 pt-2 border-t border-neutral-200">
                      <div>
                        <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                          Project Title
                        </label>
                        <input
                          type="text"
                          value={projects[selectedProjectIndex].title}
                          onChange={(e) =>
                            updateField(projects[selectedProjectIndex].id, ['title'], e.target.value)
                          }
                          className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                          Subtitle
                        </label>
                        <textarea
                          rows={2}
                          value={projects[selectedProjectIndex].subtitle}
                          onChange={(e) =>
                            updateField(projects[selectedProjectIndex].id, ['subtitle'], e.target.value)
                          }
                          className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                            Year
                          </label>
                          <input
                            type="text"
                            value={projects[selectedProjectIndex].year}
                            onChange={(e) =>
                              updateField(projects[selectedProjectIndex].id, ['year'], e.target.value)
                            }
                            className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                            Focus
                          </label>
                          <input
                            type="text"
                            value={projects[selectedProjectIndex].focus || ''}
                            onChange={(e) =>
                              updateField(projects[selectedProjectIndex].id, ['focus'], e.target.value)
                            }
                            className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                            Context
                          </label>
                          <input
                            type="text"
                            value={projects[selectedProjectIndex].clientOrContext}
                            onChange={(e) =>
                              updateField(
                                projects[selectedProjectIndex].id,
                                ['clientOrContext'],
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Challenge */}
                      <div>
                        <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                          Challenge Title
                        </label>
                        <input
                          type="text"
                          value={projects[selectedProjectIndex].problem?.title || ''}
                          onChange={(e) =>
                            updateField(
                              projects[selectedProjectIndex].id,
                              ['problem', 'title'],
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                          Challenge Summary
                        </label>
                        <textarea
                          rows={2}
                          value={projects[selectedProjectIndex].problem?.summary || ''}
                          onChange={(e) =>
                            updateField(
                              projects[selectedProjectIndex].id,
                              ['problem', 'summary'],
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 bg-white border border-neutral-300 rounded text-sm focus:border-black focus:outline-none"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                {lastSaved ? `Last saved at ${lastSaved.toLocaleTimeString()}` : 'Changes saved'}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowQuickEditor(false)}
                  className="px-5 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowResetConfirm(false)}
        >
          <div
            className="bg-white text-black rounded-lg p-6 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-bold uppercase tracking-tight mb-2">
              Reset all texts?
            </h3>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
              This will remove all custom edits and reset all texts (About, Projects, Contact) back to their original defaults.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 text-xs uppercase tracking-wider text-neutral-500 hover:text-black font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-red-700 cursor-pointer"
              >
                Reset now
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Deploy Sync Success Notification */}
      {showDeploySuccess && (
        <div
          className="fixed top-6 right-6 z-50 bg-neutral-900 border border-emerald-500/50 text-white rounded-lg p-4 shadow-2xl max-w-sm flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-300"
          role="alert"
        >
          <div className="p-1 bg-emerald-500/20 rounded-full text-emerald-400 shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-0.5">
              Saved for Deployment!
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              All preview texts, descriptions, and overlay box positions have been written directly to the project files. You can now push to GitHub and deploy to Vercel!
            </p>
          </div>
          <button
            onClick={() => setShowDeploySuccess(false)}
            className="text-neutral-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
};
