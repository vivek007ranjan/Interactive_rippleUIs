// script.js

$(document).ready(function() {
  $('.hero-section').ripples({
      resolution: 512,
      dropRadius: 20, // Radius of the ripple
      perturbance: 0.04, // The amount of refraction caused by a ripple
  });
});
