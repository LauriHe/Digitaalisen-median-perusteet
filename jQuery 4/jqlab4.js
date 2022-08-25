// Save dom elements to variables
const button = $('button');
const img1 = $('#img1');
const img2 = $('#img2');
const img3 = $('#img3');
const list = $('ul');

// Show headers and images when button is clicked
button.click(function () {
  $('#advice').text('Select your favourite colour among the colours');
  $('#sel').text('Your favourite colours in order');
  img1.attr('src', 'red.jpg');
  img2.attr('src', 'blue.jpg');
  img3.attr('src', 'yellow.jpg');
});

// Hide images and append colors to list once clicked
img1.click(function () {
  $(this).hide();
  list.append('<li>red</li>');
});

img2.click(function () {
  $(this).hide();
  list.append('<li>blue</li>');
});

img3.click(function () {
  $(this).hide();
  list.append('<li>yellow</li>');
});