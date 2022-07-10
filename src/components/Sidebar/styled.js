import styled from 'styled-components';

export const Container = styled.div`
    width: 10vw;
    height: 100vh;
    border-right: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    @media (min-width: 300px) and (max-width: 899px) {
        margin-top: 10vh;
        width: 40vw;
        height: 90vh;
        background-color: rgba(0, 0, 0, 0.9);
        position: fixed;
    }
    input {
        font-family: 'SofiaPro', sans-serif;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
        width: 80%;
        opacity: 0;
        height: 40px;
        border-radius: 10px;
        padding: 1rem;
    }
    img {
        width: 80px;
        opacity: 0.5;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }
    &:hover {
        width: 20vw;
    }
    &:hover input {
        opacity: 1;
    }
`;
