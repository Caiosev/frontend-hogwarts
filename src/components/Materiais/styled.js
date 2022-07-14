import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.section`
    padding-top: 50px;
    width: 100%;
    height: 1500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    justify-content: center;
    font-family: 'SofiaPro';
    font-weight: bold;
    @media (min-width: 900px) and (max-width: 1200px) {
        height: 900px;
        justify-content: flex-start;
    }
    @media (min-width: 1200px) and (max-width: 1800px) {
        justify-content: flex-start;
        height: 700px;
    }
    @media (min-width: 1800px) {
        font-size: 4rem;
        height: 900px;
    }
    h1 {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 50px;
    }
    .foto-texto {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h2 {
            font-size: 2.25rem;
            padding: 10px 0 20px 0;
        }
        .image {
            width: 80%;
            height: 300px;
            background-image: url('images/diagon_Alley.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            -webkit-mask-image: -webkit-gradient(
                linear,
                left top,
                right bottom,
                from(rgba(0, 0, 0, 1)),
                to(rgba(0, 0, 0, 0))
            );
            mask-image: linear-gradient(
                to right,
                rgba(, 0, 0, 1),
                rgba(0, 0, 0, 0)
            );
            @media (max-width: 600px) {
                margin-bottom: 15px;
            }
        }
        .texto {
            width: 80%;
            text-align: center;
            padding-left: 20px;
            @media (min-width: 900px) {
                text-align: left;
            }
            p {
                font-size: 1.25rem;
            }
        }
        @media (min-width: 900px) and (max-width: 1200px) {
            flex-direction: row;
            .texto {
                width: 450px;
            }
            .image {
                width: 300px;
            }
        }
        @media (min-width: 1200px) and (max-width: 1800px) {
            flex-direction: row;
            .image,
            .texto {
                width: 550px;
            }
        }
        @media (min-width: 1800px) {
            flex-direction: row;
            .image,
            .texto {
                width: 750px;
            }
            .image {
                width: 600px;
            }
        }
    }
    .items {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 60px;
        flex-wrap: wrap;
        width: 90vw;
    }
    .item {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: ${Color.activeNav};
        display: flex;
        flex-direction: column;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        img {
            width: 50px;
            overflow: hidden;
            @media (min-width: 1800px) {
                width: 80px;
            }
        }
        @media (min-width: 1800px) {
            width: 150px;
            height: 150px;
        }
    }
`;
