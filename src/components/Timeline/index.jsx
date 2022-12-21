import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import config from "../../../config.json";
import supabase from '../../../pages/api/supabase';
import Link from "next/link";

export const TimelineStyle = styled.div`

    .profileImg{
        width: 100px;
        height: 100px;
        border-radius: 100vw;
    }

    .welcomeMsg{
        text-align: center;
        font-size: 22px;
        margin: 24px;
    }

    .catLibrary{
        padding: 35px;
        position: relative;
        overflow-x: hidden;
        max-width: 100%;
        margin: 60px;
    }

    .catLibrary .arrowIcons{
        position: absolute;
        top: 0;
        height: 100%;
        width: 120px;
        display: flex;
        align-items: center;
    }

    .arrowIcons:first-child{
        left: 0;
        display: none;
        background: linear-gradient(90deg, ${({ theme }) => theme.backgroundBase} 70%, transparent);
    }

    .arrowIcons:last-child{
        right: 0;
        justify-content: flex-end;
        background: linear-gradient(-90deg, ${({ theme }) => theme.backgroundBase} 70%, transparent);
    }

    .arrowIcons i{
        width: 55px;
        height: 55px;
        cursor: pointer;
        font-size: 1.2rem;
        text-align: center;
        line-height: 55px;
        border-radius: 100vw;
    }

    .arrowIcons i:hover{
        background: #cb978814;
    }

    .arrowIcons:first-child i{
        margin-left: 15px;
    }

    .arrowIcons:last-child i{
        margin-right: 15px;
    }

    .catLibrary .tabsBox{
        display: flex;
        gap: 12px;
        list-style: none;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .tabsBox.dragging{
        scroll-behavior: auto;
        cursor: grab;
    }

    .tabsBox .tab{
        cursor: pointer;
        white-space: nowrap;
        background-color: #CB9688;
        padding: 6px;
        border-radius: 10px;
    }

    .tabsBox.dragging .tab{
        user-select: none;
        pointer-events: none;
    }

    .tabsBox .tab.active{
        background-color: #946D63;
        color: #FFF9F9;
    }



    .catItem{
        margin: 6px;
        background-color: #CB9688;
        color: #322624;
        padding: 6px;
        border-radius: 10px;
        font-size: 14px;
        transition: 0.2s;
    }

    .catItem:hover{
        background-color: #B9897C;
        color: #322624;
    }

    .catActive{
        background-color: #946D63;
        color: #FFF9F9;
    }

    .catActive{
        background-color: #946D63;
        color: #FFF9F9;
    }

    .foodSection{
        margin: 60px;
    }

    .foodLink{
        display: inline-block;
        margin: 10px;
        width: 240px;
        text-align: left;
    }

    .foodImg{
        width: 240px;
        height: 160px;
        border-radius: 10px;
    }
`;


export function Timeline({ searchValue, ...props }) {

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

        const handleIcons = () => {
            let scrollVal = Math.round(tabsBox.scrollLeft);
            let maxScrollWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
            arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
            arrowIcons[1].parentElement.style.display = maxScrollWidth > scrollVal ? "flex" : "none";
        }

        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
                setTimeout(() => handleIcons(), 50);
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
            handleIcons();
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
                    <li className="tab active"><a href="#">Todas</a></li>
                    <li className="tab"><a href="#Bolos">Bolos</a></li>
                    <li className="tab"><a href="#Peixes">Peixes</a></li>
                    <li className="tab"><a href="#Petiscos">Petiscos</a></li>
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
                                                details: food.details
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
        </TimelineStyle>
    )
}