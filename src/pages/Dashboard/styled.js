import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${Color.activeNav};
    display: flex;
    a {
        text-decoration: none;
        color: white;
    }
    @media (min-width: 300px) and (max-width: 899px) {
        .sidebar {
            left: -200%;
        }
        .active {
            left: 0;
        }
    }
`;

export const Content = styled.div`
    width: 100vw;
    height: 100vh;
    @media (min-width: 900px) {
        padding-left: 15vw;
    }
`;

export const Header = styled.header`
    @media (max-width: 899px) {
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${(props) => props.color};
        padding: 0 20px;
        position: fixed;
        z-index: 100;
        img {
            width: 50px;
            display: none;
        }
        border-bottom: 1px solid ${Color.line};
        .options {
            display: none;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            svg {
                cursor: pointer;
            }
        }
        .ham {
            position: absolute;
            cursor: pointer;
            z-index: 100;
            -webkit-tap-highlight-color: transparent;
            transition: transform 400ms;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            @media (min-width: 900px) {
                display: none;
            }
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
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${(props) => props.color};
        padding: 0 20px;
        img {
            width: 50px;
        }
        border-bottom: 1px solid ${Color.line};
        .options {
            padding-right: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            svg {
                cursor: pointer;
            }
        }
        .ham {
            cursor: pointer;
            z-index: 100;
            -webkit-tap-highlight-color: transparent;
            transition: transform 400ms;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            @media (min-width: 900px) {
                display: none;
            }
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
`;

export const ListContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    text-align: center;
    padding: 100px;
    gap: 50px;
    flex-direction: row;
    @media (min-width: 300px) and (max-width: 899px) {
        flex-direction: column;
    }
    padding-top: 50px;
    @media (min-width: 900px) and (max-width: 1199px) {
        width: 800px;
        height: auto;
        flex-wrap: wrap;
        margin: auto;
        justify-content: center;
    }
    @media (min-width: 1200px) {
        width: 95vw;
        height: auto;
        flex-wrap: wrap;
    }
    .aluno {
        display: flex;
        flex-direction: column;
        height: 350px;
        align-items: center;
        transition: all 0.3s ease-in-out;
        @media (min-width: 900px) {
            &:hover {
                transform: scale(1.1);
            }
        }

        cursor: pointer;
    }
    .grid-frame {
        position: relative;
        border: 2px solid #808080;
        width: 200px;
        height: 270px;
        .square {
            background-color: #10141b;
            border: 1px solid #808080;
            width: 10px;
            height: 10px;
            position: absolute;
        }
        .tl {
            top: -10px;
            left: -10px;
        }
        .tr {
            top: -10px;
            right: -10px;
        }
        .bl {
            bottom: -10px;
            left: -10px;
        }
        .br {
            bottom: -10px;
            right: -10px;
        }
        .foto-aluno {
            width: 100%;
            height: 100%;
            padding: 10px;
            object-fit: cover;
        }
    }
    .aluno-nome {
        font-size: 1.3rem;
        font-family: 'BluuNext', sans-serif;
        padding-top: 15px;
    }
    .aluno-info {
        font-family: 'SofiaPro', sans-serif;
        font-size: 1rem;
        padding-top: 5px;
    }
`;

export const Points = styled.div`
    display: ${(props) => (props.points === -1 ? 'none' : 'flex')};
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-family: 'BluuNext', sans-serif;
    font-size: 20px;
`;
