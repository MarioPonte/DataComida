import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styled from "styled-components";
import Head from "next/head";
import Script from "next/script";

const RecipesStyle = styled.div`
    .recipe{
        margin: 40px;
    }

    .recipesBanner{
        background-color: #FF3B2F;
        height: 280px;
        border-radius: 0px 0px 40px 40px;
    }

    .recipeTitle{
        font-size: 50px;
        color: #FF3B2F;
    }

    .recipeTime{
        color: #FF3B2F;
        font-weight: 600;
    }

    .receiptButtons{
        color: #FF3B2F;
        margin: 20px;
        font-size: 20px;
        font-weight: 600;
    }

    ul {
        list-style: none
    }
    li::before {
        content: "•"; color: #FF3B2F;;
        display: inline-block; width: 1em;
        margin-left: -1em
    }

    .ingredientsList{
        font-weight: 600;
    }
`;

export default function Recipes(){
    return (
        <>
            <Head>
                <title>DataComida</title>
            </Head>
            <Script src="https://kit.fontawesome.com/af5e23e73e.js" />
            <script src="/copyRecipe.js" defer />
            <RecipesStyle>
                <section className="recipesBanner"></section>
                <section className="recipe">
                    <h1 className="recipeTitle">Bolo de Aniversário</h1>
                    <span className="recipeTime"><i className="fa-solid fa-clock"></i> 1 Hora e 30 minutos</span>
                    <h2>Ingredientes</h2>
                    <ul className="ingredientsList">
                        <li>8 ovos</li>
                        <li>32 colheres de açucar</li>
                        <li>15 colheres de sopa de farinha</li>
                        <li>2 colheres de fécula de batata</li>
                        <li>1 colher de água</li>
                        <li>1 pitada de pó Royal</li>
                        <li>Meio pacote de açucar baunilhado</li>
                        <li>Ananás e morangos</li>
                        <li>2 pacotes de natas</li>
                    </ul>
                    <h2>Procedimentos</h2>
                    <p>
                        Bate-se as gemas com o açucar, depois junta-se a água, a fécula, o pó Royal e o açucar baunilhado, 
                        a seguir junta-se as claras em castelo e por fim a farinha. Depois de cozido abre-se ao meio e rega-se 
                        com a calda do ananás enquanto quente. Deixa-se arrefecer e recheia-se com as natas e bocadinhos de ananás. 
                        Barra-se com as restantes natas e decora-se com o ananás e os morangos.
                    </p>
                    <div>
                        <p id="teste">Teste cópia</p>
                        <a className="receiptButtons" href="/"><i className="fa-solid fa-print"></i> Copiar Receita</a>
                        <a className="receiptButtons" href="/"><i className="fa-solid fa-print"></i> Imprimir Receita</a>
                    </div>
                </section>
            </RecipesStyle>
        </>
    )
}