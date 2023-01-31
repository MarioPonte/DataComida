import React from "react";
import { useRouter } from 'next/router';
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Header/components/ColorMode";
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

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
    const router = useRouter();

    return (
            <ThemeProvider theme={theme[contexto.mode]}>
                <CSSReset />
                <Helmet>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
                    <script src="https://kit.fontawesome.com/af5e23e73e.js" crossOrigin="anonymous"></script>
                    <title>DataComida</title>
                </Helmet>
                <Component {...pageProps} />

                
            </ThemeProvider>
    )
}

export default function App(props) {
    return (
        <ProviderWrapper>
            <Root {...props} />
            <ToastContainer />
        </ProviderWrapper>
    )
};

