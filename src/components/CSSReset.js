import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* width */
  ::-webkit-scrollbar {
    width: 7.5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.backgroundBase};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #CB9688;
    border-radius: 100vw;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #A37B71;
  }

  html, body { 
      scroll-behavior: smooth !important;
  }
  body {
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
  }
`;