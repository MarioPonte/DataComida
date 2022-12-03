import styled from "styled-components";

export const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: #FAFAFA;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.12) 0px 2px 16px 0px;
    .logoImg{
        width: 50px;
        margin: 8px;
    }
`;

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 100vw;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    border-radius: 100vw 0vw 0vw 100vw;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-radius: 0vw 100vw 100vw 0vw;
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

export function Header(){
    return (
        <HeaderStyle>
            <img className='logoImg' src="images/logo.png" alt="" />
            <StyledSearch>
                <input type="text" />
                <button>🔎</button>
            </StyledSearch>
        </HeaderStyle>
    )
}