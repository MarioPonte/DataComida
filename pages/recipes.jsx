import React, { useEffect } from "react";
import { RecipesStyle } from '../src/components/Recipes';
import { useRouter } from "next/router";
import supabase from "./api/supabase";
import { toast } from 'react-toastify';
import Link from "next/link";

export default function Recipes(){

    useEffect(() => {
        //let recipeTitle = document.getElementById("recTitle").innerHTML;
        let recipeTitle = document.querySelector(".recipeTitle");
        let ingredientsTitle = document.querySelector(".ingredientsTitle");
        let ingredientsList = document.getElementById("listVal").getElementsByTagName("li");
        let recDetailsTitle = document.querySelector(".recDetailsTitle");
        let recDetails = document.querySelector(".recDetails");
    
        let allIngredients = "";
    
        // 👇️ convert to array with Array.from()
        Array.from(ingredientsList).forEach(element => { allIngredients += element.innerText + "\n"; });
    
        document.getElementById("copyBtn").addEventListener("click", copyText)
    
        function copyText(e){
            navigator.clipboard.writeText(recipeTitle.innerText + "\n\n" + ingredientsTitle.innerText + ":\n" + allIngredients + "\n" + recDetailsTitle.innerText + ":\n" + recDetails.innerText);
        }
    
    }, [])

    const router = useRouter();

    let arrTime = (String(router.query.time)).split(":");
    let nums = arrTime.map(function(str) { return parseInt(str); });
    let timeMessage = "";

    if(nums[0] == 0 && nums[1] == 1) timeMessage = nums[1] + " minuto";
    else if(nums[0] == 0 && nums[1] > 1) timeMessage = nums[1] + " minutos";
    else if(nums[0] == 1 && nums[1] == 0) timeMessage = nums[0] + " hora";
    else if(nums[0] > 1 && nums[1] == 0) timeMessage = nums[0] + " horas";
    else if(nums[0] == 1 && nums[1] == 1) timeMessage = nums[0] + " hora e " + nums[1] + " minuto";
    else if(nums[0] == 1 && nums[1] > 1) timeMessage = nums[0] + " hora e " + nums[1] + " minutos";
    else if(nums[0] > 1 && nums[1] == 1) timeMessage = nums[0] + " horas e " + nums[1] + " minuto";
    else if(nums[0] > 1 && nums[1] > 1) timeMessage = nums[0] + " horas e " + nums[1] + " minutos";

    const handleDelete = async () => {

        const confirmDelete = confirm("Tem a certeza que deseja excluir esta receita?");

        if(confirmDelete == true){
            const { data, error } = await supabase
                .from("foods")
                .delete()
                .eq("name", router.query.title)

            if(error) console.log(error);
            if(data) console.log(data);

            toast.success('Receita excluida com sucesso!', {
                position: "top-right",
                autoClose: 2750,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            router.push("/");
        }
    }

    return (
            <RecipesStyle>
                <section className="imgSection">
                    <img className="imgRecipe" src={router.query.image} alt="" srcSet="" />
                </section>
                <section className="recipe">
                    <h1 className="recipeTitle">{router.query.title}</h1>
                    <span className="recipeCategory">{router.query.category}</span>
                    <span className="recipeTime"><i className="fa-solid fa-clock"></i> {timeMessage}</span>
                    <h2 className="ingredientsTitle">Ingredientes</h2>
                    <ul id="listVal" className="ingredientsList" dangerouslySetInnerHTML={{__html: router.query.ingredients}}>
                    </ul>
                    <h2 className="recDetailsTitle">Procedimentos</h2>
                    <p className="recDetails">{router.query.details}</p>
                    <div>
                        <button id="copyBtn" className="copyButton receiptButtons"><i className="fa-solid fa-print"></i> Copiar Receita</button>
                        <button id="print" className="receiptButtons" onClick={() => {window.print()}}><i className="fa-solid fa-print"></i> Imprimir Receita</button>
                        <Link
                            className="receiptButtons"
                            href={{
                                pathname: "/editRecipe",
                                query: {
                                    title: router.query.title,
                                    image: router.query.image,
                                    details: router.query.details,
                                    time: router.query.time,
                                    category: router.query.category
                                },
                            }}>
                                <i className="fa-solid fa-pen"></i> Editar Receita
                        </Link>

                        <button className="receiptButtons" onClick={handleDelete}><i className="fa-solid fa-trash-can"></i> Apagar Receita</button>
                    </div>
                </section>
            </RecipesStyle>
    )
}