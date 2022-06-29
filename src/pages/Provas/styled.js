import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${Color.activeNav};
    display: flex;
    a {
        text-decoration: none;
        color: white;
    }
`;

export const Content = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const Header = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.color};
    padding: 0 30px;
    img {
        width: 50px;
    }
    border-bottom: 1px solid ${Color.line};
    .options {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        svg {
            cursor: pointer;
        }
    }
`;
