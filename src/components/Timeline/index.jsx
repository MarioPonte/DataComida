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
                <a href="#">Todas</a>
                <a href="#">Bolos</a>
                <a href="#">Peixes</a>
            </div>

            {categoryNames.map((categoryName) => {
                const foods = props.categories[categoryName];
                let countFoods = 0;

                return (
                    <div className='foodSection' key={categoryName}>
                        <h3>{categoryName}</h3>
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