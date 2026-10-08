import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useProjects } from '../context/ProjectsContext';
import { EditableText } from './EditableText';

export const Contact: React.FC = () => {
  const { contactContent, updateContactContent, isEditMode } = useProjects();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const emailSubject = encodeURIComponent(
      subject.trim() ? `${subject.trim()} (from ${name.trim()})` : `Inquiry from ${name.trim()}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${name.trim()}\n` +
      `Email: ${email.trim()}\n` +
      `Subject: ${subject.trim() || 'General Inquiry'}\n\n` +
      `Message / Project Brief:\n${message.trim()}`
    );
    const mailtoUrl = `mailto:baustadmagnus@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const formattedHeadline = contactContent.headline.includes('\n')
    ? contactContent.headline
    : contactContent.headline.replace('meaningful ', 'meaningful\n');

  const formattedSubheadline = (() => {
    const raw = contactContent.subheadline;
    if (
      raw.includes('Currently available for select industrial design') ||
      raw.includes('commissions, in-house roles') ||
      raw.includes('R&D collaborations')
    ) {
      return "Currently available for select industrial design\ncommissions, in-house roles, and exploratory\nR&D collaborations.";
    }
    return raw;
  })();

  return (
    <main id="contact-page" className="w-full bg-white text-black min-h-screen">
      <div className="w-full px-6 sm:px-10 lg:px-14 pt-3 sm:pt-6 pb-12 sm:pb-20">
        
        <div className="pb-12 border-b border-neutral-200">
          <EditableText
            as="h1"
            value={formattedHeadline}
            onSave={(val) => updateContactContent('headline', val)}
            isEditMode={isEditMode}
            multiline
            className="text-2xl sm:text-4xl md:text-[clamp(32px,3.8vw,56px)] font-bold tracking-tight whitespace-pre-line md:whitespace-nowrap"
            placeholder="Contact headline..."
          />
          <EditableText
            as="p"
            value={formattedSubheadline}
            onSave={(val) => updateContactContent('subheadline', val)}
            isEditMode={isEditMode}
            multiline
            className="text-[13px] sm:text-base lg:text-lg text-neutral-600 mt-4 max-w-none font-normal whitespace-pre-line md:whitespace-nowrap leading-relaxed"
            placeholder="Contact subheadline..."
          />
        </div>

        <div className="pt-12 sm:pt-16 max-w-4xl">
          
          {/* Header & LinkedIn */}
          <div className="mb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block">
              {isEditMode ? (
                <EditableText
                  as="span"
                  value={(contactContent.formIntro && contactContent.formIntro !== 'Feel free to reach out.') ? contactContent.formIntro : 'Network and contact'}
                  onSave={(val) => updateContactContent('formIntro', val)}
                  isEditMode={isEditMode}
                  placeholder="Network and contact"
                />
              ) : (
                (contactContent.formIntro && contactContent.formIntro !== 'Feel free to reach out.') ? contactContent.formIntro : 'Network and contact'
              )}
            </span>
            <div>
              <a
                href="https://www.linkedin.com/in/magnus-baustad-8225b085"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black hover:underline inline-flex items-center gap-1.5 text-sm uppercase tracking-wider font-medium text-neutral-700 transition-colors"
              >
                LinkedIn &rarr;
              </a>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-neutral-50 p-8 sm:p-12 border border-neutral-200">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  Thank you, {name}!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Your message has been prepared and sent to{' '}
                  <span className="font-semibold text-black">baustadmagnus@gmail.com</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                  }}
                  className="block mx-auto mt-6 text-xs uppercase tracking-widest font-bold underline cursor-pointer text-neutral-500 hover:text-black"
                >
                  Send another message
                </button>
              </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-2 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Astrid Lind"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="astrid@company.com"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-2 font-medium">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. New Product Development / R&D Commission"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-2 font-medium">
                    Message / Project Brief *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your product concept, timeline, or what you'd like to collaborate on..."
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
};
