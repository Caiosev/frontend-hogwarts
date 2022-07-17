import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #242633;
`;

export const Header = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1a1a1d;
    padding: 0 30px;
    img {
        width: 50px;
    }
    border-bottom: 1px solid ${Color.line};
    a {
        color: white;
    }
`;

export const Card = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    .grid-frame {
        padding: 20px;
        position: relative;
        border: 1px solid #a85;
        .square {
            background-color: #1a1a1d;
            border: 3px solid #a85;
            width: 20px;
            height: 20px;
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
        .grid-image img {
            width: 180px;
            height: 250px;
            @media (min-width: 900px) {
                width: 220px;
                height: 300px;
            }
        }
    }
`;

export const Inputs = styled.div`
    width: 600px;
    padding-top: 50px;
    margin: auto;
    display: flex;
    gap: 80px;
    justify-content: center
    flex-wrap: wrap;
    .infos{
        display:flex;
        width: 100%;
        gap:20px;
        flex-wrap:wrap;
        justify-content: center;
        @media (min-width: 300px) and (max-width: 899px) {
            flex-direction:column;
            width: 100vw;
            align-items: center
        }

        input {
                    width: 180px;
                    height: 30px;
                    border: 1px solid #fff;
                    border-radius: 5px;
                    padding: 5px;
                    margin-top:5px;
                    @media (min-width:900px) {
                        width: 200px;
                        height: 40px;
                    }
                }
        label{
            display: flex;
            flex-direction: column;
            margin-bottom:5px
            font-family: 'BluuNext',sans-serif;
        }
    }
`;

export const Btn = styled.div`
    button {
        width: 140px;
        height: 50px;
        background-color: ${(props) => (props.env ? '#d1af5a' : '#fff')};
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
    display: flex;
    padding-top: 30px;
    align-items: center;
    justify-content: center;
`;
