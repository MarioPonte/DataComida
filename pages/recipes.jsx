import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Head from "next/head";
import Script from "next/script";
import { RecipesStyle } from '../src/components/Recipes';
import { useRouter } from "next/router";

export default function Recipes(){
    const router = useRouter();
    return (
        <>
            <Head>
                <title>DataComida</title>
            </Head>
            <Script src="https://kit.fontawesome.com/af5e23e73e.js" />
            <script src="/copyRecipe.js" defer />
            <RecipesStyle>
                <section>
                    {/* <a className="backBtn" href="/"><i className="fa-solid fa-arrow-left"></i></a> */}
                    <img className="imgRecipe" src={router.query.image} alt="" srcSet="" />
                </section>
                <section className="recipe">
                    <h1 className="recipeTitle">{router.query.title}</h1>
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
                    <p className="recDetails">{router.query.details}</p>
                    <div>
                        <button id="copyBtn" className="copyButton receiptButtons"><i className="fa-solid fa-print"></i> Copiar Receita</button>
                        <button className="receiptButtons" onClick={() => {window.print()}}><i className="fa-solid fa-print"></i> Imprimir Receita</button>
                    </div>
                </section>
            </RecipesStyle>
        </>
    )
}