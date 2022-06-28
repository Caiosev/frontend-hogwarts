import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${Color.activeNav};
    font-family: 'SofiaPro';
`;

export const Header = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
    padding: 0 20px;
    img {
        width: 50px;
    }
    border-bottom: 1px solid ${Color.line};
`;

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    height: 90vh;
    width: 100vw;

    hr {
        width: 1px;
        height: 80%;
    }
`;

export const Infos = styled.div`
    height: 60%;
    form {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        height: 110%;
        justify-content: space-around;
        div {
            display: flex;
        }
        button {
            width: 200px;
            height: 150px;
            margin: 15px auto;
            border-radius: 10px;
            font-weight: 700;
            &:hover {
                background-color: ${Color.roxo};
                cursor: pointer;
            }
        }
    }
    input,
    select {
        padding: 15px;
        margin: 10px;
        border-radius: 10px;
        width: 200px;
    }
    label {
        display: flex;
        flex-direction: column;
    }
`;

export const Foto = styled.div`
    border: 1px solid #fff;
    width: 350px;

    img {
        width: 100%;
        height: 400px;
        padding: 15px 40px;
    }
`;
