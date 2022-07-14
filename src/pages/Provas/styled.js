import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${Color.activeNav};
    a {
        text-decoration: none;
        color: white;
    }
`;
export const SideBar = styled.div`
    @media (min-width: 300px) and (max-width: 899px) {
        position: fixed;
        left: ${(props) => (props.menuMobile ? '0' : '-200%')};
        width: 60vw;
        height: 100vh;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.9);
        .buttons {
            padding-top: 100px;
            display: flex;
            flex-direction: column;
            gap: 50px;
            button {
            }
        }
    }

    @media (min-width: 900px) {
        width: 30vw;
        padding: 40px 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .buttons {
            padding-top: 100px;
            display: flex;
            flex-direction: column;
            gap: 50px;
            button {
            }
        }
    }
`;
export const Content = styled.div`
    @media (min-width: 300px) and (max-width: 899px) {
        width: 100%;
        height: 100%;
        padding-top: 10vh;
        display: flex;
        hr {
            display: none;
            @media (min-width: 900px) {
                display: block;
            }
        }
        .not-env {
            width: 100vw;
            text-align: center;
        }
        .env {
            width: 100vw;
            text-align: center;
        }
        .provas {
            padding-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 40px;
            align-items: center;
            justify-content: center;
        }
        .prova {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
            cursor: pointer;
            width: 180px;
        }
    }

    @media (min-width: 900px) {
        display: flex;
        .sec-provas {
            text-align: center;
            padding: 30px;
            width: 80vw;
            .provas {
                display: flex;
                flex-wrap: wrap;
                padding-top: 80px;
                gap: 50px;
                justify-content: flex-start;
                align-items: center;
            }
            .prova {
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 15px;
                justify-content: center;
                cursor: pointer;
                width: 180px;
            }
        }
        height: 90vh;
    }
`;

export const Header = styled.header`
    @media (min-width: 300px) and (max-width: 899px) {
        width: 100%;
        height: 10vh;
        display: flex;
        position: fixed;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.6);
        justify-content: space-between;
        padding: 0 30px;
        img {
            width: 50px;
        }
        #id {
            margin-left: -25px;
            position: absolute;
            left: 50%;
        }
        border-bottom: 1px solid ${Color.line};
        .options {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            svg {
                cursor: pointer;
            }
        }
        .ham {
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            transition: transform 400ms;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        .hamRotate.active {
            transform: rotate(45deg);
        }
        .hamRotate180.active {
            transform: rotate(180deg);
        }
        .line {
            fill: none;
            transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
            stroke: #fff;
            stroke-width: 6.5;
            stroke-linecap: round;
        }
        .ham6 .top {
            stroke-dasharray: 40 172;
        }
        .ham6 .middle {
            stroke-dasharray: 40 111;
        }
        .ham6 .bottom {
            stroke-dasharray: 40 172;
        }
        .ham6.active .top {
            stroke-dashoffset: -132px;
        }
        .ham6.active .middle {
            stroke-dashoffset: -71px;
        }
        .ham6.active .bottom {
            stroke-dashoffset: -132px;
        }
    }

    @media (min-width: 900px) {
        width: 100%;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${(props) => props.color};
        padding: 0 30px;
        img {
            width: 50px;
        }
        border-bottom: 1px solid ${Color.line};
        .options {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            svg {
                cursor: pointer;
            }
        }
        .menu {
            display: none;
        }
    }
`;

export const EnvBtn = styled.button`
    width: 200px;
    height: 60px;
    background-color: ${(props) => (props.env ? '#d1af5a' : '#fff')};
    font-size: 15px;
    font-weight: bold;
    font-family: 'SofiaPro', sans-serif;
    border-radius: 50px;
    border: none;
    margin: auto;
    &:hover {
        background-color: #d1af5a;
        cursor: pointer;
    }
    a {
        color: black;
    }
`;

export const NotEnvBtn = styled.button`
    width: 200px;
    height: 60px;
    background-color: ${(props) => (props.notenv ? '#d1af5a' : '#fff ')};
    font-size: 15px;
    font-weight: bold;
    font-family: 'SofiaPro', sans-serif;
    border-radius: 50px;
    border: none;
    margin: auto;
    &:hover {
        background-color: #d1af5a;
        cursor: pointer;
    }
`;

export const Menu = styled.div``;
