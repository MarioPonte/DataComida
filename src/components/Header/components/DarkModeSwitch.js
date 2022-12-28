import React from "react";
import styled from "styled-components";
import { ColorModeContext } from "./ColorMode";

const StyledSwitch = styled.div`
  margin: 10px;
  background-color: #322624;
  border: 0;
  padding: 3px;
  font-size: 12px;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: space-around;
  border-radius: 10000px;
  position: relative;
  .switchIcons{
    color: #CB9688;
  }

  label {
    width: 50px;
    cursor: pointer;
  }
  span { display: inline-flex; width: 20px; height: 20px; align-items: center; justify-content: center; }
  
  label:before {
    content: "";
    background-color: #CB9688;
    border: 1px solid #322624;
    width: 23px;
    height: 23px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: .3s;
    cursor: pointer;
  }
  input[type="checkbox"] { display: none; }
  input[type="checkbox"]:checked + label:before { transform: translateX(100%); }
`;

export default function DarkModeSwitch() {
    const contexto = React.useContext(ColorModeContext);
    return (
        <StyledSwitch>
            <input id="darkmode" type="checkbox" onChange={() => {
                contexto.toggleMode();
            }} />
            <label
                htmlFor="darkmode"
                className="darkmode-switch"
            >
                <span className="switchIcons"><i className="fa-solid fa-moon"></i></span>
                <span className="switchIcons"><i className="fa-solid fa-sun"></i></span>
            </label>
        </StyledSwitch>
    )
}