export type CompetencyCategory =
  | 'Semua'
  | 'Instalasi'
  | 'Pengukuran'
  | 'K3LH & Gambar';

export interface CompetencyItem {
  id: string;
  index: string;
  title: string;
  category: Exclude<CompetencyCategory, 'Semua'>;
  subject: string;
  description: string;
  tools: string[];
  standard: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface WorkshopProject {
  id: string;
  code: string;
  title: string;
  category: Exclude<CompetencyCategory, 'Semua'>;
  date: string;
  subject: string;
  summary: string;
  objective: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  specs: ProjectSpec[];
  safetySteps: string[];
  outcome: string;
}

export interface AcademicMilestone {
  period: string;
  title: string;
  institution: string;
  detail: string;
  classification: string;
}

export const STUDENT_PROFILE = {
  shortName: 'Muhammad Zhahir',
  fullName: 'Muhammad Zhahir Dendis Habibi',
  classRoom: '10 TITL 2',
  majorShort: 'Jurusan Listrik (TITL)',
  majorFull: 'Teknik Instalasi Tenaga Listrik',
  programArea: 'Teknik Ketenagalistrikan',
  school: 'SMKN 1 Sidayu',
  schoolAddress: 'Jl. Raya Wadeng, Kec. Sidayu, Kab. Gresik, Jawa Timur 61153',
  academicYear: '2025 / 2026',
  semester: 'Semester Ganjil & Genap (Fase E)',
  focusStatement:
    'Siswa aktif kompetensi keahlian Teknik Instalasi Tenaga Listrik yang berfokus pada ketelitian pengawatan 1 fasa, kepatuhan prosedur K3LH, pembacaan diagram satu garis sesuai PUIL 2011, serta kalibrasi alat ukur listrik.',
  bioParagraphs: [
    'Sebagai siswa kelas 10 TITL 2 di SMKN 1 Sidayu, saya menempuh pendidikan vokasi di bidang Teknik Ketenagalistrikan dengan penekanan pada penguasaan dasar-dasar teknik kelistrikan, kesehatan dan keselamatan kerja (K3LH), serta teknik instalasi penerangan dan tenaga yang terstandarisasi.',
    'Dalam setiap kegiatan praktikum bengkel, saya membiasakan disiplin kerja yang sistematis: mulai dari analisis gambar teknik dan diagram pengawatan, pemilihan penampang penghantar yang sesuai kapasitas hantar arus, hingga pengujian kontinuitas dan tahanan isolasi sebelum rangkaian diberi tegangan kerja.'
  ],
  biodataRows: [
    { label: 'Nama Lengkap', value: 'Muhammad Zhahir Dendis Habibi' },
    { label: 'Kelas / Rombongan Belajar', value: 'X TITL 2 (Kelas 10)' },
    { label: 'Kompetensi Keahlian', value: 'Teknik Instalasi Tenaga Listrik (TITL)' },
    { label: 'Bidang Keahlian', value: 'Teknologi Manufaktur dan Rekayasa · Ketenagalistrikan' },
    { label: 'Satuan Pendidikan', value: 'SMK Negeri 1 Sidayu, Kab. Gresik' },
    { label: 'Tahun Ajaran', value: '2025/2026 · Kurikulum Merdeka (Fase E)' },
    { label: 'Standar Rujukan Praktikum', value: 'PUIL 2011 / SNI 0225 & K3LH Bengkel Listrik' }
  ]
};

export const HERO_METRICS = [
  {
    label: 'Kelas & Jurusan',
    value: '10 TITL 2',
    detail: 'Teknik Instalasi Tenaga Listrik'
  },
  {
    label: 'Institusi Pendidikan',
    value: 'SMKN 1 Sidayu',
    detail: 'Kabupaten Gresik, Jawa Timur'
  },
  {
    label: 'Standar Keselamatan',
    value: 'PUIL 2011 & K3LH',
    detail: 'Prosedur Instalasi & Proteksi'
  },
  {
    label: 'Fase Pembelajaran',
    value: 'Fase E · Aktif',
    detail: 'Tahun Ajaran 2025/2026'
  }
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    id: 'comp-01',
    index: '01',
    title: 'Keselamatan, Kesehatan Kerja & Lingkungan Hidup (K3LH)',
    category: 'K3LH & Gambar',
    subject: 'Dasar-Dasar Teknik Ketenagalistrikan',
    description:
      'Penerapan alat pelindung diri (APD) bengkel listrik, prosedur isolasi sumber tegangan (Lockout/Tagout dasar), serta pencegahan bahaya kejut listrik dan hubung singkat.',
    tools: ['Sepatu Isolasi', 'Sarung Tangan Karet', 'Tespen & Voltage Detector'],
    standard: 'Permenaker & PUIL 2011'
  },
  {
    id: 'comp-02',
    index: '02',
    title: 'Gambar Teknik & Diagram Instalasi Listrik',
    category: 'K3LH & Gambar',
    subject: 'Gambar Teknik Listrik',
    description:
      'Membaca dan menggambar simbol standar kelistrikan, diagram satu garis (Single Line Diagram), diagram pengawatan (Wiring Diagram), dan diagram pelaksanaan instalasi rumah tinggal.',
    tools: ['Penggaris Skala', 'Kertas Gambar A3', 'Simbol Standar IEC/PUIL'],
    standard: 'IEC 60617 & SNI 0225'
  },
  {
    id: 'comp-03',
    index: '03',
    title: 'Pengukuran Besaran Listrik & Instrumentasi',
    category: 'Pengukuran',
    subject: 'Alat Ukur dan Pengukuran Listrik',
    description:
      'Pengukuran tegangan AC/DC, arus beban, hambatan penghantar, serta pengujian kontinuitas dan tahanan isolasi kabel instalasi secara presisi dan aman.',
    tools: ['Multimeter Digital', 'Multimeter Analog', 'Tang Ampere (Clamp Meter)'],
    standard: 'Akurasi Pembacaan Skala'
  },
  {
    id: 'comp-04',
    index: '04',
    title: 'Pekerjaan Dasar Elektroteknik & Sambungan Kabel',
    category: 'Instalasi',
    subject: 'Pekerjaan Dasar Elektroteknik',
    description:
      'Pengupasan isolasi tanpa melukai inti tembaga, pembuatan sambungan ekor babi (pig tail), sambungan puntir (Western Union), pencabangan datar, dan terminasi sepatu kabel/ferrule.',
    tools: ['Tang Kombinasi 1000V', 'Tang Potong', 'Wire Stripper & Crimping'],
    standard: 'Ketahanan Mekanis & Kontak'
  },
  {
    id: 'comp-05',
    index: '05',
    title: 'Instalasi Penerangan & Kotak Kontak 1 Fasa',
    category: 'Instalasi',
    subject: 'Instalasi Penerangan Listrik Dasar',
    description:
      'Pemasangan pipa PVC konduit, T-Dus/Cross-Dus, saklar tunggal, saklar seri, saklar tukar (hotel), serta kotak kontak berarde dengan pengaman MCB dan ELCB.',
    tools: ['MCB 1P 6A/10A', 'Pipa PVC 20mm', 'Kabel NYA 1.5 mm² & 2.5 mm²'],
    standard: 'Kode Warna PUIL (L/N/PE)'
  },
  {
    id: 'comp-06',
    index: '06',
    title: 'Analisis Rangkaian Arus Searah & Bolak-Balik',
    category: 'Pengukuran',
    subject: 'Dasar Listrik & Elektronika',
    description:
      'Perhitungan hukum Ohm, hukum Kirchhoff pada rangkaian seri, paralel, dan campuran, serta penghitungan daya aktif dan kebutuhan pengaman arus lebih pada beban penerangan.',
    tools: ['Power Supply DC', 'Resistor & Beban Lampu', 'Kalkulator Teknik'],
    standard: 'Analisis Teori & Verifikasi Ukur'
  }
];

export const WORKSHOP_PROJECTS: WorkshopProject[] = [
  {
    id: 'proj-lighting-board',
    code: 'PRK-10-01',
    title: 'Perakitan Papan Latih Instalasi Penerangan 1 Fasa & Saklar Tukar',
    category: 'Instalasi',
    date: 'Semester Genap 2026',
    subject: 'Instalasi Penerangan Listrik Dasar',
    summary:
      'Pemasangan jaringan penerangan dua titik lampu yang dikendalikan melalui dua saklar tukar (sistem lorong/tangga) lengkap dengan kotak kontak berarde dan proteksi MCB dalam boks PHB.',
    objective:
      'Melatih kerapian pembengkokan pipa PVC konduit, kepatuhan kode warna penghantar fasa/netral/grounding, dan verifikasi fungsi kendali saklar dari dua posisi berbeda.',
    imageUrl: '/src/assets/images/project_lighting_panel_1794889338651.jpg',
    imageAlt:
      'Papan latih instalasi listrik penerangan satu fasa dengan pipa PVC, kotak sambung, MCB, dan saklar tukar',
    featured: true,
    specs: [
      { label: 'Tegangan Sistem', value: '220 V AC / 50 Hz (1 Fasa)' },
      { label: 'Pengaman Utama', value: 'MCB 1 Pole 6 A (Kurva C)' },
      { label: 'Penghantar Penerangan', value: 'NYA 1.5 mm² (Cokelat / Biru / Kuning-Hijau)' },
      { label: 'Penghantar Kotak Kontak', value: 'NYA 2.5 mm²' },
      { label: 'Pelindung Mekanis', value: 'Pipa PVC Conduit 20 mm + Klem Saddle' }
    ],
    safetySteps: [
      'Pemeriksaan kondisi fisik seluruh isolasi kabel sebelum penarikan di dalam pipa konduit.',
      'Pengujian kontinuitas dan bebas hubung singkat antar penghantar fasa-netral-PE sebelum penyambungan sumber.',
      'Penggunaan obeng berisolasi 1000 V saat pengencangan sekrup terminal MCB dan kotak sambung.'
    ],
    outcome:
      'Seluruh titik lampu beroperasi sesuai skema saklar tukar, resistansi isolasi memenuhi ambang aman bengkel, dan susunan konduit terpasang tegak lurus presisi.'
  },
  {
    id: 'proj-multimeter-audit',
    code: 'PRK-10-02',
    title: 'Pengujian Tegangan, Kontinuitas & Verifikasi Terminal Panel MCB',
    category: 'Pengukuran',
    date: 'Semester Genap 2026',
    subject: 'Alat Ukur & Pengukuran Listrik',
    summary:
      'Prosedur pemeriksaan kelayakan panel hubung bagi (PHB) menggunakan multimeter digital untuk memastikan kestabilan tegangan suplai dan kekencangan terminasi pada rel DIN.',
    objective:
      'Menguasai pemilihan batas ukur (range selector) AC Volt dan Ohmmeter secara tepat serta membudayakan prosedur pengukuran aman tanpa risiko busur api atau korsleting probe.',
    imageUrl: '/src/assets/images/project_multimeter_testing_1794889339648.jpg',
    imageAlt:
      'Pengukuran tegangan panel MCB dan terminal blok rel DIN menggunakan multimeter digital',
    specs: [
      { label: 'Instrumen Utama', value: 'Digital Multimeter True-RMS (CAT III 600V)' },
      { label: 'Tegangan Terukur (L-N)', value: '232.8 V AC' },
      { label: 'Frekuensi Jala-Jala', value: '50.0 Hz' },
      { label: 'Titik Pengujian', value: 'Terminal Masuk/Keluar MCB & Blok Terminal Netral/PE' }
    ],
    safetySteps: [
      'Memastikan posisi kabel probe (COM hitam dan V/Ω merah) sebelum menyentuh terminal bertegangan.',
      'Memegang gagang probe di belakang pembatas pelindung jari (finger guard).',
      'Melakukan uji fungsi nol (zero check) dan kalibrasi visual layar instrumen sebelum pencatatan data.'
    ],
    outcome:
      'Seluruh terminal fase dan netral terverifikasi tanpa drop tegangan berlebih dan pencatatan laporan hasil ukur tersusun sistematis.'
  },
  {
    id: 'proj-single-line',
    code: 'PRK-10-03',
    title: 'Perancangan Single Line Diagram & Tata Letak Panel Distribusi',
    category: 'K3LH & Gambar',
    date: 'Semester Ganjil 2025',
    subject: 'Gambar Teknik Listrik',
    summary:
      'Penyusunan gambar kerja diagram satu garis dan pembagian kelompok beban penerangan dan tenaga pada lembar A3 mengikuti simbol standar ketenagalistrikan.',
    objective:
      'Menghasilkan dokumen gambar teknik yang komunikatif sehingga mudah dibaca oleh teknisi pelaksana saat proses perakitan panel di bengkel.',
    imageUrl: '/src/assets/images/project_wiring_diagram_1794889339681.jpg',
    imageAlt:
      'Gambar teknik single line diagram panel distribusi listrik di atas kertas gambar beserta penggaris skala dan MCB',
    specs: [
      { label: 'Format Kertas', value: 'Standar ISO A3 (297 × 420 mm)' },
      { label: 'Standar Simbol', value: 'PUIL 2011 / IEC 60617' },
      { label: 'Klasifikasi Grup', value: '1 Grup Utama + 3 Grup Cabang (Penerangan & Stop Kontak)' },
      { label: 'Etiket Gambar', value: 'Judul, Skala, Nomor Lembar, Nama Penggambar & Pemeriksa' }
    ],
    safetySteps: [
      'Menentukan nilai rating arus nominal MCB di bawah kapasitas hantar arus (KHA) kabel pada gambar.',
      'Mencantumkan simbol pembumian (PE) secara konsisten pada setiap kotak kontak dan badan panel logam.'
    ],
    outcome:
      'Gambar kerja digunakan sebagai acuan langsung pada sesi perakitan panel latih kelas 10 TITL 2.'
  },
  {
    id: 'proj-cable-termination',
    code: 'PRK-10-04',
    title: 'Teknik Pengupasan, Penyambungan Konduktor & Terminasi Ferrule',
    category: 'Instalasi',
    date: 'Semester Ganjil 2025',
    subject: 'Pekerjaan Dasar Elektroteknik',
    summary:
      'Latihan keterampilan mekanik dasar penghantar listrik meliputi pengupasan isolasi, penyambungan puntir kawat tunggal, serta pengepresan selongsong terminasi (ferrule/skun) tembaga.',
    objective:
      'Mencegah kerusakan penampang kawat tembaga dan memastikan resistansi kontak sambungan tetap rendah sehingga terminal tidak mengalami panas berlebih (overheating).',
    imageUrl: '/src/assets/images/project_cable_termination_1794889340062.jpg',
    imageAlt:
      'Deretan sambungan dan terminasi kabel tembaga rapi di meja kerja bengkel bersama tang kombinasi berisolasi',
    specs: [
      { label: 'Penampang Konduktor', value: '1.5 mm² & 2.5 mm² Tembaga Murni' },
      { label: 'Jenis Sambungan', value: 'Pig Tail, Western Union, Bell Hangers & Ferrule Sleeve' },
      { label: 'Perkakas Tangan', value: 'Tang Kombinasi & Pengupas Kabel Terisolasi 1000 V' },
      { label: 'Toleransi Goresan Inti', value: '0 mm (Inti tembaga utuh tanpa cacat)' }
    ],
    safetySteps: [
      'Menjaga sudut potong pengupas isolasi agar tidak menggores inti tembaga.',
      'Melakukan uji tarik mekanis setelah pengepresan selongsong terminasi.',
      'Membersihkan serpihan sisa potongan kawat dari meja kerja setelah selesai praktikum.'
    ],
    outcome:
      'Seluruh sampel sambungan lolos uji kerapatan puntiran dan uji kekuatan tarik pada penilaian praktikum dasar.'
  }
];

export const ACADEMIC_MILESTONES: AcademicMilestone[] = [
  {
    period: '2025 — Sekarang',
    title: 'Siswa Aktif Kelas X TITL 2 — Kompetensi Teknik Instalasi Tenaga Listrik',
    institution: 'SMKN 1 Sidayu, Kabupaten Gresik',
    detail:
      'Mengikuti pembelajaran teori dan praktik bengkel ketenagalistrikan Fase E, mencakup K3LH, Gambar Teknik Listrik, Alat Ukur Listrik, serta Dasar Instalasi Penerangan.',
    classification: 'Pendidikan Vokasi'
  },
  {
    period: 'Semester Ganjil 2025',
    title: 'Ketuntasan Praktikum Dasar Elektroteknik & Pengenalan K3LH Bengkel',
    institution: 'Bengkel Ketenagalistrikan SMKN 1 Sidayu',
    detail:
      'Menyelesaikan modul keterampilan perkakas tangan berisolasi, teknik sambungan kabel standar PUIL, dan kepatuhan penggunaan APD penuh di area praktikum.',
    classification: 'Capaian Bengkel'
  },
  {
    period: 'Semester Genap 2026',
    title: 'Penyusunan Proyek Papan Latih Instalasi Penerangan 1 Fasa & Pengujian Panel',
    institution: 'Laboratorium Instalasi Listrik SMKN 1 Sidayu',
    detail:
      'Merakit rangkaian saklar tukar dan kotak kontak berarde serta melakukan verifikasi tegangan dan kontinuitas dengan multimeter digital secara mandiri.',
    classification: 'Proyek Praktikum'
  },
  {
    period: 'Target Pengembangan',
    title: 'Persiapan Kompetensi Lanjutan & Praktik Kerja Lapangan (PKL)',
    institution: 'Program Keahlian Teknik Ketenagalistrikan',
    detail:
      'Mempersiapkan pendalaman instalasi tenaga 3 fasa, pengendali motor listrik (kontaktor magnetik), dan PLC dasar untuk kesiapan industri di kelas XI dan XII.',
    classification: 'Rencana Akademik'
  }
];
