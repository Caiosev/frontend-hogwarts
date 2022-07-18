import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Aritmancia from '../../../components/modals/Aritmancia';
import Astronomia from '../../../components/modals/Astronomia';
import CriaturasMagicas from '../../../components/modals/CriaturasMagicas';
import Feiticos from '../../../components/modals/Feiticos';
import Defesa from '../../../components/modals/Defesa';
import Advinhacao from '../../../components/modals/Advinhacao';
import Voo from '../../../components/modals/Voo';
import Herbo from '../../../components/modals/Herbo';
import His from '../../../components/modals/His';
import HisT from '../../../components/modals/HisT';
import Pocoes from '../../../components/modals/Pocoes';
import Runas from '../../../components/modals/Runas';
import Trans from '../../../components/modals/Trans';

export default function NotEnv({ provas, submitProva, setLoading }) {
    const offset = window.screen.width;
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
    const [notprovas, setNotProvas] = useState();
    const modalMobileStyle = {
        content: {
            width: '80vw',
            height: '90vh',
            padding: '40px',
            backgroundColor: '#0A181F',
            border: '0',
        },
        overlay: {
            backgroundColor: '#132d3a',
        },
    };
    const modalStyle = {
        content: {
            width: '40vw',
            height: '70vh',
            padding: '40px',
            backgroundColor: '#0A181F',
            margin: 'auto',
            border: '0',
        },
        overlay: {
            backgroundColor: '#132d3a',
        },
    };
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

    useEffect(() => {
        console.log('d');
        if (provas === undefined) return;
        console.log('b');
        const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        provas.forEach((e) => {
            const position = newArr.indexOf(e.prof_id);
            if (position !== -1) {
                newArr.splice(position, 1);
            }
            console.log(newArr);
        });
        setNotProvas([...newArr]);
        console.log('c');
    }, [provas]);

    useEffect(() => {
        if (notprovas === undefined) return;
        setLoading(false);
    }, [notprovas]);

    return (
        <div className="">
            {notprovas && (
                <>
                    <h1>Provas não Enviadas</h1>
                    <div className="provas">
                        {notprovas.includes(1) && (
                            <>
                                <div
                                    className="prova"
                                    tabIndex="0"
                                    name="1"
                                    onClick={handleOpenaritmancia}
                                    role="button"
                                    onKeyUp={handleOpenaritmancia}
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
                                    onRequestClose={handleClosearitmancia}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleClosearitmancia}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <Aritmancia
                                        submitProva={submitProva}
                                        close={handleClosearitmancia}
                                        setLoading={setLoading}
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
                                    onClick={handleOpenastronomia}
                                    role="button"
                                    onKeyUp={handleOpenastronomia}
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
                                    onRequestClose={handleCloseastronomia}
                                    onClick={handleCloseastronomia}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleCloseastronomia}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <Astronomia
                                        submitProva={submitProva}
                                        close={handleCloseastronomia}
                                        setLoading={setLoading}
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
                                    onClick={handleOpencriaturasmagicas}
                                    role="button"
                                    onKeyUp={handleOpencriaturasmagicas}
                                >
                                    <img
                                        src="/images/materias/dragon.png"
                                        alt=""
                                        name="3"
                                    />
                                    <h2 name="3">
                                        Trato das Criaturaas Magicas
                                    </h2>
                                </div>
                                <Modal
                                    isOpen={criaturasMagicasIsOpen}
                                    onRequestClose={handleClosecriaturasmagicas}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleClosecriaturasmagicas}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <CriaturasMagicas
                                        submitProva={submitProva}
                                        close={handleClosecriaturasmagicas}
                                        setLoading={setLoading}
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
                                    onRequestClose={handleClosefeiticos}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleClosefeiticos}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <Feiticos
                                        submitProva={submitProva}
                                        close={handleClosefeiticos}
                                        setLoading={setLoading}
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
                                        Defesa Contra as Artes das Trevas
                                    </h2>
                                </div>
                                <Modal
                                    isOpen={defesaIsOpen}
                                    onRequestClose={handleClosedefesa}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleClosedefesa}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <Defesa
                                        submitProva={submitProva}
                                        close={handleClosedefesa}
                                        setLoading={setLoading}
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
                                    onRequestClose={handleCloseadvinha}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleCloseadvinha}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <Advinhacao
                                        submitProva={submitProva}
                                        close={handleCloseadvinha}
                                        setLoading={setLoading}
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
                                    onRequestClose={handleClosevoo}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleClosevoo}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <Voo
                                        submitProva={submitProva}
                                        close={handleClosevoo}
                                        setLoading={setLoading}
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
                                    onRequestClose={handleCloseherbo}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleCloseherbo}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <Herbo
                                        submitProva={submitProva}
                                        close={handleCloseherbo}
                                        setLoading={setLoading}
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
                                    <h2 name="9">Historia da Magia</h2>
                                </div>
                                <Modal
                                    isOpen={hisIsOpen}
                                    onRequestClose={handleClosehis}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleClosehis}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <His
                                        submitProva={submitProva}
                                        close={handleClosehis}
                                        setLoading={setLoading}
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
                                    <h2 name="10">Estudo Trouxa</h2>
                                </div>
                                <Modal
                                    isOpen={histIsOpen}
                                    onRequestClose={handleClosehist}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleClosehist}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <HisT
                                        submitProva={submitProva}
                                        close={handleClosehist}
                                        setLoading={setLoading}
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
                                    onRequestClose={handleClosepocoes}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleClosepocoes}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <Pocoes
                                        submitProva={submitProva}
                                        close={handleClosepocoes}
                                        setLoading={setLoading}
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
                                    <h2 name="12">Estudo de Runas Antigas</h2>
                                </div>
                                <Modal
                                    isOpen={runasIsOpen}
                                    onRequestClose={handleCloserunas}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleCloserunas}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <Runas
                                        submitProva={submitProva}
                                        close={handleCloserunas}
                                        setLoading={setLoading}
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
                                    <h2 name="13">Transfiguração</h2>
                                </div>
                                <Modal
                                    isOpen={transIsOpen}
                                    onRequestClose={handleClosetrans}
                                    style={
                                        offset >= 800
                                            ? modalStyle
                                            : modalMobileStyle
                                    }
                                >
                                    <button
                                        type="button"
                                        onClick={handleClosetrans}
                                        style={{
                                            color: 'white',
                                            fontSize: '1.25rem',
                                            backgroundColor: '#d1af5a',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            width: '40px',
                                            height: '40px',
                                            position: 'absolute',
                                            right: '30px',
                                        }}
                                    >
                                        X
                                    </button>
                                    <Trans
                                        submitProva={submitProva}
                                        close={handleClosetrans}
                                        setLoading={setLoading}
                                    />
                                </Modal>
                            </>
                        )}
                    </div>
                </>
            )}
            {notprovas && notprovas.length === 0 && (
                <p>Voce enviou todas as provas</p>
            )}
        </div>
    );
}

NotEnv.propTypes = {
    provas: PropTypes.array,
    submitProva: PropTypes.func,
    setLoading: PropTypes.func,
}.isRequired;
