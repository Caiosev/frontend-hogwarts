import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:none;
        box-sizing:border-box;
    }

    body{
        color: #fff;
        scroll-behavior: smooth;
    }

    html,body,#root{
        height:100%;
        @font-face {
        font-family: 'BluuNext';
        src:  url('fonts/BluuNext-Bold.otf');
        }
        @font-face {
        font-family: 'SofiaPro';
        src:  url('fonts/sofiapro-light.otf');
        }
        overflow-x: clip;
        width:100vw;
    }

    ul{
        list-style:none;
    }

`;

export const Container = styled.section`
    max-width: 360px;
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
