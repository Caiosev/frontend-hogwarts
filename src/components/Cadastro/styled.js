import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: #242633;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
        height: 60px;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 100px;

        img {
            cursor: pointer;
            height: 30px;
        }
        .voltar {
            transform: rotate(180deg);
        }
    }
    h1 {
        margin-top: 15px;
        @media (min-width: 900px) {
            margin: 50px auto 30px auto;
            font-size: 2.5rem;
        }
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1a1d;
    img {
        cursor: pointer;
        width: 50px;
    }
    border-bottom: 1px solid #ffff;
    a {
        color: white;
        position: absolute;
        left: 20px;
    }
`;
