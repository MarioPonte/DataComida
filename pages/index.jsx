import React, { useEffect, useState } from 'react';
import config from "../config.json";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from 'react-helmet';
import { HeaderStyle } from '../src/components/Header';
import { TimelineStyle } from '../src/components/Timeline';
import { FooterStyle } from '../src/components/Footer';
import supabase from './api/supabase';
import { foodService } from "./api/supabase";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        font-family: 'Poppins', sans-serif;
    }
`;

export default function HomePage(){

    const service = foodService();
    const [categories, setCategories] = React.useState({});

    React.useEffect(() => {
        //console.log("useEffect");
        service.getAllFoods()
            .then((dados) => {
                const newCategories = {...categories};
                dados.data.forEach((food) => {
                    if(!newCategories[food.category]) newCategories[food.category] = [];
                    newCategories[food.category].push(food);
                })
                setCategories(newCategories);
            });
    }, []);

    return (
        <div>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
                <title>DataComida</title>
            </Helmet>
            <GlobalStyle />
            <Header />
            <Timeline categories={categories} />
            <Footer />
        </div>
    )
}

function Header(){
    return (
        <HeaderStyle>
            <img className='logoImg' src="images/logo.png" alt="" />
        </HeaderStyle>
    )
}

function Timeline({...props}){

    const [fetchError, setFetchError] = useState(null);
    const [foods, setFoods] = useState(null);

    useEffect(() => {
        const fetchFoods = async () => {
            const { data, error} = await supabase
                .from("foods")
                .select("*")

                if(error){
                    setFetchError("Could not fetch the foods")
                    setFoods(null)
                    console.log(error)
                }

                if(data){
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
                <p>Bom Dia, <strong>{config.profiles[0].name}</strong></p>
                <p>O que vai cozinhar hoje?</p>
            </div>

            {categoryNames.map((categoryName) => {
                const foods = props.categories[categoryName];
                return (
                    <div className='foodSection' key={categoryName}>
                        <h3>{categoryName}</h3>

                        {fetchError && (<p>{fetchError}</p>)}
                        {foods && (
                            <div className='foodCard'>
                                {foods.map(food => (
                                    <a className='foodLink' key={food.name} href="/recipes">
                                        <img className='foodImg' src={food.image} alt="" />
                                        <p>{food.name}</p>
                                    </a>
                                ))}
                            </div>
                        )}


                    </div>
                )
            })}
        </TimelineStyle>
    )
}

function Footer(){
    return (
        <FooterStyle>
            <p>© Todos os direitos reservados a Mário Ponte / DataComida</p>
        </FooterStyle>
    )
}