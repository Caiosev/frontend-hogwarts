import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from './styled';

export default function Header() {
    const active =
        useSelector((state) => state.scrollReducer.ativar_nav) || false;
    return (
        <header>
            <S.Nav active={active}>
                <img src="/images/logo.png" alt="" id="logo-header" srcSet="" />
                <Link to="login" className="link-chapeu">
                    <img
                        src="/images/chapeu-seletor.png"
                        id="chapeu-header"
                        alt="chapeu-seletor"
                        srcSet=""
                    />
                </Link>
                {active ? (
                    <S.Menu active={active}>
                        <a href="/">Nossa História</a>
                        <a href="/">Staff</a>
                        <a href="/">Materiais</a>
                        <a href="/">Como Chegar</a>
                    </S.Menu>
                ) : null}
            </S.Nav>
        </header>
    );
}
