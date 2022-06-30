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

export const Content = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    .sidebar {
        width: 20vw;
        padding: 40px 20px;
        text-align: center;
        .buttons {
            padding-top: 100px;
            display: flex;
            flex-direction: column;
            gap: 50px;
            button {
            }
        }
    }
    .sec-provas {
        text-align: center;
        padding: 30px;
        width: 80vw;
        .provas {
            display: flex;
            flex-wrap: wrap;
            padding-top: 20px;
            gap: 50px;
        }
        .prova {
            cursor: pointer;
        }
    }
`;

export const Header = styled.header`
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
