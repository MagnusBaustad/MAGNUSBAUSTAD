import React, { useState, useRef, useEffect } from 'react';
import { Pencil, Check, X } from 'lucide-react';

interface EditableTextProps {
  value: string;
  onSave: (newValue: string) => void;
  isEditMode: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  multiline?: boolean;
  placeholder?: string;
}

export const EditableText: React.FC<EditableTextProps> = ({
  value,
  onSave,
  isEditMode,
  className = '',
  as: Component = 'div',
  multiline = false,
  placeholder = 'Click to edit text...',
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draftValue, setDraftValue] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep draft in sync if external value changes while not editing
  useEffect(() => {
    if (!isEditing) {
      setDraftValue(value);
    }
  }, [value, isEditing]);

  // Auto-focus and adjust dimensions when entering edit state
  useEffect(() => {
    if (isEditing) {
      if (multiline && textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.select();
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, 60)}px`;
      } else if (!multiline && inputRef.current) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [isEditing, multiline]);

  if (!isEditMode) {
    return <Component className={className}>{value || placeholder}</Component>;
  }

  const handleCommit = () => {
    const trimmed = draftValue.trim();
    if (trimmed !== value) {
      onSave(trimmed);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraftValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
      return;
    }
    if (!multiline && e.key === 'Enter') {
      e.preventDefault();
      handleCommit();
      return;
    }
    if (multiline && (e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      handleCommit();
      return;
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDraftValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.max(e.target.scrollHeight, 60)}px`;
  };

  if (isEditing) {
    return (
      <div className="relative inline-block w-full my-1 z-30">
        {multiline ? (
          <textarea
            ref={textareaRef}
            value={draftValue}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={2}
            className={`w-full bg-white text-black p-2.5 rounded border-2 border-black focus:outline-none shadow-lg resize-y ${className}`}
          />
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={draftValue}
            onChange={(e) => setDraftValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={`w-full bg-white text-black px-2.5 py-1.5 rounded border-2 border-black focus:outline-none shadow-lg ${className}`}
          />
        )}

        {/* Floating Save / Cancel Bar */}
        <div className="flex items-center gap-2 mt-1.5 justify-end">
          <span className="text-[10px] text-neutral-400 font-mono hidden sm:inline mr-1">
            {multiline ? '⌘+Enter to save • Esc to cancel' : 'Enter ↵ to save • Esc to cancel'}
          </span>
          <button
            type="button"
            onClick={handleCancel}
            className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-neutral-600 hover:text-black bg-neutral-100 hover:bg-neutral-200 rounded transition-colors cursor-pointer"
          >
            <X className="w-3 h-3" />
            <span>Cancel</span>
          </button>
          <button
            type="button"
            onClick={handleCommit}
            className="flex items-center gap-1 px-3 py-1 text-[11px] font-bold text-white bg-black hover:bg-neutral-800 rounded shadow transition-colors cursor-pointer"
          >
            <Check className="w-3 h-3 text-emerald-400" />
            <span>Save</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <span
      onClick={() => setIsEditing(true)}
      title="Click to edit this text"
      className={`relative group/editable inline-block ${Component === 'span' ? 'w-auto' : 'w-full'} cursor-pointer transition-all`}
    >
      <Component
        className={`${className} outline-dashed outline-1 outline-neutral-300 hover:outline-neutral-900 hover:bg-neutral-50/80 rounded-xs py-0.5 px-1 -mx-1 transition-all ${
          !value ? 'italic text-neutral-400' : ''
        }`}
      >
        {value || placeholder}
      </Component>

      {/* Floating Edit Icon Badge */}
      <span className="absolute -top-3.5 right-0 hidden group-hover/editable:flex items-center gap-1 bg-black text-white text-[10px] font-medium px-2 py-0.5 rounded shadow pointer-events-none z-20 uppercase tracking-wider">
        <Pencil className="w-2.5 h-2.5 text-neutral-300" />
        Edit
      </span>
    </span>
  );
};
