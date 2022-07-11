import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    #tsparticles {
        position: absolute;
        z-index: -1;
    }
    a {
        margin-top: 20px;
    }
    .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

export const Btn = styled.button`
    width: 200px;
    height: 60px;
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
`;
