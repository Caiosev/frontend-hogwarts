import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${Color.activeNav};
    font-family: 'SofiaPro';
    @media (min-width: 300px) and (max-width: 1200px) {
        height: 100%;
        hr {
            display: none;
        }
    }
    .notaO {
        color: #fdbf45;
    }
    .notaE {
        color: #146356;
    }
    .notaA {
        color: #519259;
    }
    .notaP {
        color: #ff7700;
    }
    .notaD {
        color: #e04d01;
    }
    .notaT {
        color: #b33030;
    }
    .file-input {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .file-input__input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .file-input__label {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        font-size: 14px;
        padding: 10px 12px;
        @media (min-width: 900px) {
            padding: 18px 20px;
            font-size: 18px;
        }
        background-color: #4245a8;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    }

    .file-input__label svg {
        height: 16px;
        margin-right: 4px;
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
    padding: 0 20px;
    img {
        width: 50px;
    }
    border-bottom: 1px solid ${Color.line};
    a {
        color: white;
        position: absolute;
        left: 20px;
    }
`;

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    height: 85vh;
    width: 100vw;
    @media (min-width: 300px) and (max-width: 1200px) {
        flex-direction: column;
        margin-top: 100px;
        height: 100%;
        display: block;
        height: 1500px;
    }

    hr {
        width: 1px;
        height: 80%;
    }
`;

export const Infos = styled.div`
    height: 60%;
    @media (min-width: 300px) and (max-width: 1200px) {
        background-color: ${Color.activeNav};
        height: 1100px;
        width: 100%;
        text-align: center;
    }
    form {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        height: 110%;
        justify-content: space-around;
        @media (min-width: 300px) and (max-width: 1200px) {
            align-items: center;
            padding-top: 20px;
            height: 1100px;
        }
        div {
            display: flex;
            @media (min-width: 300px) and (max-width: 1200px) {
                flex-direction: row;
                gap: 10px;
                width: 100vw;
                flex-wrap: wrap;
                justify-content: center;
            }
        }
        button {
            width: 140px;
            height: 50px;
            background-color: #fff;
            font-size: 15px;
            font-weight: bold;
            font-family: 'SofiaPro', sans-serif;
            border-radius: 50px;
            border: none;
            &:hover {
                background-color: #d1af5a;
                cursor: pointer;
            }
            a {
                color: black;
            }
        }
    }
    input,
    select {
        border: 0;
        background: none;
        -webkit-appearance: none;
        width: 200px;
        background: none;
        padding-top: 10px;
        color: white;
        border: none;
        border-bottom: 2px solid white;
        font-size: 18px;
        width: 150px;
    }

    label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 170px;
        font-size: 24px;
    }
`;

export const Foto = styled.div`
    width: 350px;

    img {
        width: 100%;
        height: 400px;
        padding: 15px 40px;
        object-fit: cover;
    }
    @media (min-width: 300px) and (max-width: 1200px) {
        margin: auto;
    }
`;

export const Provas = styled.div`
    .env {
        width: 100vw;
        text-align: center;
    }
    .provas {
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        justify-content: center;
        width: 150px;
        margin: auto;
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
`;
