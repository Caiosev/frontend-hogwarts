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
    }
    #divfoto {
        height: 500px;
        @media (min-width: 900px) {
            height: 700px;
        }
    }
    #foto {
        width: 200px;
        padding: 20px 0;
        @media (min-width: 900px) {
            width: 400px;
        }
    }
    .items {
        @media (min-width: 900px) {
            width: 600px;
            display: flex;
            height: 400px;
            flex-wrap: wrap;
            gap: 70px;
        }
    }
    .item {
        width: 250px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
            font-size: 25px;
            padding-bottom: 10px;
        }
        input,
        select {
            height: 50px;
            padding-left: 10px;
            width: 100%;
            font-size: 20px;
            border-radius: 15px;
        }
    }
    button {
        width: 200px;
        height: 60px;
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
