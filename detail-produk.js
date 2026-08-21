// ===== DAPUR SULTAN – detail-produk.js =====

let currentProduct = null;
let currentQty = 10;

// ===== RENDER PRODUCT =====
function renderProduct(p) {
  if (!p) return;
  currentProduct = p;

  // Page title/meta
  document.title = p.name + ' - Dapur Sultan';
  const topTitle = document.getElementById('dp-topbar-title');
  if (topTitle) topTitle.textContent = p.name;
  
  const bcName = document.getElementById('dp-bc-name');
  if (bcName) bcName.textContent = p.name.length > 22 ? p.name.slice(0, 22) + '...' : p.name;

  // Category link
  const catLink = document.getElementById('dp-cat-link');
  if (catLink) {
    catLink.textContent = p.catLabel || 'Menu';
    catLink.href = `daftar-menu.html?cat=${p.cat}`;
  }

  // Gallery & Thumbnails
  renderGallery(p.gallery && p.gallery.length ? p.gallery : [p.img]);

  // Discount badge (hidden)
  const db = document.getElementById('dp-discount');
  if (db) db.style.display = 'none';

  // Tags (Only Terlaris & Halal)
  const tagsRow = document.getElementById('dp-tags-row');
  if (tagsRow) {
    let tagHTML = '';
    if (p.isBest) tagHTML += `<span class="dp-tag dp-tag-best">Terlaris</span>`;
    tagHTML += `<span class="dp-tag dp-tag-halal">Halal</span>`;
    tagsRow.innerHTML = tagHTML;
  }

  // Name & Short Subtitle
  const nameEl = document.getElementById('dp-name');
  if (nameEl) nameEl.textContent = p.name;
  const descEl = document.getElementById('dp-short-desc');
  if (descEl) descEl.textContent = p.shortDesc || '';

  // Rating stars
  const starsEl = document.getElementById('dp-stars');
  if (starsEl) {
    const fullStars = Math.floor(p.rating || 5);
    const hasHalf = (p.rating || 5) % 1 >= 0.5;
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) starsHTML += '<span class="dp-star">★</span>';
      else if (i === fullStars && hasHalf) starsHTML += '<span class="dp-star" style="opacity:0.6">★</span>';
      else starsHTML += '<span class="dp-star-empty">★</span>';
    }
    starsEl.innerHTML = starsHTML;
  }
  const ratNum = document.getElementById('dp-rating-num');
  if (ratNum) ratNum.textContent = (p.rating || 5.0).toFixed(1);
  const revCount = document.getElementById('dp-review-count');
  if (revCount) revCount.textContent = `(${p.reviewCount || 50} ulasan)`;

  const minOrd = document.getElementById('dp-min-order');
  if (minOrd) {
    minOrd.textContent = `Min. ${p.minOrder || 10} ${p.satuanOrder || 'porsi'}`;
  }

  // Price
  const priceEl = document.getElementById('dp-price');
  if (priceEl) priceEl.textContent = p.price;
  const oriEl = document.getElementById('dp-price-ori');
  if (oriEl) oriEl.style.display = 'none';
  const savEl = document.getElementById('dp-savings');
  if (savEl) savEl.style.display = 'none';

  // Description
  const fullDesc = document.getElementById('dp-desc');
  if (fullDesc) fullDesc.textContent = p.desc || p.shortDesc || '';

  // Isi Paket
  const isiList = document.getElementById('dp-isi-list');
  const isiSection = document.getElementById('dp-isi-section');
  if (p.isi && p.isi.length && isiList) {
    isiList.innerHTML = p.isi.map(item => `
      <li class="dp-isi-item">
        <div class="dp-isi-check">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" width="9" height="9"><path d="m20 6-11 11-5-5"/></svg>
        </div>
        <span>${item}</span>
      </li>`).join('');
    if (isiSection) isiSection.style.display = 'block';
  } else if (isiSection) {
    isiSection.style.display = 'none';
  }

  // Quantity initialization (starts at minOrder e.g. 10, then increments 10, 11, 12, 13...)
  currentQty = Math.max(1, p.minOrder || 10);
  const qtyInput = document.getElementById('dp-qty-input');
  if (qtyInput) {
    qtyInput.value = currentQty;
    qtyInput.min = String(currentQty);
  }
  const minNote = document.getElementById('dp-min-note');
  if (minNote) {
    minNote.textContent = `Min. ${p.minOrder || 10} ${p.satuanOrder || 'porsi'}`;
  }

  updateTotal();
  renderRelated(p);
}

// ===== GALLERY & THUMBNAILS =====
function renderGallery(imgs) {
  const mainImg = document.getElementById('dp-main-img');
  const thumbsRow = document.getElementById('dp-thumbnails-row');

  if (imgs && imgs.length > 0 && mainImg) {
    mainImg.src = imgs[0];
  }

  if (!thumbsRow) return;

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
  if (mainImg) {
    mainImg.style.opacity = '0.3';
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = '1';
    }, 120);
  }

  document.querySelectorAll('.dp-thumb-item').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

// ===== RELATED =====
function renderRelated(product) {
  const container = document.getElementById('dp-related');
  if (!container) return;
  const related = (typeof DS_MENU !== 'undefined' ? DS_MENU : [])
    .filter(m => m.cat === product.cat && m.id !== product.id)
    .slice(0, 8);

  const section = container.closest('.dp-section');
  if (!related.length) {
    if (section) section.style.display = 'none';
    return;
  }
  if (section) section.style.display = 'block';
  container.innerHTML = related.map(m => `
    <a href="detail-produk.html?id=${m.id}" class="dp-related-card">
      <img src="${m.img}" alt="${m.name}" class="dp-related-img" onerror="this.src='img/ayam_Goreng.webp'" loading="lazy" />
      <div class="dp-related-info">
        <div class="dp-related-name">${m.name}</div>
        <div class="dp-related-price">${m.price}</div>
      </div>
    </a>`).join('');
}

// ===== QUANTITY CONTROLLER (10, 11, 12, 13...) =====
function changeQty(delta) {
  const min = currentProduct ? (currentProduct.minOrder || 1) : 1;
  const input = document.getElementById('dp-qty-input');
  let val = parseInt(input ? input.value : currentQty) || min;
  
  if (delta < 0 && val <= min) {
    showToast(`Minimal pemesanan adalah ${min} ${currentProduct ? (currentProduct.satuanOrder || 'porsi') : 'porsi'}`);
    return;
  }

  val = Math.max(min, val + delta);
  currentQty = val;
  if (input) input.value = currentQty;
  updateTotal();
}

function syncQtyInput() {
  const min = currentProduct ? (currentProduct.minOrder || 1) : 1;
  const input = document.getElementById('dp-qty-input');
  let val = parseInt(input ? input.value : min) || min;
  if (val < min) {
    val = min;
    showToast(`Minimal pemesanan adalah ${min} ${currentProduct ? (currentProduct.satuanOrder || 'porsi') : 'porsi'}`);
  }
  currentQty = val;
  if (input) input.value = currentQty;
  updateTotal();
}

function updateTotal() {
  if (!currentProduct) return;
  const total = (currentProduct.priceNum || 0) * currentQty;
  const totalEl = document.getElementById('dp-total-price');
  if (totalEl) {
    totalEl.textContent = 'Rp ' + total.toLocaleString('id-ID');
  }
}

// ===== ADD TO CART =====
function addToCart() {
  if (!currentProduct) return;
  const input = document.getElementById('dp-qty-input');
  const min = currentProduct.minOrder || 1;
  if (input) {
    currentQty = Math.max(min, parseInt(input.value) || currentQty || min);
  }

  if (window.DS_CART) {
    DS_CART.add(currentProduct.id, currentQty);
  }

  const btn = document.getElementById('dp-btn-keranjang');
  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><path d="m20 6-11 11-5-5"/></svg> Ditambahkan!`;
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Tambah ke Keranjang`;
    }, 1800);
  }

  showToast(`✓ ${currentQty} ${currentProduct.satuanOrder || 'porsi'} ditambahkan ke keranjang`);
}

// ===== DIRECT BUY VIA WHATSAPP CS MODAL =====
function beliSekarang() {
  if (!currentProduct) return;
  const input = document.getElementById('dp-qty-input');
  const min = currentProduct.minOrder || 1;
  if (input) {
    currentQty = Math.max(min, parseInt(input.value) || currentQty || min);
  }

  const total = (currentProduct.priceNum || 0) * currentQty;
  const msg =
    `Halo Dapur Sultan! 👋\n\nSaya ingin memesan:\n\n` +
    `📦 *${currentProduct.name}*\n` +
    `📊 Jumlah: ${currentQty} ${currentProduct.satuanOrder || 'porsi'}\n` +
    `💰 Total: Rp ${total.toLocaleString('id-ID')}\n\n` +
    `Mohon info ketersediaan dan jadwal pengiriman. Terima kasih! 🙏`;

  if (typeof openCSModal === 'function') {
    openCSModal(msg);
  } else {
    window.open(`https://wa.me/6281380033670?text=${encodeURIComponent(msg)}`, '_blank');
  }
}

// ===== SHARE =====
function shareProduct() {
  if (!currentProduct) return;
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: currentProduct.name, text: currentProduct.shortDesc, url });
  } else if (navigator.clipboard) {
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

// ===== INIT ON LOAD & EVENT LISTENERS BINDING =====
function initDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const menuList = typeof DS_MENU !== 'undefined' ? DS_MENU : [];
  const product = menuList.find(m => m.id === id) || menuList[0];

  if (!product) {
    const nameEl = document.getElementById('dp-name');
    if (nameEl) nameEl.textContent = 'Produk tidak ditemukan';
    return;
  }

  renderProduct(product);
  if (window.DS_CART) DS_CART.updateBadge();

  // Scroll listener for topbar shadow
  window.addEventListener('scroll', () => {
    const tb = document.getElementById('dp-topbar');
    if (tb) tb.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Explicit event listener bindings
  const minusBtn = document.getElementById('dp-qty-minus');
  if (minusBtn) {
    minusBtn.onclick = (e) => { e.preventDefault(); changeQty(-1); };
  }
  const plusBtn = document.getElementById('dp-qty-plus');
  if (plusBtn) {
    plusBtn.onclick = (e) => { e.preventDefault(); changeQty(1); };
  }
  const qtyInput = document.getElementById('dp-qty-input');
  if (qtyInput) {
    qtyInput.oninput = syncQtyInput;
    qtyInput.onchange = syncQtyInput;
  }
  const cartBtn = document.getElementById('dp-btn-keranjang');
  if (cartBtn) {
    cartBtn.onclick = (e) => { e.preventDefault(); addToCart(); };
  }
  const buyBtn = document.getElementById('dp-btn-beli');
  if (buyBtn) {
    buyBtn.onclick = (e) => { e.preventDefault(); beliSekarang(); };
  }
}

// Expose globals for inline attributes
if (typeof window !== 'undefined') {
  window.changeQty = changeQty;
  window.syncQtyInput = syncQtyInput;
  window.addToCart = addToCart;
  window.beliSekarang = beliSekarang;
  window.shareProduct = shareProduct;
  window.selectThumb = selectThumb;
  window.updateTotal = updateTotal;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDetail);
  } else {
    initDetail();
  }
}
