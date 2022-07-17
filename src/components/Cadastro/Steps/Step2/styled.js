import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: 900px) {
        flex-direction: column;
        height: 90vh;
        justify-content: flex-start;
    }
    .items {
        @media (min-width: 900px) {
            width: 500px;
            display: flex;
            height: 400px;
            flex-wrap: wrap;
            gap: 40px;
        }
    }
    .item {
        width: 230px;
        height: 130px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
            font-size: 22px;
            padding-bottom: 10px;
        }
        input,
        select {
            height: 45px;
            padding-left: 10px;
            width: 100%;
            font-size: 20px;
            border-radius: 15px;
        }
    }
    button {
        width: 170px;
        height: 45px;
        font-size: 18px;
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
`;
