import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 10000;
    .loader {
        padding: 30px;
        border: 10px solid #00aeff;
        box-shadow: 0 0 5px 1px #00aeff;
        border-right-color: #09162e;
        border-radius: 50%;
        animation: rotate 1s infinite linear;
        position: absolute;
        top: 45%;
        left: 45%;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`;
