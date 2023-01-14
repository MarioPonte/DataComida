import React from 'react';
import { createGlobalStyle } from "styled-components";
import { Header } from '../src/components/Header';
import { Timeline } from '../src/components/Timeline';
import { FooterStyle } from '../src/components/Footer';
import { foodService } from "./api/supabase";
import Link from "next/link";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        font-family: 'Poppins', sans-serif;
    }
    
    .mainContainer{
        min-height: 100vh;
    }
`;

export default function HomePage() {

    const service = foodService();
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [categories, setCategories] = React.useState({});

    React.useEffect(() => {
        //console.log("useEffect");
        service.getAllFoods()
            .then((dados) => {
                const newCategories = { ...categories };
                dados.data.forEach((food) => {
                    if (!newCategories[food.category]) newCategories[food.category] = [];
                    newCategories[food.category].push(food);
                })
                setCategories(newCategories);
            });
    }, []);

    return (
        <div>
            <GlobalStyle />
            <main className='mainContainer'>
                <Header valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Timeline searchValue={valorDoFiltro} categories={categories} />
            </main>
            <Footer />
        </div>
    )
}

function Footer() {
    return (
        <FooterStyle>
            <Link className='marioSite' href="https://marioponte.github.io/Portfolio/" target="_blank"><LogoMario /></Link>
            <footer>© Todos os direitos reservados a Mário Ponte / DataComida 2023</footer>
        </FooterStyle>
    )
}

function LogoMario() {
    return (
        <svg className='logoMario' version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.000000 500.000000"
        preserveAspectRatio="xMidYMid meet">
       <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
       fill="none" stroke="none">
       <path className="colorLogo" d="M850 3998 c0 -63 -77 -1124 -100 -1381 -17 -182 -28 -332 -26 -335 3
       -2 173 88 378 200 l373 205 19 216 c11 120 20 216 22 214 1 -1 16 -70 33 -152
       16 -83 64 -285 105 -450 61 -248 346 -1496 346 -1519 0 -3 186 -5 412 -4 l413
       3 287 875 c158 481 315 963 350 1070 l63 195 5 -239 5 -239 380 -208 380 -208
       7 77 c4 42 12 262 18 487 9 373 29 838 46 1103 l6 102 -628 0 -629 0 -43 -151
       c-23 -82 -99 -304 -169 -492 -141 -383 -251 -713 -339 -1014 -32 -112 -61
       -203 -64 -203 -3 0 -31 136 -64 303 -52 271 -130 596 -260 1092 -24 94 -55
       235 -69 315 l-24 145 -616 3 c-492 2 -617 0 -617 -10z"/>
       <path className="colorLogo" d="M3505 1964 c-4 -146 -5 -267 -3 -268 1 -1 114 58 249 133 l246 136
       -181 98 c-100 54 -209 114 -242 132 l-61 34 -8 -265z"/>
       <path className="colorLogo" d="M1195 2094 c-126 -69 -231 -127 -232 -128 -1 -1 97 -57 219 -124 122
       -67 224 -120 227 -117 5 5 29 370 30 458 1 20 -2 37 -6 37 -5 0 -111 -57 -238
       -126z"/>
       <path className="colorLogo" d="M3883 1466 c-377 -207 -403 -223 -407 -251 -3 -16 -7 -74 -10 -127
       l-5 -98 414 0 415 0 0 350 c0 193 -1 350 -2 349 -2 -1 -184 -101 -405 -223z"/>
       <path className="colorLogo" d="M666 1658 c-3 -13 -8 -61 -11 -108 -5 -78 -47 -433 -61 -522 l-6 -38
       395 0 394 0 7 147 c3 81 3 150 -1 154 -10 9 -700 389 -708 389 -2 0 -7 -10 -9
       -22z"/>
       </g>
       </svg>
    )
}