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
