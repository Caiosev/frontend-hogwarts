import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    @media (max-width: 600px) {
        text-align: left;
        font-size: 14px;
        h1 {
            padding-top: 50px;
        }
    }
    form {
        text-align: left;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        label {
            font-size: 25px;
        }
        .options {
            padding-top: 20px;
            display: flex;
            gap: 25px;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
        }
        input {
            margin: 5px 5px;
        }
        button {
            width: 200px;
            height: 60px;
            background-color: ${(props) =>
                props.notenv ? '#d1af5a' : '#fff '};
            font-size: 15px;
            font-weight: bold;
            font-family: 'SofiaPro', sans-serif;
            border-radius: 50px;
            border: none;
            text-align: center;
            margin: auto;
            &:hover {
                background-color: #d1af5a;
                cursor: pointer;
            }
        }
    }
`;
