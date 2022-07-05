import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.section`
    padding-top: 50px;
    width: 100%;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    justify-content: center;
    font-family: 'SofiaPro';
    font-weight: bold;

    h1 {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 50px;
    }
    .foto-texto {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        h2 {
            font-size: 2.5rem;
            padding-bottom: 10px;
        }
        .image {
            width: 500px;
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
        }
        .texto {
            width: 50%;
            padding-left: 20px;
            p {
                font-size: 1.4rem;
            }
        }
    }
    .items {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 60px;
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
            width: 60px;
            overflow: hidden;
        }
    }
`;
