import { createGlobalStyle } from 'styled-components';
import { COLORS, WEIGHTS } from './constants';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.45;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  :root {
    /*
      Create a stacking context, without a z-index.
      This ensures that all portal content (modals and tooltips) will
      float above the app.
    */
    isolation: isolate;
    --color-primary: ${COLORS.primary};
    --color-vividGreen: ${COLORS.vividGreen};
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-secondary: hsl(223, 74%, 7%);
    scrollbar-color: var(--color-gray-700) var(--color-secondary);
    scrollbar-width: thin;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    height: 100%;
  }

  body {
    color: ${COLORS.white};
    background: ${COLORS.secondary};
    font-weight: ${WEIGHTS.normal};
  }

    *::-moz-selection { /* Code for Firefox */
      background-color: var(--color-vividGreen);
      color: var(--color-gray-700,white);
      -webkit-text-fill-color: var(--color-gray-700) !important;
    }
    *::selection {
      background-color: var(--color-vividGreen);
      color: var(--color-gray-700,white);
      -webkit-text-fill-color: var(--color-gray-700) !important;
    }

  .header {
    font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
    font-weight: ${WEIGHTS.bold};
    margin: 0;
  }

  .subheader {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 10px;
    font-style: italic;
  }

  .header span,
  .subheader span {
    color: ${COLORS.primary};
    font-weight: ${WEIGHTS.bold};
    text-transform: uppercase;
  }

  @media(max-width: 650px) {
  .subheader {
    font-size: 1.1rem;
  }
  }

  @media (pointer: coarse) {
    html {
      --min-tap-height: 44px;
    }
  }
`;

export default GlobalStyles;
