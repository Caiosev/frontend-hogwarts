import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .close {
    }
    gap: 50px;
    p {
        font-weight: 700;
        font-size: 16px;

        @media (min-width: 600px) {
            font-size: 22px;
        }
    }
    button {
        color: white;
        background: none;
    }
    ul {
        font-weight: 700;
        font-size: 16px;
        padding: 0 40px;
        @media (min-width: 600px) {
            font-size: 22px;
        }
        list-style-type: circle;
    }
`;
