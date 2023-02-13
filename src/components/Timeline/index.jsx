import { TimelineStyle } from "./styles";
import React, { useEffect, useState } from 'react';
import config from "../../../config.json";
import supabase from '../../../pages/api/supabase';
import Link from "next/link";
import { useRouter } from 'next/router';


export function Timeline({ searchValue, ...props }) {

    const router = useRouter();

    // Welcome Message
    var now = new Date();
    var hour = now.getHours();
    var welcomeMsg = "";

    if (hour < 12) welcomeMsg = "Bom dia"; else if (hour <= 18) welcomeMsg = "Boa tarde"; else welcomeMsg = "Boa noite";

    const [fetchError, setFetchError] = useState(null);
    const [foods, setFoods] = useState(null);

    useEffect(() => {
        const fetchFoods = async () => {
            const { data, error } = await supabase
                .from("foods")
                .select("*")

            if (error) {
                setFetchError("Could not fetch the foods")
                setFoods(null)
                console.log(error)
            }

            if (data) {
                setFoods(data)
                setFetchError(null)
            }
        }

        fetchFoods()

        const tabsBox = document.querySelector(".tabsBox");
        let allTabs = document.querySelectorAll(".tab");
        const arrowIcons = document.querySelectorAll(".arrowIcons i");

        let isDragging = false;

        const handleIcons = (scrollVal) => {
            let maxScrollWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
            arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
            arrowIcons[1].parentElement.style.display = maxScrollWidth - scrollVal <= 1 ? "none" : "flex";
        }

        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
                handleIcons(scrollWidth);
            })
        });

        allTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabsBox.querySelector(".active").classList.remove("active");
                tab.classList.add("active");
            });
        });

        const dragging = (e) => {
            if(!isDragging) return;
            tabsBox.classList.add("dragging");
            tabsBox.scrollLeft -= e.movementX;
            handleIcons(tabsBox.scrollLeft);
        }

        const dragStop = () => {
            isDragging = false;
            tabsBox.classList.remove("dragging");
        }

        tabsBox.addEventListener("mousedown", () => isDragging = true);
        tabsBox.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);

    }, [])

    const categoryNames = Object.keys(props.categories);
    return (
        <TimelineStyle>

            <div className='welcomeMsg'>
                <img className='profileImg' src={config.profiles[0].picture} alt="" />
                <p>{welcomeMsg}, <strong>{config.profiles[0].name}</strong></p>
                <p>O que vai cozinhar hoje?</p>
            </div>

            <div className="catLibrary">
                <div className="arrowIcons"><i id="left" className="fa-solid fa-angle-left"></i></div>
                <ul className="tabsBox">
                    <a href="#"><li className="tab active">Todas</li></a>
                    <a href="#Bolos"><li className="tab">Bolos</li></a>
                    <a href="#Peixes"><li className="tab">Peixes</li></a>
                    <a href="#Petiscos"><li className="tab">Petiscos</li></a>
                </ul>
                <div className="arrowIcons"><i id="right" className="fa-solid fa-angle-right"></i></div>
            </div>

            {categoryNames.map((categoryName) => {
                const foods = props.categories[categoryName];
                let countFoods = 0;

                return (
                    <div className='foodSection' key={categoryName}>
                        <h3 id={categoryName} >{categoryName}</h3>
                        <div>
                            {foods
                                .filter((food) => {
                                    const titleNormalized = food.name.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((food) => {
                                    countFoods = countFoods + 1;
                                    return (
                                        <Link
                                        className='foodLink'
                                        key={food.name}
                                        href={{
                                            pathname: "/recipes",
                                            query: {
                                                title: food.name,
                                                image: food.image,
                                                ingredients: food.ingredients,
                                                details: food.details,
                                                time: food.time,
                                                category: food.category
                                            },
                                        }}>
                                            <img className='foodImg' src={food.image} alt="" />
                                            <p>{food.name}</p>
                                        </Link>
                                    )
                                })}
                            {countFoods === 0 ? "Nenhuma receita encontrada" : ""}
                        </div>
                    </div>
                )
            })}

                <button className="add-food" aria-label="Inserir Receita" onClick={() => { router.push("/addRecipe"); }}>
                    <i className="fa-solid fa-plus"></i>
                </button>
        </TimelineStyle>
    )
}