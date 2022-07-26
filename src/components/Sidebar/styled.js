import styled from 'styled-components';

export const Container = styled.div`
    .desk {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        position: fixed;
        padding: 20px;
    }
    width: 15vw;
    height: 100%;
    display: flex;
    @media (min-width: 900px) {
        background-color: #1a1a1d;
        position: fixed;
    }
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    .mobile {
        display: none;
    }
    @media (min-width: 300px) and (max-width: 899px) {
        border-right: 0;
        height: 100%;
        position: fixed;
        .mobile {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 30px;
            button {
                width: 200px;
                height: 60px;
                background-color: ${(props) =>
                    props.env ? '#d1af5a' : '#fff'};
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
                a {
                    color: black;
                }
            }
        }
        .desk {
            display: none;
        }
        margin-top: 90px;
        width: 100vw;
        height: 90vh;
        background-color: rgba(0, 0, 0, 1);
        position: fixed;
        z-index: 10;
    }
    input {
        font-family: 'SofiaPro', sans-serif;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 20px;
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
`;
