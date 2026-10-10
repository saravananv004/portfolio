import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ProjectScreenshot } from '../data/projects';

interface LightboxModalProps {
  screenshot: ProjectScreenshot | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ screenshot, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (screenshot) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [screenshot, onClose]);

  if (!screenshot) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <ZoomIn className="w-4 h-4 text-brand-400" />
            <span>Screenshot Preview</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image container */}
        <div className="overflow-auto p-2 sm:p-4 flex items-center justify-center bg-black/40 min-h-[300px]">
          <img
            src={screenshot.url}
            alt={screenshot.alt}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-lg border border-slate-800/80"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Caption */}
        {screenshot.caption && (
          <div className="px-5 py-3.5 border-t border-slate-800 bg-slate-950/90 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span className="font-semibold text-brand-400 mr-2">Verified View:</span>
            {screenshot.caption}
          </div>
        )}
      </div>
    </div>
  );
};
