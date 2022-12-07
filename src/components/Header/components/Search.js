import React from "react";
import styled from "styled-components"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    border-radius: 10px 0px 0px 10px;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    color: ${({ theme }) => theme.borderBase};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-radius: 0px 10px 10px 0px;
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    font-size: 18px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;

    return (
        <StyledSearch>
                <input type="text" onChange={(e) => { setValorDaBusca(e.target.value); }} value={valorDaBusca} />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </StyledSearch>
    )
}