import React, { useEffect } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Head from "next/head";
import Script from "next/script";
import { RecipesStyle } from '../src/components/Recipes';
import { useRouter } from "next/router";

export default function Recipes(){

    useEffect(() => {
        //let recipeTitle = document.getElementById("recTitle").innerHTML;
        let recipeTitle = document.querySelector(".recipeTitle");
        let ingredientsTitle = document.querySelector(".ingredientsTitle");
        let ingredientsList = document.getElementById("listVal").getElementsByTagName("li");
        let recDetailsTitle = document.querySelector(".recDetailsTitle");
        let recDetails = document.querySelector(".recDetails");
    
        let copyButton = document.querySelector(".copyButton");
    
        let allIngredients = "";
    
        // 👇️ convert to array with Array.from()
        Array.from(ingredientsList).forEach(element => { allIngredients += element.innerText + "\n"; });
    
        document.getElementById("copyBtn").addEventListener("click", copyText)
    
        function copyText(e){
            navigator.clipboard.writeText(recipeTitle.innerText + "\n\n" + ingredientsTitle.innerText + ":\n" + allIngredients + "\n" + recDetailsTitle.innerText + ":\n" + recDetails.innerText);
        }
    
    }, [])




    const router = useRouter();

    return (
        <>
            <Head>
                <title>DataComida</title>
            </Head>
            <Script src="https://kit.fontawesome.com/af5e23e73e.js" />
            <RecipesStyle>
                <section className="imgSection">
                    {/* <a className="backBtn" href="/"><i className="fa-solid fa-arrow-left"></i></a> */}
                    <img className="imgRecipe" src={router.query.image} alt="" srcSet="" />
                </section>
                <section className="recipe">
                    <h1 className="recipeTitle">{router.query.title}</h1>
                    <span className="recipeTime"><i className="fa-solid fa-clock"></i> 1 Hora e 30 minutos</span>
                    <h2 className="ingredientsTitle">Ingredientes</h2>
                    <ul id="listVal" className="ingredientsList" dangerouslySetInnerHTML={{__html: router.query.ingredients}}>
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