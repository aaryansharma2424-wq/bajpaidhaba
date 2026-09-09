/**
 * Bajpai Dhaba (Ramaiya) - Digital Menu Interactive Logic (menu.js)
 * Supports Category Tabs, Live Search, Veg Indicators, and Easy Editing
 */

import { FULL_MENU_ITEMS, MENU_CATEGORIES } from './restaurantData.js';

document.addEventListener('DOMContentLoaded', () => {
  const categoriesContainer = document.getElementById('menuCategoriesContainer');
  const itemsContainer = document.getElementById('menuItemsContainer');
  const searchInput = document.getElementById('menuSearchInput');
  const totalCountSpan = document.getElementById('menuItemsCount');

  if (!itemsContainer) return;

  let activeCategory = 'all';
  let searchQuery = '';

  // Render Category Filter Tabs
  function renderCategories() {
    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = MENU_CATEGORIES.map(cat => `
      <button 
        type="button" 
        class="category-tab-btn ${cat.id === activeCategory ? 'active' : ''}"
        data-category="${cat.id}">
        ${cat.name}
      </button>
    `).join('');

    // Attach listeners
    categoriesContainer.querySelectorAll('.category-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        activeCategory = e.currentTarget.dataset.category;
        categoriesContainer.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        filterAndRenderItems();
      });
    });
  }

  // Filter and Render Menu Items
  function filterAndRenderItems() {
    const query = searchQuery.trim().toLowerCase();

    const filtered = FULL_MENU_ITEMS.filter(item => {
      const matchesCategory = (activeCategory === 'all') || 
                              (item.categoryId === activeCategory) ||
                              (activeCategory === 'specials' && item.badge.includes('Special') || item.badge.includes('Signature'));

      const matchesSearch = !query || 
                            item.name.toLowerCase().includes(query) ||
                            (item.hindiName && item.hindiName.includes(query)) ||
                            (item.description && item.description.toLowerCase().includes(query)) ||
                            item.categoryName.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (totalCountSpan) {
      totalCountSpan.textContent = `${filtered.length} Items Available`;
    }

    if (filtered.length === 0) {
      itemsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🍲</div>
          <h3 style="font-size: 1.3rem; color: var(--c-primary-dark); margin-bottom: 8px;">No matching dishes found</h3>
          <p style="color: var(--c-text-muted); font-size: 0.95rem;">Try searching for a different item like "Paneer", "Roti", or "Dal".</p>
        </div>
      `;
      return;
    }

    itemsContainer.innerHTML = filtered.map(item => `
      <div class="menu-item-row" data-id="${item.id}">
        <div class="menu-item-top">
          <div class="menu-item-heading">
            <span class="veg-badge" title="100% Pure Vegetarian"></span>
            <div>
              <h3 class="menu-item-title">${escapeHtml(item.name)}</h3>
              ${item.hindiName ? `<span class="menu-item-hindi">${escapeHtml(item.hindiName)}</span>` : ''}
            </div>
          </div>
          <div class="menu-item-price">${escapeHtml(item.price)}</div>
        </div>

        <p class="menu-item-desc">${escapeHtml(item.description)}</p>

        <div class="menu-item-badges">
          ${item.badge ? `<span class="menu-badge">${escapeHtml(item.badge)}</span>` : ''}
          ${item.verified ? `
            <span class="menu-badge menu-badge-verified" title="Verified favorite from diner reviews">
              ✓ Verified Favorite
            </span>
          ` : `
            <span class="menu-badge menu-badge-placeholder" title="Standard Dhaba Item (Price/Name can be modified in restaurantData.js)">
              ✎ Standard Menu
            </span>
          `}
        </div>
      </div>
    `).join('');
  }

  // Safe HTML Escaping
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

  // Search input handler with debounce
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterAndRenderItems();
    });
  }

  // Initial render
  renderCategories();
  filterAndRenderItems();
});
