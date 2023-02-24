import styled from "styled-components";

export const RecipesStyle = styled.div`

    .imgSection{
        margin: 40px;
    }
    .recipe{
        margin: 40px;
    }

    .imgRecipe{
        width: 400px;
        height: 300px;
        border-radius: 40px;
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
        color: ${({ theme }) => theme.borderBase};
        margin-bottom: 10px;
    }

    .recipeCategory{
        background-color: ${({ theme }) => theme.borderBase};
        color: ${({ theme }) => theme.backgroundBase};
        padding: 4px 18px 4px 18px;
        border-radius: 100vw;
        font-weight: 500;
    }

    .recipeTime{
        color: ${({ theme }) => theme.borderBase};
        font-weight: 600;
        opacity: 0.75;
        margin: 0px 20px 20px 20px;
        display: inline-block;
    }

    .receiptButtons{
        color: ${({ theme }) => theme.borderBase};
        background-color: ${({ theme }) => theme.backgroundBase};
        padding: 8px;
        margin: 20px;
        font-size: 20px;
        font-weight: 600;
        border: 2px solid ${({ theme }) => theme.borderBase};
        border-radius: 10px;
        cursor: pointer;
        transition: 0.2s;
    }

    .receiptButtons:hover{
        color: ${({ theme }) => theme.backgroundBase};
        background-color: ${({ theme }) => theme.borderBase};
    }

    ul {
        list-style: none
    }
    li::before {
        content: "•";
        color: ${({ theme }) => theme.borderBase};
        display: inline-block; width: 1em;
        margin-left: -1em
    }

    .ingredientsList{
        font-weight: 600;
    }

    @media print{
        .receiptButtons{
            display: none !important;
        }

        .imgRecipe{
            width: 200px;
            height: 150px;
            border-radius: 20px;
        }

        .recipeTitle{
            font-size: 40px;
        }
    }
`;