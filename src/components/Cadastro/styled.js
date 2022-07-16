import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #242633;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .step {
        width: 80%;
        height: 60%;
        @media (max-width: 800px) {
            width: 70%;
            height: 80%;
        }
    }
    .buttons {
        display: flex;
        gap: 30px;
        width: 600px;
        flex-wrap: wrap;
    }
    h1 {
        margin-top: 15px;
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
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
