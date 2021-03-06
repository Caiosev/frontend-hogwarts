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
        background-color:#242633;
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
    body{
        @media(min-width:900px){
            *::-webkit-scrollbar{
            width: 10px;
            border-radius:5px;
        }
        *::-webkit-scrollbar-track{
            background:#dddddd;
        }
        *::-webkit-scrollbar-thumb{
            background:#A2B5BB;
            border-radius:10px;
        }
        }
    }

    ul{
        list-style:none;
    }
    select option {
    margin:40px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
    padding:5px;
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
