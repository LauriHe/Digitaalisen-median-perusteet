let theme;

// Switches the colors of the page based on which theme is selected.
function switchTheme(theme) {

  // Chages colors to be darker.
  if (theme == "dark") {
    $(".bg-secondary").removeClass("bg-secondary").addClass("bg-primary");
    $(".border-secondary").removeClass("border-secondary").addClass("border-primary");
    $(".navbar-light").removeClass("navbar-light").addClass("navbar-dark");
    $(".bg-light").removeClass("bg-light").addClass("bg-dark");
    $(".text-dark").removeClass("text-dark").addClass("text-light");
    $(".btn-light").removeClass("btn-light").addClass("btn-dark");
    $("#vectorModal").removeClass("bg-dark").addClass("bg-light");
    $(".btn-close").addClass("btn-close-white");
    $("#themeButton").attr("src", "images/light_mode.svg")
    sessionStorage.setItem("theme", "dark");
  }

  // Chages colors to be lighter.
  if (theme == "light") {
    $(".bg-primary").removeClass("bg-primary").addClass("bg-secondary");
    $(".border-primary").removeClass("border-primary").addClass("border-secondary");
    $(".navbar-dark").removeClass("navbar-dark").addClass("navbar-light");
    $(".bg-dark").removeClass("bg-dark").addClass("bg-light");
    $(".text-light").removeClass("text-light").addClass("text-dark");
    $(".btn-dark").removeClass("btn-dark").addClass("btn-light");
    $(".btn-close").removeClass("btn-close-white");
    $("#themeButton").attr("src", "images/dark_mode.svg")
    sessionStorage.setItem("theme", "light");
  }
}

// Saves the selected theme and calls switchTheme() when themeButton is pressed.
$("#themeButton").click(function () {
  if (theme == "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  switchTheme(theme);
});

// Checks which theme is saved in session storage and calls the appropriate function.
try {
  theme = sessionStorage.getItem("theme");

  switch (theme) {
    case "dark":
      switchTheme("dark");
      break;
    case "light":
      switchTheme("light");
      break;

    default:
      switchTheme("dark");
      theme = "dark";
      break;
  }
} catch (error) {
  console.log(error);
}
