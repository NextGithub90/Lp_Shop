// ===== DAPUR SULTAN – main.js =====

// ===== OPEN WHATSAPP =====
function openWA(menu) {
  const msg = `Halo Dapur Sultan, saya ingin info tentang: ${menu}`;
  if (typeof openCSModal === 'function') {
    openCSModal(msg);
  } else {
    window.open(`https://wa.me/6281380033670?text=${encodeURIComponent(msg)}`, '_blank');
  }
}

// ===== FAQ ACCORDION =====
function toggleFaq(id) {
  const item = document.getElementById(`faq-${id}`);
  const ans  = document.getElementById(`faq-ans-${id}`);
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-a').hidden = true;
    el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });

  // Open clicked if was closed
  if (!isOpen) {
    item.classList.add('open');
    ans.hidden = false;
    item.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
    // Smooth scroll into view
    setTimeout(() => item.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }
}

// ===== PROMO SLIDER =====
let promoIndex = 0;
function slidePromo(dir) {
  const track = document.getElementById('promo-track');
  if (!track) return;
  const cards = track.querySelectorAll('.promo-card');
  const maxIndex = Math.max(0, cards.length - 2);
  promoIndex = Math.max(0, Math.min(promoIndex + dir, maxIndex));
  const cardWidth = cards[0].offsetWidth + 14; // gap
  track.style.transform = `translateX(-${promoIndex * cardWidth}px)`;
}

// Touch swipe on promo slider
(function() {
  const slider = document.getElementById('promo-slider');
  if (!slider) return;
  let startX = 0;
  slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) slidePromo(dx < 0 ? 1 : -1);
  }, { passive: true });
})();

// ===== COUNTING ANIMATION FOR STATS =====
function animateCounters() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  nums.forEach(el => {
    const raw = el.dataset.target;
    const isDecimal = raw.includes('.');
    const target = parseFloat(raw);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      if (isDecimal) {
        el.textContent = current.toFixed(1);
      } else {
        el.textContent = target >= 1000 ? Math.floor(current).toLocaleString('id-ID') : Math.floor(current);
      }
      if (current >= target) {
        if (isDecimal) {
          el.textContent = target.toFixed(1);
        } else {
          el.textContent = target >= 1000 ? target.toLocaleString('id-ID') : target;
        }
        clearInterval(timer);
      }
    }, 16);
  });
}

// ===== INTERSECTION OBSERVER =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('stats-section')) {
        animateCounters();
        observer.unobserve(entry.target);
      }
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

// Observe sections for fade-in
document.querySelectorAll(
  '.promo-section, .kategori-section, .kualitas-section, .stats-section, .cara-pesan-section, .contact-section, .faq-section'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});

// ===== HERO always visible =====
document.querySelector('.site-header').style.opacity = '1';

// ===== BOTTOM NAV ACTIVE STATE =====
const sections = {
  'nav-home': 'site-header',
  'nav-menu': 'kategori-section',
  'nav-faq': 'faq-section',
  'nav-kontak': 'contact-section'
};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id || (entry.target.tagName === 'HEADER' ? 'site-header' : '');
      Object.entries(sections).forEach(([navId, sectionId]) => {
        const nav = document.getElementById(navId);
        if (!nav) return;
        if (sectionId === id || (sectionId === 'site-header' && id === 'site-header')) {
          nav.classList.add('nav-active');
        } else {
          nav.classList.remove('nav-active');
        }
      });
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.site-header, #kategori-section, #faq-section, #contact-section').forEach(el => {
  navObserver.observe(el);
});

// ===== HERO LIVE SEARCH DROPDOWN =====
(function initHeroSearch() {
  const searchInput = document.getElementById('hero-search');
  const searchWrap = document.getElementById('hero-search-wrap');
  const clearBtn = document.getElementById('hero-search-clear');
  const dropdown = document.getElementById('hero-search-dropdown');

  if (!searchInput || !dropdown) return;

  function renderSearchResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      dropdown.style.display = 'none';
      dropdown.innerHTML = '';
      if (clearBtn) clearBtn.style.display = 'none';
      return;
    }

    if (clearBtn) clearBtn.style.display = 'flex';

    if (typeof DS_MENU === 'undefined' || !DS_MENU.length) {
      dropdown.style.display = 'none';
      return;
    }

    const matches = DS_MENU.filter(m => {
      const nameMatch = m.name && m.name.toLowerCase().includes(q);
      const descMatch = (m.shortDesc || m.desc || '').toLowerCase().includes(q);
      const catMatch = (m.catLabel || m.cat || '').toLowerCase().includes(q);
      const tagsMatch = m.tags && m.tags.some(t => t.toLowerCase().includes(q));
      return nameMatch || descMatch || catMatch || tagsMatch;
    });

    if (matches.length === 0) {
      dropdown.innerHTML = `
        <div class="search-empty-state">
          <p>🔍 Menu "<strong>${escapeHtml(query)}</strong>" tidak ditemukan</p>
          <a href="daftar-menu.html">Lihat semua daftar menu &rarr;</a>
        </div>
      `;
      dropdown.style.display = 'block';
      return;
    }

    const topMatches = matches.slice(0, 5);
    let html = topMatches.map(m => {
      const highlightedName = highlightMatch(m.name, q);
      return `
        <a href="detail-produk.html?id=${m.id}" class="search-item-result">
          <img src="${m.img}" alt="${escapeHtml(m.name)}" class="search-item-thumb" onerror="this.src='img/ayam_Goreng.webp'" />
          <div class="search-item-info">
            <div class="search-item-title">${highlightedName}</div>
            <div class="search-item-meta">
              <span class="search-item-cat">${m.catLabel || 'Menu'}</span>
              <span class="search-item-price">${m.price}</span>
            </div>
          </div>
        </a>
      `;
    }).join('');

    if (matches.length > 5) {
      html += `
        <a href="daftar-menu.html" class="search-footer-btn">
          Lihat semua ${matches.length} hasil di Daftar Menu &rarr;
        </a>
      `;
    } else {
      html += `
        <a href="daftar-menu.html" class="search-footer-btn">
          Buka Halaman Daftar Menu &rarr;
        </a>
      `;
    }

    dropdown.innerHTML = html;
    dropdown.style.display = 'block';
  }

  function highlightMatch(text, q) {
    const idx = text.toLowerCase().indexOf(q);
    if (idx === -1) return escapeHtml(text);
    const before = text.substring(0, idx);
    const match = text.substring(idx, idx + q.length);
    const after = text.substring(idx + q.length);
    return `${escapeHtml(before)}<mark>${escapeHtml(match)}</mark>${escapeHtml(after)}`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  searchInput.addEventListener('input', function() {
    renderSearchResults(this.value);
  });

  searchInput.addEventListener('focus', function() {
    if (this.value.trim()) renderSearchResults(this.value);
  });

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const q = this.value.trim();
      if (q) {
        window.location.href = 'daftar-menu.html';
      }
    } else if (e.key === 'Escape') {
      dropdown.style.display = 'none';
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      searchInput.value = '';
      dropdown.style.display = 'none';
      dropdown.innerHTML = '';
      clearBtn.style.display = 'none';
      searchInput.focus();
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (searchWrap && !searchWrap.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
})();

// ===== SCROLL TO TOP on logo click =====
const logo = document.getElementById('site-logo');
if (logo) {
  logo.style.cursor = 'pointer';
  logo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== HIDE FLOAT WA WHEN NEAR CONTACT SECTION =====
const floatWa = document.getElementById('float-wa');
const contactSection = document.getElementById('contact-section');
if (floatWa && contactSection) {
  const hideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      floatWa.style.opacity = entry.isIntersecting ? '0' : '1';
      floatWa.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
      floatWa.style.transition = 'opacity 0.3s ease';
    });
  }, { threshold: 0.3 });
  hideObserver.observe(contactSection);
}

console.log('🍛 Dapur Sultan – Selera Para Raja | Loaded');

// ===== TESTIMONI SLIDER =====
let testiIndex = 0;
function goTesti(idx) {
  const track = document.getElementById('testi-track');
  if (!track) return;
  testiIndex = idx;
  track.style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('.testi-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
}

// Auto-advance testi slider
setInterval(() => {
  const cards = document.querySelectorAll('.testi-card');
  if (cards.length) {
    goTesti((testiIndex + 1) % cards.length);
  }
}, 5000);

// Touch swipe on testi slider
(function() {
  const slider = document.getElementById('testi-slider');
  if (!slider) return;
  let startX = 0;
  slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      const cards = document.querySelectorAll('.testi-card');
      goTesti(dx < 0
        ? Math.min(testiIndex + 1, cards.length - 1)
        : Math.max(testiIndex - 1, 0));
    }
  }, { passive: true });
})();

// ===== OBSERVE NEW SECTIONS =====
document.querySelectorAll('.menu-ayam-section, .testimoni-section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});

// ===== FOOD STRIP SMOOTH SEAMLESS MARQUEE =====
(function() {
  const track = document.getElementById('food-strip-track');
  if (!track) return;
  
  // Duplicate elements once for seamless infinite CSS loop
  track.innerHTML = track.innerHTML + track.innerHTML;

  // Touch control for mobile: pause on touch, resume on release
  track.addEventListener('touchstart', () => {
    track.style.animationPlayState = 'paused';
  }, { passive: true });

  track.addEventListener('touchend', () => {
    track.style.animationPlayState = 'running';
  }, { passive: true });
})();

