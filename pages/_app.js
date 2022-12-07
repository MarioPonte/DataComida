import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Header/components/ColorMode";
import '../styles/globals.css';

const theme = {
    light: {
        backgroundBase: "#D5F0FF",
        backgroundLevel1: "#E6F6FF",
        backgroundLevel2: "#A5DFFF",
        borderBase: "#A5DFFF",
        textColorBase: "#001520",
    },
    dark: {
        backgroundBase: "#322624",
        backgroundLevel1: "#67504D",
        backgroundLevel2: "#54403E",
        borderBase: "#CB9688",
        textColorBase: "#FFBBA9",
    }
};

// _app.js -> Global setings from NextJS
// ThemeProvider -> Prover o tema para a app toda
// ColorModeProvider -> Prover o state de dark ou light mode para todo o mundo

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"} >
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

