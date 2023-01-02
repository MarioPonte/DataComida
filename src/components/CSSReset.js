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

  .add-food {
        width: 50px;
        height: 50px;
        font-size: 20px;
        color: inherit;
        position: fixed;
        bottom: 16px;
        right: 16px;
        border: 0;
        background-color: #CB9688;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
        border-radius: 50%;
        z-index: 99;
        cursor: pointer;
  }
`;