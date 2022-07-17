import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: 900px) {
        flex-direction: column;
    }
    #divfoto {
        height: 370px;
        @media (min-width: 900px) {
            height: 700px;
        }
    }
    #foto {
        width: 230px;
        height: 350px;
        object-fit: cover;
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
        width: 230px;
        height: 130px;
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
    .file-input {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .file-input__input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .file-input__label {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        font-size: 14px;
        padding: 10px 12px;
        background-color: #4245a8;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    }

    .file-input__label svg {
        height: 16px;
        margin-right: 4px;
    }
`;
