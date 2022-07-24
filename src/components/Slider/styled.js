import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
    .slick-slider {
        width: 80vw;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .slick-prev:before,
        .slick-next:before {
            font-size: 30px;
            background-color: transparent;
        }
        @media (min-width: 600px) {
            width: 90vw;
        }
    }
    padding-top: 10px;

    .news1 {
        padding: 10px 20px;
        font-family: 'SofiaPro';
        height: 950px;
        .foto {
            width: 100%;
            height: 200px;
            background-image: url('/images/news1.gif');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin-bottom: 5px;
        }
        h2 {
            text-align: left;
            font-size: 20px;
            border: 1px solid white;
            padding: 5px;
            margin: 5px;
            text-transform: uppercase;
            font-weight: bold;
            @media (min-width: 1800px) {
                font-size: 24px;
            }
        }
        h3 {
            text-align: justify;
            font-size: 18px;
            @media (min-width: 1800px) {
                font-size: 22px;
            }
        }
        @media (min-width: 600px) {
            margin: auto;
            display: flex !important;
            align-items: center;
            justify-content: center;
            padding-top: 40px;
            align-items: flex-start;
            .img-texto {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: column;
                width: 25%;
                height: 330px;
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
        @media (min-width: 600px) and (max-width: 900px) {
            .img-texto {
                height: 600px;
            }
        }
        @media (min-width: 900px) and (max-width: 1200px) {
            height: 500px;
        }
        @media (min-width: 1200px) {
            height: 500px;
        }
    }

    .news2 {
        .foto {
            background-image: url('/images/news2.gif');
            background-position: center;
            background-repeat: no-repeat;
            margin-bottom: 5px;
            width: 250px;
            height: 150px;
        }
        .texto-image {
            display: flex;
            padding-top: 20px;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            border-top: 1px solid #e6e6e6;
            gap: 20px;
        }

        display: flex !important;
        align-items: center;
        flex-direction: column;
        font-family: 'SofiaPro';
        justify-content: flex-start;
        height: 950px;

        h2 {
            text-align: left;
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: bold;
            text-align: center;
            @media (min-width: 1800px) {
                font-size: 26px;
            }
        }
        h3 {
            text-align: justify;
            width: 200px;
            border: 2px solid ${Color.line};
            @media (min-width: 1800px) {
                font-size: 24px;
            }
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
        @media (min-width: 600px) {
            .foto {
                background-image: url('/images/news2.gif');
                background-position: center;
                background-repeat: no-repeat;
                margin-bottom: 5px;
                width: 300px;
                height: 200px;
            }
            .texto-image {
                display: flex;
                padding-top: 20px;
                justify-content: space-evenly;
                align-items: flex-start;
                flex-direction: row;
                height: 330px;
                border-top: 1px solid #e6e6e6;
                gap: 20px;
            }

            display: flex !important;
            align-items: center;
            justify-content: flex-start;
            padding-top: 40px;
            flex-direction: column;
            font-family: 'SofiaPro';
            height: 550px;

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
        @media (min-width: 600px) and (max-width: 900px) {
            .img-texto {
                height: 600px;
            }
        }
        @media (min-width: 900px) and (max-width: 1200px) {
            height: 500px;
        }
        @media (min-width: 1200px) {
            height: 600px;
        }
    }

    .news3 {
        .foto {
            background-image: url('/images/news3.png');
            background-position: center;
            background-repeat: no-repeat;
            margin-bottom: 5px;
            width: 250px;
            height: 150px;
            margin: auto;
        }
        .texto-image {
            display: flex;
            padding-top: 20px;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            border-top: 1px solid #e6e6e6;
            gap: 20px;
        }

        display: flex !important;
        align-items: center;
        flex-direction: column;
        font-family: 'SofiaPro';
        justify-content: center;
        height: 950px;

        h2 {
            margin-top: 20px;
            text-align: left;
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: bold;
            text-align: center;
            padding: 5px;
            @media (min-width: 1800px) {
                font-size: 26px;
            }
        }
        h3 {
            text-align: justify;
            width: 200px;
            border: 2px solid ${Color.line};
            @media (min-width: 1800px) {
                font-size: 24px;
            }
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
        .texto {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        @media (min-width: 600px) {
            flex-direction: row;
            align-items: center;
            padding: 0 !important;
            .foto {
                background-image: url('/images/news3.png');
                background-position: center;
                background-repeat: no-repeat;
                margin-bottom: 5px;
                width: 450px;
                height: 450px;
            }
            .img-titulo {
                display: flex;
                flex-direction: column-reverse;
                width: 450px;
            }
            .texto-image {
                display: flex;
                padding-top: 20px;
                justify-content: space-evenly;
                align-items: flex-start;
                flex-direction: row;
                height: 330px;
                border-top: 1px solid #e6e6e6;
                gap: 20px;
            }

            display: flex !important;
            align-items: center;
            justify-content: center;
            padding-top: 40px;
            font-family: 'SofiaPro';
            height: 550px;

            h2 {
                text-align: left;
                font-size: 2.5rem;
                text-transform: uppercase;
                font-weight: bold;
                text-align: center;
            }
            h3 {
                text-align: justify;
                width: 100%;
                height: 100%;
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
            .texto {
                height: 450px;
                width: 400px;
                gap: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
            }
        }
        @media (min-width: 600px) and (max-width: 900px) {
            .img-texto {
                height: 600px;
            }
        }
        @media (min-width: 900px) and (max-width: 1200px) {
            height: 500px;
        }
        @media (min-width: 1200px) {
            height: 600px;
        }
    }
`;
