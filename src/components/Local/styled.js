import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 50px 0 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'SofiaPro';
    h1 {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 50px;
        @media (min-width: 1800px) {
            font-size: 4rem;
        }
    }
    h2 {
        font-size: 2.25rem;
        padding: 10px 0 20px 0;
        @media (min-width: 1800px) {
            font-size: 3rem;
        }
    }
    p {
        font-size: 1.225rem;
        @media (min-width: 1800px) {
            font-size: 2rem;
        }
    }
    .img-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .text {
            padding: 40px;
            @media (min-width: 900px) and (max-width: 1200px) {
                width: 50%;
            }
            @media (min-width: 1200px) and (max-width: 1800px) {
                width: 55%;
            }
            @media (min-width: 1800px) {
                width: 65%;
            }
        }
        @media (min-width: 900px) and (max-width: 1200px) {
            flex-direction: row;
        }
        @media (min-width: 1200px) and (max-width: 1800px) {
            flex-direction: row;
        }
        @media (min-width: 1800px) {
            flex-direction: row;
        }
    }
    .image {
        width: 300px;
        height: 400px;
        background-image: url('images/trem.jpg');
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
`;
