import styled from "styled-components";

export const FooterStyle = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
    font-size: 12px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    text-align: center;
    padding: 20px;
    .logoMario{
        width: 75px;
    }
`;