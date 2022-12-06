import React from "react";
import { ThemeProvider } from "styled-components";
import ColorModeProvider, { ColorModeContext } from "../src/components/Header/components/ColorMode";
import Head from 'next/head';

const theme = {
    light: {
        backgroundBase: "#D5F0FF",
        backgroundLevel1: "#E6F6FF",
        backgroundLevel2: "#A5DFFF",
        borderBase: "#A5DFFF",
        textColorBase: "#001520",
    },
    dark: {
        backgroundBase: "#001520",
        backgroundLevel1: "#001C2C",
        backgroundLevel2: "#002B43",
        borderBase: "#002B43",
        textColorBase: "#D5F0FF",
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

                <Component {...pageProps} />
            </ThemeProvider>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <Root {...props} />
        </ProviderWrapper>
    )
};
