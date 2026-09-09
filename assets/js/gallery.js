/**
 * Bajpai Dhaba (Ramaiya) - Gallery & Lightbox Logic (gallery.js)
 * High-res photography viewer, Category filtering, and Keyboard accessibility
 */

import { GALLERY_ITEMS } from './restaurantData.js';

document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('galleryGrid');
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  if (!galleryGrid) return;

  let currentCategory = 'all';
  let filteredItems = [...GALLERY_ITEMS];
  let currentIndex = 0;

  // Render gallery cards
  function renderGallery() {
    filteredItems = currentCategory === 'all' 
      ? [...GALLERY_ITEMS]
      : GALLERY_ITEMS.filter(item => item.category === currentCategory);

    galleryGrid.innerHTML = filteredItems.map((item, index) => `
      <div class="gallery-card" data-index="${index}">
        <img 
          src="${item.image}" 
          alt="${escapeHtml(item.title)}" 
          class="gallery-card-img" 
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80'"
        />
        <div class="gallery-card-overlay">
          <h3 class="gallery-card-title">${escapeHtml(item.title)}</h3>
          <p class="gallery-card-subtitle">${escapeHtml(item.subtitle)}</p>
          ${item.ownerNote ? `<span style="font-size: 0.7rem; color: #F8E2AF; margin-top: 4px; display: block;">📷 ${escapeHtml(item.ownerNote)}</span>` : ''}
        </div>
      </div>
    `).join('');

    // Attach click listeners to cards
    galleryGrid.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.index, 10);
        openLightbox(idx);
      });
    });
  }

  // Filter category buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentCategory = e.currentTarget.dataset.filter;
      renderGallery();
    });
  });

  // Lightbox functionality
  function openLightbox(index) {
    if (!lightboxModal || !filteredItems[index]) return;
    currentIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = filteredItems[currentIndex];
    if (!item) return;

    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxCaption.innerHTML = `
      <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 4px;">${escapeHtml(item.title)}</h3>
      <p style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.85);">${escapeHtml(item.subtitle)}</p>
      ${item.ownerNote ? `<p style="font-size: 0.78rem; color: #F8E2AF; margin-top: 6px;">📷 ${escapeHtml(item.ownerNote)}</p>` : ''}
    `;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % filteredItems.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    updateLightboxContent();
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNext);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrev);

  // Close when clicking overlay outside content
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation (Esc, Left, Right)
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // Initial render
  renderGallery();
});
