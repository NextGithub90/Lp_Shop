// ===== DAPUR SULTAN – keranjang.js =====

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});

// ===== RENDER CART =====
function renderCart() {
  const cart = (typeof DS_CART !== 'undefined') ? DS_CART.get() : [];
  const wrap = document.getElementById('cart-items-wrap');
  const empty = document.getElementById('cart-empty');
  const formCard = document.getElementById('cart-form-card');
  const summaryCard = document.getElementById('cart-summary-card');
  const trustBadges = document.getElementById('cart-trust-badges');
  const bottomBar = document.getElementById('cart-bottom-bar');

  if (!wrap || !empty) return;

  if (!cart || cart.length === 0) {
    wrap.innerHTML = '';
    empty.style.display = 'block';
    if (formCard) formCard.style.display = 'none';
    if (summaryCard) summaryCard.style.display = 'none';
    if (trustBadges) trustBadges.style.display = 'none';
    if (bottomBar) bottomBar.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  if (formCard) formCard.style.display = 'block';
  if (summaryCard) summaryCard.style.display = 'block';
  if (trustBadges) trustBadges.style.display = 'flex';
  if (bottomBar) bottomBar.style.display = 'flex';

  wrap.innerHTML = cart.map(item => {
    const product = (typeof DS_MENU !== 'undefined' ? DS_MENU : []).find(m => m.id === item.id) || {};
    const subtotal = (item.price || 0) * (item.qty || 1);
    const satuan = item.satuanOrder || product.satuanOrder || 'porsi';

    return `
      <div class="cart-item-card" id="cart-item-${item.id}">
        <img src="${item.img}" alt="${item.name}" class="cart-item-img" onclick="window.location.href='detail-produk.html?id=${item.id}'" onerror="this.src='img/ayam_Goreng.webp'" />
        <div class="cart-item-info">
          <div>
            <div class="cart-item-head">
              <span class="cart-item-name" onclick="window.location.href='detail-produk.html?id=${item.id}'">${item.name}</span>
              <button class="cart-item-del" onclick="removeItem(${item.id})" title="Hapus menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <span class="cart-item-price-unit">Rp ${(item.price || 0).toLocaleString('id-ID')} / ${satuan}</span>
          </div>
          
          <div class="cart-item-foot">
            <span class="cart-item-subtotal">Rp ${subtotal.toLocaleString('id-ID')}</span>
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" onclick="updateItemQty(${item.id}, -1)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <span class="cart-qty-num">${item.qty || 1}</span>
              <button class="cart-qty-btn" onclick="updateItemQty(${item.id}, 1)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateSummary();
}

// ===== UPDATE QTY =====
function updateItemQty(id, delta) {
  if (typeof DS_CART === 'undefined') return;
  const cart = DS_CART.get();
  const item = cart.find(c => c.id === id);
  if (!item) return;

  const product = (typeof DS_MENU !== 'undefined' ? DS_MENU : []).find(m => m.id === id) || {};
  const minOrder = product.minOrder || item.minOrder || 10;

  const newQty = (item.qty || minOrder) + delta;
  if (newQty < minOrder) {
    if (confirm(`Minimal pemesanan untuk ${item.name} adalah ${minOrder} ${product.satuanOrder || item.satuanOrder || 'porsi'}. Hapus item ini dari keranjang?`)) {
      removeItem(id);
    }
    return;
  }

  DS_CART.updateQty(id, newQty);
  renderCart();
}

// ===== REMOVE ITEM =====
function removeItem(id) {
  if (typeof DS_CART === 'undefined') return;
  DS_CART.remove(id);
  showToast('Menu dihapus dari keranjang');
  renderCart();
}

// ===== CLEAR ALL =====
function clearAllCart() {
  if (confirm('Kosongkan semua pesanan di keranjang?')) {
    if (typeof DS_CART !== 'undefined') DS_CART.clear();
    showToast('Keranjang telah dikosongkan');
    renderCart();
  }
}

// ===== UPDATE SUMMARY =====
function updateSummary() {
  if (typeof DS_CART === 'undefined') return;
  const cart = DS_CART.get();
  const total = DS_CART.total();

  const countEl = document.getElementById('sum-item-count');
  if (countEl) countEl.textContent = cart.length;

  const subtotalEl = document.getElementById('sum-subtotal');
  if (subtotalEl) subtotalEl.textContent = 'Rp ' + total.toLocaleString('id-ID');

  const totalEl = document.getElementById('sum-total');
  if (totalEl) totalEl.textContent = 'Rp ' + total.toLocaleString('id-ID');

  const barTotalEl = document.getElementById('bar-total-price');
  if (barTotalEl) barTotalEl.textContent = 'Rp ' + total.toLocaleString('id-ID');
}

// ===== CHECKOUT WA =====
function checkoutWA() {
  if (typeof DS_CART === 'undefined') return;
  const cart = DS_CART.get();
  if (!cart || cart.length === 0) {
    alert('Keranjang Anda masih kosong.');
    return;
  }

  const nameEl = document.getElementById('cust-name');
  const dateEl = document.getElementById('cust-date');
  const addressEl = document.getElementById('cust-address');
  const noteEl = document.getElementById('cust-note');

  const name = nameEl ? nameEl.value.trim() : '';
  const date = dateEl ? dateEl.value.trim() : '';
  const address = addressEl ? addressEl.value.trim() : '';
  const note = noteEl ? noteEl.value.trim() : '';

  if (!name || !date || !address) {
    alert('Mohon lengkapi Nama, Tanggal Acara, dan Alamat Pengiriman terlebih dahulu.');
    if (!name && nameEl) nameEl.focus();
    else if (!date && dateEl) dateEl.focus();
    else if (!address && addressEl) addressEl.focus();
    return;
  }

  const menuList = typeof DS_MENU !== 'undefined' ? DS_MENU : [];
  let itemsText = cart.map((item, idx) => {
    const product = menuList.find(m => m.id === item.id) || {};
    const subtotal = (item.price || 0) * (item.qty || 1);
    const satuan = item.satuanOrder || product.satuanOrder || 'porsi';
    return `${idx + 1}. *${item.name}*\n   • Jumlah: ${item.qty} ${satuan}\n   • Subtotal: Rp ${subtotal.toLocaleString('id-ID')}`;
  }).join('\n\n');

  const grandTotal = DS_CART.total();

  let message = `Halo Dapur Sultan! 👋\n` +
    `Saya ingin melakukan pemesanan katering dengan rincian berikut:\n\n` +
    `📋 *RINCIAN PESANAN:*\n` +
    `${itemsText}\n\n` +
    `━━━━━━━━━━━━━━━━━━━\n` +
    `💰 *TOTAL ESTIMASI: Rp ${grandTotal.toLocaleString('id-ID')}*\n\n` +
    `👤 *DATA PEMESAN:*\n` +
    `• Nama: ${name}\n` +
    `• Waktu Acara: ${date}\n` +
    `• Alamat: ${address}\n` +
    (note ? `• Catatan: ${note}\n` : '') +
    `\nMohon konfirmasi ketersediaan slot dan rincian ongkir. Terima kasih! 🙏`;

  if (typeof openCSModal === 'function') {
    openCSModal(message);
  } else {
    window.open(`https://wa.me/6281380033670?text=${encodeURIComponent(message)}`, '_blank');
  }
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('cart-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// Global exposure
if (typeof window !== 'undefined') {
  window.renderCart = renderCart;
  window.updateItemQty = updateItemQty;
  window.removeItem = removeItem;
  window.clearAllCart = clearAllCart;
  window.updateSummary = updateSummary;
  window.checkoutWA = checkoutWA;
  window.showToast = showToast;
}
