import styled from 'styled-components';

export const Sec = styled.section`
    height: 2250px;
    width: 100%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 600px) and (max-width: 900px) {
        height: 2500px;
    }
    @media (min-width: 900px) and (max-width: 1200px) {
        height: 600px;
    }
    @media (min-width: 1200px) and (max-width: 1800px) {
        height: 600px;
    }
    @media (min-width: 1800px) {
        height: 600px;
    }

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
        @media (min-width: 1200px) and (max-width: 1800px) {
            font-size: 20px;
        }
    }
    .heads {
        display: flex;
        text-align: center;
        flex-direction: column;
        gap: 50px;
        padding-top: 50px;
        @media (min-width: 900px) and (max-width: 1200px) {
            flex-direction: row;
            width: 90%;
        }
        @media (min-width: 1200px) and (max-width: 1800px) {
            flex-direction: row;
        }
        @media (min-width: 1800px) {
            flex-direction: row;
        }
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
            @media (min-width: 600px) and (max-width: 900px) {
                width: 200px;
                height: 270px;
            }
            @media (min-width: 900px) and (max-width: 1200px) {
                width: 60px;
                height: 130px;
            }
            @media (min-width: 1200px) and (max-width: 1800px) {
                width: 100px;
                height: 170px;
            }
        }
        .grid-image-dumbledore img {
            width: 180px;
            height: 250px;
            @media (min-width: 600px) and (max-width: 900px) {
                width: 230px;
                height: 300px;
            }
            @media (min-width: 900px) and (max-width: 1200px) {
                width: 80px;
                height: 150px;
            }
        }
    }
    .card-head {
        text-align: center;
    }
`;
