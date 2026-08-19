// ===== DAPUR SULTAN – main.js =====

// ===== OPEN WHATSAPP =====
function openWA(menu) {
  const msg = encodeURIComponent(`Halo Dapur Sultan, saya ingin info tentang: ${menu}`);
  window.open(`https://wa.me/6281380033670?text=${msg}`, '_blank');
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
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current >= target) {
        el.textContent = target;
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

// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.getElementById('hero-search');
if (searchInput) {
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim()) {
      const msg = encodeURIComponent(`Halo Dapur Sultan, saya cari menu: ${this.value.trim()}`);
      window.open(`https://wa.me/6281380033670?text=${msg}`, '_blank');
      this.value = '';
    }
  });
}

// ===== DUPLICATE FOOD CAROUSEL for infinite scroll =====
(function() {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  const original = track.innerHTML;
  track.innerHTML = original + original; // Duplicate for seamless loop
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

// ===== FOOD STRIP AUTO SCROLL =====
(function() {
  const track = document.getElementById('food-strip-track');
  if (!track) return;
  track.innerHTML = track.innerHTML + track.innerHTML; // duplicate
  let scrollPos = 0;
  setInterval(() => {
    scrollPos += 1;
    if (scrollPos >= track.scrollWidth / 2) scrollPos = 0;
    track.scrollLeft = scrollPos;
  }, 25);
})();
