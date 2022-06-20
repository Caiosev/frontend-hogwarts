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
    display: flex;
    text-align: center;
    padding: 100px;
    gap: 50px;
    flex-direction: row;
    padding-top: 50px;
    .aluno {
        display: flex;
        flex-direction: column;
        height: 270px;
        align-items: center;
        transition: all 0.3s ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
    }
    .grid-frame {
        position: relative;
        border: 2px solid #808080;
        width: 180px;
        height: 220px;
        .square {
            background-color: #10141b;
            border: 1px solid #808080;
            width: 10px;
            height: 10px;
            position: absolute;
        }
        .tl {
            top: -10px;
            left: -10px;
        }
        .tr {
            top: -10px;
            right: -10px;
        }
        .bl {
            bottom: -10px;
            left: -10px;
        }
        .br {
            bottom: -10px;
            right: -10px;
        }
        .foto-aluno {
            width: 100%;
            height: 100%;
            padding: 10px;
        }
    }
    .aluno-nome {
        font-size: 1.3rem;
        font-family: 'BluuNext', sans-serif;
        padding-top: 15px;
    }
    .aluno-info {
        font-family: 'SofiaPro', sans-serif;
        font-size: 1rem;
        padding-top: 5px;
    }
`;
