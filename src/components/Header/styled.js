import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Header = styled.header`
    .active {
        left: 0;
    }
    transition: all ease-in-out;
`;

export const Nav = styled.nav`
    background-color: ${(props) =>
        props.active ? `${Color.activeNav}` : 'transparent'};
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in;
    position: fixed;
    z-index: 2;
    width: 100vw;
    top: 0;
    @media (max-width: 600px) {
        justify-content: flex-start;
    }
    .link-chapeu {
        display: ${(props) => (props.isLoggedIn ? `none` : 'inline')};
        position: absolute;
        right: 50px;
        width: 40px;
        @media (min-width: 1800px) {
            width: 55px;
        }
        img {
            width: 100%;
            height: 100%;
        }
        &:hover {
            cursor: pointer;
        }
    }
    .link-logo {
        display: ${(props) => (props.isLoggedIn ? `none` : 'inline')};
        position: absolute;
        left: 45vw;
        width: 65px;
        @media (min-width: 1800px) {
            width: 85px;
        }
        img {
            width: 100%;
            height: 100%;
        }
        &:hover {
            cursor: pointer;
        }
        @media (max-width: 600px) {
            display: none;
        }
        @media (min-width: 600px) and (max-width: 900px) {
            position: absolute;
            left: 50px;
            top: 10px;
        }
    }
    #out {
        position: absolute;
        right: 50px;
        width: 40px;
        color: white;
        &:hover {
            cursor: pointer;
        }
    }
    #dashboard {
        position: absolute;
        right: 100px;
        width: 40px;
        color: white;
        &:hover {
            cursor: pointer;
        }
    }
    #login {
        display: ${(props) =>
            props.active && !props.isLoggedIn ? `flex` : 'none'};
        font-family: 'SofiaPro';
        font-weight: 700;
        color: #fff;
    }
    @media (min-width: 1800px) {
        height: 150px;
    }
`;

export const Menu = styled.div`
    display: none;
    height: 50px;
    width: 70%;

    padding: 0 120px;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease-in;
    opacity: 0;
    z-index: 2;
    font-family: 'SofiaPro';
    position: relative;
    @media (max-width: 600px) {
        justify-content: flex-start;
        padding: 0 0 0 10px;
    }
    @media (min-width: 600px) and (max-width: 900px) {
        width: 90%;
    }
    a {
        text-decoration: none;
        border-bottom: none;
        color: white;
        font-size: 16px;
        font-weight: 700;
        &:hover {
            border-bottom: 1px solid ${Color.roxo};
        }
        @media (max-width: 600px) {
            display: none !important;
        }
        @media (min-width: 1800px) {
            font-size: 20px;
        }
    }
    .ham {
        cursor: pointer;
        position: absolute;
        z-index: 100;
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        @media (min-width: 600px) {
            display: none;
        }
    }
    .hamRotate.active {
        transform: rotate(45deg);
    }
    .hamRotate180.active {
        transform: rotate(180deg);
    }
    .line {
        fill: none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke: #fff;
        stroke-width: 6.5;
        stroke-linecap: round;
    }
    .ham6 .top {
        stroke-dasharray: 40 172;
    }
    .ham6 .middle {
        stroke-dasharray: 40 111;
    }
    .ham6 .bottom {
        stroke-dasharray: 40 172;
    }
    .ham6.active .top {
        stroke-dashoffset: -132px;
    }
    .ham6.active .middle {
        stroke-dashoffset: -71px;
    }
    .ham6.active .bottom {
        stroke-dashoffset: -132px;
    }
`;

export const MobileMenu = styled.div`
    width: 100vw;
    height: 180px;
    margin-top: 100px;
    position: fixed;
    transition: all 0.3s ease-in;
    z-index: 10;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    padding: 10px;
    color: white;
    flex-direction: column;
    gap: 10px;
    margin-left: ${(props) => (props.menuMobile ? `0` : '-100vw')};

    a {
        text-decoration: none;
        border-bottom: none;
        color: white;
        font-size: 20px;
        font-weight: 700;
        &:hover {
            border-bottom: 1px solid ${Color.roxo};
        }
    }
`;
