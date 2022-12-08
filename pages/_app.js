import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Header/components/ColorMode";
import '../styles/globals.css';
import RegisterFood from "../src/components/RegisterFood";

const theme = {
    light: {
        backgroundBase: "#FFF9F9",
        backgroundLevel1: "#FFF5F5",
        backgroundLevel2: "#CB9688",
        borderBase: "#67504D",
        textColorBase: "#322624",
    },
    dark: {
        backgroundBase: "#322624",
        backgroundLevel1: "#67504D",
        backgroundLevel2: "#54403E",
        borderBase: "#CB9688",
        textColorBase: "#FFDED5",
    }
};

// _app.js -> Global setings from NextJS
// ThemeProvider -> Prover o tema para a app toda
// ColorModeProvider -> Prover o state de dark ou light mode para todo o mundo

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"light"} >
            {props.children}
        </ColorModeProvider>
    )
}

function Root({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContext);

    return (
            <ThemeProvider theme={theme[contexto.mode]}>
                <CSSReset />

                <Component {...pageProps} />
                <RegisterFood />
            </ThemeProvider>
    )
}

export default function App(props) {
    return (
        <ProviderWrapper>
            <Root {...props} />
        </ProviderWrapper>
    )
};

