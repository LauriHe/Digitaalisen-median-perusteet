// Click event handler for the links
$('a').click(function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    const hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    $('#wrapper').animate({
      scrollLeft: $(hash).offset().left
    }, 800, function () {
      window.location.hash = hash;
    });
  }
});

// Change list opacity to 0
$('ul').css('opacity', '0');

// Animate opacity if mouse is hovering over the nav element
$('nav').hover(
  function(){$('ul').animate({opacity: '1'});},
  function(){$('ul').animate({opacity: '0'});}
);