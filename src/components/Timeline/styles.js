import styled from "styled-components";

export const TimelineStyle = styled.div`

    .profileImg{
        width: 100px;
        height: 100px;
        border-radius: 100vw;
    }

    .welcomeMsg{
        text-align: center;
        font-size: 22px;
        margin: 24px;
    }

    .catLibrary{
        padding: 35px;
        position: relative;
        overflow-x: hidden;
        max-width: 100%;
        margin: 60px;
    }

    .catLibrary .arrowIcons{
        position: absolute;
        top: 0;
        height: 100%;
        width: 120px;
        display: flex;
        align-items: center;
    }

    .arrowIcons:first-child{
        left: 0;
        display: none;
        background: linear-gradient(90deg, ${({ theme }) => theme.backgroundBase} 70%, transparent);
    }

    .arrowIcons:last-child{
        right: 0;
        justify-content: flex-end;
        background: linear-gradient(-90deg, ${({ theme }) => theme.backgroundBase} 70%, transparent);
    }

    .arrowIcons i{
        width: 55px;
        height: 55px;
        cursor: pointer;
        font-size: 1.2rem;
        text-align: center;
        line-height: 55px;
        border-radius: 100vw;
    }

    .arrowIcons i:hover{
        background: #cb978814;
    }

    .arrowIcons:first-child i{
        margin-left: 15px;
    }

    .arrowIcons:last-child i{
        margin-right: 15px;
    }

    .catLibrary .tabsBox{
        display: flex;
        gap: 12px;
        list-style: none;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .tabsBox.dragging{
        scroll-behavior: auto;
        cursor: grab;
    }

    .tabsBox .tab{
        cursor: pointer;
        white-space: nowrap;
        background-color: #CB9688;
        padding: 6px;
        border-radius: 10px;
        transition: 0.2s;
    }

    .tabsBox .tab:hover{
        background-color: #B9897C;
    }

    .tabsBox.dragging .tab{
        user-select: none;
        pointer-events: none;
    }

    .tabsBox .tab.active{
        background-color: #946D63;
        color: #FFF9F9;
    }



    .catItem{
        margin: 6px;
        background-color: #CB9688;
        color: #322624;
        padding: 6px;
        border-radius: 10px;
        font-size: 14px;
        transition: 0.2s;
    }

    .catItem:hover{
        background-color: #B9897C;
        color: #322624;
    }

    .catActive{
        background-color: #946D63;
        color: #FFF9F9;
    }

    .catActive{
        background-color: #946D63;
        color: #FFF9F9;
    }

    .foodSection{
        margin: 60px;
    }

    .foodLink{
        display: inline-block;
        margin: 10px;
        width: 240px;
        text-align: left;
    }

    .foodImg{
        width: 240px;
        height: 160px;
        border-radius: 10px;
    }
`;