import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    form {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        label {
            font-size: 25px;
        }
        .options {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: center;
        }
        input {
            margin: 5px 5px;
        }
    }
`;
