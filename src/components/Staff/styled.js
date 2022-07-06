import styled from 'styled-components';

export const Sec = styled.section`
    height: 2250px;
    width: 100vw;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .pomona,
    .alvo,
    .minerva,
    .filius,
    .snape {
        opacity: 0;
    }
    h1 {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 50px;
    }
    h2 {
        padding-top: 30px;
    }
    .heads {
        display: flex;
        text-align: center;
        flex-direction: column;
        gap: 50px;
        /* flex-direction: row; */
        padding-top: 50px;
    }
    .grid-frame {
        padding: 28px;
        position: relative;
        border: 1px solid #a85;
        .square {
            background-color: #10141b;
            border: 1px solid #a85;
            width: 20px;
            height: 20px;
            position: absolute;
        }
        .tl {
            top: -10px;
            left: -10px;
        }
        .tr {
            top: -10px;
            right: -10px;
        }
        .bl {
            bottom: -10px;
            left: -10px;
        }
        .br {
            bottom: -10px;
            right: -10px;
        }
        .grid-image img {
            width: 150px;
            height: 220px;
            @media (max-width: 1024px) {
            }
        }
        .grid-image-dumbledore img {
            width: 180px;
            height: 250px;
        }
    }
    .card-head {
        text-align: center;
    }
`;
