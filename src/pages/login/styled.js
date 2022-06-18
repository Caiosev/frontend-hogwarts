import styled from 'styled-components';
import * as Colors from '../../config/colors';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${Colors.activeNav};
    display: grid;
    grid-template-columns: 30% 40% 30%;
    grid-template-rows: 20% 80%;
    #back {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
    .options {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        img {
            width: 50px;
            cursor: pointer;
            height: 50px;
            opacity: 0.5;
            &:hover {
                opacity: 1;
            }
        }
    }
    .login-container {
        grid-column: 1/4;
        grid-row: 2/3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-top: 50px;
        gap: 50px;
        border-top: 1px solid #fff;
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            label {
                font-size: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 10px;

                input {
                    margin-left: 10px;
                    width: 200px;
                    height: 30px;
                    border: 1px solid #fff;
                    border-radius: 5px;
                }
            }
        }
    }
    button,
    a {
        width: 150px;
        height: 40px;
        background-color: #fff;
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
    }
    #next {
        margin-top: 20px;
    }
    img {
        width: 150px;
    }
`;
