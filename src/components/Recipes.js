import styled from "styled-components";

export const RecipesStyle = styled.div`
    .recipe{
        margin: 40px;
    }

    .recipesBanner{
        height: 280px;
        border-radius: 0px 0px 40px 40px;

        background: url('images/food/boloAnos.jpg') center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .backBtn{
        color: white;
        font-size: 28px;
        margin: 10px 0px 0px 20px;
        display: inline-block;
    }

    .recipeTitle{
        font-size: 50px;
        color: #FF3B2F;
        margin-bottom: 10px;
    }

    .recipeTime{
        color: #FF3B2F;
        font-weight: 600;
        opacity: 0.75;
        margin-bottom: 20px;
        display: inline-block;
    }

    .receiptButtons{
        color: #FF3B2F;
        background-color: white;
        padding: 8px;
        margin: 20px;
        font-size: 20px;
        font-weight: 600;
        border: 2px solid #FF3B2F;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.2s;
    }

    .receiptButtons:hover{
        color: white;
        background-color: #FF3B2F;
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