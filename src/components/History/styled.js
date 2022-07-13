import styled from 'styled-components';
import * as Color from '../../config/colors';

export const SecHistory = styled.section`
    width: 100%;
    height: 670px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 100px;
    @media (min-width: 1800px) {
        height: 900px;
    }
    #foto,
    #texto {
        width: 40%;
        height: 500px;
        @media (min-width: 600px) and (max-width: 900px) {
            width: 30%;
        }
        @media (min-width: 900px) and (max-width: 1200px) {
            width: 25%;
        }
        @media (min-width: 1200px) and (max-width: 1800px) {
            width: 25%;
        }
        @media (min-width: 1800px) {
            width: 25%;
        }
    }
    #foto {
        background: url('images/Hogwarts-Historia.jpg');
        background-size: cover;
        background-position: center;

        background-repeat: no-repeat;
    }
    #texto {
        background-color: ${Color.gold};
        margin-left: -20px;
        margin-top: 20px;
        h3 {
            font-size: 13px;
            @media (min-width: 600px) and (max-width: 900px) {
                font-size: 18px;
            }
            @media (min-width: 900px) and (max-width: 1200px) {
                font-size: 18px;
            }
            @media (min-width: 1200px) and (max-width: 1800px) {
                font-size: 22px;
            }
            @media (min-width: 1800px) {
                font-size: 26px;
            }
        }

        padding: 20px;
        font-family: 'SofiaPro';
    }
`;
