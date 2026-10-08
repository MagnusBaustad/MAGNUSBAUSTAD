import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import { isPreviewEnvironment } from '../utils/preview';
import { resolveAssetUrl } from '../utils/assetResolver';

interface ProjectImageSlotProps {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  onUpload?: (file: File) => void;
  onOpenLightbox?: () => void;
  isEditMode?: boolean;
}

export const ProjectImageSlot: React.FC<ProjectImageSlotProps> = ({
  src,
  alt,
  label = 'Image',
  className = 'w-full h-auto block align-middle m-0 p-0',
  style,
  onUpload,
  onOpenLightbox,
  isEditMode,
}) => {
  const allowPhotoUpload = Boolean(isEditMode && isPreviewEnvironment());
  const resolvedSrc = resolveAssetUrl(src);
  const [currentSrc, setCurrentSrc] = useState<string>(resolvedSrc);

  // Sync state if resolvedSrc changes externally
  React.useEffect(() => {
    setCurrentSrc(resolveAssetUrl(src));
  }, [src]);

  const hasValidSrc = Boolean(currentSrc && currentSrc.trim().length > 0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpload) {
      onUpload(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && onUpload) {
      onUpload(file);
    }
  };

  return (
    <div className="relative w-full m-0 p-0 block leading-none">
      {!hasValidSrc && allowPhotoUpload ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`w-full aspect-[16/10] sm:aspect-[16/9] min-h-[240px] sm:min-h-[360px] bg-neutral-100/90 border border-dashed transition-all flex flex-col items-center justify-center cursor-pointer select-none group p-6 text-center ${
            isDragging
              ? 'border-black bg-neutral-200'
              : 'border-neutral-300 hover:border-neutral-500 hover:bg-neutral-100'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center justify-center max-w-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-neutral-500 group-hover:text-black group-hover:scale-105 transition-all">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-800 block">
                {label}
              </span>
              <p className="text-xs text-neutral-500 mt-1">
                Drop image here, or{' '}
                <span className="text-black font-medium underline underline-offset-2">
                  click to upload
                </span>
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
              Accepted: PNG, JPG, WEBP
            </span>
          </div>
        </div>
      ) : (
        <div
          className="relative w-full overflow-hidden cursor-pointer group m-0 p-0 block leading-none"
          onClick={onOpenLightbox}
          onDragOver={(e) => {
            if (allowPhotoUpload && onUpload) {
              e.preventDefault();
              setIsDragging(true);
            }
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            if (allowPhotoUpload) {
              handleDrop(e);
            }
          }}
        >
          <img
            src={currentSrc || resolveAssetUrl(src)}
            alt={alt}
            style={style}
            className={className}
            loading="lazy"
            onError={() => {
              const fallback = resolveAssetUrl(src);
              if (fallback && fallback !== currentSrc) {
                setCurrentSrc(fallback);
              }
            }}
          />

          {/* Visual Drop Target Overlay - only in preview edit mode */}
          {allowPhotoUpload && isDragging && (
            <div className="absolute inset-0 z-30 bg-black/65 backdrop-blur-sm border-2 border-dashed border-white flex flex-col items-center justify-center text-white pointer-events-none transition-all">
              <Upload className="w-8 h-8 mb-2 animate-bounce" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                Drop image to replace
              </span>
            </div>
          )}

          {/* Persistent file input for upload - only in preview edit mode */}
          {allowPhotoUpload && onUpload && (
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          )}

          {/* Replace button: accessible on hover - only in preview edit mode */}
          {allowPhotoUpload && onUpload && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white backdrop-blur px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-black shadow-md border border-neutral-200 cursor-pointer flex items-center gap-1.5 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
              title="Click or drop to replace image"
            >
              <Upload className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Replace</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
