import styled from 'styled-components';
import * as Color from '../../config/colors';

export const SecHistory = styled.section`
    width: 100%;
    height: 680px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    #foto,
    #texto {
        width: 30%;
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
        margin-left: -100px;
        margin-top: 250px;
        h3 {
            font-size: 1.3rem;
        }

        padding: 50px;
        font-family: 'SofiaPro';
    }
`;
