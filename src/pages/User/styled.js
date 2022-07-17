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
            background-color: #10141b;
            border: 1px solid #a85;
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
                    width: 200px;
                    height: 30px;
                    border: 1px solid #fff;
                    border-radius: 5px;
                    padding: 5px;
                    margin-top:5px;
                }
        label{
            display: flex;
            flex-direction: column;
            margin-bottom:5px
        }
    }
`;

export const Btn = styled.div`
    padding-top: 20px;
    margin: auto;
    display: flex;
    justify-content: center;
    button {
        width: 180px;
        height: 50px;
    }
`;
