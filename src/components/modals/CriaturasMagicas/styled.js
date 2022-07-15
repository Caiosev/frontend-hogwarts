import styled from 'styled-components';

export const Container = styled.div`
    text-align: left;
    font-size: 18px;
    @media (max-width: 600px) {
        font-size: 14px;
        h1 {
            padding-top: 50px;
        }
    }
    h2 {
        padding-top: 10px;
    }
    form {
        text-align: left;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        div {
            p {
                font-size: 25px;
                @media (max-width: 600px) {
                    font-size: 18px;
                }
            }
        }
        .options {
            padding-top: 20px;
            display: flex;
            gap: 25px;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            font-size: 22px;
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
