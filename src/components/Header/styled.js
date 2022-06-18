import styled from 'styled-components';
import * as Color from '../../config/colors';

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
    width: 100%;
    top: 0;
    #logo-header {
        width: 65px;
        height: 70px;
    }
    .link-chapeu {
        position: absolute;
        right: 50px;
        width: 40px;
        img {
            width: 100%;
            height: 100%;
        }
        &:hover {
            cursor: pointer;
        }
    }
    #login {
        display: ${(props) => (props.active ? `flex` : 'none')};
        font-family: 'SofiaPro';
        font-weight: 700;
        color: #fff;
    }
`;

export const Menu = styled.div`
    display: none;
    height: 50px;
    width: 70%;
    padding: 0 120px;
    align-items: center;
    justify-content: space-between;
    transition: all ease-in-out;
    opacity: 0;
    z-index: 2;
    font-family: 'SofiaPro';
    a {
        text-decoration: none;
        border-bottom: none;
        color: white;
        font-size: 16px;
        font-weight: 700;
        &:hover {
            border-bottom: 1px solid ${Color.roxo};
        }
    }
`;
