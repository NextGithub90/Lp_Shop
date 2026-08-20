// ===== DAPUR SULTAN – detail-produk.js =====

let currentProduct = null;
let currentQty = 1;

// ===== INIT =====
(function init() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const product = DS_MENU.find(m => m.id === id) || DS_MENU[0];

  if (!product) {
    document.getElementById('dp-name').textContent = 'Produk tidak ditemukan';
    return;
  }

  currentProduct = product;
  currentQty = product.minOrder || 1;
  document.getElementById('dp-qty-input').value = currentQty;

  renderProduct(product);
  if (window.DS_CART) DS_CART.updateBadge();

  // Scroll listener for topbar shadow
  window.addEventListener('scroll', () => {
    document.getElementById('dp-topbar').classList.toggle('scrolled', window.scrollY > 10);
  });
})();

// ===== RENDER PRODUCT =====
function renderProduct(p) {
  // Page title/meta
  document.title = p.name + ' - Dapur Sultan';
  document.getElementById('dp-topbar-title').textContent = p.name;
  document.getElementById('dp-bc-name').textContent = p.name.length > 22 ? p.name.slice(0,22)+'...' : p.name;

  // Category link
  const catLink = document.getElementById('dp-cat-link');
  catLink.textContent = p.catLabel;
  catLink.href = `daftar-menu.html?cat=${p.cat}`;

  // Gallery & Thumbnails
  renderGallery(p.gallery && p.gallery.length ? p.gallery : [p.img]);

  // Discount badge
  const db = document.getElementById('dp-discount');
  if (p.discount) {
    db.textContent = p.discount;
    db.style.display = 'block';
  } else {
    db.style.display = 'none';
  }

  // Tags
  const tagsRow = document.getElementById('dp-tags-row');
  let tagHTML = '';
  if (p.isNew) tagHTML += `<span class="dp-tag dp-tag-baru">Baru</span>`;
  if (p.isPromo) tagHTML += `<span class="dp-tag dp-tag-promo">Promo</span>`;
  if (p.isBest) tagHTML += `<span class="dp-tag dp-tag-best">Terlaris</span>`;
  tagHTML += `<span class="dp-tag dp-tag-halal">Halal</span>`;
  tagsRow.innerHTML = tagHTML;

  // Name & Short Subtitle
  document.getElementById('dp-name').textContent = p.name;
  document.getElementById('dp-short-desc').textContent = p.shortDesc || '';

  // Rating stars
  const starsEl = document.getElementById('dp-stars');
  const fullStars = Math.floor(p.rating || 5);
  const hasHalf = (p.rating || 5) % 1 >= 0.5;
  let starsHTML = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) starsHTML += '<span class="dp-star">★</span>';
    else if (i === fullStars && hasHalf) starsHTML += '<span class="dp-star" style="opacity:0.6">★</span>';
    else starsHTML += '<span class="dp-star-empty">★</span>';
  }
  starsEl.innerHTML = starsHTML;
  document.getElementById('dp-rating-num').textContent = (p.rating || 5.0).toFixed(1);
  document.getElementById('dp-review-count').textContent = `(${p.reviewCount || 50} ulasan)`;
  document.getElementById('dp-min-order').textContent = `Min. ${p.minOrder || 1} ${p.satuanOrder || 'porsi'}`;

  // Price
  document.getElementById('dp-price').textContent = p.price;
  if (p.priceOri) {
    document.getElementById('dp-price-ori').textContent = p.priceOri;
    document.getElementById('dp-price-ori').style.display = 'inline';
    if (p.discount) {
      document.getElementById('dp-savings').textContent = p.discount;
      document.getElementById('dp-savings').style.display = 'inline';
    }
  } else {
    document.getElementById('dp-price-ori').style.display = 'none';
    document.getElementById('dp-savings').style.display = 'none';
  }

  // Delivery
  document.getElementById('dp-estimasi').textContent = p.estimasi || 'Siap 2 jam setelah pemesanan';

  // Description
  document.getElementById('dp-desc').textContent = p.desc;

  // Isi Paket
  const isiList = document.getElementById('dp-isi-list');
  if (p.isi && p.isi.length) {
    isiList.innerHTML = p.isi.map(item => `
      <li class="dp-isi-item">
        <div class="dp-isi-check">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" width="9" height="9"><path d="m20 6-11 11-5-5"/></svg>
        </div>
        <span>${item}</span>
      </li>`).join('');
    document.getElementById('dp-isi-section').style.display = 'block';
  } else {
    document.getElementById('dp-isi-section').style.display = 'none';
  }

  // Qty & total
  currentQty = p.minOrder || 1;
  document.getElementById('dp-qty-input').value = currentQty;
  document.getElementById('dp-qty-input').min = p.minOrder || 1;
  document.getElementById('dp-min-note').textContent = `Min. ${p.minOrder || 1} ${p.satuanOrder || 'porsi'}`;
  updateTotal();

  // Related
  renderRelated(p);
}

// ===== GALLERY & THUMBNAILS =====
function renderGallery(imgs) {
  const mainImg = document.getElementById('dp-main-img');
  const thumbsRow = document.getElementById('dp-thumbnails-row');

  // Set default main image
  if (imgs && imgs.length > 0) {
    mainImg.src = imgs[0];
  }

  if (!imgs || imgs.length <= 1) {
    thumbsRow.innerHTML = '';
    thumbsRow.style.display = 'none';
    return;
  }

  thumbsRow.style.display = 'flex';
  thumbsRow.innerHTML = imgs.map((src, i) => `
    <div class="dp-thumb-item ${i === 0 ? 'active' : ''}" onclick="selectThumb(${i}, '${src}')">
      <img src="${src}" alt="thumbnail ${i+1}" onerror="this.src='img/ayam_Goreng.webp'" />
    </div>
  `).join('');
}

function selectThumb(index, src) {
  const mainImg = document.getElementById('dp-main-img');
  mainImg.style.opacity = '0.3';
  setTimeout(() => {
    mainImg.src = src;
    mainImg.style.opacity = '1';
  }, 120);

  document.querySelectorAll('.dp-thumb-item').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

// ===== RELATED =====
function renderRelated(product) {
  const related = DS_MENU.filter(m => m.cat === product.cat && m.id !== product.id).slice(0, 8);
  const container = document.getElementById('dp-related');
  if (!related.length) {
    container.closest('.dp-section').style.display = 'none';
    return;
  }
  container.closest('.dp-section').style.display = 'block';
  container.innerHTML = related.map(m => `
    <a href="detail-produk.html?id=${m.id}" class="dp-related-card">
      <img src="${m.img}" alt="${m.name}" class="dp-related-img" onerror="this.src='img/ayam_Goreng.webp'" loading="lazy" />
      <div class="dp-related-info">
        <div class="dp-related-name">${m.name}</div>
        <div class="dp-related-price">${m.price}</div>
      </div>
    </a>`).join('');
}

// ===== QUANTITY =====
function changeQty(delta) {
  const min = currentProduct ? (currentProduct.minOrder || 1) : 1;
  currentQty = Math.max(min, currentQty + delta);
  document.getElementById('dp-qty-input').value = currentQty;
  updateTotal();
}

function syncQtyInput() {
  const min = currentProduct ? (currentProduct.minOrder || 1) : 1;
  const val = parseInt(document.getElementById('dp-qty-input').value) || min;
  currentQty = Math.max(min, val);
  document.getElementById('dp-qty-input').value = currentQty;
  updateTotal();
}

function updateTotal() {
  if (!currentProduct) return;
  const total = currentProduct.priceNum * currentQty;
  document.getElementById('dp-total-price').textContent =
    'Rp ' + total.toLocaleString('id-ID');
}

// ===== CART =====
function addToCart() {
  if (!currentProduct) return;
  if (window.DS_CART) {
    DS_CART.add(currentProduct.id, currentQty);
  }
  const btn = document.getElementById('dp-btn-keranjang');
  btn.classList.add('added');
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><path d="m20 6-11 11-5-5"/></svg> Ditambahkan!`;
  showToast(`✓ ${currentQty} ${currentProduct.satuanOrder || 'porsi'} ditambahkan ke keranjang`);
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Tambah ke Keranjang`;
  }, 2000);
}

function beliSekarang() {
  if (!currentProduct) return;
  const msg = encodeURIComponent(
    `Halo Dapur Sultan! 👋\n\nSaya ingin memesan:\n\n` +
    `📦 *${currentProduct.name}*\n` +
    `📊 Jumlah: ${currentQty} ${currentProduct.satuanOrder || 'porsi'}\n` +
    `💰 Total: Rp ${(currentProduct.priceNum * currentQty).toLocaleString('id-ID')}\n\n` +
    `Mohon info ketersediaan dan jadwal pengiriman. Terima kasih! 🙏`
  );
  window.open(`https://wa.me/6281380033670?text=${msg}`, '_blank');
}

// ===== SHARE =====
function shareProduct() {
  if (!currentProduct) return;
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: currentProduct.name, text: currentProduct.shortDesc, url });
  } else {
    navigator.clipboard.writeText(url).then(() => showToast('Link disalin ke clipboard!'));
  }
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('dp-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
