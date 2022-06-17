import styled from 'styled-components';

export const SecHistory = styled.section`
    width: 100%;
    height: 200vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    #foto,
    #texto {
        width: 30%;
        height: 90vh;
    }
    #foto {
        background: url('images/Hogwarts-Historia.jpg');
        background-size: cover;
        background-position: center;

        background-repeat: no-repeat;
    }
    #texto {
        background-color: #464184;
        margin-left: -20px;
        margin-top: 150px;
        h3 {
            font-size: 1.6rem;
        }

        padding: 20px;
        font-family: 'SofiaPro';
    }
`;
