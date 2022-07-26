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
    .desk {
        display: none;
        width: 100%;
        height: 100%;
    }
    @media (min-width: 900px) {
        .mobile {
            display: none;
        }
        .desk {
            display: flex;
        }
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
    @media (min-width: 900px) {
        position: fixed;
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
    }

    hr {
        width: 1px;
        height: 80%;
    }
    @media (min-width: 900px) {
        height: auto;
        padding-bottom: 50px;
    }
`;

export const Infos = styled.div`
    height: 60%;
    @media (min-width: 300px) and (max-width: 1200px) {
        background-color: ${Color.activeNav};
        height: 600px;
        width: 100%;
        text-align: center;
    }
    form {
        display: flex;
        flex-direction: column;
        height: 110%;
        @media (min-width: 300px) and (max-width: 1200px) {
            align-items: flex-start;
            padding-top: 20px;
            height: 560px;
            gap: 20px;
        }
        div {
            display: flex;
            @media (min-width: 300px) and (max-width: 1200px) {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                width: 100vw;
                justify-content: space-around;
                padding-left: 10px;
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
        .btn {
            display: flex;
            padding: 15px 0;
            .del {
                &:hover {
                    background-color: #ff1206;
                    cursor: pointer;
                }
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
        width: 135px;
        padding-bottom: 5px;
    }

    label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 150px;
        font-size: 24px;
    }

    display: ${(props) => (props.ativo === 'i' ? 'block' : 'none')};
    @media (min-width: 900px) {
        height: 80%;
        text-align: center;
        width: 800px;
        display: ${(props) => (props.ativo === 'i' ? 'flex' : 'none')};
        flex-direction: column;
        form {
            padding-top: 50px;
            width: 100%;
            height: 80vh;
            gap: 40px;
            align-items: center;
            justify-content: center;
            div {
                display: flex;
                width: 100%;
                justify-content: center;
                gap: 60px;
            }
        }
        label {
            font-size: 24px;
            width: 280px;
        }
        input,
        select {
            width: 250px;
            padding-bottom: 5px;
            font-size: 24px;
        }
        .buttons {
            width: 580px;
        }
        button {
            width: 160px;
            height: 65px;
        }
    }
`;

export const Foto = styled.div`
    width: 350px;
    padding-left: 80px;
    img {
        width: 100%;
        height: 400px;
        padding: 15px 40px;
        object-fit: cover;
        border: 1px solid white;
    }
    @media (min-width: 300px) and (max-width: 1200px) {
        margin: auto;
    }
    @media (min-width: 900px) {
        width: 500px;
        .file-input {
            width: 400px;
            height: 550px;
            gap: 30px;
            img {
                width: 100%;
                height: 100%;
            }
        }
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
    padding-top: 50px;
    display: ${(props) => (props.ativo === 'p' ? 'block' : 'none')};
    @media (min-width: 900px) {
        .env {
            width: 100%;
            height: 80vh;
            text-align: center;
            .provas {
                width: 68%;
                margin: auto;
                flex-wrap: wrap;
                flex-direction: row;
                align-items: flex-start;
            }
        }
    }
`;

export const Abas = styled.div`
    display: flex;
    padding-top: 50px;
    justify-content: center;

    button {
        width: 50%;
        height: 50px;
        background-color: #1d1e34;
        font-size: 15px;
        font-weight: bold;
        font-family: 'SofiaPro', sans-serif;
        border-style: solid;
        border-color: #4245a8;
        color: white;
        &:hover {
            background-color: #4245a8;
            cursor: pointer;
        }
        a {
            color: white;
        }
    }
    #p {
        margin-right: -1px;
        background-color: ${(props) =>
            props.ativo === 'p' ? '#242633' : '#1d1e34'};
        border-width: ${(props) =>
            props.ativo === 'p' ? '3px 5px 0px 0px;' : '3px 3px 3px 0px;'};
        border-radius: 0 20px 0 0;
    }
    #i {
        margin-left: -1px;
        background-color: ${(props) =>
            props.ativo === 'i' ? '#242633' : '#1d1e34'};
        border-width: ${(props) =>
            props.ativo === 'i' ? '3px 0px 0px 3px;' : '3px 0px 3px 3px;'};
        border-radius: 20px 0 0 0;
    }
`;

export const SideBar = styled.div`
    width: 20vw;
    padding: 40px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    position: absolute;
    left: 0;
    background-color: #1a1a1d;
    .buttons {
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        button {
            width: 200px;
            height: 60px;

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
        }
        #p {
            background-color: ${(props) =>
                props.ativo === 'p' ? '#d1af5a' : '#fff'};
            &:hover {
                background-color: #d1af5a;
                cursor: pointer;
            }
        }
        #i {
            background-color: ${(props) =>
                props.ativo === 'i' ? '#d1af5a' : '#fff'};
            &:hover {
                background-color: #d1af5a;
                cursor: pointer;
            }
        }
        #info {
            background-color: ${(props) =>
                props.ativo === 'i' ? '#d1af5a' : '#fff'};
        }
    }
    h1::first-letter,
    h2:first-letter {
        text-transform: capitalize;
    }
    @media (min-width: 900px) {
        position: fixed;
        top: 100px;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    padding-left: 22vw;
    padding-top: 150px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
