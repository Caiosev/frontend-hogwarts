import React, { useState, useEffect } from 'react';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
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

    const [valor, setValor] = useState(undefined);
    const [idProf, setIdProf] = useState(undefined);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modalStyle = {
        content: {
            width: '60vw',
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
    return (
        <S.Container>
            {!loading && (
                <>
                    <S.Header>
                        <img src="/images/logo.png" alt="" srcSet="" />
                        <div className="options">
                            <FaUserAlt size={25} />
                            <Link to="/" id="out" onClick={handleLogout}>
                                <FaSignOutAlt size={24} />
                            </Link>
                        </div>
                    </S.Header>
                    <S.Content>
                        <div className="sidebar">
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
                        </div>
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
                                            <div
                                                className="prova"
                                                tabIndex="-9"
                                                name="10"
                                                onClick={handleOpenaritmancia}
                                                role="button"
                                                onKeyUp={handleOpenaritmancia}
                                            >
                                                <img
                                                    src="/images/materias/anatomy.png"
                                                    alt=""
                                                    name="10"
                                                />
                                                <h2 name="10">
                                                    Estudo Trouxas
                                                </h2>
                                            </div>
                                        )}
                                        {notprovas.includes(11) && (
                                            <div
                                                className="prova"
                                                tabIndex="-10"
                                                name="11"
                                                onClick={handleOpenaritmancia}
                                                role="button"
                                                onKeyUp={handleOpenaritmancia}
                                            >
                                                <img
                                                    src="/images/materias/serum.png"
                                                    alt=""
                                                    name="11"
                                                />
                                                <h2 name="11">Poçoes</h2>
                                            </div>
                                        )}
                                        {notprovas.includes(12) && (
                                            <div
                                                className="prova"
                                                tabIndex="-11"
                                                name="12"
                                                onClick={handleOpenaritmancia}
                                                role="button"
                                                onKeyUp={handleOpenaritmancia}
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
                                        )}
                                        {notprovas.includes(13) && (
                                            <div
                                                className="prova"
                                                tabIndex="-12"
                                                name="13"
                                                onClick={handleOpenaritmancia}
                                                role="button"
                                                onKeyUp={handleOpenaritmancia}
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
                                                    <h3>{prova.valor}</h3>
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
