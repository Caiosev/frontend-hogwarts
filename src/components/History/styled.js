import styled from 'styled-components';
import * as Color from '../../config/colors';

export const SecHistory = styled.section`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
    #foto,
    #texto {
        width: 40%;
        max-height: 668px;
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
        margin-top: 250px;
        h3 {
            font-size: 13px;
        }

        padding: 20px;
        font-family: 'SofiaPro';
    }
`;
