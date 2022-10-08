let activePage = 0;

const allLink = $("#allLink");
const webLink = $("#webLink");
const videoLink = $("#videoLink");
const audioLink = $("#audioLink");

const web = $("#web");
const video = $("#video");
const audio = $("#audio");
const divider = $(".divider");

const animationTime = 500;

allLink.click(function() {
  web.show(animationTime);
  video.show(animationTime);
  audio.show(animationTime);
  divider.show(animationTime);
  allLink.addClass("active");
  webLink.removeClass("active");
  videoLink.removeClass("active");
  audioLink.removeClass("active");
});

webLink.click(function() {
  web.show(animationTime);
  video.hide(animationTime);
  audio.hide(animationTime);
  divider.hide(animationTime);
  webLink.addClass("active");
  allLink.removeClass("active");
  videoLink.removeClass("active");
  audioLink.removeClass("active");
});

videoLink.click(function() {
  web.hide(animationTime);
  video.show(animationTime);
  audio.hide(animationTime);
  divider.hide(animationTime);
  videoLink.addClass("active");
  allLink.removeClass("active");
  webLink.removeClass("active");
  audioLink.removeClass("active");
});

audioLink.click(function() {
  web.hide(animationTime);
  video.hide(animationTime);
  audio.show(animationTime);
  divider.hide(animationTime);
  audioLink.addClass("active");
  allLink.removeClass("active");
  webLink.removeClass("active");
  videoLink.removeClass("active");
});