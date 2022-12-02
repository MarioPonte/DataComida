import styled from "styled-components";

export const HeaderStyle = styled.div`
    background-color: #FAFAFA;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.12) 0px 2px 16px 0px;
    .logoImg{
        width: 50px;
        margin: 8px;
    }
`;

export function Header(){
    return (
        <HeaderStyle>
            <img className='logoImg' src="images/logo.png" alt="" />
            <input type="text" />
            <button>🔎</button>
        </HeaderStyle>
    )
}