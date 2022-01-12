export const COLORS = {
  white: 'hsl(30, 100%, 99%)',
  gray: {
    100: 'hsl(185deg, 5%, 95%)',
    300: 'hsl(190deg, 5%, 80%)',
    500: 'hsl(196deg, 4%, 60%)',
    700: 'hsl(220deg, 5%, 40%)',
    900: 'hsl(220deg, 3%, 20%)',
  },
  // Dollar green #26785f rgb(38,120,95)
  primary: 'hsl(162, 52%, 31%)',
  // blue #050c1f rgb(5, 12 ,31)
  secondary: 'hsl(223, 74%, 7%)',
  // vivid green
  vividGreen: 'hsl(151, 73%, 55%)',
  // light green
  lightGreen: '#33cc8a',
  // very pale green
  veryPaleGreen: 'hsl(91, 56%, 92%)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  mobileMin: 370,
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  mobileAndUp: `(min-width: ${BREAKPOINTS.mobileMin / 16}rem)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};
