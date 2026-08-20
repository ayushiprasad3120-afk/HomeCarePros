/**
 * HomeCarePros — Site configuration
 * ------------------------------------------------------------
 * GENERAL PHONE NUMBER / DID
 * Used in the header, hero, phone CTA section, footer, and
 * sticky mobile call bar — anywhere the number isn't tied to
 * one specific service. Also the fallback number for any
 * service below that doesn't have its own DID yet.
 *
 * PER-SERVICE PHONE NUMBERS
 * Each of the 6 service cards can ring a different tracking
 * number. Fill in a number for a service and its card will
 * use that number automatically. Leave a service as `null`
 * and its card falls back to the general PHONE_NUMBER/LINK
 * above — nothing breaks, nothing shows a blank number.
 *
 * LEAD FORM ENDPOINT
 * This site has no backend by design. To make the "Get My
 * Free Quote" form actually deliver leads, point FORM_ACTION
 * at a form-handling service (e.g. Formspree, Netlify Forms,
 * FormSubmit) and the form will POST there.
 * ------------------------------------------------------------
 */
window.SITE_CONFIG = {
  PHONE_NUMBER: "(XXX) XXX-XXXX",
  PHONE_LINK: "tel:+1XXXXXXXXXX",

  SERVICE_PHONES: {
    "Roofing":              { number: "(844) 518-0729", link: "tel:+18445180729" },
    "HVAC":                 null,
    "Pest Control":         { number: "(888) 375-1008", link: "tel:+18883751008" },
    "Plumbing":             null,
    "Bathroom Remodeling":  null,
    "Windows":              null
  },

  FORM_ACTION: ""
};

