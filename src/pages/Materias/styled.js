import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Header = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #242633;
    padding: 0 30px;
    img {
        width: 50px;
    }
    border-bottom: 1px solid ${Color.line};
    a {
        color: white;
    }
`;

export const Container = styled.div`
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    text-align: center;
    background-color: ${Color.activeNav};

    .trace-motion {
        stroke-dasharray: 650;
        stroke-dashoffset: 650;
        opacity: 0.8;
    }

    @keyframes draw {
        to {
            stroke-dashoffset: 0;
        }
    }

    h1 {
        font: 60px 'BluuNext';
        padding-top: 10px;
    }

    h3 {
        font: 24px 'BluuNext';
    }

    main {
        margin: 4em auto 8em;
        max-width: 1200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .spell-card {
        background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
        flex: 0 0 300px;
        padding: 5px;
        margin: 2em;
        border-radius: 20px;
        box-shadow: 0 0 0 14px #333;
        text-align: center;
        position: relative;
        &__inner {
            border-radius: 17px;
            overflow: hidden;
            background: #333;
        }
        h5 {
            font-family: 'BluuNext';
            font-weight: 700;
            font-size: 28px;
            margin-bottom: 15px;
            min-height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        p {
            font-family: 'SofiaPro';
            font-size: 16px;
            width: 90%;
            margin: 0 auto 20px;
            height: 45px;
        }
        &__shape {
            width: 100%;
            height: 300px;
            background: #333;
            display: grid;
            place-items: center;
            position: relative;
            margin-top: 20px;
            svg {
                width: 70%;
                max-width: 250px;
                filter: drop-shadow(0 0 12px #0ff)
                    drop-shadow(-2px -2px 12px #00bcd4);
            }
        }
        &__trace {
            position: absolute;
            width: 100%;
            opacity: 0.4;
            height: 100%;
            top: 0;
            left: 0;
            background-repeat: no-repeat;
            background-size: 70%;
            background-position: center;
        }
        &:hover {
            cursor: pointer;
            .trace-motion {
                animation: draw 1s linear forwards;
            }
        }
    }
    .images {
        position: relative;
    }
    .icon {
        width: 100%;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 50px;
        img {
            width: 100px;
            height: 100px;
        }
    }
`;
