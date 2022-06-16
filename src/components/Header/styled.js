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
    border-bottom: ${(props) =>
        props.active ? ` 1px solid ${Color.border};` : 'none'};
    position: fixed;
    z-index: 2;
    width: 100%;
    top: 0;
    #logo-header {
        width: 65px;
        height: 70px;
        left: ${(props) => (props.active ? `50px` : 'auto')};
        position: ${(props) => (props.active ? `absolute` : 'none')};
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
`;

export const Menu = styled.div`
    display: ${(props) => (props.active ? `block` : 'none')};
    height: 50px;
    width: 70%;
    padding: 0 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) =>
        props.active ? `${Color.activeMenu}` : 'transparent'};
    transition: all 0.3s ease-in;
    z-index: 2;
    font-family: 'SofiaPro';
    a {
        text-decoration: none;
        border-bottom: none;
        color: white;
        font-size: 14px;
        font-weight: 700;
        &:hover {
            border-bottom: 1px solid ${Color.roxo};
        }
    }
`;
