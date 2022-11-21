import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from 'react-helmet';
import { HeaderStyle } from '../src/components/Header';
import { TimelineStyle } from '../src/components/Timeline';
import { FooterStyle } from '../src/components/Footer';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        font-family: 'Poppins', sans-serif;
    }
`;

export default function HomePage(){
    return (
        <div>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
                <title>DataComida</title>
            </Helmet>
            <GlobalStyle />
            <Header />
            <Timeline />
            <Footer />
        </div>
    )
}

function Header(){
    return (
        <HeaderStyle>
            <img className='logoImg' src="images/logo.png" alt="" />
        </HeaderStyle>
    )
}

function Timeline(){
    return (
        <TimelineStyle>
            <div className='welcomeMsg'>
                <img className='profileImg' src="images/teresinha.jpg" alt="" />
                <p>Bom Dia, <strong>Teresinha</strong></p>
                <p>O que vai cozinhar hoje?</p>
            </div>
        </TimelineStyle>
    )
}

function Footer(){
    return (
        <FooterStyle>
            <p>© Todos os direitos reservados a Mário Ponte / DataComida</p>
        </FooterStyle>
    )
}