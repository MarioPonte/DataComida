import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styled from "styled-components";
import Head from "next/head";
import Script from "next/script";
import { RecipesStyle } from '../src/components/Recipes';

export default function Recipes(){
    return (
        <>
            <Head>
                <title>DataComida</title>
            </Head>
            <Script src="https://kit.fontawesome.com/af5e23e73e.js" />
            <script src="/copyRecipe.js" defer />
            <RecipesStyle>
                <section className="recipesBanner">
                    <a className="backBtn" href="/"><i className="fa-solid fa-arrow-left"></i></a>
                </section>
                <section className="recipe">
                    <h1 className="recipeTitle">Bolo de Aniversário</h1>
                    <span className="recipeTime"><i className="fa-solid fa-clock"></i> 1 Hora e 30 minutos</span>
                    <h2 className="ingredientsTitle">Ingredientes</h2>
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
                    <h2 className="recDetailsTitle">Procedimentos</h2>
                    <p className="recDetails">
                        Bate-se as gemas com o açucar, depois junta-se a água, a fécula, o pó Royal e o açucar baunilhado, 
                        a seguir junta-se as claras em castelo e por fim a farinha. Depois de cozido abre-se ao meio e rega-se 
                        com a calda do ananás enquanto quente. Deixa-se arrefecer e recheia-se com as natas e bocadinhos de ananás. 
                        Barra-se com as restantes natas e decora-se com o ananás e os morangos.
                    </p>
                    <div>
                        <button id="copyBtn" className="copyButton receiptButtons"><i className="fa-solid fa-print"></i> Copiar Receita</button>
                        <button className="receiptButtons" onClick={() => {window.print()}}><i className="fa-solid fa-print"></i> Imprimir Receita</button>
                    </div>
                </section>
            </RecipesStyle>
        </>
    )
}