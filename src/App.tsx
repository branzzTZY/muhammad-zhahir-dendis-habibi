import { useState, FormEvent } from 'react';
import {
  ArrowUpRight,
  Printer,
  Menu,
  X,
  CheckCircle2,
  MapPin,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';
import {
  STUDENT_PROFILE,
  HERO_METRICS,
  COMPETENCIES,
  WORKSHOP_PROJECTS,
  ACADEMIC_MILESTONES,
  CompetencyCategory,
  WorkshopProject
} from './data/portfolioData';
import { ResilientImage } from './components/ResilientImage';
import { ProjectModal } from './components/ProjectModal';

const FILTER_OPTIONS: CompetencyCategory[] = [
  'Semua',
  'Instalasi',
  'Pengukuran',
  'K3LH & Gambar'
];

export default function App() {
  const [competencyFilter, setCompetencyFilter] = useState<CompetencyCategory>('Semua');
  const [projectFilter, setProjectFilter] = useState<CompetencyCategory>('Semua');
  const [selectedProject, setSelectedProject] = useState<WorkshopProject | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Formal contact form state
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [inquiryPurpose, setInquiryPurpose] = useState('Evaluasi Akademik / Guru');
  const [messageText, setMessageText] = useState('');
  const [formError, setFormError] = useState('');
  const [submittedRecord, setSubmittedRecord] = useState<{
    name: string;
    org: string;
    email: string;
    purpose: string;
    message: string;
    timestamp: string;
  } | null>(null);

  const filteredCompetencies =
    competencyFilter === 'Semua'
      ? COMPETENCIES
      : COMPETENCIES.filter((item) => item.category === competencyFilter);

  const filteredProjects =
    projectFilter === 'Semua'
      ? WORKSHOP_PROJECTS
      : WORKSHOP_PROJECTS.filter((item) => item.category === projectFilter);

  const handlePrintPortfolio = () => {
    window.print();
  };

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !messageText.trim()) {
      setFormError('Mohon lengkapi nama pengirim, alamat email, dan isi pesan terlebih dahulu.');
      return;
    }
    setFormError('');
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date());

    setSubmittedRecord({
      name: senderName.trim(),
      org: senderOrg.trim() || 'Umum / Pribadi',
      email: senderEmail.trim(),
      purpose: inquiryPurpose,
      message: messageText.trim(),
      timestamp: formattedDate
    });
  };

  const handleResetContact = () => {
    setSenderName('');
    setSenderOrg('');
    setSenderEmail('');
    setInquiryPurpose('Evaluasi Akademik / Guru');
    setMessageText('');
    setFormError('');
    setSubmittedRecord(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Top Bar Contract: 3 zones (Brand Wordmark — 4 Nav Links — 1 Primary Action) */}
      <header className="sticky top-0 z-40 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <a
            href="#beranda"
            className="text-base font-semibold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
          >
            {STUDENT_PROFILE.shortName}
          </a>

          <nav
            aria-label="Navigasi utama"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
          >
            <a
              href="#profil"
              className="hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-300 transition-colors whitespace-nowrap shrink-0"
            >
              Profil
            </a>
            <a
              href="#kompetensi"
              className="hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-300 transition-colors whitespace-nowrap shrink-0"
            >
              Kompetensi
            </a>
            <a
              href="#praktikum"
              className="hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-300 transition-colors whitespace-nowrap shrink-0"
            >
              Praktikum
            </a>
            <a
              href="#sertifikasi"
              className="hover:text-slate-900 hover:underline underline-offset-4 decoration-slate-300 transition-colors whitespace-nowrap shrink-0"
            >
              Sertifikasi
            </a>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#kontak"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#1E40AF] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
            >
              Hubungi
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-2">
            <button
              type="button"
              onClick={() => handleNavClick('profil')}
              className="block w-full text-left py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Profil
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('kompetensi')}
              className="block w-full text-left py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Kompetensi
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('praktikum')}
              className="block w-full text-left py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Praktikum
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('sertifikasi')}
              className="block w-full text-left py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Sertifikasi
            </button>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleNavClick('kontak')}
                className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#1E40AF] transition-colors"
              >
                Hubungi
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Split Section */}
        <section id="beranda" className="pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="max-w-[1200px] mx-auto px-6 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-slate-500">
                  <span className="text-[#1D4ED8] font-semibold">Portofolio Akademik Siswa</span>
                  <span aria-hidden="true">·</span>
                  <span>{STUDENT_PROFILE.school}</span>
                  <span aria-hidden="true">·</span>
                  <span>Kelas {STUDENT_PROFILE.classRoom}</span>
                </div>

                <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08] font-bold tracking-tight text-slate-900">
                  {STUDENT_PROFILE.fullName}
                </h1>

                <p className="font-serif italic text-lg md:text-xl text-slate-700 leading-snug">
                  Bidang Keahlian Teknik Ketenagalistrikan — {STUDENT_PROFILE.majorFull}
                </p>

                <p className="text-[15px] md:text-base leading-relaxed text-slate-600 max-w-[65ch]">
                  {STUDENT_PROFILE.focusStatement}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2 no-print">
                  <a
                    href="#praktikum"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#1E40AF] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                  >
                    <span>Lihat Proyek Praktikum</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={handlePrintPortfolio}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Cetak Portofolio</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-full min-h-[340px] lg:min-h-[430px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <ResilientImage
                    src="/src/assets/images/hero_student_editorial_1794889727044.jpg"
                    alt="Muhammad Zhahir Dendis Habibi di bengkel ketenagalistrikan bersama panel instalasi dan multimeter"
                    fallbackTitle="Dokumentasi Bengkel Teknik Instalasi Tenaga Listrik"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent text-white">
                    <p className="text-xs font-medium text-slate-200">
                      Bengkel Teknik Ketenagalistrikan · {STUDENT_PROFILE.school}
                    </p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Praktikum Pengukuran & Panel Instalasi 1 Fasa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-width 4-column summary strip below hero split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-slate-200 rounded-2xl divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {HERO_METRICS.map((metric) => (
                <div key={metric.label} className="p-6 space-y-1.5">
                  <p className="text-xs font-medium text-slate-500">{metric.label}</p>
                  <p className="text-xl font-semibold tracking-tight text-slate-900 font-mono tabular-nums">
                    {metric.value}
                  </p>
                  <p className="text-xs text-slate-600">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Profil Akademik & Biodata */}
        <section id="profil" className="py-16 md:py-20 border-t border-slate-200 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-5">
                <p className="text-xs font-semibold text-[#1D4ED8]">
                  01. Profil Akademik Siswa
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                  Dedikasi Vokasi & Disiplin Standar Ketenagalistrikan
                </h2>
                <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
                  {STUDENT_PROFILE.bioParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-2 space-y-3 border-t border-slate-200">
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <GraduationCap
                      className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0"
                      strokeWidth={2}
                    />
                    <span>
                      Program Keahlian Teknik Ketenagalistrikan — Konsentrasi TITL
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <ShieldCheck
                      className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0"
                      strokeWidth={2}
                    />
                    <span>
                      Penerapan Konsisten K3LH & Regulasi PUIL 2011 pada Setiap Praktikum
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <MapPin
                      className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0"
                      strokeWidth={2}
                    />
                    <span>{STUDENT_PROFILE.schoolAddress}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-[#F8FAFC]">
                  <div className="px-6 py-4 bg-white border-b border-slate-200 flex items-center justify-between gap-4">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Identitas Akademik Resmi
                    </h3>
                    <span className="text-xs text-slate-500 font-mono tabular-nums">
                      TA {STUDENT_PROFILE.academicYear}
                    </span>
                  </div>
                  <dl className="divide-y divide-slate-200">
                    {STUDENT_PROFILE.biodataRows.map((row) => (
                      <div
                        key={row.label}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 px-6 py-4 bg-white"
                      >
                        <dt className="sm:col-span-5 text-xs font-medium text-slate-500">
                          {row.label}
                        </dt>
                        <dd className="sm:col-span-7 text-sm font-medium text-slate-900">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Kompetensi Keahlian TITL */}
        <section id="kompetensi" className="py-16 md:py-20 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto px-6 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-semibold text-[#1D4ED8]">
                  02. Matriks Kompetensi
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                  Kompetensi Dasar Teknik Instalasi Tenaga Listrik
                </h2>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  Pemetaan kemampuan inti yang dipelajari dan dipraktikkan di kelas X TITL 2 SMKN 1 Sidayu.
                </p>
              </div>

              {/* Interactive Segmented Filter Control */}
              <div
                role="group"
                aria-label="Filter kategori kompetensi"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-xl no-print"
              >
                {FILTER_OPTIONS.map((option) => {
                  const isActive = competencyFilter === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setCompetencyFilter(option)}
                      className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                        isActive
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompetencies.map((comp) => (
                <article
                  key={comp.id}
                  className="flex flex-col justify-between p-6 bg-white border border-slate-200 rounded-2xl space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono tabular-nums font-semibold text-[#1D4ED8]">
                        {comp.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{comp.subject}</span>
                    </div>

                    <h3 className="text-lg font-semibold leading-snug text-slate-900">
                      {comp.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600">
                      {comp.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 space-y-2">
                    <p className="text-xs font-medium text-slate-500">
                      Perangkat & Acuan
                    </p>
                    <p className="text-xs leading-relaxed text-slate-700">
                      {comp.tools.join(' · ')}
                    </p>
                    <p className="text-xs font-mono text-slate-500">
                      Standar: {comp.standard}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Dokumentasi Praktikum & Bengkel */}
        <section id="praktikum" className="py-16 md:py-20 border-t border-slate-200 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-semibold text-[#1D4ED8]">
                  03. Portofolio Proyek Bengkel
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                  Dokumentasi Praktikum & Hasil Pengujian
                </h2>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  Pilih kartu praktikum di bawah untuk memeriksa rincian spesifikasi komponen, prosedur K3LH, dan hasil evaluasi pengukuran.
                </p>
              </div>

              <div
                role="group"
                aria-label="Filter dokumentasi praktikum"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-xl no-print"
              >
                {FILTER_OPTIONS.map((option) => {
                  const isActive = projectFilter === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setProjectFilter(option)}
                      className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                        isActive
                          ? 'bg-[#1D4ED8] text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, idx) => {
                const isWide = projectFilter === 'Semua' && idx === 0;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className={`group text-left bg-[#F8FAFC] border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                      isWide ? 'md:col-span-2 grid grid-cols-1 lg:grid-cols-12' : 'flex flex-col'
                    }`}
                  >
                    <div
                      className={`overflow-hidden bg-slate-100 ${
                        isWide
                          ? 'lg:col-span-7 aspect-[4/3] lg:aspect-auto lg:h-full'
                          : 'aspect-[4/3] w-full'
                      }`}
                    >
                      <ResilientImage
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        fallbackTitle={project.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                      />
                    </div>

                    <div
                      className={`p-6 md:p-8 flex flex-col justify-between space-y-5 bg-white ${
                        isWide ? 'lg:col-span-5' : 'flex-1'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                          <span className="font-mono tabular-nums font-medium text-slate-700">
                            {project.code}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{project.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.date}</span>
                        </div>

                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-slate-600">
                          {project.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4 text-xs font-semibold text-[#1D4ED8]">
                        <span>Lihat Detail Spesifikasi Teknis</span>
                        <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Rekam Akademik, Standar K3LH & Pencapaian */}
        <section id="sertifikasi" className="py-16 md:py-20 border-t border-slate-200">
          <div className="max-w-[1200px] mx-auto px-6 space-y-10">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold text-[#1D4ED8]">
                04. Rekam Jejak Akademik
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Tahapan Pembelajaran & Kesiapan K3LH
              </h2>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Catatan pencapaian pendidikan vokasi dan rencana pengembangan kompetensi lanjutan di Jurusan Listrik SMKN 1 Sidayu.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-200 overflow-hidden">
              {ACADEMIC_MILESTONES.map((milestone) => (
                <div
                  key={milestone.title}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-6 md:px-8 md:py-6"
                >
                  <div className="md:col-span-3 space-y-1">
                    <p className="text-xs font-mono tabular-nums font-semibold text-slate-900">
                      {milestone.period}
                    </p>
                    <p className="text-xs text-slate-500">{milestone.classification}</p>
                  </div>

                  <div className="md:col-span-9 space-y-1.5">
                    <h3 className="text-base font-semibold text-slate-900">
                      {milestone.title}
                    </h3>
                    <p className="text-xs font-medium text-[#1D4ED8]">
                      {milestone.institution}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 pt-1">
                      {milestone.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Kontak Formal & Verifikasi */}
        <section id="kontak" className="py-16 md:py-20 border-t border-slate-200 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-[#1D4ED8]">
                    05. Korespondensi Resmi
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                    Kontak Akademik & Industri
                  </h2>
                  <p className="text-[15px] leading-relaxed text-slate-600">
                    Formulir ini disediakan bagi Bapak/Ibu Guru Pembimbing Jurusan TITL, panitia penilaian portofolio, maupun mitra dunia usaha dan dunia industri (DUDI) untuk menyampaikan catatan evaluasi atau undangan koordinasi akademik.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-4">
                  <div>
                    <p className="text-xs font-medium text-slate-500">Nama Siswa</p>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">
                      {STUDENT_PROFILE.fullName}
                    </p>
                  </div>
                  <div className="border-t border-slate-200 pt-3">
                    <p className="text-xs font-medium text-slate-500">
                      Kelas & Program Keahlian
                    </p>
                    <p className="text-sm text-slate-800 mt-0.5">
                      {STUDENT_PROFILE.classRoom} · {STUDENT_PROFILE.majorFull}
                    </p>
                  </div>
                  <div className="border-t border-slate-200 pt-3">
                    <p className="text-xs font-medium text-slate-500">Institusi</p>
                    <p className="text-sm text-slate-800 mt-0.5">
                      {STUDENT_PROFILE.school}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {STUDENT_PROFILE.schoolAddress}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 no-print">
                <div className="p-6 md:p-8 bg-[#F8FAFC] border border-slate-200 rounded-2xl">
                  {submittedRecord ? (
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-6 h-6 text-[#1D4ED8] shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold text-slate-900">
                            Catatan Pesan Tersimpan
                          </h3>
                          <p className="text-sm text-slate-600">
                            Terima kasih, ringkasan pesan Anda telah tercatat pada sesi portofolio ini.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200 text-sm">
                        <div className="grid grid-cols-3 gap-3 px-4 py-3">
                          <span className="text-slate-500 text-xs font-medium">Pengirim</span>
                          <span className="col-span-2 text-slate-900 font-medium">
                            {submittedRecord.name} ({submittedRecord.org})
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 px-4 py-3">
                          <span className="text-slate-500 text-xs font-medium">Email</span>
                          <span className="col-span-2 text-slate-900 font-mono text-xs">
                            {submittedRecord.email}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 px-4 py-3">
                          <span className="text-slate-500 text-xs font-medium">Keperluan</span>
                          <span className="col-span-2 text-slate-900">
                            {submittedRecord.purpose}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 px-4 py-3">
                          <span className="text-slate-500 text-xs font-medium">Waktu</span>
                          <span className="col-span-2 text-slate-600 font-mono text-xs tabular-nums">
                            {submittedRecord.timestamp}
                          </span>
                        </div>
                        <div className="px-4 py-3 space-y-1">
                          <span className="text-slate-500 text-xs font-medium block">
                            Isi Pesan
                          </span>
                          <p className="text-slate-800 leading-relaxed">
                            {submittedRecord.message}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleResetContact}
                        className="px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        Kirim Pesan Baru
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="sender-name"
                            className="block text-xs font-semibold text-slate-700"
                          >
                            Nama Lengkap
                          </label>
                          <input
                            id="sender-name"
                            type="text"
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                            placeholder="Contoh: Bapak Ahmad Fauzi, S.Pd."
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1D4ED8]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="sender-org"
                            className="block text-xs font-semibold text-slate-700"
                          >
                            Instansi / Sekolah (Opsional)
                          </label>
                          <input
                            id="sender-org"
                            type="text"
                            value={senderOrg}
                            onChange={(e) => setSenderOrg(e.target.value)}
                            placeholder="Contoh: SMKN 1 Sidayu / PT Mitra Industri"
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1D4ED8]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="sender-email"
                            className="block text-xs font-semibold text-slate-700"
                          >
                            Alamat Email
                          </label>
                          <input
                            id="sender-email"
                            type="email"
                            value={senderEmail}
                            onChange={(e) => setSenderEmail(e.target.value)}
                            placeholder="nama@instansi.sch.id"
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1D4ED8]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="inquiry-purpose"
                            className="block text-xs font-semibold text-slate-700"
                          >
                            Keperluan Korespondensi
                          </label>
                          <select
                            id="inquiry-purpose"
                            value={inquiryPurpose}
                            onChange={(e) => setInquiryPurpose(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#1D4ED8]"
                          >
                            <option value="Evaluasi Akademik / Guru">
                              Evaluasi Akademik / Guru
                            </option>
                            <option value="Informasi Praktikum & Tugas">
                              Informasi Praktikum & Tugas
                            </option>
                            <option value="Koordinasi Kunjungan / PKL">
                              Koordinasi Kunjungan / PKL
                            </option>
                            <option value="Lainnya">Lainnya</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="message-text"
                          className="block text-xs font-semibold text-slate-700"
                        >
                          Pesan atau Catatan Evaluasi
                        </label>
                        <textarea
                          id="message-text"
                          rows={4}
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          placeholder="Tuliskan pesan, masukan praktikum, atau informasi koordinasi..."
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1D4ED8] resize-y"
                        />
                      </div>

                      {formError && (
                        <p role="alert" className="text-xs font-medium text-red-700">
                          {formError}
                        </p>
                      )}

                      <div className="flex items-center justify-end pt-1">
                        <button
                          type="submit"
                          className="px-5 py-2.5 text-sm font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#1E40AF] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                        >
                          Kirim Pesan
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Restrained Footer */}
      <footer className="border-t border-slate-200 bg-[#F8FAFC] py-8">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 {STUDENT_PROFILE.fullName} · Kelas {STUDENT_PROFILE.classRoom} ·{' '}
            {STUDENT_PROFILE.school}
          </p>
          <div className="flex items-center gap-6 no-print">
            <a href="#beranda" className="hover:text-slate-900 transition-colors">
              Kembali ke Atas
            </a>
            <button
              type="button"
              onClick={handlePrintPortfolio}
              className="hover:text-slate-900 transition-colors"
            >
              Cetak PDF
            </button>
          </div>
        </div>
      </footer>

      {/* Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
