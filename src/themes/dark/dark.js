// Colours
// Basic
const white = "#FFFFFF";
const black = "#2f2f38";

// Blue
const blueDark = "#3e5a98";

// Pink
const pinkLight = "#fdd7eb";
const pinkDark = "#ff58ae";
const pinkDarker = "#B05589";

// Orange
const orange = "#ff9650";

// Purple
const purpleLight = "#3f51b5";
const purpleDark = "#1f3a76";

// Yellow
const yellow = "#fafbb2;";

// Green
const green = "#70DCBA";
const greenDark = "#57ad92";

// Fonts
const fontLogo = "Fredoka One";
const fontHeading = "Nunito";
const fontBody = "Lato";
const fontNav = "Nunito";

const base = {
  background: black,
  colorLogo: green,
  colorLogoHover: greenDark,
  colorTagline: orange,
  body: white,
  fontLogo,
  fontBody,
  fontHeading,
  fontNav,
};

const toggle = {
  toggleBackground: blueDark,
  toggleForeground: yellow,
  togglePosition: "30px",
};

const links = {
  linksNavUnderline: pinkDarker,
};

const shapes = {
  circleForeground: pinkDark,
  circleBackgroundStart: green,
  circleBackgroundEnd: black,
  triangle: purpleLight,
};

const backgrounds = {
  backgroundVariant1: black,
  backgroundVariant2: purpleDark,
  backgroundGradient1: black,
  backgroundGradient2: purpleDark,
  backgroundOverlay1: green,
  backgroundOverlay2: greenDark,
};

export const themeDark = {
  ...base,
  ...toggle,
  ...links,
  ...shapes,
  ...backgrounds,
};