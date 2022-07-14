import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    h1 {
        font-family: 'BluuNext', sans-serif;
    }
    scroll-behavior: smooth;
    .splash {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: black;
        display: flex;
        z-index: 100;
        align-items: center;
        justify-content: center;
        .cls-1 {
            opacity: 0.15;
        }

        .cls-2 {
            fill: #636363;
        }

        .cls-3 {
            fill: #f2f2f2;
        }

        .cls-4 {
            fill: #e2e2e2;
        }

        .cls-5 {
            opacity: 0.1;
        }

        .cls-6 {
            fill: #ffe131;
        }

        .cls-7 {
            opacity: 0.05;
        }

        svg {
            width: 20%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            overflow: visible;
        }

        #wand {
            animation: magic 2s ease infinite;
        }

        @keyframes magic {
            0% {
                transform: rotate(0deg) translateX(0px) rotate(0deg) scale(1);
                transform-origin: 50% 50%;
            }
            15% {
                transform: rotate(0deg) translateX(50px) rotate(0deg) scale(1);
                transform-origin: 50% 50%;
            }
            70% {
                transform: rotate(360deg) translateX(0px) rotate(-360deg)
                    scale(1);
                transform-origin: 50% 50%;
            }
            77% {
                transform: rotate(360deg) translateX(0px) rotate(-360deg)
                    scale(0.9);
                transform-origin: 50% 50%;
            }
            80% {
                transform: rotate(360deg) translateX(0px) rotate(-360deg)
                    scale(1);
                transform-origin: 50% 50%;
            }
            100% {
                transform: rotate(360deg) translateX(0px) rotate(-360deg)
                    scale(1);
                transform-origin: 50% 50%;
            }
        }

        #star1 {
            animation: twinkle 2s ease infinite;
        }

        @keyframes twinkle {
            0% {
                transform: scale(0);
                opacity: 0;
                transform-origin: 60% 40%;
            }
            77% {
                transform: scale(0);
                opacity: 0;
                transform-origin: 60% 40%;
            }
            82% {
                transform: scale(1.2);
                opacity: 1;
                transform-origin: 60% 40%;
            }
            87% {
                transform: scale(1);
                opacity: 1;
                transform-origin: 60% 40%;
            }
            100% {
                transform: scale(1);
                opacity: 1;
                transform-origin: 60% 40%;
            }
        }

        #star2 {
            animation: twinkle2 3s ease infinite;
        }

        @keyframes twinkle2 {
            0% {
                transform: scale(0);
                opacity: 0;
                transform-origin: 60% 40%;
            }
            82% {
                transform: scale(0);
                opacity: 0;
                transform-origin: 60% 40%;
            }
            87% {
                transform: scale(1.2);
                opacity: 1;
                transform-origin: 60% 40%;
            }
            92% {
                transform: scale(1);
                opacity: 1;
                transform-origin: 60% 40%;
            }
            100% {
                transform: scale(1);
                opacity: 1;
                transform-origin: 60% 40%;
            }
        }

        #star3 {
            animation: twinkle3 3s ease infinite;
        }

        @keyframes twinkle3 {
            0% {
                transform: scale(0);
                opacity: 0;
                transform-origin: 60% 60%;
            }
            87% {
                transform: scale(0);
                opacity: 0;
                transform-origin: 60% 60%;
            }
            92% {
                transform: scale(1.2);
                opacity: 1;
                transform-origin: 60% 60%;
            }
            97% {
                transform: scale(1);
                opacity: 1;
                transform-origin: 60% 60%;
            }
            100% {
                transform: scale(1);
                opacity: 1;
                transform-origin: 60% 60%;
            }
        }

        #star4 {
            animation: twinkle4 2s ease infinite;
        }

        @keyframes twinkle4 {
            0% {
                transform: scale(0);
                opacity: 0;
                transform-origin: 60% 60%;
            }
            92% {
                transform: scale(0);
                opacity: 0;
                transform-origin: 60% 60%;
            }
            97% {
                transform: scale(1.2);
                opacity: 1;
                transform-origin: 60% 60%;
            }
            100% {
                transform: scale(1);
                opacity: 1;
                transform-origin: 60% 60%;
            }
        }
    }
    background-color: #1a1a1d;
`;

export const BgParticles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100%;
    #tsparticles {
        height: 100vh;
    }
`;

export const HomeBg = styled.section`
    width: 100%;
    height: 90vh;
    @media (min-width: 1800px) {
        height: 95vh;
    }
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
    @keyframes zoom {
        to {
            transform: scale(1.3);
        }
    }
    animation: zoom 1s 2s ease-in forwards;
`;

export const HomeText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 95vh;
    flex-direction: column;
    position: absolute;
    top: 0;
    font-family: 'BluuNext', sans-serif;
    h1 {
        font-size: 4rem;
        text-shadow: 0px 3px 10px rgba(0, 0, 0, 1);
        @media (min-width: 1800px) {
            font-size: 5rem;
        }
    }
    h2 {
        font-size: 1.5rem;
        color: rgb(209, 175, 100);
        text-shadow: 0px 3px 10px rgba(0, 0, 0, 1);
        @media (min-width: 1800px) {
            font-size: 2rem;
        }
    }
    .divWand {
        position: absolute;
        bottom: 0px;
        transform: scale(0);
        display: ${(props) => (props.active ? 'none' : 'block')};
    }
`;
