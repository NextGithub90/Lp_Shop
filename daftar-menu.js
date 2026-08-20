// ===== DAPUR SULTAN – daftar-menu.js =====
// Data source: menu-data.js (DS_MENU & DS_CART)
const menuData = DS_MENU; // alias for compatibility

// ===== NAVIGATION =====
function goDetail(id) {
  window.location.href = `detail-produk.html?id=${id}`;
}

// ===== QUICK ADD CART =====
function quickAddCart(id, name, event) {
  if (event) event.stopPropagation();
  if (window.DS_CART) {
    const item = DS_MENU.find(m => m.id === id);
    const qty = item ? (item.minOrder || 1) : 1;
    DS_CART.add(id, qty);
    showMenuToast(`✓ ${name} ditambahkan ke keranjang`);
  }
}

// ===== TOAST NOTIFICATION =====
function showMenuToast(msg) {
  let toast = document.getElementById('menu-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'menu-toast';
    toast.className = 'menu-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ===== STATE =====
let currentCat = 'semua';
let currentChip = 'semua';
let searchQuery = '';

// ===== HELPERS =====
function openWA(menu) {
  const msg = encodeURIComponent(`Halo Dapur Sultan, saya ingin info tentang: ${menu}`);
  window.open(`https://wa.me/6281380033670?text=${msg}`, '_blank');
}

// ===== RENDER MENU =====
function renderMenu() {
  let data = [...menuData];

  if (currentCat !== 'semua') {
    data = data.filter(m => m.cat === currentCat);
  }

  if (currentChip === 'rekomendasi') data = data.filter(m => m.isBest || m.rating >= 4.8);
  else if (currentChip === 'promo') data = data.filter(m => m.isPromo);
  else if (currentChip === 'terlaris') data = data.filter(m => m.isBest);
  else if (currentChip === 'terbaru') data = data.filter(m => m.isNew);
  else if (currentChip === 'murah') data = [...data].sort((a, b) => a.priceNum - b.priceNum);
  else if (currentChip === 'mahal') data = [...data].sort((a, b) => b.priceNum - a.priceNum);

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    data = data.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.desc.toLowerCase().includes(q) ||
      m.cat.toLowerCase().includes(q)
    );
  }

  const list = document.getElementById('menu-list');
  const empty = document.getElementById('empty-state');
  const countEl = document.getElementById('menu-count');
  countEl.textContent = data.length + ' Menu';

  if (data.length === 0) {
    list.innerHTML = '';
    empty.classList.add('show');
    return;
  }
  empty.classList.remove('show');

  list.innerHTML = data.map(m => {
    const safeName = m.name.replace(/'/g, "\\'");
    return `
    <div class="menu-item fade-in" onclick="goDetail(${m.id})">
      <div class="menu-item-img-wrap">
        <img src="${m.img}" alt="${m.name}" class="menu-item-img" loading="lazy" onerror="this.src='img/ayam_Goreng.webp'" />
        ${m.discount ? `<span class="discount-badge">${m.discount}</span>` : ''}
      </div>
      <div class="menu-item-info">
        <div class="menu-item-name">${m.name}</div>
        <div class="menu-item-desc">${m.desc}</div>
        <div class="menu-item-tags">
          ${m.isNew ? `<span class="tag tag-baru"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="10" height="10"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Baru</span>` : ''}
          ${m.isPromo ? `<span class="tag tag-promo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="10" height="10"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> Promo</span>` : ''}
          ${m.isBest ? `<span class="tag tag-best"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="10" height="10"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> Terlaris</span>` : ''}
          <span class="tag tag-halal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="10" height="10"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> Halal</span>
        </div>
        <div class="menu-item-price-row">
          <div>
            <span class="menu-item-price">${m.price}</span>
            ${m.priceOri ? `<span class="menu-item-price-original">${m.priceOri}</span>` : ''}
          </div>
          <div class="menu-item-actions">
            <button class="btn-quick-cart" onclick="quickAddCart(${m.id}, '${safeName}', event)" title="Tambah ke Keranjang">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              + Keranjang
            </button>
            <button class="btn-pesan" onclick="event.stopPropagation(); goDetail(${m.id})">
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  setTimeout(() => {
    document.querySelectorAll('.menu-item.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 40);
    });
  }, 30);
}

// ===== INTRO CONTENT BY CATEGORY =====
const catIntros = {
  'semua': { title:'Menu Katering Premium Dapur Sultan', desc:'Nikmati beragam pilihan menu katering berkualitas tinggi dari Dapur Sultan - dari nasi box praktis hingga paket luxury mewah. Setiap hidangan diracik dari bahan segar pilihan, dikemas higienis, dan siap diantar ke lokasi Anda.' },
  'nasi-box': { title:'Nasi Box Jakarta & Nasi Kotak untuk Setiap Acara', desc:'Dapur Sultan menyediakan nasi box dengan cita rasa rumahan untuk berbagai kebutuhan mulai dari rapat kantor, seminar, arisan, hingga syukuran keluarga. Setiap nasi box diracik dari bahan segar pilihan dan dikemas higienis.' },
  'hantaran': { title:'Paket Hantaran Cantik untuk Acara Pernikahan & Spesial', desc:'Paket hantaran cantik dan berkesan untuk pernikahan, akad nikah, syukuran, dan seserahan. Dikemas dengan tampilan premium dan rasa autentik khas masakan rumahan Nusantara yang selalu dikenang.' },
  'paket-luxury': { title:'Paket Luxury - Katering Premium Eksklusif Terbaik', desc:'Pengalaman katering mewah dengan bahan-bahan pilihan premium, penyajian eksklusif, dan layanan profesional. Cocok untuk acara perusahaan, pesta ulang tahun mewah, dan perayaan istimewa.' },
  'tumpeng-mini': { title:'Tumpeng Mini untuk Syukuran & Ulang Tahun', desc:'Tumpeng mini cantik dengan pilihan tumpeng kuning, putih, dan hias. Cocok untuk syukuran, ulang tahun, hari jadi, dan acara keluarga. Tersedia berbagai ukuran sesuai jumlah tamu undangan.' },
  'nasi-besek': { title:'Nasi Besek Bambu - Cita Rasa Tradisional Otentik', desc:'Nasi disajikan dalam besek bambu anyaman tradisional, memberi kesan alami dan otentik Nusantara. Pilihan lauk beragam mulai dari ayam, ikan, sapi hingga vegetarian. Higienis dan ramah lingkungan.' },
  'kudapan': { title:'Kudapan & Snack Box untuk Rapat & Arisan', desc:'Aneka kudapan dan snack box berkualitas untuk meeting kantor, arisan, seminar, dan acara sosial. Variasi kue basah tradisional, kue kering modern, dan minuman segar dalam kemasan cantik.' },
  'dimsum': { title:'Dimsum Segar Kukus - Lezat & Halal 100%', desc:'Dimsum premium dikukus fresh setiap hari menggunakan bahan-bahan pilihan halal bersertifikat. Aneka pilihan hakau, siomay, ceker, cheong fun, dan banyak lagi untuk berbagai acara.' },
  'hampers': { title:'Hampers Eksklusif untuk Hadiah & Souvenir Acara', desc:'Hampers cantik dan berkelas untuk berbagai kesempatan: lebaran, natal, ulang tahun, pernikahan. Dapat dikustomisasi sesuai tema dan budget acara Anda dengan desain kemasan mewah.' },
};
const catLabels = {
  'semua':'Semua Menu','nasi-box':'Nasi Box','hantaran':'Hantaran',
  'paket-luxury':'Paket Luxury','tumpeng-mini':'Tumpeng Mini',
  'nasi-besek':'Nasi Besek','kudapan':'Kudapan','dimsum':'Dimsum','hampers':'Hampers'
};

// ===== FILTER CATEGORY =====
function filterCat(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const intro = catIntros[cat] || catIntros['semua'];
  document.getElementById('menu-intro-title').textContent = intro.title;
  document.getElementById('menu-intro-desc').textContent = intro.desc;
  document.getElementById('breadcrumb-cat').textContent = catLabels[cat] || 'Semua Menu';
  document.getElementById('menu-section-title').textContent = catLabels[cat] || 'Semua Menu';
  renderMenu();
}

// ===== FILTER CHIP (quick pills) =====
function filterChip(type, btn) {
  currentChip = type;
  document.querySelectorAll('.fpill').forEach(c => c.classList.remove('fpill-active'));
  btn.classList.add('fpill-active');
  renderMenu();
}

// ===== SORT BOTTOM SHEET =====
function toggleSortSheet() {
  const sheet = document.getElementById('sort-sheet');
  const overlay = document.getElementById('sort-overlay');
  const btn = document.getElementById('sort-btn');
  const isOpen = sheet.classList.contains('show');
  if (isOpen) {
    closeSortSheet();
  } else {
    sheet.classList.add('show');
    overlay.classList.add('show');
    btn.classList.add('open');
  }
}

function closeSortSheet() {
  document.getElementById('sort-sheet').classList.remove('show');
  document.getElementById('sort-overlay').classList.remove('show');
  document.getElementById('sort-btn').classList.remove('open');
}

function applySortSheet(type, label) {
  currentChip = type;
  document.getElementById('sort-label').textContent = label;
  document.querySelectorAll('.sort-option').forEach(opt => opt.classList.remove('sort-option-selected'));
  const target = document.getElementById('sort-opt-' + type);
  if (target) target.classList.add('sort-option-selected');
  document.querySelectorAll('.fpill').forEach(c => c.classList.remove('fpill-active'));
  renderMenu();
  setTimeout(closeSortSheet, 250);
}

// ===== SEARCH =====
document.getElementById('menu-search').addEventListener('input', function() {
  searchQuery = this.value;
  renderMenu();
});
document.getElementById('menu-search').addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && this.value.trim()) {
    openWA('Cari menu: ' + this.value.trim());
  }
});

// ===== URL PARAMS FOR DEEP LINK =====
(function() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat && catLabels[cat]) {
    const pill = document.querySelector(`.cat-pill[data-cat="${cat}"]`);
    if (pill) { filterCat(cat, pill); return; }
  }
  renderMenu();
  if (window.DS_CART) DS_CART.updateBadge();
})();

console.log('Dapur Sultan Daftar Menu Loaded');
