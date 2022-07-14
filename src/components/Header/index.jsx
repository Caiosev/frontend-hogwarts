import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { gsap } from 'gsap';
import { FaSignOutAlt, FaColumns, FaUserAlt } from 'react-icons/fa';
import { Link as Scroll } from 'react-scroll';
import * as S from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Header() {
    const active =
        useSelector((state) => state.scrollReducer.ativar_nav) || false;
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const loggedAs = useSelector((state) => state.auth.loggedAs);
    const [menuMobile, setMenuMobile] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (active) {
            gsap.timeline()
                .to('.link-logo', { scale: 0, duration: 0.2 })
                .to('.link-logo', {
                    duration: 0.5,
                    left: '40px',
                    scale: 1,
                    marginLeft: 0,
                });
            gsap.to('.menu', {
                display: 'flex',
                duration: 1,
                opacity: 1,
            });
        } else {
            gsap.timeline()
                .to('.link-logo', {
                    scale: 0,
                    duration: 0.2,
                    left: '50vw',
                    marginLeft: '-27.5px',
                })
                .to('.menu', { display: 'none', duration: 0.2, opacity: 0 })
                .to('.link-logo', { duration: 0.5, scale: 1 });
        }
        if (!active) {
            setMenuMobile(false);
        }
    }, [active]);

    const handleLogout = () => {
        dispatch(actions.loginFailure());
        navigate('/');
    };

    return (
        <S.Header>
            <S.Nav active={active} isLoggedIn={isLoggedIn}>
                <Link to="/" className="link-logo">
                    <img src="/images/logo.png" alt="logo" srcSet="" />
                </Link>
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
                        {loggedAs === 'prof' ? (
                            <Link to="/painel" id="dashboard">
                                <FaColumns size={24} />
                            </Link>
                        ) : (
                            <Link to="/provas" id="dashboard">
                                <FaUserAlt size={25} />
                            </Link>
                        )}
                    </>
                )}

                <S.Menu active={active} className="menu">
                    <svg
                        className={`ham ham6 ${menuMobile && 'active'}`}
                        viewBox="0 0 100 100"
                        width="50"
                        onClick={() => setMenuMobile(!menuMobile)}
                    >
                        <path
                            className="line top"
                            d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
                        />
                        <path
                            className="line middle"
                            d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
                        />
                        <path
                            className="line bottom"
                            d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
                        />
                    </svg>
                    <Scroll
                        activeClass="active"
                        to="history"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                    >
                        Nossa História
                    </Scroll>
                    <Scroll
                        activeClass="active"
                        to="staff"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                    >
                        Staff
                    </Scroll>
                    <Scroll
                        activeClass="active"
                        to="materiais"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                    >
                        Materiais
                    </Scroll>
                    <Scroll
                        activeClass="active"
                        to="local"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                    >
                        Como Chegar
                    </Scroll>
                </S.Menu>
            </S.Nav>
            <S.MobileMenu
                menuMobile={menuMobile}
                className={`${menuMobile && 'active'}`}
            >
                <Scroll
                    activeClass="active"
                    to="history"
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                >
                    Nossa História
                </Scroll>
                <Scroll
                    activeClass="active"
                    to="staff"
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                >
                    Staff
                </Scroll>
                <Scroll
                    activeClass="active"
                    to="materiais"
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                >
                    Materiais
                </Scroll>
                <Scroll
                    activeClass="active"
                    to="local"
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                >
                    Como Chegar
                </Scroll>
            </S.MobileMenu>
        </S.Header>
    );
}
