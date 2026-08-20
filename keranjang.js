// ===== DAPUR SULTAN – keranjang.js =====

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});

// ===== RENDER CART =====
function renderCart() {
  const cart = DS_CART.get();
  const wrap = document.getElementById('cart-items-wrap');
  const empty = document.getElementById('cart-empty');
  const formCard = document.getElementById('cart-form-card');
  const summaryCard = document.getElementById('cart-summary-card');
  const trustBadges = document.getElementById('cart-trust-badges');
  const bottomBar = document.getElementById('cart-bottom-bar');

  if (!cart || cart.length === 0) {
    wrap.innerHTML = '';
    empty.style.display = 'block';
    formCard.style.display = 'none';
    summaryCard.style.display = 'none';
    trustBadges.style.display = 'none';
    bottomBar.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  formCard.style.display = 'block';
  summaryCard.style.display = 'block';
  trustBadges.style.display = 'flex';
  bottomBar.style.display = 'flex';

  wrap.innerHTML = cart.map(item => {
    const product = DS_MENU.find(m => m.id === item.id) || {};
    const minOrder = product.minOrder || 1;
    const subtotal = item.price * item.qty;

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
            <span class="cart-item-price-unit">Rp ${item.price.toLocaleString('id-ID')} / ${product.satuanOrder || 'porsi'}</span>
          </div>
          
          <div class="cart-item-foot">
            <span class="cart-item-subtotal">Rp ${subtotal.toLocaleString('id-ID')}</span>
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" onclick="updateItemQty(${item.id}, -1)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12"><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
              <span class="cart-qty-num">${item.qty}</span>
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
  const cart = DS_CART.get();
  const item = cart.find(c => c.id === id);
  if (!item) return;

  const product = DS_MENU.find(m => m.id === id) || {};
  const minOrder = product.minOrder || 1;

  const newQty = item.qty + delta;
  if (newQty < minOrder) {
    if (confirm(`Minimal pemesanan untuk ${item.name} adalah ${minOrder} ${product.satuanOrder || 'porsi'}. Hapus item ini dari keranjang?`)) {
      removeItem(id);
    }
    return;
  }

  DS_CART.updateQty(id, newQty);
  renderCart();
}

// ===== REMOVE ITEM =====
function removeItem(id) {
  DS_CART.remove(id);
  showToast('Menu dihapus dari keranjang');
  renderCart();
}

// ===== CLEAR ALL =====
function clearAllCart() {
  if (confirm('Kosongkan semua pesanan di keranjang?')) {
    DS_CART.clear();
    showToast('Keranjang telah dikosongkan');
    renderCart();
  }
}

// ===== UPDATE SUMMARY =====
function updateSummary() {
  const cart = DS_CART.get();
  const total = DS_CART.total();
  const count = DS_CART.count();

  document.getElementById('sum-item-count').textContent = cart.length;
  document.getElementById('sum-subtotal').textContent = 'Rp ' + total.toLocaleString('id-ID');
  document.getElementById('sum-total').textContent = 'Rp ' + total.toLocaleString('id-ID');
  document.getElementById('bar-total-price').textContent = 'Rp ' + total.toLocaleString('id-ID');
}

// ===== CHECKOUT WA =====
function checkoutWA() {
  const cart = DS_CART.get();
  if (!cart || cart.length === 0) {
    alert('Keranjang Anda masih kosong.');
    return;
  }

  const name = document.getElementById('cust-name').value.trim();
  const date = document.getElementById('cust-date').value.trim();
  const address = document.getElementById('cust-address').value.trim();
  const note = document.getElementById('cust-note').value.trim();

  if (!name || !date || !address) {
    alert('Mohon lengkapi Nama, Tanggal Acara, dan Alamat Pengiriman terlebih dahulu.');
    if (!name) document.getElementById('cust-name').focus();
    else if (!date) document.getElementById('cust-date').focus();
    else if (!address) document.getElementById('cust-address').focus();
    return;
  }

  let itemsText = cart.map((item, idx) => {
    const product = DS_MENU.find(m => m.id === item.id) || {};
    const subtotal = item.price * item.qty;
    return `${idx + 1}. *${item.name}*\n   • Jumlah: ${item.qty} ${product.satuanOrder || 'porsi'}\n   • Subtotal: Rp ${subtotal.toLocaleString('id-ID')}`;
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

  window.open(`https://wa.me/6281380033670?text=${encodeURIComponent(message)}`, '_blank');
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('cart-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
