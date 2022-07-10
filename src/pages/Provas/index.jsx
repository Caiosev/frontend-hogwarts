import React, { useState, useEffect } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import Aritmancia from '../../components/modals/Aritmancia';
import Astronomia from '../../components/modals/Astronomia';
import CriaturasMagicas from '../../components/modals/CriaturasMagicas';
import Feiticos from '../../components/modals/Feiticos';
import Defesa from '../../components/modals/Defesa';
import Advinhacao from '../../components/modals/Advinhacao';
import Voo from '../../components/modals/Voo';
import Herbo from '../../components/modals/Herbo';
import His from '../../components/modals/His';
import HisT from '../../components/modals/HisT';
import Pocoes from '../../components/modals/Pocoes';
import Runas from '../../components/modals/Runas';
import Trans from '../../components/modals/Trans';

import * as S from './styled';

export default function Provas() {
    const id = useSelector((state) => state.auth.user.id);
    const nome = useSelector((state) => state.auth.user.nome);
    const [env, setEnv] = useState(false);
    const [loading, setLoading] = useState(true);
    const [notenv, setNotEnv] = useState(true);
    const [provas, setProvas] = useState(undefined);
    const [notprovas, setNotProvas] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    ]);
    const [aritmanciaIsOpen, setAritmanciaIsOpen] = useState(false);
    const [astronomiaIsOpen, setAstronomiaIsOpen] = useState(false);
    const [criaturasMagicasIsOpen, setCriaturasMagicasIsOpen] = useState(false);
    const [feiticosIsOpen, setFeiticosIsOpen] = useState(false);
    const [defesaIsOpen, setDefesaIsOpen] = useState(false);
    const [advinhaIsOpen, setAdvinhaIsOpen] = useState(false);
    const [vooIsOpen, setVooIsOpen] = useState(false);
    const [herboIsOpen, setHerboIsOpen] = useState(false);
    const [hisIsOpen, setHisIsOpen] = useState(false);
    const [histIsOpen, setHistIsOpen] = useState(false);
    const [pocoesIsOpen, setPocoesIsOpen] = useState(false);
    const [runasIsOpen, setRunasIsOpen] = useState(false);
    const [transIsOpen, setTransIsOpen] = useState(false);

    const [valor, setValor] = useState(undefined);
    const [idProf, setIdProf] = useState(undefined);
    const [menuMobile, setMenuMobile] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modalStyle = {
        content: {
            width: '80vw',
            height: '90vh',
            backgroundColor: '#0A181F',
            margin: 'auto',
        },
    };
    useEffect(() => {
        try {
            axios.get(`/provas/${id}`).then((res) => {
                setProvas(res.data);
                setLoading(false);
            });
        } catch (error) {
            console.log(error);
        }
    }, [loading === true]);

    const handleLogout = () => {
        dispatch(actions.loginFailure());
        navigate('/');
    };

    useEffect(() => {
        if (provas === undefined) return;
        provas.forEach((e) => {
            const position = notprovas.indexOf(e.prof_id);
            if (position !== -1) {
                const newArr = [...notprovas];
                newArr.splice(position, 1);
                setNotProvas([...newArr]);
            }
        });
    }, [provas]);

    useEffect(() => {
        if (valor === undefined) return;

        const profId = idProf;

        function submitProva() {
            axios
                .post(`/provas/`, {
                    valor,
                    prof_id: profId,
                    aluno_id: id,
                })
                .then(setLoading(true));
        }
        submitProva();
    }, [valor]);

    const handleOpenaritmancia = () => {
        setAritmanciaIsOpen(true);
    };
    const handleClosearitmancia = () => {
        setAritmanciaIsOpen(false);
    };
    const handleOpenastronomia = () => {
        setAstronomiaIsOpen(true);
    };
    const handleCloseastronomia = () => {
        setAstronomiaIsOpen(false);
    };
    const handleOpencriaturasmagicas = () => {
        setCriaturasMagicasIsOpen(true);
    };
    const handleClosecriaturasmagicas = () => {
        setCriaturasMagicasIsOpen(false);
    };
    const handleOpenfeiticos = () => {
        setFeiticosIsOpen(true);
    };
    const handleClosefeiticos = () => {
        setFeiticosIsOpen(false);
    };
    const handleOpendefesa = () => {
        setDefesaIsOpen(true);
    };
    const handleClosedefesa = () => {
        setDefesaIsOpen(false);
    };
    const handleOpenadvinha = () => {
        setAdvinhaIsOpen(true);
    };
    const handleCloseadvinha = () => {
        setAdvinhaIsOpen(false);
    };
    const handleOpenvoo = () => {
        setVooIsOpen(true);
    };
    const handleClosevoo = () => {
        setVooIsOpen(false);
    };
    const handleOpenherbo = () => {
        setHerboIsOpen(true);
    };
    const handleCloseherbo = () => {
        setHerboIsOpen(false);
    };
    const handleOpenhis = () => {
        setHisIsOpen(true);
    };
    const handleClosehis = () => {
        setHisIsOpen(false);
    };
    const handleOpenhist = () => {
        setHistIsOpen(true);
    };
    const handleClosehist = () => {
        setHistIsOpen(false);
    };
    const handleOpenpocoes = () => {
        setPocoesIsOpen(true);
    };
    const handleClosepocoes = () => {
        setPocoesIsOpen(false);
    };
    const handleOpenrunas = () => {
        setRunasIsOpen(true);
    };
    const handleCloserunas = () => {
        setRunasIsOpen(false);
    };
    const handleOpentrans = () => {
        setTransIsOpen(true);
    };
    const handleClosetrans = () => {
        setTransIsOpen(false);
    };
    return (
        <S.Container>
            {!loading && (
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
                        <img
                            src="/images/logo.png"
                            alt=""
                            srcSet=""
                            id="logo"
                        />
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
                            </div>
                        </S.SideBar>
                        <hr />
                        <div className="sec-provas">
                            {notenv ? (
                                <div className="not-env">
                                    <h1>Provas não Enviadas</h1>
                                    <div className="provas">
                                        {notprovas.includes(1) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="0"
                                                    name="1"
                                                    onClick={
                                                        handleOpenaritmancia
                                                    }
                                                    role="button"
                                                    onKeyUp={
                                                        handleOpenaritmancia
                                                    }
                                                >
                                                    <img
                                                        src="/images/materias/math.png"
                                                        alt=""
                                                        name="1"
                                                    />
                                                    <h2 name="1">Aritmancia</h2>
                                                </div>
                                                <Modal
                                                    isOpen={aritmanciaIsOpen}
                                                    onRequestClose={
                                                        handleClosearitmancia
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleClosearitmancia
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                    <Aritmancia
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={
                                                            handleClosearitmancia
                                                        }
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(2) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="2"
                                                    onClick={
                                                        handleOpenastronomia
                                                    }
                                                    role="button"
                                                    onKeyUp={
                                                        handleOpenastronomia
                                                    }
                                                >
                                                    <img
                                                        src="/images/materias/astronomy.png"
                                                        alt=""
                                                        name="2"
                                                    />
                                                    <h2 name="2">Astronomia</h2>
                                                </div>
                                                <Modal
                                                    isOpen={astronomiaIsOpen}
                                                    onRequestClose={
                                                        handleCloseastronomia
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleCloseastronomia
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                    <Astronomia
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={
                                                            handleCloseastronomia
                                                        }
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(3) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="3"
                                                    onClick={
                                                        handleOpencriaturasmagicas
                                                    }
                                                    role="button"
                                                    onKeyUp={
                                                        handleOpencriaturasmagicas
                                                    }
                                                >
                                                    <img
                                                        src="/images/materias/dragon.png"
                                                        alt=""
                                                        name="3"
                                                    />
                                                    <h2 name="3">
                                                        Trato das Criaturaas
                                                        Magicas
                                                    </h2>
                                                </div>
                                                <Modal
                                                    isOpen={
                                                        criaturasMagicasIsOpen
                                                    }
                                                    onRequestClose={
                                                        handleClosecriaturasmagicas
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleClosecriaturasmagicas
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                    <CriaturasMagicas
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={
                                                            handleClosecriaturasmagicas
                                                        }
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(4) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="4"
                                                    onClick={handleOpenfeiticos}
                                                    role="button"
                                                    onKeyUp={handleOpenfeiticos}
                                                >
                                                    <img
                                                        src="/images/materias/magic-wand.png"
                                                        alt=""
                                                        name="4"
                                                    />
                                                    <h2 name="4">Feitiços</h2>
                                                </div>
                                                <Modal
                                                    isOpen={feiticosIsOpen}
                                                    onRequestClose={
                                                        handleClosefeiticos
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleClosefeiticos
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                    <Feiticos
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={
                                                            handleClosefeiticos
                                                        }
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(5) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="5"
                                                    onClick={handleOpendefesa}
                                                    role="button"
                                                    onKeyUp={handleOpendefesa}
                                                >
                                                    <img
                                                        src="/images/materias/shield.png"
                                                        alt=""
                                                        name="5"
                                                    />
                                                    <h2 name="5">
                                                        Defesa Contra as Artes
                                                        das Trvas
                                                    </h2>
                                                </div>
                                                <Modal
                                                    isOpen={defesaIsOpen}
                                                    onRequestClose={
                                                        handleClosedefesa
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleClosedefesa
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                    <Defesa
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={
                                                            handleClosedefesa
                                                        }
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(6) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="6"
                                                    onClick={handleOpenadvinha}
                                                    role="button"
                                                    onKeyUp={handleOpenadvinha}
                                                >
                                                    <img
                                                        src="/images/materias/divination.png"
                                                        alt=""
                                                        name="6"
                                                    />
                                                    <h2 name="6">Advinhação</h2>
                                                </div>
                                                <Modal
                                                    isOpen={advinhaIsOpen}
                                                    onRequestClose={
                                                        handleCloseadvinha
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleCloseadvinha
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                    <Advinhacao
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={
                                                            handleCloseadvinha
                                                        }
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(7) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="7"
                                                    onClick={handleOpenvoo}
                                                    role="button"
                                                    onKeyUp={handleOpenvoo}
                                                >
                                                    <img
                                                        src="/images/materias/witch.png"
                                                        alt=""
                                                        name="7"
                                                    />
                                                    <h2 name="7">Voo</h2>
                                                </div>
                                                <Modal
                                                    isOpen={vooIsOpen}
                                                    onRequestClose={
                                                        handleClosevoo
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={handleClosevoo}
                                                    >
                                                        X
                                                    </button>
                                                    <Voo
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={handleClosevoo}
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(8) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="8"
                                                    onClick={handleOpenherbo}
                                                    role="button"
                                                    onKeyUp={handleOpenherbo}
                                                >
                                                    <img
                                                        src="/images/materias/sapling.png"
                                                        alt=""
                                                        name="8"
                                                    />
                                                    <h2 name="8">Herbologia</h2>
                                                </div>
                                                <Modal
                                                    isOpen={herboIsOpen}
                                                    onRequestClose={
                                                        handleCloseherbo
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleCloseherbo
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                    <Herbo
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={handleCloseherbo}
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(9) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="9"
                                                    onClick={handleOpenhis}
                                                    role="button"
                                                    onKeyUp={handleOpenhis}
                                                >
                                                    <img
                                                        src="/images/materias/history.png"
                                                        alt=""
                                                        name="9"
                                                    />
                                                    <h2 name="9">
                                                        Historia da Magia
                                                    </h2>
                                                </div>
                                                <Modal
                                                    isOpen={hisIsOpen}
                                                    onRequestClose={
                                                        handleClosehis
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={handleClosehis}
                                                    >
                                                        X
                                                    </button>
                                                    <His
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={handleClosehis}
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(10) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="10"
                                                    onClick={handleOpenhist}
                                                    role="button"
                                                    onKeyUp={handleOpenhist}
                                                >
                                                    <img
                                                        src="/images/materias/anatomy.png"
                                                        alt=""
                                                        name="10"
                                                    />
                                                    <h2 name="10">
                                                        Estudo Trouxa
                                                    </h2>
                                                </div>
                                                <Modal
                                                    isOpen={histIsOpen}
                                                    onRequestClose={
                                                        handleClosehist
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleClosehist
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                    <HisT
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={handleClosehist}
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(11) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="11"
                                                    onClick={handleOpenpocoes}
                                                    role="button"
                                                    onKeyUp={handleOpenpocoes}
                                                >
                                                    <img
                                                        src="/images/materias/serum.png"
                                                        alt=""
                                                        name="11"
                                                    />
                                                    <h2 name="11">Poções</h2>
                                                </div>
                                                <Modal
                                                    isOpen={pocoesIsOpen}
                                                    onRequestClose={
                                                        handleClosepocoes
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleClosepocoes
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                    <Pocoes
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={
                                                            handleClosepocoes
                                                        }
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(12) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="12"
                                                    onClick={handleOpenrunas}
                                                    role="button"
                                                    onKeyUp={handleOpenrunas}
                                                >
                                                    <img
                                                        src="/images/materias/runes.png"
                                                        alt=""
                                                        name="12"
                                                    />
                                                    <h2 name="12">
                                                        Estudo de Runas Antigas
                                                    </h2>
                                                </div>
                                                <Modal
                                                    isOpen={runasIsOpen}
                                                    onRequestClose={
                                                        handleCloserunas
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleCloserunas
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                    <Runas
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={handleCloserunas}
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                        {notprovas.includes(13) && (
                                            <>
                                                <div
                                                    className="prova"
                                                    tabIndex="-1"
                                                    name="13"
                                                    onClick={handleOpentrans}
                                                    role="button"
                                                    onKeyUp={handleOpentrans}
                                                >
                                                    <img
                                                        src="/images/materias/cat.png"
                                                        alt=""
                                                        name="13"
                                                    />
                                                    <h2 name="13">
                                                        Transfiguração
                                                    </h2>
                                                </div>
                                                <Modal
                                                    isOpen={transIsOpen}
                                                    onRequestClose={
                                                        handleClosetrans
                                                    }
                                                    style={modalStyle}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            handleClosetrans
                                                        }
                                                    >
                                                        X
                                                    </button>
                                                    <Trans
                                                        setValor={setValor}
                                                        setIdProf={setIdProf}
                                                        close={handleClosetrans}
                                                    />
                                                </Modal>
                                            </>
                                        )}
                                    </div>
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
                                                    ].nome ===
                                                        'Transfiguração' && (
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
                                                    <h3>Nota:{prova.valor}</h3>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </S.Content>
                </>
            )}
        </S.Container>
    );
}