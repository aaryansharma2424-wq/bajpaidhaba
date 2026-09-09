/**
 * Bajpai Dhaba (Ramaiya) - Forms Logic (forms.js)
 * Contact & Feedback Form UX, Star Rating, Validation,
 * and Google Sheets / Apps Script Webhook Integration.
 */

import { RESTAURANT_CONFIG } from './restaurantData.js';

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initFeedbackForm();
});

/**
 * Contact / Reservation Inquiry Form
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const statusBox = document.getElementById('contactStatusBox');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous errors
    clearErrors(form);

    const nameInput = form.querySelector('[name="name"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const messageInput = form.querySelector('[name="message"]');

    let hasError = false;

    // Validation
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your name');
      hasError = true;
    }

    const phoneVal = phoneInput.value.trim().replace(/\D/g, '');
    if (!phoneVal || phoneVal.length < 10) {
      showError(phoneInput, 'Please enter a valid 10-digit mobile number');
      hasError = true;
    }

    if (!messageInput.value.trim()) {
      showError(messageInput, 'Please enter your message or inquiry details');
      hasError = true;
    }

    if (hasError) return;

    // Prepare payload
    const formData = {
      formType: 'contact',
      timestamp: new Date().toISOString(),
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      message: messageInput.value.trim(),
      visitDate: form.querySelector('[name="visitDate"]')?.value || 'Not specified'
    };

    // UI Loading State
    setButtonLoading(submitBtn, true);
    hideStatus(statusBox);

    try {
      if (RESTAURANT_CONFIG.webhooks.googleAppsScriptUrl) {
        await fetch(RESTAURANT_CONFIG.webhooks.googleAppsScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } else {
        // Simulated network delay for mock submission
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      showStatus(
        statusBox, 
        'success', 
        `<strong>Thank You, ${escapeHtml(formData.name)}!</strong><br/>
         Your message has been received. For immediate inquiries or reservations, you can also call us directly at 
         <a href="tel:${RESTAURANT_CONFIG.phoneRaw}" style="font-weight:700; text-decoration:underline;">${RESTAURANT_CONFIG.phone}</a>.`
      );
      form.reset();
    } catch (err) {
      console.error('Submission error:', err);
      showStatus(
        statusBox, 
        'error', 
        `Something went wrong while sending your message. Please call us directly at ${RESTAURANT_CONFIG.phone}.`
      );
    } finally {
      setButtonLoading(submitBtn, false);
    }
  });
}

/**
 * Customer Feedback Form with 5-Star Interactive Rating
 */
function initFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  const statusBox = document.getElementById('feedbackStatusBox');
  const submitBtn = form.querySelector('button[type="submit"]');
  const starContainer = document.getElementById('starRatingContainer');
  const ratingInput = document.getElementById('selectedRatingInput');

  let currentRating = 5; // Default 5 stars

  // Setup interactive star rating
  if (starContainer && ratingInput) {
    const stars = starContainer.querySelectorAll('.star-btn');

    const updateStars = (val) => {
      stars.forEach((star, index) => {
        if (index < val) {
          star.classList.add('active');
          star.innerHTML = '★';
        } else {
          star.classList.remove('active');
          star.innerHTML = '☆';
        }
      });
      ratingInput.value = val;
    };

    stars.forEach((star, index) => {
      star.addEventListener('mouseenter', () => {
        stars.forEach((s, i) => {
          s.classList.toggle('hover-active', i <= index);
        });
      });

      star.addEventListener('mouseleave', () => {
        stars.forEach(s => s.classList.remove('hover-active'));
      });

      star.addEventListener('click', () => {
        currentRating = index + 1;
        updateStars(currentRating);
      });
    });

    updateStars(currentRating);
  }

  // Handle submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors(form);

    const feedbackText = form.querySelector('[name="comments"]');
    if (!feedbackText.value.trim()) {
      showError(feedbackText, 'Please share a few words about your dining experience');
      return;
    }

    // Collect experience tags
    const selectedTags = [];
    form.querySelectorAll('input[name="tags"]:checked').forEach(cb => {
      selectedTags.push(cb.value);
    });

    const recommendVal = form.querySelector('input[name="recommend"]:checked')?.value || 'Yes';

    const feedbackData = {
      formType: 'feedback',
      timestamp: new Date().toISOString(),
      name: form.querySelector('[name="name"]')?.value.trim() || 'Anonymous Diner',
      phone: form.querySelector('[name="phone"]')?.value.trim() || 'N/A',
      rating: ratingInput ? ratingInput.value : currentRating,
      tags: selectedTags.join(', '),
      recommend: recommendVal,
      comments: feedbackText.value.trim()
    };

    setButtonLoading(submitBtn, true);
    hideStatus(statusBox);

    try {
      if (RESTAURANT_CONFIG.webhooks.googleAppsScriptUrl) {
        await fetch(RESTAURANT_CONFIG.webhooks.googleAppsScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(feedbackData)
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      showStatus(
        statusBox, 
        'success', 
        `<strong>Thank You for Your Feedback!</strong><br/>
         We deeply appreciate you helping us uphold our dhaba's heritage and taste. 
         <br/><br/>
         <a href="${RESTAURANT_CONFIG.maps.reviewUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="margin-top:8px;">
           Share Review on Google Maps ★
         </a>`
      );
      form.reset();
      if (ratingInput && starContainer) {
        currentRating = 5;
        const stars = starContainer.querySelectorAll('.star-btn');
        stars.forEach((star) => {
          star.classList.add('active');
          star.innerHTML = '★';
        });
        ratingInput.value = 5;
      }
    } catch (err) {
      console.error('Feedback submission error:', err);
      showStatus(
        statusBox, 
        'error', 
        'Unable to submit feedback at this moment. Please try again later.'
      );
    } finally {
      setButtonLoading(submitBtn, false);
    }
  });
}

// Helpers
function showError(inputEl, message) {
  const formGroup = inputEl.closest('.form-group');
  if (formGroup) {
    formGroup.classList.add('has-error');
    const errorSpan = formGroup.querySelector('.form-error-msg');
    if (errorSpan) errorSpan.textContent = message;
  }
}

function clearErrors(form) {
  form.querySelectorAll('.form-group').forEach(group => {
    group.classList.remove('has-error');
  });
}

function setButtonLoading(button, isLoading) {
  if (!button) return;
  if (isLoading) {
    button.disabled = true;
    button.dataset.originalText = button.innerHTML;
    button.innerHTML = '<span class="spinner"></span> Submitting...';
  } else {
    button.disabled = false;
    if (button.dataset.originalText) {
      button.innerHTML = button.dataset.originalText;
    }
  }
}

function showStatus(box, type, htmlMessage) {
  if (!box) return;
  box.className = `form-status-box ${type}`;
  box.innerHTML = htmlMessage;
  box.style.display = 'block';
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideStatus(box) {
  if (!box) return;
  box.style.display = 'none';
}

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
