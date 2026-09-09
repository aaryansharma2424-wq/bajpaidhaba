/**
 * Bajpai Dhaba (Ramaiya) - Core Script (main.js)
 * Shared UI functionality: Sticky Header, Mobile Drawer,
 * Bottom Action Bar, Dynamic Copyright, and SVG Icons.
 */

import { RESTAURANT_CONFIG } from './restaurantData.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initFooterYear();
  initActiveNavLink();
  initClickToActions();
});

/**
 * Header Scroll Effects (Glassmorphism & Elevation)
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer Controls
 */
function initMobileDrawer() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close-btn');

  if (!hamburgerBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    hamburgerBtn.classList.add('open');
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    hamburgerBtn.classList.remove('open');
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburgerBtn.addEventListener('click', () => {
    if (drawer.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close drawer on link click
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/**
 * Highlight Current Page Link in Nav
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html') || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('active');
    } else if (href && currentPath.includes(href.replace('.html', '')) && href !== 'index.html') {
      link.classList.add('active');
    }
  });
}

/**
 * Auto-update Copyright Year in Footer
 */
function initFooterYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/**
 * Initialize Click-to-Call and Click-to-Directions everywhere
 */
function initClickToActions() {
  // Sync phone numbers
  const phoneLinks = document.querySelectorAll('.action-call-btn, a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.setAttribute('href', `tel:${RESTAURANT_CONFIG.phoneRaw}`);
  });

  // Sync directions
  const directionLinks = document.querySelectorAll('.action-directions-btn');
  directionLinks.forEach(link => {
    link.setAttribute('href', RESTAURANT_CONFIG.maps.directionsUrl);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}
