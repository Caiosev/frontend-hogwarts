import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { gsap } from 'gsap';
import { FaSignOutAlt, FaColumns } from 'react-icons/fa';
import * as S from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Header() {
    const active =
        useSelector((state) => state.scrollReducer.ativar_nav) || false;
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch();
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

    const handleLogout = () => {
        dispatch(actions.loginFailure());
        navigate('/');
    };

    return (
        <header>
            <S.Nav active={active} isLoggedIn={isLoggedIn}>
                <a href="/#home">
                    <img
                        src="/images/logo.png"
                        alt=""
                        id="logo-header"
                        srcSet=""
                    />
                </a>
                {!isLoggedIn ? (
                    <Link to="login" className="link-chapeu">
                        <img
                            src="/images/chapeu-seletor.png"
                            id="chapeu-header"
                            alt="chapeu-seletor"
                            srcSet=""
                        />
                        <span id="login">Login</span>
                    </Link>
                ) : (
                    <>
                        <Link to="/" id="out" onClick={handleLogout}>
                            <FaSignOutAlt size={24} />
                        </Link>
                        <Link to="/dashboard" id="dashboard">
                            <FaColumns size={24} />
                        </Link>
                    </>
                )}

                <S.Menu active={active} className="menu">
                    <a href="/#news">Nossa História</a>
                    <a href="/#staff">Staff</a>
                    <a href="/#materiais">Materiais</a>
                    <a href="/#local">Como Chegar</a>
                </S.Menu>
            </S.Nav>
        </header>
    );
}
