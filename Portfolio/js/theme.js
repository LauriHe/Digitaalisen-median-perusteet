let theme = 0;

$("#themeButton").click(function() {
  if (theme == 0) {
    theme = 1;
  } else {
    theme = 0;
  }

  if (theme == 0) {
    $(".bg-secondary").removeClass("bg-secondary").addClass("bg-primary");
    $(".border-secondary").removeClass("border-secondary").addClass("border-primary");
    $(".navbar-light").removeClass("navbar-light").addClass("navbar-dark");
    $(".bg-light").removeClass("bg-light").addClass("bg-dark");
    $(".text-dark").removeClass("text-dark").addClass("text-light");
    $(".btn-light").removeClass("btn-light").addClass("btn-dark");
    $("#vectorModal").removeClass("bg-dark").addClass("bg-light");
    $(".btn-close").addClass("btn-close-white");
    $("#themeButton").attr("src","images/light_mode.svg")
  }
  
  if (theme == 1) {
    $(".bg-primary").removeClass("bg-primary").addClass("bg-secondary");
    $(".border-primary").removeClass("border-primary").addClass("border-secondary");
    $(".navbar-dark").removeClass("navbar-dark").addClass("navbar-light");
    $(".bg-dark").removeClass("bg-dark").addClass("bg-light");
    $(".text-light").removeClass("text-light").addClass("text-dark");
    $(".btn-dark").removeClass("btn-dark").addClass("btn-light");
    $(".btn-close").removeClass("btn-close-white");
    $("#themeButton").attr("src","images/dark_mode.svg")
  }
});

