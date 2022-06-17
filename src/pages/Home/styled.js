import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const BgParticles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

export const HomeBg = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url('/images/bg-hogwarts.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(2px);
    -webkit-mask-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 1)),
        to(rgba(0, 0, 0, 0.1))
    );
    mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0.1)
    );
`;

export const HomeText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 95vh;
    flex-direction: column;
    position: absolute;
    top: 0;
    font-family: 'BluuNext', sans-serif;
    h1 {
        font-size: 3.33rem;
    }
    h2 {
        font-size: 16px;
    }
    .divWand {
        position: absolute;
        bottom: 0px;
        transform: scale(0);
    }
`;

export const SecNews = styled.section`
    width: 100%;
    height: 80vh;
    font-family: 'BluuNext', sans-serif;
    h1 {
        font-size: 3rem;
        text-align: center;
        padding-top: 100px;
    }
    .line {
        width: 70vw;
        margin: 5px auto;
        border: 1px solid #696b78;
    }
    .select-news {
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: center;
        margin-top: 15px;
    }
    #I,
    #II,
    #III,
    #IV,
    #V,
    #VI {
        opacity: 0.5;
        transition: all 0.1s ease-in-out;
        cursor: pointer;
    }
    .active {
        opacity: 1 !important;
        color: #d1af5a;
        transform: scale(1.2);
    }
`;
