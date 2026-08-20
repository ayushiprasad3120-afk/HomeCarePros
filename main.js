(function () {
  "use strict";

  function applyPhoneNumber() {
    var cfg = window.SITE_CONFIG || {};
    var number = cfg.PHONE_NUMBER || "(XXX) XXX-XXXX";
    var link = cfg.PHONE_LINK || "tel:+1XXXXXXXXXX";
    document.querySelectorAll("[data-phone-number]").forEach(function (el) {
      el.textContent = number;
    });
    document.querySelectorAll("[data-phone-link]").forEach(function (el) {
      el.setAttribute("href", link);
    });
  }

  function applyServicePhones() {
    var cfg = window.SITE_CONFIG || {};
    var servicePhones = cfg.SERVICE_PHONES || {};
    var fallbackNumber = cfg.PHONE_NUMBER || "(XXX) XXX-XXXX";
    var fallbackLink = cfg.PHONE_LINK || "tel:+1XXXXXXXXXX";

    document.querySelectorAll("[data-service-phone]").forEach(function (el) {
      var service = el.getAttribute("data-service-phone");
      var entry = servicePhones[service];
      var number = (entry && entry.number) || fallbackNumber;
      var link = (entry && entry.link) || fallbackLink;

      el.setAttribute("href", link);
      var numberEl = el.querySelector("[data-service-phone-number]");
      if (numberEl) numberEl.textContent = number;
    });
  }

  function applyFormAction() {
    var cfg = window.SITE_CONFIG || {};
    if (!cfg.FORM_ACTION) return;
    document.querySelectorAll("[data-quote-form]").forEach(function (form) {
      form.setAttribute("action", cfg.FORM_ACTION);
      form.setAttribute("method", "POST");
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
      var shouldShow = window.scrollY > 520;
      if (shouldShow !== shown) {
        shown = shouldShow;
        bar.classList.toggle("is-visible", shown);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initFaqAccordion() {
    var items = document.querySelectorAll(".faq-item");
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (item.open) {
          items.forEach(function (other) {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  }

  function initQuoteForm() {
    var form = document.querySelector("[data-quote-form]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      var cfg = window.SITE_CONFIG || {};
      if (!cfg.FORM_ACTION) {
        e.preventDefault();
        var note = form.querySelector("[data-form-note]");
        if (note) {
          note.textContent = "This form isn't connected to a lead destination yet. Set FORM_ACTION in js/config.js, or call us directly.";
          note.classList.add("is-visible");
        }
      }
    });
  }

  function setYear() {
    var el = document.querySelector("[data-current-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyPhoneNumber();
    applyServicePhones();
    applyFormAction();
    initMobileNav();
    initStickyCallBar();
    initFaqAccordion();
    initQuoteForm();
    setYear();
  });
})();
