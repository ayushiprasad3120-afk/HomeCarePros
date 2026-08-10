/**
 * HomeCarePros — Site behavior
 * - Injects the phone number/link from config.js into every
 *   matching element on every page (single source of truth).
 * - Handles the mobile navigation toggle.
 * - Handles the mobile "sticky call bar" reveal on scroll.
 * No frameworks, no build step, no backend calls.
 */
(function () {
  "use strict";

  function applyPhoneNumber() {
    var cfg = window.SITE_CONFIG || {};
    var number = cfg.PHONE_NUMBER || "(XXX) XXX-XXXX";
    var link = cfg.PHONE_LINK || "tel:+1XXXXXXXXXX";

    // Any element whose visible text should show the formatted number
    document.querySelectorAll("[data-phone-number]").forEach(function (el) {
      el.textContent = number;
    });

    // Any <a> that should dial the number
    document.querySelectorAll("[data-phone-link]").forEach(function (el) {
      el.setAttribute("href", link);
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.querySelector(".nav-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initStickyCallBar() {
    var bar = document.querySelector(".sticky-call-bar");
    if (!bar) return;
    var shown = false;

    function onScroll() {
      var shouldShow = window.scrollY > 480;
      if (shouldShow !== shown) {
        shown = shouldShow;
        bar.classList.toggle("is-visible", shown);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setYear() {
    var el = document.querySelector("[data-current-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyPhoneNumber();
    initMobileNav();
    initStickyCallBar();
    setYear();
  });
})();
