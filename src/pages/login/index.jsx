import React from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch(exampleActions.clicaBotaoRequest());
    }
    return (
        <S.Container>
            <S.Title>login</S.Title>
            <S.Paragrafo>Lorem ipsum, dolor sit amet consectetur.</S.Paragrafo>

            <button type="button" onClick={handleClick}>
                Enviar
            </button>
        </S.Container>
    );
}
