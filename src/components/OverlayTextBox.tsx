import React, { useRef } from 'react';
import { ImageOverlayTextBox } from '../types';
import { EditableText } from './EditableText';
import { Minus, Plus, Move, GripHorizontal } from 'lucide-react';

interface OverlayTextBoxProps {
  box: ImageOverlayTextBox;
  index: number;
  isEditMode: boolean;
  onUpdate: (field: keyof ImageOverlayTextBox, value: any) => void;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

export const OverlayTextBox: React.FC<OverlayTextBoxProps> = ({
  box,
  index,
  isEditMode,
  onUpdate,
  containerRef,
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const width = box.width ?? 320;
  const x = box.x ?? (index % 2 === 0 ? 6 : 52);
  const y = box.y ?? (index < 2 ? 8 : 52);

  // Drag to resize width
  const handleResizeDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const startX = e.clientX;
    const startWidth = width;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const newWidth = Math.max(180, Math.min(800, Math.round(startWidth + deltaX)));
      onUpdate('width', newWidth);
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // Drag to reposition box over the image
  const handleMoveDragStart = (e: React.MouseEvent) => {
    if (!isEditMode) return;
    e.preventDefault();
    e.stopPropagation();

    const parent = containerRef?.current || boxRef.current?.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const startX = e.clientX;
    const startY = e.clientY;
    const startLeftPercent = x;
    const startTopPercent = y;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      const deltaXPercent = (deltaX / rect.width) * 100;
      const deltaYPercent = (deltaY / rect.height) * 100;

      const newX = Math.max(0, Math.min(85, Math.round(startLeftPercent + deltaXPercent)));
      const newY = Math.max(0, Math.min(85, Math.round(startTopPercent + deltaYPercent)));

      onUpdate('x', newX);
      onUpdate('y', newY);
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const handleAdjustWidth = (delta: number) => {
    const newWidth = Math.max(180, Math.min(800, width + delta));
    onUpdate('width', newWidth);
  };

  const handleSetPresetWidth = (presetWidth: number) => {
    onUpdate('width', presetWidth);
  };

  const fontClasses =
    box.fontSize === 'xs'
      ? 'text-xs'
      : box.fontSize === 'lg'
      ? 'text-xl'
      : 'text-base sm:text-lg';

  return (
    <div
      ref={boxRef}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}px`,
        maxWidth: '90vw',
      }}
      onClick={(e) => e.stopPropagation()}
      className={`absolute z-20 bg-transparent border-none shadow-none text-neutral-600 select-none group/box p-0 ${
        isEditMode ? 'outline-dashed outline-1 outline-neutral-500/70 p-1.5 rounded' : ''
      }`}
    >
      {/* Edit Mode Toolbar for direct size and position adjustments */}
      {isEditMode && (
        <div
          className="flex items-center justify-between gap-1 pb-1 mb-1.5 border-b border-neutral-200 bg-white/90 backdrop-blur-sm rounded px-2 py-1 shadow-xs text-[11px] font-mono select-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag to move handle */}
          <div
            onMouseDown={handleMoveDragStart}
            className="flex items-center gap-1 px-1.5 py-0.5 bg-neutral-100 hover:bg-neutral-200 rounded cursor-move text-neutral-800 font-sans"
            title="Drag to reposition text box over image"
          >
            <Move className="w-3 h-3" />
            <span className="text-[10px] uppercase font-bold">Move</span>
          </div>

          {/* Width adjustment controls */}
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-neutral-500 hidden sm:inline mr-1">
              {width}px
            </span>
            <button
              type="button"
              onClick={() => handleAdjustWidth(-40)}
              className="p-1 hover:bg-black/10 rounded cursor-pointer"
              title="Make narrower (-40px)"
            >
              <Minus className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => handleAdjustWidth(40)}
              className="p-1 hover:bg-black/10 rounded cursor-pointer"
              title="Make wider (+40px)"
            >
              <Plus className="w-3 h-3" />
            </button>
            <div className="hidden sm:flex items-center gap-0.5 ml-1">
              <button
                type="button"
                onClick={() => handleSetPresetWidth(240)}
                className={`px-1 py-0.5 rounded text-[10px] ${width === 240 ? 'bg-black text-white font-bold' : 'hover:bg-black/10'}`}
              >
                S
              </button>
              <button
                type="button"
                onClick={() => handleSetPresetWidth(340)}
                className={`px-1 py-0.5 rounded text-[10px] ${width === 340 ? 'bg-black text-white font-bold' : 'hover:bg-black/10'}`}
              >
                M
              </button>
              <button
                type="button"
                onClick={() => handleSetPresetWidth(460)}
                className={`px-1 py-0.5 rounded text-[10px] ${width === 460 ? 'bg-black text-white font-bold' : 'hover:bg-black/10'}`}
              >
                L
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Editable Body Text */}
      <div>
        <EditableText
          as="p"
          multiline
          value={box.text}
          onSave={(val) => onUpdate('text', val)}
          isEditMode={isEditMode}
          placeholder="Notes / details on this step..."
          className={`${fontClasses} text-neutral-600 leading-relaxed font-normal`}
        />
      </div>

      {/* Corner Drag-to-Resize Handle */}
      {isEditMode && (
        <div
          onMouseDown={handleResizeDragStart}
          title="Drag to resize text box"
          className="absolute bottom-0 right-0 w-5 h-5 flex items-end justify-end p-0.5 cursor-se-resize text-neutral-500 hover:text-black z-30"
        >
          <GripHorizontal className="w-3.5 h-3.5 rotate-[-45deg]" />
        </div>
      )}
    </div>
  );
};
