import styled from "styled-components";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Search from "./components/Search";

export const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.backgroundLevel1};
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.12) 0px 2px 16px 0px;
    .logoImg{
        width: 50px;
        margin: 8px;
    }
`;

export function Header({ valorDoFiltro, setValorDoFiltro }){
    return (
        <HeaderStyle>
            <img className='logoImg' src="images/logo.png" alt="" />
            <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            <DarkModeSwitch />
        </HeaderStyle>
    )
}