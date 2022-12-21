import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  html, body { 
      scroll-behavior: smooth !important;
  }
  body {
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
  }
`;