/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect, useRef } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { useReactToPrint } from 'react-to-print';
import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import NotEnv from './NotEnv';
import { Boletim } from '../../components/Boletim';
import Loading from '../../components/Loading';
import * as S from './styled';

export default function Provas() {
    const id = useSelector((state) => state.auth.user.id);
    const nome = useSelector((state) => state.auth.user.nome);
    const [env, setEnv] = useState(false);
    const [loading, setLoading] = useState(true);
    const [notenv, setNotEnv] = useState(true);
    const [provas, setProvas] = useState(undefined);

    // const [valor, setValor] = useState(undefined);
    // const [idProf, setIdProf] = useState(undefined);
    const [menuMobile, setMenuMobile] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const componentRef = useRef();
    const [provasFeitas] = useState([
        'NA',
        'NA',
        'NA',
        'NA',
        'NA',
        'NA',
        'NA',
        'NA',
        'NA',
        'NA',
        'NA',
        'NA',
        'NA',
    ]);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const getProvas = async () => {
        try {
            const res = await axios.get(`/provas/${id}`);
            setProvas(res.data);
            console.log(provas);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getProvas();
    }, []);

    const handleLogout = () => {
        dispatch(actions.loginFailure());
        navigate('/');
    };

    const submitProva = async (v, p) => {
        console.log('submit');
        await axios.post(`/provas/`, {
            valor: v,
            prof_id: p,
            aluno_id: id,
        });
        console.log('deu submit');
        getProvas();
        setLoading(false);
    };

    // useEffect(() => {
    //     setLoading(true);
    //     console.log('valor unde');
    //     if (valor === undefined) return;
    //     console.log('valor mudado');
    //     const profId = idProf;
    //     submitProva(profId);
    // }, [valor]);

    return (
        <S.Container>
            <>
                <S.Header>
                    <div className="menu">
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
                    </div>
                    <Link to="/">
                        <img
                            src="/images/logo.png"
                            alt=""
                            srcSet=""
                            id="logo"
                        />
                    </Link>
                    <div className="options">
                        <Link to="/" id="out" onClick={handleLogout}>
                            <FaSignOutAlt size={24} />
                        </Link>
                    </div>
                </S.Header>
                <S.Content>
                    <S.SideBar menuMobile={menuMobile} className="sidebar">
                        <h1>Bem vindo {nome}</h1>
                        <div className="buttons">
                            <S.NotEnvBtn
                                type="button"
                                onClick={() => {
                                    setEnv(false);
                                    setNotEnv(true);
                                }}
                                notenv={notenv}
                            >
                                Nao Enviadas Enviadas
                            </S.NotEnvBtn>
                            <S.EnvBtn
                                type="button"
                                onClick={() => {
                                    setEnv(true);
                                    setNotEnv(false);
                                }}
                                env={env}
                            >
                                Enviadas
                            </S.EnvBtn>
                            <Link to="/feiticos">
                                <S.EnvBtn>Feiticos</S.EnvBtn>
                            </Link>
                        </div>
                    </S.SideBar>
                    <hr />
                    <div className="sec-provas">
                        {notenv ? (
                            <div className="not-env">
                                <NotEnv
                                    provas={provas}
                                    setLoading={setLoading}
                                    submitProva={submitProva}
                                />
                            </div>
                        ) : (
                            <div className="env">
                                <h1>Provas Enviadas</h1>
                                <div className="provas">
                                    {provas.length === 0 ? (
                                        <p>Nenhuma prova Enviada</p>
                                    ) : (
                                        provas.map((prova) => (
                                            <div
                                                className="prova"
                                                id="feita"
                                                key={prova.id}
                                            >
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Aritmancia' && (
                                                    <img
                                                        src="/images/materias/math.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Astronomia' && (
                                                    <img
                                                        src="/images/materias/astronomy.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome ===
                                                    'Trato das Criaturas Mágicas' && (
                                                    <img
                                                        src="/images/materias/dragon.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Feitiços' && (
                                                    <img
                                                        src="/images/materias/magic-wand.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome ===
                                                    'Defesa Contra as Artes das Trevas' && (
                                                    <img
                                                        src="/images/materias/shield.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Advinhação' && (
                                                    <img
                                                        src="/images/materias/divination.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Vôo' && (
                                                    <img
                                                        src="/images/materias/witch.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Herbologia' && (
                                                    <img
                                                        src="/images/materias/sapling.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome ===
                                                    'História da Magia' && (
                                                    <img
                                                        src="/images/materias/history.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome ===
                                                    'Estudos trouxas' && (
                                                    <img
                                                        src="/images/materias/anatomy.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Poções' && (
                                                    <img
                                                        src="/images/materias/serum.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Transfiguração' && (
                                                    <img
                                                        src="/images/materias/cat.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome ===
                                                    'Estudo de Runas Antigas' && (
                                                    <img
                                                        src="/images/materias/runes.png"
                                                        alt=""
                                                    />
                                                )}

                                                <h2>
                                                    {
                                                        prova['prova-prof'][
                                                            'prof-materia'
                                                        ].nome
                                                    }
                                                </h2>
                                                {prova.valor === 0 && (
                                                    <h3 className="notaT">
                                                        Resultado: Trasgo
                                                    </h3>
                                                )}
                                                {prova.valor === 1 && (
                                                    <h3 className="notaD">
                                                        Resultado: Deploravel
                                                    </h3>
                                                )}
                                                {prova.valor === 2 && (
                                                    <h3 className="notaP">
                                                        Resultado: Pessimo
                                                    </h3>
                                                )}
                                                {prova.valor === 3 && (
                                                    <h3 className="notaA">
                                                        Resultado: Aceitavel
                                                    </h3>
                                                )}
                                                {prova.valor === 4 && (
                                                    <h3 className="notaE">
                                                        Resultado: Excedeu
                                                        Expectativas
                                                    </h3>
                                                )}
                                                {prova.valor === 5 && (
                                                    <h3 className="notaO">
                                                        Resultado: Otimo
                                                    </h3>
                                                )}
                                                <h3>{prova.valor}/5</h3>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <S.EnvBtn
                                    type="button"
                                    onClick={handlePrint}
                                    style={{ marginTop: '100px' }}
                                >
                                    Gerar Boletim
                                </S.EnvBtn>
                                <div style={{ display: 'none' }}>
                                    <Boletim
                                        ref={componentRef}
                                        provasFeitas={provasFeitas}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </S.Content>
            </>
            {loading && <Loading />}
        </S.Container>
    );
}
