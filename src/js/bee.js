// Sidebar Toggle

$(".sidebar-toggle").click(function() {
  // Remove any old one
  $(".sidebar-show-background").remove();
  // Add the element
  $(".sidebar").addClass("sidebar-show");
  $(".sidebar").after("<span class='sidebar-show-background'></span>");
});

$(document).on("click", ".sidebar-show-background", function() {
  $(".sidebar-show-background").remove();
  $(".sidebar").removeClass("sidebar-show");
});

// Ripple Effect

$(
  ".button, .menu-list-item a, .icon-button, .icon-button-large, .complex-button"
).click(function(e) {
  // Remove any old one
  $(".ripple").remove();

  // Setup
  var posX = $(this).offset().left,
    posY = $(this).offset().top,
    objWidth = $(this).width(),
    objHeight = $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  // Make it round!
  if (objWidth >= objHeight) {
    objHeight = objWidth;
  } else {
    objWidth = objHeight;
  }

  // Get the center of the element
  var x = e.pageX - posX - objWidth / 2;
  var y = e.pageY - posY - objHeight / 2;

  // Add the ripples CSS and start the animation
  $(".ripple")
    .css({
      width: objWidth,
      height: objHeight,
      top: y + "px",
      left: x + "px"
    })
    .addClass("rippleEffect");
});
