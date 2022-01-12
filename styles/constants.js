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
  thin: 400,
  normal: 500,
  medium: 700,
  bold: 900,
};

export const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

export const QUERIES = {
  phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
};
