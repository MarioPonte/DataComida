import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
  }
`;