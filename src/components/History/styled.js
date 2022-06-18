import styled from 'styled-components';

export const SecHistory = styled.section`
    width: 100%;
    height: 100vh;
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
        background-color: #a18f5c;
        margin-left: -100px;
        margin-top: 250px;
        h3 {
            font-size: 1.3rem;
        }

        padding: 50px;
        font-family: 'SofiaPro';
    }
`;
