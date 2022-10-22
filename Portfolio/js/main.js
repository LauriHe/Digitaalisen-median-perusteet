// Navbar buttons
const allLink = $("#allLink");
const webLink = $("#webLink");
const videoLink = $("#videoLink");
const audioLink = $("#audioLink");

// Different pages
const web = $("#web");
const video = $("#video");
const audio = $("#audio");
const divider = $(".divider");

// Modals for videos
const afterEffectsModal = $("#afterEffectsModal");
const videosprintti1Modal = $("#videosprintti1Modal");
const videosprintti2Modal = $("#videosprintti2Modal");
const moniraitamiksausModal = $("#moniraitamiksausModal");

// Video elements
const afterEffectsVideo = $("#afterEffectsVideo");
const videosprintti1Video = $("#videosprintti1Video");
const videosprintti2Video = $("#videosprintti2Video");
const moniraitamiksausVideo = $("#moniraitamiksausVideo");

// Duration of show/hide animations
const animationTime = 500;

// Function to show all exercises.
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

// Function to show web exercises.
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

// Function to show video and vector exercises.
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

// Function to show audio exercises.
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

// Event listeners for navbar buttons
allLink.click(function () { showAll(true) });

webLink.click(function () { showWeb(true) });

videoLink.click(function () { showvideo(true) });

audioLink.click(function () { showAudio(true) });


// Event listeners for modals to pause video when modal is closed.
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


// Checks from session storage which page was last active and calls the appropriate function.
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