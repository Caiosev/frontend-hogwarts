import styled from 'styled-components';

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
`;
