import React, { useEffect, useState } from 'react';
import config from "../config.json";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from 'react-helmet';
import { HeaderStyle } from '../src/components/Header';
import { TimelineStyle } from '../src/components/Timeline';
import { FooterStyle } from '../src/components/Footer';
import supabase from './api/supabase';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        font-family: 'Poppins', sans-serif;
    }
`;

export default function HomePage(){

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
            <Timeline />
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

function Timeline(){

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





    const categoryNames = Object.keys(config.foods);
    return (
        <TimelineStyle>

            <div className='welcomeMsg'>
                <img className='profileImg' src={config.profiles[0].picture} alt="" />
                <p>Bom Dia, <strong>{config.profiles[0].name}</strong></p>
                <p>O que vai cozinhar hoje?</p>
            </div>

            {fetchError && (<p>{fetchError}</p>)}
            {foods && (
                <div>
                    {foods.map(food => (
                        <div key={food.name}>
                            <h3>{food.name}</h3>
                            <p>{food.image}</p>
                        </div>
                    ))}
                </div>
            )}

            {categoryNames.map((categoryName) => {
                const receiptCards = config.foods[categoryName];
                return (
                    <div className='foodSection' key={categoryName}>
                        <h3>{categoryName}</h3>
                        <div className='foodCard'>
                            {receiptCards.map((food) => {
                                return (
                                    <a className='foodLink' key={food.title} href="/recipes">
                                        <img className='foodImg' src={food.thumb} alt="" />
                                        <p>{food.title}</p>
                                    </a>
                                )
                            })}
                        </div>
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