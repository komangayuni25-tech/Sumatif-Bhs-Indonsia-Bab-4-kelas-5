import { Question } from '../types';
import imgWirausahaKue from '../assets/images/wirausaha_kue_tradisional_1794885872477.jpg';
import imgWawancaraPengrajin from '../assets/images/wawancara_pengrajin_cilik_1794885872340.jpg';
import imgBazarSekolah from '../assets/images/bazar_kewirausahaan_sekolah_1794885873141.jpg';
import imgBelajarTekun from '../assets/images/tokoh_belajar_tekun_1794885873668.jpg';
import imgKerjaKerasPrestasi from '../assets/images/kerja_keras_prestasi_1794885874082.jpg';

/**
 * Bank Soal Standar Asesmen Sumatif Mata Pelajaran BAHASA INDONESIA (Bab 4)
 * Kelas 5 SD - Kurikulum Merdeka
 * Lingkup Materi:
 * 1. Ide Pokok (Memahami gagasan utama paragraf teks kisah tokoh & kewirausahaan)
 * 2. Wawancara (Persiapan, pelaksanaan, etika, serta peran pewawancara & narasumber)
 * 3. Kata Tanya (ADIKSIMBA: Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana, Berapa)
 * 4. Kata Idiom (Ungkapan bermakna kiasan terkait kerja keras, komitmen, & sikap unggul)
 *
 * Komposisi Soal:
 * - 40 Butir Pilihan Ganda (PG) [Nomor 1 - 40] (Bobot: 2 poin/butir = 80 poin)
 * - 5 Butir Pilihan Ganda Kompleks Kategori (3 Pernyataan Benar/Salah) [Nomor 41 - 45] (Bobot: 6 poin/butir = 30 poin)
 * Total: 45 Butir Soal (Skor Maksimal: 110 poin -> Nilai Akhir Skala 100)
 */

const TP_1 =
  'Murid mampu mengenal nilai-nilai kewirausahaan, komitmen, dan kerja keras dengan meneladani kisah tokoh pada teks.';
const TP_2 =
  'Murid mampu mencari informasi dari tokoh melalui wawancara secara tepat dan santun.';
const TP_3 =
  'Murid mampu menjadi pribadi yang unggul serta berprestasi dengan melaksanakan nilai-nilai luhur tersebut dalam kehidupan sehari-hari.';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN I: 40 SOAL PILIHAN GANDA (PG)
  // ============================================================================

  // --- LINGKUP MATERI 1: IDE POKOK (SOAL 1 - 10) ---
  {
    id: 1,
    type: 'pg',
    element: TP_1,
    topic: 'Ide Pokok Paragraf',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat menjelaskan pengertian ide pokok dalam sebuah paragraf bacaan dengan tepat.',
    image: `<svg viewBox="0 0 420 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="210" y="23" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">STRUKTUR GAGASAN DALAM PARAGRAF</text>
      <rect x="24" y="36" width="168" height="70" rx="10" fill="#1d4ed8"/>
      <text x="108" y="64" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">IDE POKOK</text>
      <text x="108" y="82" font-family="sans-serif" font-size="9.5" fill="#dbeafe" text-anchor="middle">Inti / Gagasan Utama</text>
      <text x="210" y="76" font-family="sans-serif" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">+</text>
      <rect x="228" y="36" width="168" height="70" rx="10" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
      <text x="312" y="64" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e40af" text-anchor="middle">KALIMAT PENJELAS</text>
      <text x="312" y="82" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Uraian Pendukung Ide</text>
    </svg>`,
    text: 'Perhatikan bagan struktur paragraf di atas! Dalam sebuah paragraf, gagasan utama yang menjadi inti pembahasan dan mendasari pengembangan kalimat-kalimat lainnya disebut ...',
    options: [
      { id: 'A', text: 'Ide pokok' },
      { id: 'B', text: 'Judul karangan' },
      { id: 'C', text: 'Kata sambung' },
      { id: 'D', text: 'Kalimat penutup' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ide pokok (gagasan utama) adalah inti sari atau pokok bahasan utama dalam sebuah paragraf yang kemudian dijelaskan oleh kalimat-kalimat penjelas.',
  },
  {
    id: 2,
    type: 'pg',
    element: TP_1,
    topic: 'Ide Pokok Kisah Wirausaha',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Disajikan gambar dan teks paragraf kisah tokoh wirausaha cilik, murid dapat menentukan ide pokok paragraf.',
    image: imgWirausahaKue,
    text: 'Perhatikan gambar di atas dan bacalah paragraf berikut!\n\n"Setiap pagi sebelum berangkat sekolah, Sari membantu ibunya mengemas kue tradisional untuk dijual di koperasi sekolah. Sari menyusun kue klepon, kue lapis, dan onde-onde dengan rapi agar terlihat menarik. Kegiatan membantu ibu membuat Sari terbiasa bekerja keras dan belajar berwirausaha sejak dini."\n\nIde pokok paragraf tersebut adalah ...',
    options: [
      { id: 'A', text: 'Kue klepon dan onde-onde dijual di koperasi sekolah' },
      { id: 'B', text: 'Sari membantu ibunya mengemas kue tradisional untuk dijual setiap pagi' },
      { id: 'C', text: 'Ibu Sari membuat kue lapis di dapur rumah setiap hari Minggu' },
      { id: 'D', text: 'Sari berangkat ke sekolah bersama teman-temannya dengan gembira' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kalimat utama terletak di awal paragraf (deduktif), yaitu tentang Sari yang membantu ibunya mengemas kue tradisional untuk dijual setiap pagi. Kalimat berikutnya merinci jenis kue dan manfaatnya.',
  },
  {
    id: 3,
    type: 'pg',
    element: TP_1,
    topic: 'Ide Pokok Paragraf Induktif',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat menemukan ide pokok paragraf induktif dari teks kisah perjuangan tokoh.',
    text: 'Bacalah paragraf berikut dengan saksama!\n\n"Pak Wayan memulai usaha kerajinan anyaman bambu hanya dengan modal kecil. Meskipun pesanan sempat sepi pada bulan pertama, ia tidak pernah putus asa dan terus memperbaiki kualitas anyamannya. Ia juga rajin menawarkan hasil karyanya ke pasar tradisional maupun toko oleh-oleh. Oleh karena itu, kerja keras dan sikap pantang menyerah menjadi kunci keberhasilan usaha Pak Wayan."\n\nIde pokok paragraf di atas adalah ...',
    options: [
      { id: 'A', text: 'Modal awal usaha kerajinan bambu Pak Wayan sangat besar' },
      { id: 'B', text: 'Pesanan anyaman bambu Pak Wayan selalu ramai sejak hari pertama' },
      { id: 'C', text: 'Kerja keras dan sikap pantang menyerah menjadi kunci keberhasilan usaha Pak Wayan' },
      { id: 'D', text: 'Pasar tradisional hanya menjual kerajinan anyaman bambu milik Pak Wayan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Paragraf tersebut berpola induktif karena kesimpulan atau inti gagasan berada di akhir paragraf ("Oleh karena itu, kerja keras dan sikap pantang menyerah menjadi kunci keberhasilan usaha Pak Wayan").',
  },
  {
    id: 4,
    type: 'pg',
    element: TP_1,
    topic: 'Menentukan Kalimat Utama',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat mengidentifikasi kalimat utama yang memuat ide pokok dalam paragraf.',
    text: 'Bacalah paragraf berikut!\n\n"(1) Komitmen adalah sikap teguh dalam menepati janji serta tanggung jawab yang telah disepakati. (2) Seorang pengusaha muda yang berkomitmen akan mengirim pesanan tepat waktu. (3) Ia juga menjaga mutu barang dagangannya sesuai contoh yang ditawarkan. (4) Sikap tersebut membuat pembeli semakin percaya dan setia berbelanja."\n\nKalimat utama yang mengandung ide pokok paragraf di atas ditunjukkan oleh nomor ...',
    options: [
      { id: 'A', text: '(1)' },
      { id: 'B', text: '(2)' },
      { id: 'C', text: '(3)' },
      { id: 'D', text: '(4)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kalimat (1) menyatakan definisi umum tentang komitmen, sedangkan kalimat (2), (3), dan (4) merupakan contoh penerapan dan dampak sikap komitmen.',
  },
  {
    id: 5,
    type: 'pg',
    element: TP_1,
    topic: 'Ide Pokok dan Nilai Tokoh',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Disajikan gambar murid belajar tekun dan teks biografi singkat, murid dapat menentukan ide pokok paragraf.',
    image: imgBelajarTekun,
    text: 'Perhatikan gambar dan bacaan berikut!\n\n"Rani gemar membaca kisah tokoh-tokoh inspiratif setelah selesai mengerjakan tugas sekolah. Dari buku biografi yang dibacanya, Rani mencatat kebiasaan baik para tokoh seperti disiplin waktu, gemar membaca, dan berani mencoba hal baru. Kebiasaan membaca membuat wawasan Rani semakin luas dan memotivasi dirinya untuk meraih prestasi."\n\nIde pokok dari bacaan di atas adalah ...',
    options: [
      { id: 'A', text: 'Rani membeli banyak buku cerita di toko buku setiap akhir pekan' },
      { id: 'B', text: 'Kegemaran Rani membaca kisah tokoh inspiratif memperluas wawasan dan memotivasi prestasinya' },
      { id: 'C', text: 'Tugas sekolah Rani dikerjakan pada malam hari sebelum tidur' },
      { id: 'D', text: 'Semua tokoh inspiratif selalu menulis buku biografi tentang masa kecilnya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Keseluruhan paragraf membahas kebiasaan Rani membaca kisah tokoh inspiratif beserta manfaatnya bagi wawasan dan motivasi berprestasi.',
  },
  {
    id: 6,
    type: 'pg',
    element: TP_1,
    topic: 'Membedakan Ide Pokok & Kalimat Penjelas',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat mengidentifikasi kalimat penjelas yang tidak sesuai atau berfungsi mendukung ide pokok.',
    text: 'Bacalah paragraf berikut!\n\n"Usaha minuman jamu tradisional milik Bu Made sangat digemari warga desa. Bahan-bahan yang digunakan selalu segar seperti kunyit, jahe, dan gula aren asli. Kebersihan botol kemasan juga sangat diperhatikan agar aman dikonsumsi anak-anak maupun orang tua."\n\nManakah pernyataan yang merupakan kalimat penjelas dari ide pokok tersebut?',
    options: [
      { id: 'A', text: 'Usaha minuman jamu tradisional milik Bu Made sangat digemari warga desa.' },
      { id: 'B', text: 'Bahan yang digunakan selalu segar seperti kunyit, jahe, dan gula aren asli.' },
      { id: 'C', text: 'Warga desa tidak pernah membeli minuman sehat buatan Bu Made.' },
      { id: 'D', text: 'Jamu tradisional hanya boleh diminum oleh orang dewasa.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kalimat pertama adalah kalimat utama (ide pokok), sedangkan kalimat kedua mengenai bahan-bahan segar dan kalimat ketiga mengenai kebersihan kemasan merupakan kalimat penjelas.',
  },
  {
    id: 7,
    type: 'pg',
    element: TP_1,
    topic: 'Cara Menemukan Ide Pokok',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat menentukan langkah tepat menemukan ide pokok suatu paragraf.',
    text: 'Langkah pertama yang paling tepat dilakukan untuk menemukan ide pokok dalam sebuah paragraf bacaan adalah ...',
    options: [
      { id: 'A', text: 'Menghitung jumlah huruf kapital yang terdapat pada setiap baris' },
      { id: 'B', text: 'Membaca judul buku lalu menutup kembali bukunya tanpa membaca isi' },
      { id: 'C', text: 'Membaca seluruh kalimat dalam paragraf dengan cermat dan menentukan kalimat utamanya' },
      { id: 'D', text: 'Memilih kalimat yang paling panjang saja tanpa memahami maknanya' },
    ],
    correctAnswer: 'C',
    explanation:
      'Untuk menemukan ide pokok, pembaca harus membaca seluruh paragraf dengan saksama, mencari kalimat utama (di awal, akhir, atau awal-akhir), lalu menyimpulkan intinya.',
  },
  {
    id: 8,
    type: 'pg',
    element: TP_1,
    topic: 'Ide Pokok Teks Bazar Kewirausahaan',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator:
      'Disajikan gambar bazar sekolah dan dua paragraf singkat, murid dapat menyimpulkan gagasan utama paragraf kedua.',
    image: imgBazarSekolah,
    text: 'Perhatikan gambar kegiatan bazar di atas dan bacalah teks berikut!\n\nParagraf 1: Siswa kelas 5 SD Negeri 3 Loloan Timur mengadakan kegiatan bazar kewirausahaan di halaman sekolah. Setiap kelompok menyiapkan produk kerajinan tangan dan jajanan sehat.\nParagraf 2: Sebelum bazar dibuka, setiap kelompok membagi tugas secara adil. Ada siswa yang bertugas menata barang dagangan, ada yang mencatat pemasukan keuangan, dan ada pula yang melayani pembeli dengan ramah. Kerja sama tim membuat stan bazar berjalan tertib dan laris.\n\nIde pokok paragraf kedua adalah ...',
    options: [
      { id: 'A', text: 'Produk kerajinan tangan dan jajanan sehat dibuat di rumah masing-masing' },
      { id: 'B', text: 'Bazar kewirausahaan dilaksanakan di halaman sekolah pada hari Sabtu' },
      { id: 'C', text: 'Siswa menata jajanan sehat di atas meja kayu yang panjang' },
      { id: 'D', text: 'Pembagian tugas dan kerja sama tim membuat stan bazar siswa berjalan tertib dan laris' },
    ],
    correctAnswer: 'D',
    explanation:
      'Paragraf kedua berfokus pada pembagian tugas yang adil antaranggota kelompok sehingga kegiatan bazar berjalan tertib dan laris.',
  },
  {
    id: 9,
    type: 'pg',
    element: TP_1,
    topic: 'Simpulan Ide Pokok Beberapa Paragraf',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator:
      'Murid dapat menyimpulkan gagasan utama teks bertema nilai kewirausahaan dan keteladanan tokoh.',
    text: 'Bacalah ringkasan kisah tokoh berikut!\n\n"Sejak kecil, Nadim senang mengamati usaha bengkel sepeda ayahnya. Ia belajar bahwa keberhasilan usaha tidak datang secara instan, melainkan melalui ketekunan, kejujuran kepada pelanggan, serta keberanian mencari solusi saat alat rusak. Kini, setelah dewasa, Nadim berhasil membuka toko perlengkapan olahraga yang jujur dan tepercaya."\n\nNilai luhur yang menjadi inti gagasan teks di atas adalah ...',
    options: [
      { id: 'A', text: 'Ketekunan, kejujuran, dan kemampuan memecahkan masalah mengantarkan keberhasilan wirausaha' },
      { id: 'B', text: 'Membuka toko perlengkapan olahraga jauh lebih mudah daripada memperbaiki sepeda' },
      { id: 'C', text: 'Keberhasilan usaha hanya bisa diraih apabila memiliki bengkel milik keluarga' },
      { id: 'D', text: 'Anak-anak tidak perlu belajar bekerja keras selama masih duduk di sekolah dasar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Inti gagasan teks menyoroti nilai-nilai kewirausahaan berupa ketekunan, kejujuran, dan keberanian mencari solusi sebagai kunci keberhasilan tokoh.',
  },
  {
    id: 10,
    type: 'pg',
    element: TP_1,
    topic: 'Kalimat Penjelas Sumbang',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator:
      'Murid dapat menganalisis kalimat yang tidak padu dengan ide pokok paragraf.',
    text: 'Bacalah paragraf berikut!\n\n"(1) Kerja keras adalah usaha sungguh-sungguh untuk mencapai tujuan tanpa mudah menyerah. (2) Siswa yang bekerja keras akan tekun berlatih soal meskipun menemui materi sulit. (3) Kemarin sore hujan turun sangat deras disertai angin kencang. (4) Berkat ketekunan tersebut, siswa mampu meraih prestasi membanggakan."\n\nKalimat yang tidak mendukung ide pokok paragraf adalah kalimat nomor ...',
    options: [
      { id: 'A', text: '(1)' },
      { id: 'B', text: '(2)' },
      { id: 'C', text: '(3)' },
      { id: 'D', text: '(4)' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ide pokok paragraf membahas kerja keras siswa untuk meraih prestasi. Kalimat (3) tentang cuaca hujan deras tidak berkaitan dengan ide pokok sehingga menjadi kalimat sumbang.',
  },

  // --- LINGKUP MATERI 2: WAWANCARA (SOAL 11 - 20) ---
  {
    id: 11,
    type: 'pg',
    element: TP_2,
    topic: 'Pengertian & Tujuan Wawancara',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat menjelaskan pengertian wawancara dan tujuan pelaksanaannya.',
    text: 'Kegiatan tanya jawab secara lisan antara dua orang atau lebih untuk memperoleh informasi, keterangan, atau pengalaman dari tokoh tertentu disebut ...',
    options: [
      { id: 'A', text: 'Pidato' },
      { id: 'B', text: 'Wawancara' },
      { id: 'C', text: 'Pantun' },
      { id: 'D', text: 'Deklamasi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Wawancara merupakan kegiatan tanya jawab terarah antara pewawancara dan narasumber untuk menggali informasi atau data yang akurat.',
  },
  {
    id: 12,
    type: 'pg',
    element: TP_2,
    topic: 'Peran dalam Wawancara',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Disajikan gambar wawancara murid dengan pengrajin bambu, murid dapat mengidentifikasi istilah pewawancara dan narasumber.',
    image: imgWawancaraPengrajin,
    text: 'Perhatikan gambar di atas! Seorang siswi SD sedang bertanya dan mencatat informasi dari seorang pengrajin anyaman bambu di bengkel kerjanya. Dalam kegiatan wawancara tersebut, pengrajin bambu yang memberikan keterangan atau informasi berperan sebagai ...',
    options: [
      { id: 'A', text: 'Pewawancara' },
      { id: 'B', text: 'Moderator' },
      { id: 'C', text: 'Narasumber' },
      { id: 'D', text: 'Notulis' },
    ],
    correctAnswer: 'C',
    explanation:
      'Orang yang diwawancarai dan memberikan informasi/keterangan disebut narasumber (informan), sedangkan siswa yang mengajukan pertanyaan disebut pewawancara.',
  },
  {
    id: 13,
    type: 'pg',
    element: TP_2,
    topic: 'Tahap Persiapan Wawancara',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat mengurutkan langkah-langkah persiapan sebelum melakukan wawancara dengan tokoh.',
    image: `<svg viewBox="0 0 430 115" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="430" height="115" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="215" y="22" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">ALUR KEGIATAN WAWANCARA</text>
      <g transform="translate(18, 34)">
        <rect width="115" height="62" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="57" y="27" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">1. PERSIAPAN</text>
        <text x="57" y="45" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">Topik &amp; Daftar Tanya</text>
      </g>
      <text x="148" y="68" font-size="16" font-weight="bold" fill="#2563eb" text-anchor="middle">→</text>
      <g transform="translate(160, 34)">
        <rect width="115" height="62" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="57" y="27" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#15803d" text-anchor="middle">2. PELAKSANAAN</text>
        <text x="57" y="45" font-family="sans-serif" font-size="8.5" fill="#166534" text-anchor="middle">Tanya Jawab Santun</text>
      </g>
      <text x="290" y="68" font-size="16" font-weight="bold" fill="#16a34a" text-anchor="middle">→</text>
      <g transform="translate(302, 34)">
        <rect width="110" height="62" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="55" y="27" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#92400e" text-anchor="middle">3. LAPORAN</text>
        <text x="55" y="45" font-family="sans-serif" font-size="8.5" fill="#b45309" text-anchor="middle">Ringkasan Hasil</text>
      </g>
    </svg>`,
    text: 'Perhatikan alur kegiatan wawancara pada bagan di atas! Hal utama yang perlu dilakukan pewawancara pada tahap persiapan sebelum menemui narasumber adalah ...',
    options: [
      { id: 'A', text: 'Langsung merekam tanpa meminta izin kepada narasumber terlebih dahulu' },
      { id: 'B', text: 'Menentukan tema, memilih narasumber yang sesuai, membuat janji, dan menyusun daftar pertanyaan' },
      { id: 'C', text: 'Membuat kesimpulan laporan sebelum mendengarkan jawaban narasumber' },
      { id: 'D', text: 'Mengkritik usaha narasumber agar mau menjawab semua pertanyaan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada tahap persiapan wawancara, pewawancara harus menentukan tema/topik, menentukan narasumber yang relevan, membuat janji waktu, serta menyusun daftar pertanyaan yang terstruktur.',
  },
  {
    id: 14,
    type: 'pg',
    element: TP_2,
    topic: 'Etika Pelaksanaan Wawancara',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat memilih sikap santun yang harus diterapkan ketika melaksanakan wawancara.',
    text: 'Dayu mendapat tugas mewawancarai pemilik toko roti terkenal di desanya tentang cara menjaga kualitas usaha. Sikap yang paling santun dilakukan Dayu saat tiba di lokasi wawancara adalah ...',
    options: [
      { id: 'A', text: 'Memotong pembicaraan narasumber agar wawancara cepat selesai' },
      { id: 'B', text: 'Mengucapkan salam, memperkenalkan diri, dan meminta izin memulai wawancara dengan ramah' },
      { id: 'C', text: 'Berbicara dengan suara sangat pelan sambil bermain telepon genggam' },
      { id: 'D', text: 'Menanyakan hal-hal pribadi yang tidak berkaitan dengan topik usaha roti' },
    ],
    correctAnswer: 'B',
    explanation:
      'Etika memulai wawancara yang santun meliputi datang tepat waktu, mengucapkan salam, memperkenalkan diri dan tujuan wawancara, serta menggunakan bahasa yang sopan.',
  },
  {
    id: 15,
    type: 'pg',
    element: TP_2,
    topic: 'Memilih Narasumber yang Tepat',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat menentukan narasumber yang tepat sesuai topik wawancara kewirausahaan.',
    text: 'Kelompok belajar kelas 5 ingin mengetahui tips memulai usaha budi daya ikan lele dan tantangan yang dihadapi para pembudidaya. Narasumber yang paling tepat untuk diwawancarai adalah ...',
    options: [
      { id: 'A', text: 'Petugas perpustakaan sekolah' },
      { id: 'B', text: 'Pedagang alat tulis di depan sekolah' },
      { id: 'C', text: 'Peternak atau pembudidaya ikan lele yang berpengalaman' },
      { id: 'D', text: 'Sopir angkutan umum antar kota' },
    ],
    correctAnswer: 'C',
    explanation:
      'Narasumber harus dipilih berdasarkan keahlian dan pengalamannya agar informasi yang diperoleh akurat dan sesuai topik (pembudidaya ikan lele).',
  },
  {
    id: 16,
    type: 'pg',
    element: TP_2,
    topic: 'Etika Penutup Wawancara',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat menentukan kalimat penutup wawancara yang baik dan santun.',
    text: 'Setelah seluruh daftar pertanyaan terjawab oleh narasumber, kalimat penutup wawancara yang paling santun diucapkan pewawancara adalah ...',
    options: [
      { id: 'A', text: '"Sudah cukup ya, saya mau langsung pulang sekarang."' },
      { id: 'B', text: '"Jawaban Bapak tadi agak membingungkan, tapi tidak apa-apa."' },
      { id: 'C', text: '"Terima kasih banyak atas waktu dan informasi berharga yang Bapak sampaikan. Semoga usaha Bapak semakin sukses."' },
      { id: 'D', text: '"Lain kali kalau ditanya tolong jawabnya lebih singkat lagi, Pak."' },
    ],
    correctAnswer: 'C',
    explanation:
      'Wawancara harus ditutup dengan ucapan terima kasih yang tulus, permohonan maaf jika ada kekeliruan, serta doa/harapan baik kepada narasumber.',
  },
  {
    id: 17,
    type: 'pg',
    element: TP_2,
    topic: 'Membaca Kutipan Teks Wawancara',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Disajikan cuplikan dialog wawancara, murid dapat menentukan informasi penting dari narasumber.',
    text: 'Bacalah kutipan wawancara berikut!\n\nBima : "Apa kunci utama sehingga usaha batik Ibu tetap bertahan hingga sekarang?"\nBu Ratna : "Kuncinya adalah komitmen menjaga keaslian motif, jujur dalam memilih bahan kain yang nyaman, serta terus belajar mengikuti selera pembeli."\nBima : "Apakah Ibu pernah mengalami kesulitan saat awal merintis usaha?"\nBu Ratna : "Tentu pernah, Nak. Dulu pesanan sangat sedikit, tetapi Ibu tidak patah semangat dan terus mempromosikannya."\n\nInformasi penting yang disampaikan Bu Ratna pada kutipan wawancara di atas adalah ...',
    options: [
      { id: 'A', text: 'Usaha batik Ibu Ratna langsung mendapatkan ribuan pesanan sejak hari pertama' },
      { id: 'B', text: 'Kunci bertahan usaha batik Bu Ratna adalah komitmen menjaga mutu, kejujuran bahan, mau belajar, dan pantang menyerah' },
      { id: 'C', text: 'Bima berniat membeli semua kain batik milik Bu Ratna untuk bazar sekolah' },
      { id: 'D', text: 'Usaha batik hanya dapat dijalankan oleh orang yang sudah memiliki banyak modal' },
    ],
    correctAnswer: 'B',
    explanation:
      'Dari jawaban Bu Ratna terlihat jelas nilai kewirausahaan berupa komitmen menjaga keaslian motif, kejujuran bahan, kemauan belajar, dan sikap pantang menyerah.',
  },
  {
    id: 18,
    type: 'pg',
    element: TP_2,
    topic: 'Menyusun Laporan Hasil Wawancara',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat mengidentifikasi bagian-bagian penting dalam laporan hasil wawancara.',
    text: 'Setelah melakukan wawancara dengan tokoh wirausaha sukses, murid menyusun laporan hasil wawancara. Komponen yang WAJIB tercantum dalam laporan hasil wawancara adalah ...',
    options: [
      { id: 'A', text: 'Latar belakang, tujuan wawancara, identitas narasumber & pewawancara, waktu/tempat, hasil wawancara, dan kesimpulan' },
      { id: 'B', text: 'Daftar harga barang di pasar, biodata seluruh tetangga, dan gambar pemandangan' },
      { id: 'C', text: 'Cerita fiksi rekaan pewawancara yang tidak disampaikan oleh narasumber' },
      { id: 'D', text: 'Daftar nilai ulangan harian seluruh siswa kelas 5' },
    ],
    correctAnswer: 'A',
    explanation:
      'Laporan hasil wawancara yang baik mencakup topik/latar belakang, maksud tujuan, identitas narasumber dan pewawancara, waktu dan tempat, transkrip/ringkasan hasil, serta kesimpulan.',
  },
  {
    id: 19,
    type: 'pg',
    element: TP_2,
    topic: 'Menentukan Pertanyaan yang Sesuai Jawaban',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator:
      'Disajikan kutipan jawaban narasumber, murid dapat menyusun kalimat tanya wawancara yang tepat.',
    text: 'Perhatikan jawaban narasumber berikut!\n\nNarasumber: "Saya mulai merintis usaha keripik singkong ini sejak tahun 2019, tepat setelah mengikuti pelatihan UMKM di balai desa."\n\nKalimat pertanyaan pewawancara yang paling tepat untuk memperoleh jawaban di atas adalah ...',
    options: [
      { id: 'A', text: '"Di mana Ibu menjual keripik singkong setiap hari?"' },
      { id: 'B', text: '"Mengapa anak muda sekarang menyukai keripik singkong?"' },
      { id: 'C', text: '"Sejak kapan Ibu mulai merintis usaha keripik singkong ini?"' },
      { id: 'D', text: '"Berapa harga satu bungkus keripik singkong rasa balado?"' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jawaban narasumber menjelaskan keterangan waktu dimulainya usaha ("sejak tahun 2019"), sehingga kata tanya yang paling tepat adalah "Sejak kapan ...?".',
  },
  {
    id: 20,
    type: 'pg',
    element: TP_2,
    topic: 'Sikap Saat Mencatat Hasil Wawancara',
    level: 'L3',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat menganalisis perilaku tepat pewawancara agar hasil wawancara akurat.',
    text: 'Saat narasumber sedang menjelaskan cara menjaga komitmen dalam bekerja, ternyata penjelasannya sangat cepat sehingga pewawancara tertinggal mencatat poin penting. Tindakan terbaik yang sebaiknya dilakukan pewawancara adalah ...',
    options: [
      { id: 'A', text: 'Mengarang sendiri bagian yang tertinggal agar catatan terlihat penuh' },
      { id: 'B', text: 'Memohon maaf dengan sopan setelah narasumber selesai berbicara, lalu meminta mengulang poin tersebut' },
      { id: 'C', text: 'Menghentikan wawancara seketika dan meninggalkan ruangan tanpa pamit' },
      { id: 'D', text: 'Memarahi narasumber karena berbicara terlalu cepat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pewawancara yang santun dan teliti tidak memotong pembicaraan, melainkan menunggu jeda, meminta izin dengan sopan untuk mengonfirmasi/mengulang informasi agar data tetap akurat.',
  },

  // --- LINGKUP MATERI 3: KATA TANYA (SOAL 21 - 30) ---
  {
    id: 21,
    type: 'pg',
    element: TP_2,
    topic: 'Fungsi Kata Tanya ADIKSIMBA',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat mengidentifikasi kepanjangan dan fungsi kata tanya dalam akronim ADIKSIMBA.',
    image: `<svg viewBox="0 0 430 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="430" height="130" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <text x="215" y="23" font-family="sans-serif" font-size="12" font-weight="bold" fill="#14532d" text-anchor="middle">RUMUS KATA TANYA WAWANCARA (ADIKSIMBA)</text>
      <g transform="translate(15, 36)" font-family="sans-serif" font-size="9.5" font-weight="bold" text-anchor="middle">
        <rect x="0" y="0" width="60" height="72" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
        <text x="30" y="24" fill="#15803d" font-size="12">APA</text>
        <text x="30" y="46" fill="#475569" font-size="8" font-weight="normal">Peristiwa /</text>
        <text x="30" y="58" fill="#475569" font-size="8" font-weight="normal">Benda</text>

        <rect x="68" y="0" width="66" height="72" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
        <text x="101" y="24" fill="#15803d" font-size="11">DI MANA</text>
        <text x="101" y="46" fill="#475569" font-size="8" font-weight="normal">Tempat /</text>
        <text x="101" y="58" fill="#475569" font-size="8" font-weight="normal">Lokasi</text>

        <rect x="142" y="0" width="60" height="72" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
        <text x="172" y="24" fill="#15803d" font-size="11">KAPAN</text>
        <text x="172" y="46" fill="#475569" font-size="8" font-weight="normal">Waktu</text>
        <text x="172" y="58" fill="#475569" font-size="8" font-weight="normal">Kejadian</text>

        <rect x="210" y="0" width="60" height="72" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
        <text x="240" y="24" fill="#15803d" font-size="11">SIAPA</text>
        <text x="240" y="46" fill="#475569" font-size="8" font-weight="normal">Tokoh /</text>
        <text x="240" y="58" fill="#475569" font-size="8" font-weight="normal">Pelaku</text>

        <rect x="278" y="0" width="62" height="72" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
        <text x="309" y="24" fill="#15803d" font-size="10">MENGAPA</text>
        <text x="309" y="46" fill="#475569" font-size="8" font-weight="normal">Alasan /</text>
        <text x="309" y="58" fill="#475569" font-size="8" font-weight="normal">Sebab</text>

        <rect x="348" y="0" width="68" height="72" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
        <text x="382" y="24" fill="#15803d" font-size="9.5">BAGAIMANA</text>
        <text x="382" y="46" fill="#475569" font-size="8" font-weight="normal">Cara /</text>
        <text x="382" y="58" fill="#475569" font-size="8" font-weight="normal">Proses</text>
      </g>
    </svg>`,
    text: 'Perhatikan tabel rumus ADIKSIMBA di atas! Untuk menanyakan sebab atau alasan seorang tokoh wirausaha memilih bidang usaha tertentu, kata tanya yang tepat digunakan adalah ...',
    options: [
      { id: 'A', text: 'Di mana' },
      { id: 'B', text: 'Mengapa' },
      { id: 'C', text: 'Kapan' },
      { id: 'D', text: 'Siapa' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata tanya "Mengapa" berfungsi menanyakan sebab, alasan, atau latar belakang terjadinya suatu peristiwa maupun keputusan tokoh.',
  },
  {
    id: 22,
    type: 'pg',
    element: TP_2,
    topic: 'Kata Tanya "Bagaimana"',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat melengkapi kalimat tanya wawancara dengan kata tanya "Bagaimana" untuk menanyakan proses/cara.',
    text: 'Lengkapi kalimat tanya wawancara berikut!\n\n"... cara Bapak mengatur waktu antara berjualan di pasar dan membimbing karyawan baru agar pekerjaan tetap rapi?"\n\nKata tanya yang tepat untuk melengkapi titik-titik tersebut adalah ...',
    options: [
      { id: 'A', text: 'Siapa' },
      { id: 'B', text: 'Kapan' },
      { id: 'C', text: 'Bagaimana' },
      { id: 'D', text: 'Di mana' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kata tanya "Bagaimana" digunakan untuk menanyakan cara, proses, langkah-langkah, atau keadaan suatu hal.',
  },
  {
    id: 23,
    type: 'pg',
    element: TP_2,
    topic: 'Kata Tanya "Di mana"',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat menentukan kalimat tanya yang tepat untuk menanyakan lokasi usaha narasumber.',
    text: 'Jika pewawancara ingin mengetahui lokasi tempat produksi kerajinan gerabah milik narasumber, pertanyaan yang paling tepat adalah ...',
    options: [
      { id: 'A', text: 'Di mana Bapak memproduksi kerajinan gerabah tersebut setiap hari?' },
      { id: 'B', text: 'Berapa jumlah pengrajin gerabah yang bekerja di seluruh Indonesia?' },
      { id: 'C', text: 'Kapan Bapak pertama kali belajar membuat kerajinan gerabah?' },
      { id: 'D', text: 'Mengapa kerajinan gerabah banyak disukai wisatawan mancanegara?' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kata tanya "Di mana" digunakan untuk menanyakan tempat atau lokasi berlangsungnya kegiatan atau usaha.',
  },
  {
    id: 24,
    type: 'pg',
    element: TP_2,
    topic: 'Kata Tanya "Berapa"',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat menggunakan kata tanya "Berapa" untuk menanyakan jumlah atau harga.',
    text: 'Perhatikan kalimat tanya berikut!\n\n"... modal awal yang Ibu gunakan saat membuka usaha jahit rumahan?"\n\nKata tanya yang tepat untuk melengkapi kalimat di atas adalah ...',
    options: [
      { id: 'A', text: 'Apa' },
      { id: 'B', text: 'Siapa' },
      { id: 'C', text: 'Mengapa' },
      { id: 'D', text: 'Berapa' },
    ],
    correctAnswer: 'D',
    explanation:
      'Kata tanya "Berapa" berfungsi menanyakan jumlah, bilangan, ukuran, waktu tempuh, atau nilai nominal uang/modal.',
  },
  {
    id: 25,
    type: 'pg',
    element: TP_2,
    topic: 'Kata Tanya "Siapa"',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat menentukan pasangan kata tanya dan informasi yang diperoleh secara tepat.',
    text: 'Dalam wawancara dengan seorang atlet cilik berprestasi, Putri bertanya: "Siapa tokoh yang menginspirasi kamu untuk giat berlatih setiap sore?"\n\nInformasi yang diharapkan dari pertanyaan Putri tersebut berkaitan dengan ...',
    options: [
      { id: 'A', text: 'Waktu latihan dilaksanakan setiap hari' },
      { id: 'B', text: 'Orang atau pihak yang menjadi teladan bagi narasumber' },
      { id: 'C', text: 'Alasan narasumber menyukai cabang olahraga tersebut' },
      { id: 'D', text: 'Lokasi lapangan tempat narasumber berlatih' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata tanya "Siapa" menanyakan orang, pelaku, atau tokoh yang terlibat/menginspirasi dalam suatu peristiwa.',
  },
  {
    id: 26,
    type: 'pg',
    element: TP_3,
    topic: 'Penulisan Kalimat Tanya yang Baku',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat mengidentifikasi penulisan kalimat tanya baku sesuai ejaan bahasa Indonesia (PUEBI/EYD).',
    text: 'Manakah penulisan kalimat tanya di bawah ini yang menggunakan huruf kapital, tanda baca, serta kata tanya depan "di mana" secara TEPAT?',
    options: [
      { id: 'A', text: 'dimana kamu membeli bahan kerajinan daur ulang itu!' },
      { id: 'B', text: 'Dimana kamu membeli bahan kerajinan daur ulang itu?' },
      { id: 'C', text: 'Di mana kamu membeli bahan kerajinan daur ulang itu?' },
      { id: 'D', text: 'Di mana kamu membeli bahan kerajinan daur ulang itu.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kata depan "di" pada kata tanya "di mana" harus ditulis terpisah dari kata "mana", diawali huruf kapital, dan diakhiri tanda tanya (?).',
  },
  {
    id: 27,
    type: 'pg',
    element: TP_3,
    topic: 'Kata Tanya dengan Partikel "-kah"',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat menggunakan partikel "-kah" dalam kalimat tanya yang santun dan efektif.',
    text: 'Penggunaan partikel "-kah" dalam kalimat tanya berfungsi untuk membuat pertanyaan terdengar lebih halus dan santun. Kalimat tanya yang tepat menggunakan partikel "-kah" saat mewawancarai guru berprestasi adalah ...',
    options: [
      { id: 'A', text: '"Apakah yang membuat Ibu tetap bersemangat membimbing siswa lomba karya ilmiah?"' },
      { id: 'B', text: '"Di manakah kah Ibu menyimpan seluruh piala kejuaraan sekolah?"' },
      { id: 'C', text: '"Mengapakah Ibu tidak pernah mau beristirahat di rumah?"' },
      { id: 'D', text: '"Kapan kah lomba karya ilmiah nasional itu dilaksanakan?"' },
    ],
    correctAnswer: 'A',
    explanation:
      'Partikel "-kah" ditulis serangkai dengan kata tanya yang mendahuluinya ("Apakah", "Kapankah"), tanpa spasi dan tanpa pengulangan.',
  },
  {
    id: 28,
    type: 'pg',
    element: TP_3,
    topic: 'Menyusun Daftar Pertanyaan Lengkap',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator:
      'Disajikan gambar murid berprestasi di kebun sekolah, murid dapat memilih pertanyaan "Mengapa" dan "Bagaimana" yang tepat.',
    image: imgKerjaKerasPrestasi,
    text: 'Perhatikan gambar siswa-siswi yang merawat kebun sekolah dan meraih medali prestasi di atas! Jika kamu mewawancarai siswi pemegang medali tersebut mengenai komitmen menjaga kebun sekolah hingga berprestasi, manakah pertanyaan yang menggali cara kerja kerasnya (unsur BAGAIMANA)?',
    options: [
      { id: 'A', text: '"Kapan sekolah kita mulai membangun kebun sayur organik ini?"' },
      { id: 'B', text: '"Bagaimana cara kelompokmu membagi jadwal menyiram dan merawat tanaman agar tumbuh subur?"' },
      { id: 'C', text: '"Siapa saja guru yang ikut mendampingi kegiatan menanam di kebun sekolah?"' },
      { id: 'D', text: '"Apa nama jenis sayuran yang ditanam di petak sebelah kanan?"' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pertanyaan "Bagaimana cara kelompokmu membagi jadwal..." menggali proses, cara kerja sama, dan komitmen nyata yang mengantarkan prestasi.',
  },
  {
    id: 29,
    type: 'pg',
    element: TP_3,
    topic: 'Memilih Kata Tanya Sesuai Konteks Paragraf',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator:
      'Disajikan teks singkat tokoh berprestasi, murid dapat menentukan pertanyaan yang jawabannya TIDAK terdapat dalam teks.',
    text: 'Bacalah teks berikut!\n\n"Taufik adalah siswa kelas 5 yang berhasil menjuarai lomba menulis cerpen tingkat kabupaten. Setiap hari sepulang sekolah, ia berlatih menulis satu paragraf cerita di buku catatannya. Ia dibimbing oleh Ibu Komang Ayu di perpustakaan sekolah sejak semester satu."\n\nPertanyaan di bawah ini yang jawabannya TIDAK terdapat dalam teks adalah ...',
    options: [
      { id: 'A', text: 'Siapa yang membimbing Taufik berlatih menulis cerpen?' },
      { id: 'B', text: 'Di mana Taufik biasa berlatih menulis cerpen?' },
      { id: 'C', text: 'Apa judul cerpen karya Taufik yang memenangkan perlombaan?' },
      { id: 'D', text: 'Bagaimana cara Taufik melatih kemampuan menulisnya setiap hari?' },
    ],
    correctAnswer: 'C',
    explanation:
      'Teks menjelaskan pembimbing (Ibu Komang Ayu), tempat (perpustakaan sekolah), dan cara berlatih (menulis satu paragraf tiap hari), namun tidak menyebutkan judul cerpennya.',
  },
  {
    id: 30,
    type: 'pg',
    element: TP_3,
    topic: 'Mengubah Kalimat Berita Menjadi Kalimat Tanya',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat mengubah kalimat pernyataan tentang sikap unggul menjadi kalimat tanya yang tepat.',
    text: 'Kalimat berita: "Siswa berprestasi selalu mencatat jadwal belajar dengan disiplin agar tidak menumpuk tugas."\n\nKalimat tanya yang paling sesuai untuk kalimat berita di atas adalah ...',
    options: [
      { id: 'A', text: 'Mengapa siswa berprestasi selalu mencatat jadwal belajar dengan disiplin?' },
      { id: 'B', text: 'Kapan siswa berprestasi membeli buku catatan jadwal belajar?' },
      { id: 'C', text: 'Berapa halaman buku catatan yang dimiliki siswa berprestasi?' },
      { id: 'D', text: 'Di mana siswa berprestasi menyimpan seluruh tugas sekolahnya?' },
    ],
    correctAnswer: 'A',
    explanation:
      'Frasa "agar tidak menumpuk tugas" menyatakan tujuan/alasan, sehingga kalimat tanya yang paling tepat menggunakan kata tanya "Mengapa".',
  },

  // --- LINGKUP MATERI 4: KATA IDIOM (SOAL 31 - 40) ---
  {
    id: 31,
    type: 'pg',
    element: TP_1,
    topic: 'Pengertian Kata Idiom',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat menjelaskan pengertian kata idiom (ungkapan) dalam bahasa Indonesia.',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="120" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
      <text x="210" y="23" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">KARTU CONTOH KATA IDIOM (UNGKAPAN)</text>
      <g transform="translate(20, 36)">
        <rect width="175" height="65" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="87" y="26" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#b45309" text-anchor="middle">"BANTING TULANG"</text>
        <text x="87" y="45" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Arti Kiasan: Bekerja sangat keras</text>
      </g>
      <g transform="translate(225, 36)">
        <rect width="175" height="65" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="87" y="26" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#b45309" text-anchor="middle">"TINGGI HATI"</text>
        <text x="87" y="45" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Arti Kiasan: Sombong / Angkuh</text>
      </g>
    </svg>`,
    text: 'Perhatikan kartu contoh di atas! Gabungan kata yang membentuk makna baru (makna kiasan) yang berbeda dari makna asli kata penyusunnya disebut ...',
    options: [
      { id: 'A', text: 'Idiom (ungkapan)' },
      { id: 'B', text: 'Sinonim' },
      { id: 'C', text: 'Antonim' },
      { id: 'D', text: 'Kata baku' },
    ],
    correctAnswer: 'A',
    explanation:
      'Idiom atau ungkapan adalah gabungan dua kata atau lebih yang memiliki makna kiasan tertentu dan tidak dapat diartikan secara harfiah kata per kata.',
  },
  {
    id: 32,
    type: 'pg',
    element: TP_1,
    topic: 'Makna Idiom "Banting Tulang"',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat menentukan arti idiom "banting tulang" dalam teks kisah kerja keras tokoh.',
    text: 'Bacalah kalimat berikut!\n\n"Ayah Rina rela banting tulang sejak fajar menyingsing demi membiayai pendidikan anak-anaknya hingga meraih gelar sarjana."\n\nMakna kata idiom "banting tulang" pada kalimat di atas adalah ...',
    options: [
      { id: 'A', text: 'Memukulkan tulang ke lantai' },
      { id: 'B', text: 'Bekerja dengan sangat keras dan sungguh-sungguh' },
      { id: 'C', text: 'Berolahraga senam pada pagi hari' },
      { id: 'D', text: 'Beristirahat sepanjang hari di rumah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Idiom "banting tulang" bermakna bekerja sangat keras atau berusaha mati-matian untuk mencapai tujuan atau mencukupi kebutuhan.',
  },
  {
    id: 33,
    type: 'pg',
    element: TP_1,
    topic: 'Makna Idiom "Gulung Tikar"',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat mengartikan idiom "gulung tikar" dalam konteks kewirausahaan.',
    text: 'Meskipun toko kelontong di sudut jalan itu sempat hampir gulung tikar karena sepi pembeli, pemiliknya tetap berkomitmen memperbaiki pelayanan hingga usahanya bangkit kembali.\n\nArti idiom "gulung tikar" adalah ...',
    options: [
      { id: 'A', text: 'Membersihkan karpet toko sebelum buka' },
      { id: 'B', text: 'Membuka cabang toko baru di kota lain' },
      { id: 'C', text: 'Mengalami kebangkrutan atau menutup usaha' },
      { id: 'D', text: 'Menjual tikar anyaman kepada pelanggan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Idiom "gulung tikar" dalam bidang usaha atau ekonomi berarti bangkrut atau terpaksa menghentikan/menutup usahanya.',
  },
  {
    id: 34,
    type: 'pg',
    element: TP_1,
    topic: 'Makna Idiom "Buah Tangan"',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat menentukan makna idiom "buah tangan" dalam kalimat.',
    text: 'Sepulang berkunjung dari rumah pengrajin kain tenun di Jembrana, Kadek membawa buah tangan berupa gantungan kunci tenun untuk sahabat-sahabatnya.\n\nMakna ungkapan "buah tangan" dalam kalimat tersebut adalah ...',
    options: [
      { id: 'A', text: 'Buah-buahan segar yang dipetik langsung' },
      { id: 'B', text: 'Barang hasil curian' },
      { id: 'C', text: 'Kerajinan tangan dari kayu' },
      { id: 'D', text: 'Oleh-oleh atau cenderamata' },
    ],
    correctAnswer: 'D',
    explanation:
      'Idiom "buah tangan" berarti oleh-oleh atau barang pemberian yang dibawa setelah bepergian.',
  },
  {
    id: 35,
    type: 'pg',
    element: TP_3,
    topic: 'Makna Idiom "Rendah Hati"',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator:
      'Murid dapat membedakan idiom "rendah hati" dengan "tinggi hati" dalam perilaku sehari-hari.',
    text: 'Walaupun Arya selalu meraih peringkat pertama di kelas dan memenangkan lomba cerdas cermat, ia tetap bersikap ramah serta rendah hati kepada semua teman.\n\nArti kata idiom "rendah hati" adalah ...',
    options: [
      { id: 'A', text: 'Tidak sombong dan ramah kepada sesama' },
      { id: 'B', text: 'Selalu merasa minder atau takut bergaul' },
      { id: 'C', text: 'Mudah marah ketika dikritik teman' },
      { id: 'D', text: 'Suka membanggakan kehebatan diri sendiri' },
    ],
    correctAnswer: 'A',
    explanation:
      'Idiom "rendah hati" bermakna tidak sombong atau santun dalam bersikap, berlawanan dengan "tinggi hati" (sombong) maupun "rendah diri" (minder).',
  },
  {
    id: 36,
    type: 'pg',
    element: TP_3,
    topic: 'Makna Idiom "Ringan Tangan"',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat menerapkan idiom "ringan tangan" dalam konteks sikap tolong-menolong di sekolah.',
    text: 'Setiap kali melihat teman kesulitan merapikan meja bazar atau membawa perlengkapan kelas, Bayu selalu datang membantu tanpa diminta. Oleh karena itu, teman-temannya menjuluki Bayu anak yang ...',
    options: [
      { id: 'A', text: 'Keras kepala' },
      { id: 'B', text: 'Ringan tangan' },
      { id: 'C', text: 'Panjang tangan' },
      { id: 'D', text: 'Berat hati' },
    ],
    correctAnswer: 'B',
    explanation:
      'Idiom "ringan tangan" memiliki arti suka menolong atau cepat membantu orang lain, sedangkan "panjang tangan" berarti suka mencuri.',
  },
  {
    id: 37,
    type: 'pg',
    element: TP_3,
    topic: 'Makna Idiom "Naik Daun"',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator:
      'Murid dapat menentukan arti idiom "naik daun" pada kisah keberhasilan produk wirausaha.',
    text: 'Berkat inovasi kemasan yang ramah lingkungan dan promosi yang jujur, produk tas anyaman buatan kelompok siswa kelas 5 kini sedang naik daun dan diminati banyak pembeli.\n\nMakna ungkapan "naik daun" pada kalimat tersebut adalah ...',
    options: [
      { id: 'A', text: 'Memanjat pohon untuk memetik daun' },
      { id: 'B', text: 'Mengalami penurunan jumlah pembeli' },
      { id: 'C', text: 'Sedang terkenal, laris, atau mendapat nasib baik' },
      { id: 'D', text: 'Terbuat dari bahan daun kering seluruhnya' },
    ],
    correctAnswer: 'C',
    explanation:
      'Idiom "naik daun" berarti sedang populer, laris, atau menanjak kariernya/usahanya.',
  },
  {
    id: 38,
    type: 'pg',
    element: TP_3,
    topic: 'Makna Idiom "Kepala Dingin"',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator:
      'Murid dapat menganalisis penggunaan idiom "kepala dingin" dalam menyelesaikan masalah kerja tim.',
    text: 'Ketika terjadi perbedaan pendapat saat mempersiapkan stan bazar sekolah, ketua kelompok mengajak seluruh anggota berdiskusi dengan kepala dingin agar ditemukan solusi terbaik.\n\nArti ungkapan "kepala dingin" adalah ...',
    options: [
      { id: 'A', text: 'Berbicara sambil mengompres kepala dengan es' },
      { id: 'B', text: 'Mengakhiri rapat dengan suara keras dan emosi' },
      { id: 'C', text: 'Memaksakan pendapat ketua kepada seluruh anggota' },
      { id: 'D', text: 'Tenang, sabar, dan tidak terburu-buru oleh emosi' },
    ],
    correctAnswer: 'D',
    explanation:
      'Idiom "kepala dingin" bermakna sikap tenang dan sabar dalam menghadapi persoalan sehingga mampu berpikir jernih.',
  },
  {
    id: 39,
    type: 'pg',
    element: TP_3,
    topic: 'Idiom "Berpangku Tangan"',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator:
      'Murid dapat menganalisis makna idiom "berpangku tangan" dalam kaitannya dengan etos kerja keras.',
    text: 'Untuk menjadi murid yang unggul dan berprestasi, kita tidak boleh hanya berpangku tangan menunggu keberuntungan datang tanpa belajar dan berusaha.\n\nMakna ungkapan "berpangku tangan" yang sesuai kalimat tersebut adalah ...',
    options: [
      { id: 'A', text: 'Berdiam diri dan tidak mau bekerja atau berusaha' },
      { id: 'B', text: 'Duduk rapi saat mendengarkan penjelasan guru di kelas' },
      { id: 'C', text: 'Bekerja sama membantu orang tua sepulang sekolah' },
      { id: 'D', text: 'Mencatat pelajaran dengan tekun di buku tulis' },
    ],
    correctAnswer: 'A',
    explanation:
      'Idiom "berpangku tangan" berarti bermalas-malasan atau hanya diam saja tanpa melakukan usaha apa pun.',
  },
  {
    id: 40,
    type: 'pg',
    element: TP_3,
    topic: 'Melengkapi Kalimat dengan Kata Idiom',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator:
      'Murid dapat memilih idiom yang paling tepat untuk melengkapi paragraf tentang ketekunan dan prestasi.',
    text: 'Bacalah paragraf rumpang berikut!\n\n"Putra merupakan siswa yang sangat mencintai ilmu pengetahuan. Setiap hari ia menghabiskan waktu luangnya di perpustakaan sehingga teman-temannya menjulukinya ... . Berkat ketekunannya membaca dan berlatih, ia berhasil menjadi juara Olimpiade Sains tingkat provinsi."\n\nKata idiom yang paling tepat untuk melengkapi bagian rumpang tersebut adalah ...',
    options: [
      { id: 'A', text: 'tangan kanan' },
      { id: 'B', text: 'kutu buku' },
      { id: 'C', text: 'buah bibir' },
      { id: 'D', text: 'kambing hitam' },
    ],
    correctAnswer: 'B',
    explanation:
      'Idiom "kutu buku" bermakna orang yang sangat gemar atau tekun membaca buku.',
  },

  // ============================================================================
  // BAGIAN II: 5 SOAL PILIHAN GANDA KOMPLEKS KATEGORI (PGK KATEGORI)
  // Setiap soal memiliki 3 pernyataan (Benar / Salah) - Bobot 6 Poin per Soal
  // ============================================================================
  {
    id: 41,
    type: 'pgk_kategori',
    element: TP_1,
    topic: 'Nilai Kewirausahaan, Komitmen & Kerja Keras',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator:
      'Disajikan gambar bazar sekolah, murid dapat mengevaluasi benar atau salah 3 pernyataan mengenai nilai kewirausahaan, komitmen, dan kerja keras.',
    image: imgBazarSekolah,
    text: 'Perhatikan gambar kegiatan bazar kewirausahaan siswa SD di atas! Tentukan apakah ketiga pernyataan berikut bernilai BENAR atau SALAH berdasarkan nilai kewirausahaan, komitmen, dan kerja keras!',
    statements: [
      {
        id: 's1',
        text: 'Menata barang dagangan secara rapi, mencantumkan label harga yang jelas, dan melayani pembeli dengan ramah mencerminkan sikap wirausaha yang baik.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Seorang wirausahawan cilik boleh mengurangi kualitas jajanan secara diam-diam demi mendapatkan keuntungan yang lebih besar.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Menjalankan tugas menjaga stan bazar sesuai jadwal yang telah disepakati bersama teman kelompok merupakan wujud sikap komitmen dan tanggung jawab.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (pelayanan ramah dan jujur adalah etika wirausaha). Pernyataan 2 SALAH (mengurangi kualitas merusak kepercayaan pelanggan). Pernyataan 3 BENAR (komitmen berarti menepati kesepakatan bersama).',
  },
  {
    id: 42,
    type: 'pgk_kategori',
    element: TP_2,
    topic: 'Etika & Langkah Wawancara Tokoh',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator:
      'Disajikan gambar kegiatan wawancara murid dengan pengrajin, murid dapat menilai benar atau salah 3 pernyataan mengenai pelaksanaan wawancara.',
    image: imgWawancaraPengrajin,
    text: 'Perhatikan gambar siswi yang sedang mewawancarai pengrajin bambu di atas! Tentukan nilai BENAR atau SALAH untuk setiap pernyataan tentang tata cara wawancara berikut!',
    statements: [
      {
        id: 's1',
        text: 'Pewawancara sebaiknya menyiapkan daftar pertanyaan sebelum menemui narasumber agar wawancara berjalan terarah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Saat narasumber sedang menjawab pertanyaan, pewawancara boleh memotong pembicaraan kapan saja jika jawaban dirasa terlalu panjang.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mencatat jawaban penting narasumber dan mengucapkan terima kasih di akhir kegiatan merupakan bagian dari etika wawancara yang santun.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (daftar pertanyaan wajib disiapkan saat tahap persiapan). Pernyataan 2 SALAH (memotong pembicaraan narasumber tidak santun). Pernyataan 3 BENAR (mencatat poin penting menjaga akurasi dan ucapan terima kasih menunjukkan sopan santun).',
  },
  {
    id: 43,
    type: 'pgk_kategori',
    element: TP_3,
    topic: 'Ketepatan Penggunaan Kata Tanya ADIKSIMBA',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator:
      'Murid dapat mengevaluasi ketepatan fungsi kata tanya pada 3 kalimat tanya wawancara.',
    image: `<svg viewBox="0 0 420 115" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="115" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="210" y="24" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">EVALUASI KALIMAT TANYA WAWANCARA</text>
      <rect x="20" y="36" width="380" height="62" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.2"/>
      <text x="32" y="55" font-family="sans-serif" font-size="9.5" fill="#1e293b">• Siapa = menanyakan tokoh/pelaku</text>
      <text x="32" y="72" font-family="sans-serif" font-size="9.5" fill="#1e293b">• Mengapa = menanyakan sebab/alasan</text>
      <text x="32" y="89" font-family="sans-serif" font-size="9.5" fill="#1e293b">• Berapa = menanyakan jumlah/ukuran/harga</text>
    </svg>`,
    text: 'Perhatikan panduan fungsi kata tanya di atas! Tentukan BENAR atau SALAH untuk ketepatan penggunaan kata tanya pada tiga kalimat wawancara berikut!',
    statements: [
      {
        id: 's1',
        text: 'Kalimat "Di mana Ibu belajar membuat kue tradisional ini?" tepat digunakan untuk menanyakan waktu kejadian.',
        correctAnswer: false,
      },
      {
        id: 's2',
        text: 'Kalimat "Mengapa Bapak memilih bahan bambu lokal untuk kerajinan ini?" tepat digunakan untuk menanyakan alasan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Kalimat "Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu buah tas anyaman?" tepat digunakan untuk menanyakan durasi atau jumlah waktu.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 SALAH ("Di mana" menanyakan tempat/lokasi, bukan waktu; waktu menggunakan "Kapan"). Pernyataan 2 BENAR ("Mengapa" menanyakan alasan). Pernyataan 3 BENAR ("Berapa lama" menanyakan ukuran/jumlah waktu).',
  },
  {
    id: 44,
    type: 'pgk_kategori',
    element: TP_3,
    topic: 'Identifikasi Ide Pokok & Kalimat Penjelas',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator:
      'Disajikan gambar murid belajar tekun dan sebuah paragraf, murid dapat menentukan kebenaran 3 pernyataan mengenai ide pokok dan isi teks.',
    image: imgBelajarTekun,
    text: 'Perhatikan gambar di atas dan bacalah paragraf berikut!\n\n"Disiplin belajar setiap hari membawa banyak manfaat bagi siswa kelas 5. Dengan jadwal belajar yang teratur, materi pelajaran lebih mudah dipahami sebelum ulangan tiba. Selain itu, siswa juga memiliki cukup waktu untuk beristirahat dan membantu orang tua di rumah."\n\nTentukan BENAR atau SALAH untuk ketiga pernyataan terkait paragraf di atas!',
    statements: [
      {
        id: 's1',
        text: 'Ide pokok paragraf tersebut adalah manfaat disiplin belajar setiap hari bagi siswa kelas 5.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kalimat kedua dan ketiga pada paragraf tersebut berfungsi sebagai kalimat penjelas yang merinci manfaat disiplin belajar.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Paragraf tersebut menjelaskan bahwa siswa yang disiplin belajar tidak memiliki waktu untuk membantu orang tua.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (kalimat pertama memuat inti paragraf). Pernyataan 2 BENAR (kalimat 2 dan 3 merinci manfaatnya). Pernyataan 3 SALAH (justru dalam teks siswa memiliki cukup waktu untuk membantu orang tua).',
  },
  {
    id: 45,
    type: 'pgk_kategori',
    element: TP_3,
    topic: 'Makna Kata Idiom & Sikap Unggul Berprestasi',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator:
      'Disajikan gambar kerja keras dan prestasi siswa, murid dapat menilai kebenaran 3 pernyataan tentang makna kata idiom dan sikap unggul.',
    image: imgKerjaKerasPrestasi,
    text: 'Perhatikan gambar siswa yang bekerja sama merawat kebun sekolah dan meraih medali prestasi di atas! Tentukan BENAR atau SALAH untuk setiap pernyataan tentang makna idiom dan nilai luhur berikut!',
    statements: [
      {
        id: 's1',
        text: 'Ungkapan "ringan tangan" tepat digunakan untuk menggambarkan siswa yang senang membantu teman merawat kebun sekolah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Setelah memenangkan medali prestasi, seorang murid yang unggul sebaiknya bersikap "besar kepala" kepada teman-temannya.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Idiom "berpangku tangan" bermakna bermalas-malasan tanpa usaha sehingga harus dihindari oleh pelajar yang ingin berprestasi.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR ("ringan tangan" = suka menolong). Pernyataan 2 SALAH ("besar kepala" = sombong, bertentangan dengan sikap unggul dan rendah hati). Pernyataan 3 BENAR ("berpangku tangan" = tidak mau berusaha).',
  },
];
