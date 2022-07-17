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
        flex-direction: row;
        justify-content: center;
        height: 35vw;
        width: 37vh;
        background: #181928;
        border: 1px solid #353643;
        box-shadow: -1px 7px 13px 0px rgba(0, 0, 0, 0.93);
    }
    .items {
        @media (min-width: 900px) {
            width: 250px;
            display: flex;
            flex-direction: column;
            height: 590px;
            flex-wrap: wrap;
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
    .prox {
        margin: auto;
    }
`;
export const Content = styled.div`
    @media (max-width: 899px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        .buttons {
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media (min-width: 900px) {
        display: flex;
        align-items: center;
        .buttons {
            @media (min-width: 900px) {
                width: 100px;
                padding-left: 50px;
            }
        }
        justify-content: center;
    }
`;
