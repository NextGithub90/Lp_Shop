// ===== DAPUR SULTAN – Shared Menu Data =====
// Used by: daftar-menu.js, detail-produk.js, keranjang.js, index.html

const DS_MENU = [
  // NASI BOX
  {
    id: 1, cat: 'nasi-box', catLabel: 'Nasi Box',
    name: 'Nasi Box Sultan Premium',
    shortDesc: 'Ayam goreng crispy rempah + tempe orek + sayur lalapan + sambal + kerupuk.',
    desc: 'Nasi Box Sultan Premium adalah pilihan terbaik untuk acara kantor, seminar, atau arisan keluarga. Setiap porsi berisi nasi putih pulen, ayam goreng crispy bumbu rempah khas Dapur Sultan, tempe orek pedas manis, sayur lalapan segar, sambal bawang, dan kerupuk renyah. Dikemas dalam box premium yang higienis dan rapi.',
    isi: ['Nasi putih pulen', 'Ayam goreng crispy rempah', 'Tempe orek pedas manis', 'Sayur lalapan segar', 'Sambal bawang khas Sultan', 'Kerupuk renyah'],
    minOrder: 10, satuanOrder: 'porsi',
    img: 'img/ayam_Goreng.webp',
    gallery: ['img/ayam_Goreng.webp','img/ayamGoreng_lengkuas.webp','img/qual_pengemasan.webp','img/testi_1.webp'],
    price: 'Rp 35.000', priceNum: 35000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 4.8, reviewCount: 128,
    tags: ['Nasi Box', 'Ayam Goreng', 'Meeting', 'Kantor'],
  },
  {
    id: 2, cat: 'nasi-box', catLabel: 'Nasi Box',
    name: 'Nasi Box Ayam Bakar Rempah',
    shortDesc: 'Ayam bakar bumbu rempah Nusantara + nasi putih + lalapan segar + sambal hijau.',
    desc: 'Cita rasa autentik Nusantara dalam satu box. Ayam kampung pilihan dimarinasi dengan 12 rempah selama 6 jam lalu dibakar sempurna. Disajikan dengan nasi putih pulen, lalapan segar, dan sambal hijau khas Dapur Sultan yang pedas gurih.',
    isi: ['Nasi putih pulen', 'Ayam bakar bumbu rempah', 'Lalapan segar (timun, kemangi, tomat)', 'Sambal hijau khas Sultan', 'Kerupuk emping'],
    minOrder: 10, satuanOrder: 'porsi',
    img: 'img/ayamBakar_rempah.webp',
    gallery: ['img/ayamBakar_rempah.webp','img/rempah_juara.webp','img/qual_pengemasan.webp','img/testi_2.webp'],
    price: 'Rp 38.000', priceNum: 38000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.9, reviewCount: 87,
    tags: ['Nasi Box', 'Ayam Bakar', 'Rempah', 'Arisan'],
  },
  {
    id: 3, cat: 'nasi-box', catLabel: 'Nasi Box',
    name: 'Nasi Box Ayam Geprek',
    shortDesc: 'Ayam geprek sambal bawang super pedas level 1–5 sesuai selera.',
    desc: 'Untuk pecinta pedas sejati! Ayam goreng crispy digeprek dengan sambal bawang special level 1 hingga 5 sesuai selera. Disajikan bersama nasi putih pulen dan pelengkap segar. Pilihan paling populer untuk makan siang kantor dan acara anak muda.',
    isi: ['Nasi putih pulen', 'Ayam crispy geprek', 'Sambal bawang (pilih level 1-5)', 'Tahu goreng', 'Lalapan segar'],
    minOrder: 10, satuanOrder: 'porsi',
    img: 'img/ayam_Keprek.webp',
    gallery: ['img/ayam_Keprek.webp','img/keprek_istimewa.webp','img/qual_pengemasan.webp','img/qual_chef.webp'],
    price: 'Rp 32.000', priceNum: 32000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 4.7, reviewCount: 203,
    tags: ['Nasi Box', 'Ayam Geprek', 'Pedas', 'Kantor'],
  },
  {
    id: 4, cat: 'nasi-box', catLabel: 'Nasi Box',
    name: 'Nasi Box Lengkuas Juara',
    shortDesc: 'Ayam goreng lengkuas segar, renyah dan gurih sempurna dengan bumbu khas Sultan.',
    desc: 'Keistimewaan resep turun-temurun Dapur Sultan. Ayam dimarinasi dalam lengkuas segar dan rempah pilihan, kemudian digoreng hingga renyah sempurna. Menghasilkan cita rasa yang harum, gurih, dan menggugah selera.',
    isi: ['Nasi putih pulen', 'Ayam goreng lengkuas', 'Tempe goreng', 'Lalap dan sambal', 'Kerupuk'],
    minOrder: 10, satuanOrder: 'porsi',
    img: 'img/ayamGoreng_lengkuas.webp',
    gallery: ['img/ayamGoreng_lengkuas.webp','img/Lengkuas_Juara.webp','img/qual_pengemasan.webp','img/qual_chef.webp'],
    price: 'Rp 37.000', priceNum: 37000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.8, reviewCount: 56,
    tags: ['Nasi Box', 'Ayam Lengkuas', 'Syukuran'],
  },
  {
    id: 5, cat: 'nasi-box', catLabel: 'Nasi Box',
    name: 'Nasi Box Rempah Juara',
    shortDesc: 'Perpaduan 15 rempah pilihan dengan ayam kampung muda, harum dan lezat.',
    desc: 'Dibuat dari ayam kampung muda berusia 3 bulan yang dimarinasi dengan 15 jenis rempah pilihan selama 8 jam. Digoreng dengan teknik khusus untuk menghasilkan ayam yang juicy di dalam namun renyah di luar.',
    isi: ['Nasi putih pulen', 'Ayam rempah juara', 'Sambal matah', 'Lalapan premium', 'Emping goreng'],
    minOrder: 10, satuanOrder: 'porsi',
    img: 'img/rempah_juara.webp',
    gallery: ['img/rempah_juara.webp','img/rempah_istimewa.webp','img/qual_chef.webp','img/qual_pengemasan.webp'],
    price: 'Rp 40.000', priceNum: 40000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.6, reviewCount: 34,
    tags: ['Nasi Box', 'Rempah', 'Premium'],
  },
  {
    id: 6, cat: 'nasi-box', catLabel: 'Nasi Box',
    name: 'Nasi Box Sultan Penyet',
    shortDesc: 'Ayam penyet sambal bawang super pedas khas Sultan, komplit dengan tempe dan tahu.',
    desc: 'Ayam penyet legendaris khas Dapur Sultan dengan sambal bawang yang super pedas dan segar. Disajikan lengkap dengan tempe penyet, tahu goreng, dan lalapan segar. Pilihan sempurna untuk yang suka hidangan dengan cita rasa bold dan menggigit.',
    isi: ['Nasi putih pulen', 'Ayam penyet', 'Tempe penyet', 'Tahu goreng', 'Sambal bawang super pedas', 'Lalapan segar'],
    minOrder: 10, satuanOrder: 'porsi',
    img: 'img/sultan_penyet.webp',
    gallery: ['img/sultan_penyet.webp','img/sultan_lengkuas.webp','img/qual_pengemasan.webp','img/testi_3.webp'],
    price: 'Rp 36.000', priceNum: 36000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 4.9, reviewCount: 175,
    tags: ['Nasi Box', 'Penyet', 'Pedas', 'Favorit'],
  },
  // HANTARAN
  {
    id: 7, cat: 'hantaran', catLabel: 'Hantaran',
    name: 'Paket Hantaran Pernikahan Premium',
    shortDesc: 'Hantaran 20 porsi + Fresh Twilight untuk syukuran dan resepsi pernikahan.',
    desc: 'Paket hantaran eksklusif untuk momen pernikahan yang tak terlupakan. Setiap porsi dikemas dalam wadah premium dengan dekorasi cantik. Tersedia pilihan menu nasi box spesial, tumpeng mini, dan minuman Fresh Twilight yang menyegarkan.',
    isi: ['20 porsi nasi box spesial', 'Fresh Twilight (minuman premium)', 'Kemasan hantaran cantik', 'Dekorasi kartu ucapan'],
    minOrder: 1, satuanOrder: 'paket',
    img: 'img/promo_arisan.webp',
    gallery: ['img/promo_arisan.webp','img/cat_hantaran.webp','img/qual_pengemasan.webp','img/testi_1.webp'],
    price: 'Rp 1.150.000', priceNum: 1150000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.9, reviewCount: 42,
    tags: ['Hantaran', 'Pernikahan', 'Premium', 'Syukuran'],
  },
  {
    id: 8, cat: 'hantaran', catLabel: 'Hantaran',
    name: 'Paket Hantaran Arisan Cantik',
    shortDesc: 'Paket 15 porsi untuk arisan, tampilan menarik dan rasa istimewa.',
    desc: 'Sempurnakan momen arisan Anda dengan paket hantaran cantik dari Dapur Sultan. 15 porsi pilihan menu terlezat dikemas dalam box cantik dengan tampilan yang instagramable. Pasti bikin tamu terkesan!',
    isi: ['15 porsi menu pilihan', 'Box hantaran cantik', 'Minuman pelengkap', 'Kartu menu'],
    minOrder: 1, satuanOrder: 'paket',
    img: 'img/promo_arisan.webp',
    gallery: ['img/promo_arisan.webp','img/testi_1.webp','img/qual_pengemasan.webp','img/cat_hantaran.webp'],
    price: 'Rp 850.000', priceNum: 850000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 4.8, reviewCount: 67,
    tags: ['Hantaran', 'Arisan', 'Cantik'],
  },
  {
    id: 9, cat: 'hantaran', catLabel: 'Hantaran',
    name: 'Hantaran Syukuran Keluarga',
    shortDesc: 'Pilihan untuk syukuran keluarga dengan berbagai variasi lauk tradisional.',
    desc: 'Rayakan momen syukuran keluarga dengan hidangan hantaran berkualitas. Tersedia berbagai variasi lauk pauk tradisional Nusantara yang autentik dan lezat. Dikemas dengan sopan dan rapi untuk dibagikan kepada sanak saudara.',
    isi: ['Menu syukuran pilihan', 'Lauk pauk tradisional', 'Kemasan rapi dan higienis'],
    minOrder: 1, satuanOrder: 'paket',
    img: 'img/testi_1.webp',
    gallery: ['img/testi_1.webp','img/promo_arisan.webp','img/qual_chef.webp','img/cat_hantaran.webp'],
    price: 'Rp 650.000', priceNum: 650000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.7, reviewCount: 28,
    tags: ['Hantaran', 'Syukuran', 'Keluarga'],
  },
  // PAKET SULTAN
  {
    id: 10, cat: 'paket-sultan', catLabel: 'Paket Sultan',
    name: 'Paket Besek Nusantara Sultan',
    shortDesc: 'Nasi Besek Sapi Lada Hitam + Es Kuwut untuk acara spesial eksklusif.',
    desc: 'Pengalaman kuliner Nusantara yang istimewa dan berkesan. Nasi dalam besek bambu premium dengan daging sapi lada hitam berkualitas tinggi, disajikan lengkap dengan Es Kuwut yang menyegarkan. Pilihan sempurna untuk acara perusahaan dan gala dinner.',
    isi: ['Nasi besek bambu premium', 'Daging sapi lada hitam', 'Es Kuwut segar', 'Lauk pelengkap premium', 'Kemasan eksklusif'],
    minOrder: 10, satuanOrder: 'porsi',
    img: 'img/qual_pengemasan.webp',
    gallery: ['img/qual_pengemasan.webp','img/cat_nasi_besek.webp','img/qual_admin.webp','img/qual_chef.webp'],
    price: 'Rp 1.150.000', priceNum: 1150000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 5.0, reviewCount: 19,
    tags: ['Paket Sultan', 'Besek', 'Sapi', 'Corporate'],
  },
  {
    id: 11, cat: 'paket-sultan', catLabel: 'Paket Sultan',
    name: 'Paket Sultan VIP',
    shortDesc: 'Menu eksklusif 5 hidangan utama + minuman premium + dekorasi meja.',
    desc: 'Paket katering paling eksklusif dari Dapur Sultan. Lima hidangan utama dipilih dari menu terbaik kami, dilengkapi minuman premium dan dekorasi meja cantik. Tim profesional kami siap hadir langsung di lokasi acara Anda.',
    isi: ['5 hidangan utama pilihan chef', 'Minuman premium (2 jenis)', 'Dekorasi meja cantik', 'Tim pelayan profesional', 'Kemasan premium exclusive'],
    minOrder: 1, satuanOrder: 'paket',
    img: 'img/qual_admin.webp',
    gallery: ['img/qual_admin.webp','img/qual_pengemasan.webp','img/qual_chef.webp','img/promo_meeting.webp'],
    price: 'Rp 2.500.000', priceNum: 2500000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 5.0, reviewCount: 11,
    tags: ['Paket Sultan', 'VIP', 'Corporate', 'Exclusive'],
  },
  {
    id: 12, cat: 'paket-sultan', catLabel: 'Paket Sultan',
    name: 'Paket Meeting Kantor Sultan',
    shortDesc: 'Nasi box executive + snack box + minuman segar untuk rapat dan seminar.',
    desc: 'Solusi katering meeting kantor yang lengkap dan profesional. Setiap peserta mendapatkan nasi box executive dengan menu premium, snack box siang, dan minuman segar. Dikemas rapi dan higienis untuk memberikan kesan profesional di setiap rapat.',
    isi: ['Nasi box executive', 'Snack box (2 item)', 'Minuman segar pilihan', 'Serbet dan sendok garpu', 'Kemasan branded'],
    minOrder: 10, satuanOrder: 'set',
    img: 'img/promo_meeting.webp',
    gallery: ['img/promo_meeting.webp','img/qual_pengemasan.webp','img/qual_admin.webp','img/testi_2.webp'],
    price: 'Rp 75.000', priceNum: 75000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 4.9, reviewCount: 89,
    tags: ['Meeting', 'Kantor', 'Seminar', 'Corporate'],
  },
  // TUMPENG MINI
  {
    id: 13, cat: 'tumpeng-mini', catLabel: 'Tumpeng Mini',
    name: 'Tumpeng Mini Syukuran',
    shortDesc: 'Tumpeng kuning cantik untuk 5–10 orang dengan berbagai lauk pauk.',
    desc: 'Tumpeng mini cantik dan berkelas untuk momen syukuran keluarga atau kantor. Nasi kuning kunyit harum disajikan dalam bentuk kerucut indah, dikelilingi aneka lauk pauk tradisional yang lezat. Dapat melayani 5-10 orang.',
    isi: ['Nasi kuning (kerucut)', 'Ayam bumbu ungkep', 'Tempe orek', 'Sambal goreng kentang', 'Perkedel jagung', 'Telur balado', 'Urap sayur'],
    minOrder: 1, satuanOrder: 'buah',
    img: 'img/promo_tumpeng.webp',
    gallery: ['img/promo_tumpeng.webp','img/qual_chef.webp','img/qual_pengemasan.webp','img/testi_3.webp'],
    price: 'Rp 250.000', priceNum: 250000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 4.9, reviewCount: 156,
    tags: ['Tumpeng', 'Syukuran', 'Ulang Tahun', 'Tradisional'],
  },
  {
    id: 14, cat: 'tumpeng-mini', catLabel: 'Tumpeng Mini',
    name: 'Tumpeng Mini Ulang Tahun',
    shortDesc: 'Tumpeng hias spesial ulang tahun dengan dekorasi bunga dan lilin.',
    desc: 'Rayakan ulang tahun dengan cara yang unik dan berkesan! Tumpeng mini dihias cantik dengan dekorasi bunga edible, lilin ulang tahun, dan ornamen spesial. Tersedia pilihan kustomisasi nama dan warna dekorasi sesuai tema pesta.',
    isi: ['Nasi kuning hias', 'Lauk spesial 7 jenis', 'Dekorasi bunga edible', 'Lilin ulang tahun', 'Ornamen custom nama', 'Selotip dan kemasan cantik'],
    minOrder: 1, satuanOrder: 'buah',
    img: 'img/promo_tumpeng.webp',
    gallery: ['img/promo_tumpeng.webp','img/qual_chef.webp','img/testi_2.webp','img/qual_pengemasan.webp'],
    price: 'Rp 320.000', priceNum: 320000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 5.0, reviewCount: 72,
    tags: ['Tumpeng', 'Ulang Tahun', 'Hias', 'Custom'],
  },
  {
    id: 15, cat: 'tumpeng-mini', catLabel: 'Tumpeng Mini',
    name: 'Tumpeng Kemerdekaan',
    shortDesc: 'Edisi spesial merah putih untuk perayaan hari nasional dan acara perusahaan.',
    desc: 'Edisi spesial merah putih untuk merayakan kemerdekaan Indonesia dengan semangat nasionalisme. Tumpeng dihias dengan warna merah putih, bendera mini, dan ornamen patriotik yang cantik. Cocok untuk acara perusahaan dan instansi pemerintah.',
    isi: ['Nasi kuning merah putih', 'Lauk spesial 7 jenis', 'Dekorasi merah putih', 'Bendera mini', 'Ornamen patriotik'],
    minOrder: 1, satuanOrder: 'buah',
    img: 'img/promo_tumpeng.webp',
    gallery: ['img/promo_tumpeng.webp','img/qual_pengemasan.webp','img/qual_chef.webp','img/cat_tumpeng_mini.webp'],
    price: 'Rp 400.000', priceNum: 400000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.8, reviewCount: 38,
    tags: ['Tumpeng', 'Kemerdekaan', 'Nasional', 'Corporate'],
  },
  // NASI BESEK
  {
    id: 16, cat: 'nasi-besek', catLabel: 'Nasi Besek',
    name: 'Nasi Besek Ayam Bakar',
    shortDesc: 'Nasi dalam besek bambu alami dengan ayam bakar rempah + lalapan + sambal.',
    desc: 'Keunikan nasi dalam besek bambu anyaman tangan memberikan aroma alami yang menambah cita rasa. Ayam bakar bumbu rempah yang meresap sempurna, disajikan dengan lalapan segar dan sambal khas Dapur Sultan.',
    isi: ['Nasi putih (dalam besek bambu)', 'Ayam bakar bumbu rempah', 'Lalapan segar', 'Sambal bawang', 'Kerupuk'],
    minOrder: 10, satuanOrder: 'porsi',
    img: 'img/ayamBakar_rempah.webp',
    gallery: ['img/ayamBakar_rempah.webp','img/cat_nasi_besek.webp','img/qual_pengemasan.webp'],
    price: 'Rp 28.000', priceNum: 28000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 4.8, reviewCount: 94,
    tags: ['Nasi Besek', 'Ayam Bakar', 'Tradisional', 'Eco'],
  },
  {
    id: 17, cat: 'nasi-besek', catLabel: 'Nasi Besek',
    name: 'Nasi Besek Sapi Lada Hitam',
    shortDesc: 'Daging sapi lada hitam modern dalam besek bambu eksklusif.',
    desc: 'Perpaduan unik antara cita rasa modern dan penyajian tradisional. Daging sapi pilihan dimasak dengan saus lada hitam yang kaya rasa, disajikan dalam besek bambu eksklusif yang memberikan kesan mewah namun tetap ramah lingkungan.',
    isi: ['Nasi putih (dalam besek bambu)', 'Daging sapi lada hitam', 'Brokoli dan paprika', 'Acar timun', 'Kerupuk putih'],
    minOrder: 10, satuanOrder: 'porsi',
    img: 'img/rempah_istimewa.webp',
    gallery: ['img/rempah_istimewa.webp','img/cat_nasi_besek.webp','img/qual_pengemasan.webp'],
    price: 'Rp 42.000', priceNum: 42000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.7, reviewCount: 31,
    tags: ['Nasi Besek', 'Sapi', 'Premium', 'Modern'],
  },
  {
    id: 18, cat: 'nasi-besek', catLabel: 'Nasi Besek',
    name: 'Nasi Besek Ikan Bakar',
    shortDesc: 'Ikan segar pilihan dibakar dengan bumbu kuning khas Nusantara.',
    desc: 'Ikan segar dipilih setiap pagi dari supplier terpercaya, dimarinasi dengan bumbu kuning khas Nusantara yang harum, lalu dibakar dengan teknik tradisional. Pilihan sehat dan lezat dalam kemasan besek bambu ramah lingkungan.',
    isi: ['Nasi putih (dalam besek bambu)', 'Ikan bakar bumbu kuning', 'Sambal matah', 'Lalapan segar', 'Jeruk nipis'],
    minOrder: 10, satuanOrder: 'porsi',
    img: 'img/sultan_lengkuas.webp',
    gallery: ['img/sultan_lengkuas.webp','img/cat_nasi_besek.webp','img/qual_chef.webp'],
    price: 'Rp 35.000', priceNum: 35000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.6, reviewCount: 22,
    tags: ['Nasi Besek', 'Ikan Bakar', 'Sehat'],
  },
  // KUDAPAN
  {
    id: 19, cat: 'kudapan', catLabel: 'Kudapan',
    name: 'Paket Ngemil Rame-rame',
    shortDesc: 'Snackbox Kilau + Snackbox Rona + Snackbox Sekar dalam satu paket hemat.',
    desc: 'Paket snack terlengkap untuk acara bersama! Tiga varian snack box premium dalam satu paket: Snackbox Kilau (kue kering premium), Snackbox Rona (kue basah tradisional), dan Snackbox Sekar (gorengan premium). Cocok untuk meeting, arisan, atau acara kantor.',
    isi: ['Snackbox Kilau (5 item kue kering)', 'Snackbox Rona (5 item kue basah)', 'Snackbox Sekar (5 item gorengan)', 'Tissue dan sendok'],
    minOrder: 10, satuanOrder: 'set',
    img: 'img/cat_kudapan.webp',
    gallery: ['img/cat_kudapan.webp','img/testi_2.webp','img/qual_pengemasan.webp'],
    price: 'Rp 565.000', priceNum: 565000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.7, reviewCount: 45,
    tags: ['Kudapan', 'Snack Box', 'Arisan', 'Meeting'],
  },
  {
    id: 20, cat: 'kudapan', catLabel: 'Kudapan',
    name: 'Snack Box Arisan Cantik',
    shortDesc: 'Aneka kue tradisional dan modern dalam box cantik bertema.',
    desc: 'Box snack cantik dengan tema yang bisa dikustomisasi sesuai acara arisan Anda. Berisi perpaduan kue tradisional Indonesia yang lezat dan kue modern yang instagramable. Cocok untuk dibagikan sebagai oleh-oleh arisan.',
    isi: ['5 item kue pilihan', 'Box cantik bertema', 'Tissue makan', 'Label nama cantik'],
    minOrder: 10, satuanOrder: 'box',
    img: 'img/cat_kudapan.webp',
    gallery: ['img/cat_kudapan.webp','img/testi_3.webp','img/qual_pengemasan.webp'],
    price: 'Rp 25.000', priceNum: 25000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 4.8, reviewCount: 118,
    tags: ['Kudapan', 'Snack Box', 'Arisan', 'Cantik'],
  },
  {
    id: 21, cat: 'kudapan', catLabel: 'Kudapan',
    name: 'Mini Cake Sultan',
    shortDesc: 'Kue mini premium dengan berbagai rasa pilihan untuk oleh-oleh dan souvenir.',
    desc: 'Kue mini premium satu porsi dengan pilihan 6 rasa: Chocolate Lava, Red Velvet, Matcha, Taro, Salted Caramel, dan Vanilla Klasik. Cantik sebagai souvenir pernikahan, ulang tahun, atau oleh-oleh acara.',
    isi: ['Mini cake 1 porsi', 'Pilihan 6 rasa', 'Kemasan box cantik', 'Label rasa'],
    minOrder: 10, satuanOrder: 'pcs',
    img: 'img/cat_kudapan.webp',
    gallery: ['img/cat_kudapan.webp','img/testi_1.webp','img/qual_pengemasan.webp'],
    price: 'Rp 18.000', priceNum: 18000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.9, reviewCount: 67,
    tags: ['Kudapan', 'Kue', 'Souvenir', 'Ulang Tahun'],
  },
  // DIMSUM
  {
    id: 22, cat: 'dimsum', catLabel: 'Dimsum',
    name: 'Dimsum Box Premium 10 Pcs',
    shortDesc: 'Aneka dimsum segar: hakau, siomay, ceker pedas, cheong fun, dikukus fresh.',
    desc: 'Dimsum premium dikukus fresh setiap hari menggunakan bahan pilihan berkualitas tinggi dan 100% halal. Satu box berisi 10 pcs dengan 4 variasi dimsum favorit. Disajikan dengan saus khusus yang menggugah selera.',
    isi: ['Hakau (3 pcs)', 'Siomay (3 pcs)', 'Ceker pedas (2 pcs)', 'Cheong fun (2 pcs)', 'Saus dimsum spesial'],
    minOrder: 5, satuanOrder: 'box',
    img: 'img/cat_dimsum.webp',
    gallery: ['img/cat_dimsum.webp','img/testi_2.webp','img/qual_chef.webp'],
    price: 'Rp 55.000', priceNum: 55000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 4.9, reviewCount: 203,
    tags: ['Dimsum', 'Premium', 'Halal', 'Kukus'],
  },
  {
    id: 23, cat: 'dimsum', catLabel: 'Dimsum',
    name: 'Party Dimsum 50 Pcs',
    shortDesc: 'Paket dimsum 50 pcs untuk acara besar, 5 variasi pilihan.',
    desc: 'Paket dimsum party untuk acara besar. 50 pcs dimsum dengan 5 variasi pilihan yang bisa dikustomisasi sesuai selera. Dikemas dalam tray besar yang mudah disajikan langsung di meja buffet.',
    isi: ['50 pcs dimsum mix', '5 variasi bisa custom', 'Saus dimsum (250ml)', 'Tray party besar', 'Sumpit kayu'],
    minOrder: 1, satuanOrder: 'tray',
    img: 'img/cat_dimsum.webp',
    gallery: ['img/cat_dimsum.webp','img/qual_pengemasan.webp','img/qual_admin.webp'],
    price: 'Rp 250.000', priceNum: 250000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.7, reviewCount: 51,
    tags: ['Dimsum', 'Party', 'Besar', 'Buffet'],
  },
  {
    id: 24, cat: 'dimsum', catLabel: 'Dimsum',
    name: 'Dimsum Ceker Pedas Sultan',
    shortDesc: 'Ceker ayam dimsum pedas gurih dengan saus spesial Dapur Sultan.',
    desc: 'Ceker ayam premium yang dimasak dengan teknik dim sum tradisional, dipadukan dengan saus pedas gurih khas Dapur Sultan. Tekstur empuk dan kenyal dengan rasa yang kompleks. Cemilan favorit semua kalangan!',
    isi: ['Ceker ayam dimsum (6 pcs)', 'Saus pedas spesial Sultan', 'Acar jahe'],
    minOrder: 5, satuanOrder: 'box',
    img: 'img/cat_dimsum.webp',
    gallery: ['img/cat_dimsum.webp','img/testi_3.webp','img/qual_chef.webp'],
    price: 'Rp 35.000', priceNum: 35000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 4.8, reviewCount: 89,
    tags: ['Dimsum', 'Ceker', 'Pedas', 'Favorit'],
  },
  // HAMPERS
  {
    id: 25, cat: 'hampers', catLabel: 'Hampers',
    name: 'Paket Bogana Juara',
    shortDesc: 'Nasi Box Bogana + Fresh Twilight untuk momen spesial yang tak terlupakan.',
    desc: 'Hampers eksklusif dengan konsep Bogana (hidangan pembuka tradisional Sunda yang mewah). Perpaduan nasi box premium dengan minuman Fresh Twilight yang menyegarkan dalam kemasan hampers cantik. Cocok untuk hadiah dan souvenir acara.',
    isi: ['Nasi Box Bogana (1 porsi premium)', 'Fresh Twilight (1 botol)', 'Kemasan hampers cantik', 'Kartu ucapan'],
    minOrder: 1, satuanOrder: 'pcs',
    img: 'img/cat_hampers.webp',
    gallery: ['img/cat_hampers.webp','img/qual_pengemasan.webp','img/testi_1.webp'],
    price: 'Rp 185.000', priceNum: 185000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.8, reviewCount: 37,
    tags: ['Hampers', 'Souvenir', 'Hadiah', 'Premium'],
  },
  {
    id: 26, cat: 'hampers', catLabel: 'Hampers',
    name: 'Hampers Lebaran Sultan',
    shortDesc: 'Hampers eksklusif lebaran dengan kue premium dan sirup pilihan.',
    desc: 'Rayakan Lebaran dengan hampers mewah dari Dapur Sultan. Berisi aneka kue kering premium, sirup buah pilihan, dan snack berkualitas dalam kemasan hampers eksklusif yang cantik. Tersedia pilihan ukuran S, M, dan L.',
    isi: ['Kue kering premium (5 jenis)', 'Sirup buah pilihan (2 botol)', 'Snack premium', 'Kemasan hampers eksklusif', 'Pita dan kartu ucapan'],
    minOrder: 1, satuanOrder: 'pcs',
    img: 'img/cat_hampers.webp',
    gallery: ['img/cat_hampers.webp','img/testi_2.webp','img/qual_pengemasan.webp'],
    price: 'Rp 350.000', priceNum: 350000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: true,
    rating: 4.9, reviewCount: 134,
    tags: ['Hampers', 'Lebaran', 'Hadiah', 'Kue'],
  },
  {
    id: 27, cat: 'hampers', catLabel: 'Hampers',
    name: 'Hampers Wedding Gift',
    shortDesc: 'Hampers cantik untuk souvenir pernikahan dengan desain custom sesuai tema.',
    desc: 'Souvenir pernikahan yang berkesan dan berkelas. Hampers cantik yang dapat dikustomisasi 100% sesuai tema pernikahan Anda – pilihan warna, isi, hingga desain kemasan. Tim desainer kami siap membantu mewujudkan konsep impian Anda.',
    isi: ['Isi hampers custom', 'Kemasan custom desain', 'Label nama tamu', 'Pita dekorasi', 'Kartu ucapan custom'],
    minOrder: 1, satuanOrder: 'pcs',
    img: 'img/cat_hampers.webp',
    gallery: ['img/cat_hampers.webp','img/testi_3.webp','img/qual_pengemasan.webp'],
    price: 'Rp 95.000', priceNum: 95000, priceOri: null, discount: null,
    isNew: false, isPromo: false, isBest: false,
    rating: 4.7, reviewCount: 56,
    tags: ['Hampers', 'Wedding', 'Souvenir', 'Custom'],
  },
];

// ===== ROBUST CART SYSTEM (localStorage + Instant Badge Sync) =====
const DS_CART = {
  get() {
    try {
      return JSON.parse(localStorage.getItem('ds_cart') || '[]');
    } catch {
      return [];
    }
  },
  save(cart) {
    localStorage.setItem('ds_cart', JSON.stringify(cart));
    this.updateBadge();
    try {
      window.dispatchEvent(new Event('cart-updated'));
    } catch(e) {}
  },
  add(id, qty) {
    const cart = this.get();
    const item = DS_MENU.find(m => m.id === id);
    if (!item) return;
    const addQty = Math.max(1, parseInt(qty) || item.minOrder || 1);
    const existIndex = cart.findIndex(c => c.id === id);
    
    if (existIndex > -1) {
      cart[existIndex].qty = (cart[existIndex].qty || 0) + addQty;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.priceNum,
        img: item.img,
        qty: addQty,
        cat: item.cat,
        satuanOrder: item.satuanOrder || 'porsi',
        minOrder: item.minOrder || 1
      });
    }
    this.save(cart);
  },
  remove(id) {
    const cart = this.get().filter(c => c.id !== id);
    this.save(cart);
  },
  updateQty(id, qty) {
    const cart = this.get();
    const item = cart.find(c => c.id === id);
    if (item) {
      item.qty = Math.max(1, parseInt(qty) || 1);
      this.save(cart);
    }
  },
  total() {
    return this.get().reduce((sum, c) => sum + (c.price * (c.qty || 1)), 0);
  },
  count() {
    return this.get().length;
  },
  totalPcs() {
    return this.get().reduce((sum, c) => sum + (c.qty || 1), 0);
  },
  updateBadge() {
    const n = this.count();
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(el => {
      el.textContent = n;
      if (n > 0) {
        el.style.display = 'flex';
        el.style.transform = 'scale(1.25)';
        setTimeout(() => { el.style.transform = 'scale(1)'; }, 180);
      } else {
        el.style.display = 'none';
      }
    });
  },
  clear() {
    localStorage.removeItem('ds_cart');
    this.updateBadge();
    try {
      window.dispatchEvent(new Event('cart-updated'));
    } catch(e) {}
  }
};

// ===== UNIFIED CUSTOMER SERVICE WHATSAPP SELECTION POPUP =====
let dsPendingWAMsg = '';

function openWA(message) {
  openCSModal(message || 'Halo Dapur Sultan, saya ingin info pemesanan katering.');
}

function openCSModal(message) {
  dsPendingWAMsg = message || 'Halo Dapur Sultan, saya ingin info pemesanan katering.';
  let modal = document.getElementById('ds-cs-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'ds-cs-modal';
    modal.className = 'ds-cs-modal-overlay';
    modal.innerHTML = `
      <div class="ds-cs-modal-card">
        <div class="ds-cs-modal-header">
          <div class="ds-cs-modal-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.58 1.961.948 2.791.948 3.181 0 5.767-2.586 5.767-5.766.001-3.18-2.585-5.766-5.767-5.766zm10.007 5.868c-.001 5.518-4.489 10.007-10.008 10.007-1.748 0-3.414-.457-4.887-1.258l-5.643 1.478 1.503-5.502c-.88-1.524-1.373-3.27-1.373-5.078.001-5.518 4.489-10.007 10.008-10.007 5.518 0 10.007 4.489 10.007 10.007z"/></svg>
          </div>
          <div class="ds-cs-modal-titles">
            <h3>Hubungi Customer Service</h3>
            <p>Pilih nomor CS kami untuk respon cepat & ramah:</p>
          </div>
          <button class="ds-cs-modal-close" onclick="closeCSModal()" aria-label="Tutup">&times;</button>
        </div>
        <div class="ds-cs-modal-body">
          <button type="button" class="ds-cs-item" onclick="sendWACSTo('6281380033670')">
            <div class="ds-cs-item-avatar">CS 1</div>
            <div class="ds-cs-item-info">
              <div class="ds-cs-item-name">CS 1 - Dapur Sultan <span class="ds-cs-badge">Fast Response</span></div>
              <div class="ds-cs-item-phone">0813-8003-3670</div>
            </div>
            <div class="ds-cs-item-arrow">&#8594;</div>
          </button>
          <button type="button" class="ds-cs-item" onclick="sendWACSTo('6282112882600')">
            <div class="ds-cs-item-avatar">CS 2</div>
            <div class="ds-cs-item-info">
              <div class="ds-cs-item-name">CS 2 - Dapur Sultan <span class="ds-cs-badge">Siap Melayani</span></div>
              <div class="ds-cs-item-phone">0821-1288-2600</div>
            </div>
            <div class="ds-cs-item-arrow">&#8594;</div>
          </button>
        </div>
        <div class="ds-cs-modal-footer">
          <span>🕒 Buka setiap hari 10.00 - 23.00 WIB</span>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeCSModal();
    });
  }
  modal.classList.add('show');
}

function closeCSModal() {
  const modal = document.getElementById('ds-cs-modal');
  if (modal) modal.classList.remove('show');
}

function sendWACSTo(waNum) {
  closeCSModal();
  const text = encodeURIComponent(dsPendingWAMsg || 'Halo Dapur Sultan, saya ingin info pemesanan katering.');
  window.open(`https://wa.me/${waNum}?text=${text}`, '_blank');
}

// Global Listeners for instant Cart Badge synchronization
if (typeof window !== 'undefined') {
  window.DS_MENU = DS_MENU;
  window.DS_CART = DS_CART;
  window.openWA = openWA;
  window.openCSModal = openCSModal;
  window.closeCSModal = closeCSModal;
  window.sendWACSTo = sendWACSTo;
  window.addEventListener('storage', () => DS_CART.updateBadge());
  window.addEventListener('cart-updated', () => DS_CART.updateBadge());
  document.addEventListener('DOMContentLoaded', () => DS_CART.updateBadge());
}
