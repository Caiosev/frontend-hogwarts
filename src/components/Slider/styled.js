import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
    .slick-slider {
        width: 90vw;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .slick-prev:before,
        .slick-next:before {
            font-size: 30px;
            background-color: transparent;
        }
    }
    padding-top: 50px;

    .news1 {
        margin: auto;
        display: flex !important;
        align-items: center;
        justify-content: center;
        padding-top: 40px;
        font-family: 'SofiaPro';
        height: 550px;
        .img-texto {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            width: 25%;
            height: 330px;
            .foto {
                width: 100%;
                height: 200px;
                background-image: url('/images/news1.gif');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                margin-bottom: 5px;
            }
        }
        h2 {
            text-align: left;
            font-size: 2.5rem;
            text-transform: uppercase;
            font-weight: bold;
        }
        h3 {
            text-align: justify;
        }
        .titulo-texto {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            width: 25%;
            height: 330px;
            border-left: 1px solid ${Color.line};
            padding: 0 10px;
            margin-left: 15px;
        }
    }

    .news2 {
        margin: auto;
        display: flex !important;
        align-items: center;
        justify-content: center;
        padding-top: 40px;
        flex-direction: column;
        font-family: 'SofiaPro';
        height: 550px;
        .texto-image {
            display: flex;
            padding-top: 20px;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: row;
            height: 330px;
            border-top: 1px solid #e6e6e6;
            gap: 20px;
            .foto {
                background-image: url('/images/news2.gif');
                background-position: center;
                background-repeat: no-repeat;
                margin-bottom: 5px;
                width: 300px;
                height: 200px;
            }
        }
        h2 {
            text-align: left;
            font-size: 2.5rem;
            text-transform: uppercase;
            font-weight: bold;
            text-align: center;
        }
        h3 {
            text-align: justify;
            width: 200px;
            height: 300px;
            border: 2px solid ${Color.line};
            padding: 5px;
        }
        .titulo-texto {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            width: 25%;
            height: 330px;
            border-left: 1px solid ${Color.line};
            padding: 0 10px;
            margin-left: 15px;
        }
    }
`;
