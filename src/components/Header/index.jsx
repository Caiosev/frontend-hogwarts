import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import * as S from './styled';

export default function Header() {
    const [active, setActive] = React.useState(false);

    return (
        <header>
            <S.Nav
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                active={active}
            >
                <img src="/images/logo.png" alt="" id="logo-header" srcSet="" />
                <Link to="login" className="link-chapeu">
                    <img
                        src="/images/chapeu-seletor.png"
                        id="chapeu-header"
                        alt="chapeu-seletor"
                        srcSet=""
                    />
                </Link>
            </S.Nav>
            <S.Menu
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                active={active}
            >
                <a href="/">Nossa História</a>
                <a href="/">Staff</a>
                <a href="/">Materiais</a>
                <a href="/">Como Chegar</a>
            </S.Menu>
        </header>
    );
}
