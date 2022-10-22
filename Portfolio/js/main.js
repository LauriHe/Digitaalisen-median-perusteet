const allLink = $("#allLink");
const webLink = $("#webLink");
const videoLink = $("#videoLink");
const audioLink = $("#audioLink");

const web = $("#web");
const video = $("#video");
const audio = $("#audio");
const divider = $(".divider");

const afterEffectsModal = $("#afterEffectsModal");
const videosprintti1Modal = $("#videosprintti1Modal");
const videosprintti2Modal = $("#videosprintti2Modal");
const moniraitamiksausModal = $("#moniraitamiksausModal");

const afterEffectsVideo = $("#afterEffectsVideo");
const videosprintti1Video = $("#videosprintti1Video");
const videosprintti2Video = $("#videosprintti2Video");
const moniraitamiksausVideo = $("#moniraitamiksausVideo");

const animationTime = 500;

function showAll(animation) {
  if (animation) {
    web.show(animationTime);
    video.show(animationTime);
    audio.show(animationTime);
    divider.show(animationTime);
  } else {
    web.show();
    video.show();
    audio.show();
    divider.show();
  }
  allLink.addClass("active");
  webLink.removeClass("active");
  videoLink.removeClass("active");
  audioLink.removeClass("active");
  sessionStorage.setItem("activePage", "all");
};

function showWeb(animation) {
  if (animation) {
    web.show(animationTime);
    video.hide(animationTime);
    audio.hide(animationTime);
    divider.hide(animationTime);
  } else {
    web.show();
    video.hide();
    audio.hide();
    divider.hide();
  }

  webLink.addClass("active");
  allLink.removeClass("active");
  videoLink.removeClass("active");
  audioLink.removeClass("active");
  sessionStorage.setItem("activePage", "web");
};

function showvideo(animation) {
  if (animation) {
    web.hide(animationTime);
    video.show(animationTime);
    audio.hide(animationTime);
    divider.hide(animationTime);
  } else {
    web.hide();
    video.show();
    audio.hide();
    divider.hide();
  }
  videoLink.addClass("active");
  allLink.removeClass("active");
  webLink.removeClass("active");
  audioLink.removeClass("active");
  sessionStorage.setItem("activePage", "video");
};

function showAudio(animation) {
  if (animation) {
    web.hide(animationTime);
    video.hide(animationTime);
    audio.show(animationTime);
    divider.hide(animationTime);
  } else {
    web.hide();
    video.hide();
    audio.show();
    divider.hide();
  }
  audioLink.addClass("active");
  allLink.removeClass("active");
  webLink.removeClass("active");
  videoLink.removeClass("active");
  sessionStorage.setItem("activePage", "audio");
};

allLink.click(function () { showAll(true) });

webLink.click(function () { showWeb(true) });

videoLink.click(function () { showvideo(true) });

audioLink.click(function () { showAudio(true) });


afterEffectsModal.on('hidden.bs.modal', function (event) {
  afterEffectsVideo[0].pause();
});

videosprintti1Modal.on('hidden.bs.modal', function (event) {
  videosprintti1Video[0].pause();
});

videosprintti2Modal.on('hidden.bs.modal', function (event) {
  videosprintti2Video[0].pause();
});

moniraitamiksausModal.on('hidden.bs.modal', function (event) {
  moniraitamiksausVideo[0].pause();
});

try {
  let activePage = sessionStorage.getItem("activePage");
  switch (activePage) {
    case "all":
      showAll(false);
      break;
    case "web":
      showWeb(false);
      break;
    case "video":
      showvideo(false);
      break;
    case "audio":
      showAudio(false);
      break;
    default:
      showAll(false);
      break;
  }
} catch (error) {
  console.log(error)
}