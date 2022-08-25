// Add id to second paragraph
$('#fdiv p:last').attr('id', 'sp');

// Remove first paragraph
$('p:first').remove();

// Change background color of first div
const firstDiv = $('#fdiv');
firstDiv.css({
  backgroundColor: 'grey',
  color: 'white'
});

// Define click event handler
$('#sdiv button').click(function () {
  $('#fdiv').append('<p id="tp">Hello user</p>');
});

// Hide paragraph
const paragraph4 = $('#4p');
paragraph4.hide();

// Define hover event handler
const secondDiv = $('#sdiv');
secondDiv.hover(
  function () {
    paragraph4.show();
    paragraph4.text('About to select link...')
  },
  function () { paragraph4.hide(); }
);