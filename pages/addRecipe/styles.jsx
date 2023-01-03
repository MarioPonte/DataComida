import styled from "styled-components";

export const StyledRegisterRecipe = styled.div`

    margin: 20px;
    text-align: center;

    .addInfo{
        overflow: hidden;
        clear: both;
    }

    .closePage{
        float: right;
        font-size: 40px;
        background-color: inherit;
        color: ${({ theme }) => theme.textColorBase};
        border: none;
        cursor: pointer;
    }

    .addInfoTitle{
        font-size: 50px;
        margin: 20px;
    }

    hr {
        margin-bottom: 16px;
        border: 1px solid ${({ theme }) => theme.borderBase};
    }

    .addIngredients{
        background-color: ${({ theme }) => theme.borderBase};
        padding: 9px 16px;
        border: none;
        border-radius: 0px 8px 8px 0px;
        cursor: pointer;
        color: ${({ theme }) => theme.backgroundLevel2};
    }

    #textVal{
        width: 344px;
        border-radius: 8px 0px 0px 8px !important;
        display: inline-block;
    }

    button[type="submit"] {
        font-size: 20px;
        width: 400px;
        background-color: ${({ theme }) => theme.borderBase};
        padding: 8px 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        color: ${({ theme }) => theme.backgroundLevel2};
    }
    input {
        width: 400px;
        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.borderBase};
        padding: 8px 10px;
        margin-bottom: 10px;
        outline: none;
        color: #222222;
        background-color: #f9f9f9;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
    }
    textarea {
        width: 400px;
        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.borderBase};
        padding: 8px 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        outline: none;
        color: #222222;
        background-color: #f9f9f9;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
        resize: vertical;
    }
    select {
        width: 400px;
        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.borderBase};
        padding: 8px 10px;
        margin-bottom: 10px;
        outline: none;
        color: #222222;
        background-color: #f9f9f9;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
        text-transform: capitalize;
    }

    #list{
        width: 400px;
        margin: auto;
        border: 1px solid ${({ theme }) => theme.borderBase};
        border-radius: 8px;
        text-align: left;
    }

    .thumbPreview{
        margin-top: 20px;
        aspect-ratio: 16/9;
        font-weight: 500;
        object-fit: cover;
        width: 100%;
        height: auto;
        border-radius: 8px;
    }
`;