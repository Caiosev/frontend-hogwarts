import styled from 'styled-components';
import * as Colors from '../../config/colors';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${Colors.activeNav};
    display: grid;
    grid-template-columns: 30% 40% 30%;
    grid-template-rows: 15% 85%;
    .select-options {
        position: absolute;
        z-index: 10;
        background-color: black;
        width: 100vw;
        height: 100vh;
        display: ${(props) => (props.options === false ? 'block' : 'none')};
        h1 {
            width: 100%;
            position: absolute;
            text-align: center;
            margin-top: 20px;
            font-size: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .options {
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
            gap: 100px;
            flex-direction: column;
            background-color: black;
            margin-top: 50px;
            @media (min-width: 900px) {
                flex-direction: row;
            }
            @media (min-width: 1800px) {
                gap: 200px;
            }
            .option {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img {
                    opacity: 0.8;
                    width: 180px;
                    &:hover {
                        opacity: 1;
                    }
                }
                p {
                    margin-top: 10px;
                    font-size: 28px;
                }
            }
        }
    }
    #back,
    #link-back {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        width: 80px;
        height: 35px;
    }
    #link-back {
        margin-left: 30px;
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
                flex-direction: column;
                width: 100%;
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
    .option {
        text-align: center;
    }
    @media (min-width: 700px) and (max-width: 1799px) {
        width: 100%;
        height: 100vh;
        background-color: ${Colors.activeNav};
        display: grid;
        grid-template-columns: 30% 40% 30%;
        grid-template-rows: 15% 85%;
        #back,
        #link-back {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 120px;
            height: 35px;
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
                    flex-direction: column;
                    width: 100%;
                    margin-bottom: 10px;

                    input {
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
    }
    @media (min-width: 1800px) {
        img {
            width: 250px;
        }

        width: 100%;
        height: 100vh;
        background-color: ${Colors.activeNav};
        display: grid;
        grid-template-columns: 30% 40% 30%;
        grid-template-rows: 15% 85%;
        #back,
        #link-back {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            margin: auto;
            width: 150px;
            height: 90px;
            font-size: 1.5625rem;
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
            form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                label {
                    font-size: 32px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width: 100%;
                    margin-bottom: 20px;

                    input {
                        width: 150px;
                        height: 50px;
                        border: 1px solid #fff;
                        border-radius: 5px;
                        margin-top: 10px;
                    }
                }
            }
        }
        button,
        a {
            width: 200px;
            height: 90px;
            font-size: 1.5625rem;
            background-color: #fff;
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
            width: 250px;
        }
    }
`;
