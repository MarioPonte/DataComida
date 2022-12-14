import styled from "styled-components";

export const StyledRegisterRecipe = styled.div`
  .foodModal{
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.12) 0px 2px 16px 0px;
  }
  hr {
    margin-bottom: 16px;
    border: 1px solid ${({ theme }) => theme.borderBase};
  }
  .add-food {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: inherit;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: #CB9688;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .addIngredients{
    background-color: ${({ theme }) => theme.borderBase};
    padding: 8px 16px;
    border: none;
    border-radius: 0px 8px 8px 0px;
    cursor: pointer;
    color: ${({ theme }) => theme.backgroundLevel2};
  }

  #textVal{
    width: 229px;
    border-radius: 8px 0px 0px 8px !important;
  }

  button[type="submit"] {
    background-color: ${({ theme }) => theme.borderBase};
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: ${({ theme }) => theme.backgroundLevel2};
  }
  form {
    width: 100%;
    padding: 5%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    & > div {
      flex: 1;
      border-radius: 8px;
      max-width: 320px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 16px;
      padding-top: 40px;
    }
  }
  input {
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
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
    resize: vertical;
  }
  select {
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