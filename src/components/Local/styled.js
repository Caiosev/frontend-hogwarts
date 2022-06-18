import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'SofiaPro';
    h1 {
        font-size: 3.5rem;
        text-align: center;
        margin-bottom: 50px;
    }
    h2 {
        font-size: 2.5rem;
    }
    .img-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .text {
            width: 40%;
            margin-left: -20px;
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
