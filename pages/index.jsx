import React from 'react';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
    }
`;

export default function HomePage(){
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Timeline />
            <Footer />
        </div>
    )
}

const HeaderStyle = styled.div`
    background-color: orange;
`;

function Header(){
    return (
        <HeaderStyle>
            <p>DataComida</p>
        </HeaderStyle>
    )
}

function Timeline(){
    return (
        <div>
            <p>Aqui é a timeline, onde estarão as receitas</p>
        </div>
    )
}

function Footer(){
    return (
        <div>
            <p>Aqui é o footer</p>
        </div>
    )
}