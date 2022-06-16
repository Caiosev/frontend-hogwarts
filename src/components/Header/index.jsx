import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import * as S from './styled';

export default function Header() {
    const active =
        useSelector((state) => state.scrollReducer.ativar_nav) || false;

    useEffect(() => {
        if (active) {
            gsap.timeline()
                .to('#logo-header', { scale: 0, duration: 0.2 })
                .to('#logo-header', { duration: 0.5, x: -10, scale: 1 });
            gsap.to('.menu', {
                display: 'flex',
                duration: 1,
                opacity: 1,
            });
        } else {
            gsap.timeline()
                .to('#logo-header', { scale: 0, duration: 0.2 })
                .to('.menu', { display: 'none', duration: 0.2, opacity: 0 })
                .to('#logo-header', { duration: 0.5, scale: 1 });
        }
    }, [active]);

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
                <S.Menu active={active} className="menu">
                    <a href="/">Nossa História</a>
                    <a href="/">Staff</a>
                    <a href="/">Materiais</a>
                    <a href="/">Como Chegar</a>
                </S.Menu>
            </S.Nav>
        </header>
    );
}
