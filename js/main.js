// ── Nav scroll effect ──────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Burger menu ────────────────────────────────────────
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Modal ──────────────────────────────────────────────
const overlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

function openModal(projectId) {
  const p = PROJECTS[projectId];
  if (!p) return;

  const levelClass = {
    'Autonome': 'autonomous',
    'Opérateur': 'operator',
    'Observateur': 'observer',
    'Force de proposition': 'fp',
    'Passionné': 'fp'
  }[p.level] || 'observer';

  const actionsHtml = p.actions.map(a => `<li>${a}</li>`).join('');

  const highlightsHtml = p.highlights
    ? `<h3>Résultats & points clés</h3>
       <div class="modal-tags">${p.highlights.map(h => `<span class="highlight">${h}</span>`).join('')}</div>`
    : '';

  const schemaHtml = p.schema
    ? `<h3>Architecture / schéma</h3><div class="modal-schema">${p.schema}</div>`
    : '';

  const stackHtml = p.stack
    ? `<h3>Technologies & outils</h3>
       <div class="modal-tags">${p.stack.map(s => `<span class="blue">${s}</span>`).join('')}</div>`
    : '';

  const galleryHtml = p.images && p.images.length
    ? `<h3>Aperçu de l'interface</h3>
       <div class="modal-gallery">
         ${p.images.map((img, i) => `<div class="gallery-item${i === 0 ? ' active' : ''}" data-index="${i}"><img src="${img.src}" alt="${img.caption}" loading="lazy" /><span class="gallery-caption">${img.caption}</span></div>`).join('')}
       </div>
       <div class="gallery-thumbs">
         ${p.images.map((img, i) => `<button class="gallery-thumb${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="${img.caption}"><img src="${img.src}" alt="${img.caption}" loading="lazy" /></button>`).join('')}
       </div>`
    : '';

  modalContent.innerHTML = `
    <div class="modal-badge">${p.badge}</div>
    <h2>${p.title}</h2>
    <p class="modal-desc">${p.description}</p>
    <h3>Ce que j'ai fait</h3>
    <ul class="modal-list">${actionsHtml}</ul>
    ${galleryHtml}
    ${schemaHtml}
    ${stackHtml}
    ${highlightsHtml}
  `;

  if (p.images && p.images.length) {
    const items = modalContent.querySelectorAll('.gallery-item');
    const thumbs = modalContent.querySelectorAll('.gallery-thumb');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.dataset.index);
        items.forEach(el => el.classList.remove('active'));
        thumbs.forEach(el => el.classList.remove('active'));
        items[idx].classList.add('active');
        thumb.classList.add('active');
      });
    });
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-project]').forEach(el => {
  el.addEventListener('click', () => openModal(el.dataset.project));
});
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── Scroll animations ──────────────────────────────────
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.bloc, .perso-card, .contact-card').forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});

// ── Skill bars animation trigger ──────────────────────
const contactSection = document.getElementById('contact');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.animationPlayState = 'running';
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

if (contactSection) {
  document.querySelectorAll('.bar-fill').forEach(b => {
    b.style.animationPlayState = 'paused';
  });
  barObserver.observe(contactSection);
}
