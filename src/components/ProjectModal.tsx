import { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { WorkshopProject } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: WorkshopProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-[2px] p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-white/95 backdrop-blur-sm border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs text-slate-500 min-w-0">
            <span className="font-mono tabular-nums font-medium text-slate-700">
              {project.code}
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{project.subject}</span>
            <span aria-hidden="true">·</span>
            <span className="whitespace-nowrap">{project.date}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail proyek"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-medium text-[#1D4ED8]">{project.category}</p>
            <h3
              id="project-modal-title"
              className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900"
            >
              {project.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-slate-600">
              {project.summary}
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-[16/10]">
            <ResilientImage
              src={project.imageUrl}
              alt={project.imageAlt}
              fallbackTitle={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-900">
                Tujuan & Ruang Lingkup
              </h4>
              <p className="text-sm leading-relaxed text-slate-600">
                {project.objective}
              </p>

              <div className="pt-2 space-y-3">
                <h4 className="text-sm font-semibold text-slate-900">
                  Prosedur K3LH yang Diterapkan
                </h4>
                <ul className="space-y-2.5">
                  {project.safetySteps.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0"
                        strokeWidth={2}
                      />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3">
                  Spesifikasi Teknis & Komponen
                </h4>
                <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
                  {project.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid grid-cols-5 gap-3 px-4 py-3 text-xs bg-white"
                    >
                      <span className="col-span-2 text-slate-500 font-medium">
                        {spec.label}
                      </span>
                      <span className="col-span-3 text-slate-900 font-mono tabular-nums">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h4 className="text-xs font-semibold text-slate-900">
                  Hasil Evaluasi Praktikum
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  {project.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
