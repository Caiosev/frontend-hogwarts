import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${Color.activeNav};
    display: flex;
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Header = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.color};
    padding: 0 20px;
    img {
        width: 50px;
    }
    border-bottom: 1px solid ${Color.line};
`;

export const ListContainer = styled.div`
    width: 100%;
    height: 90%;
`;
