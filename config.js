/**
 * HomeCarePros — Site configuration
 * ------------------------------------------------------------
 * PHONE NUMBER / DID
 * This is the ONLY place the phone number needs to change.
 * Update PHONE_NUMBER (what visitors see) and PHONE_LINK
 * (what the browser dials, E.164 format) and every phone
 * number + "Call Now" button on every page updates itself.
 *
 * LEAD FORM ENDPOINT
 * This site has no backend by design. To make the "Get My
 * Free Quote" form actually deliver leads, point FORM_ACTION
 * at a form-handling service (e.g. Formspree, Netlify Forms,
 * FormSubmit) and the form will POST there. Until then the
 * form is fully built and styled but has nowhere to send to.
 * ------------------------------------------------------------
 */
window.SITE_CONFIG = {
  PHONE_NUMBER: "(XXX) XXX-XXXX",
  PHONE_LINK: "tel:+1XXXXXXXXXX",
  FORM_ACTION: ""
};
