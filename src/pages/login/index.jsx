import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import * as S from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch(exampleActions.clicaBotaoRequest());
    }
    return (
        <Container>
            <S.Title>login</S.Title>
            <S.Paragrafo>Lorem ipsum, dolor sit amet consectetur.</S.Paragrafo>

            <button type="button" onClick={handleClick}>
                Enviar
            </button>
        </Container>
    );
}
