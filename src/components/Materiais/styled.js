import styled from 'styled-components';

export const Container = styled.section`
    padding-top: 50px;
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    justify-content: center;
    font-family: 'SofiaPro';
    font-weight: bold;
    h1 {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 50px;
    }
    .foto-texto {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        h2 {
            font-size: 2.3rem;
        }
        img {
            width: 30%;
        }
        .texto {
            width: 50%;
            padding: 0 30px;
        }
    }
    .items {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 60px;
    }
    .item {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #242633;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
            width: 60px;
            overflow: hidden;
        }
    }
`;
