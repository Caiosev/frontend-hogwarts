import React, { useState } from 'react';
import Modal from 'react-modal';
import * as S from './styled';
import Caldeirao from '../modals/Caldeirao';
import Uniforme from '../modals/Uniforme';
import Varinha from '../modals/Varinha';
import Livros from '../modals/Livros';

export default function Materiais() {
    const [calIsOpen, setCalIsOpen] = useState(false);
    const [uniIsOpen, setUniIsOpen] = useState(false);
    const [vaIsOpen, setVaIsOpen] = useState(false);
    const [bookIsOpen, setBookIsOpen] = useState(false);
    const handleOpencal = () => {
        setCalIsOpen(true);
    };
    const handleClosecal = () => {
        setCalIsOpen(false);
    };
    const handleOpenUni = () => {
        setUniIsOpen(true);
    };
    const handleCloseUni = () => {
        setUniIsOpen(false);
    };
    const handleOpenVa = () => {
        setVaIsOpen(true);
    };
    const handleCloseVa = () => {
        setVaIsOpen(false);
    };
    const handleOpenBook = () => {
        setBookIsOpen(true);
    };
    const handleCloseBook = () => {
        setBookIsOpen(false);
    };

    const modalStyle = {
        content: {
            width: '70vw',
            height: '40vh',
            backgroundColor: '#0A181F',
            margin: 'auto',
        },
    };

    return (
        <S.Container id="materiais">
            <h1>O que preciso levar?</h1>
            <div className="foto-texto">
                <div className="image" />
                <div className="texto">
                    <h2>
                        Tudo que você precisa pode ser encontrado no Beco
                        Diagonal
                    </h2>
                    <p>
                        Beco Diagonal é uma área bruxa de compras empedrada
                        localizado em Londres, Inglaterra atrás de um pub
                        chamado o Caldeirão Furado. Dentro do beco há uma
                        variedade de restaurantes, lojas e outras atrações.
                        Todos os itens da lista de Hogwarts podem ser comprados
                        no Beco Diagonal. O beco é completamente escondido do
                        mundo trouxa, sendo fora dos limites deste. É muito
                        grande em área e essencialmente o centro da Londres
                        bruxa.
                    </p>
                </div>
            </div>
            <div className="items">
                <div
                    className="item"
                    onKeyPress={handleOpencal}
                    onClick={handleOpencal}
                    role="button"
                    tabIndex="0"
                >
                    <img src="/images/cauldron.png" alt="" />
                </div>
                <div
                    className="item"
                    onKeyPress={handleOpenUni}
                    onClick={handleOpenUni}
                    role="button"
                    tabIndex="0"
                >
                    <img src="/images/uniform.png" alt="" />
                </div>
                <div
                    className="item"
                    onKeyPress={handleOpenVa}
                    onClick={handleOpenVa}
                    role="button"
                    tabIndex="0"
                >
                    <img src="/images/materias/magic-wand.png" alt="" />
                </div>
                <div
                    className="item"
                    onKeyPress={handleOpenBook}
                    onClick={handleOpenBook}
                    role="button"
                    tabIndex="0"
                >
                    <img src="/images/open-book.png" alt="" />
                </div>
            </div>
            <Modal
                isOpen={calIsOpen}
                onRequestClose={handleClosecal}
                style={modalStyle}
            >
                <button
                    type="button"
                    onClick={handleClosecal}
                    className="close"
                    style={{
                        color: 'white',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    X
                </button>
                <Caldeirao close={handleCloseUni} />
            </Modal>
            <Modal
                isOpen={uniIsOpen}
                onRequestClose={handleCloseUni}
                style={modalStyle}
            >
                <button
                    type="button"
                    onClick={handleCloseUni}
                    className="close"
                    style={{
                        color: 'white',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    X
                </button>
                <Uniforme close={handleCloseUni} />
            </Modal>
            <Modal
                isOpen={vaIsOpen}
                onRequestClose={handleCloseVa}
                style={modalStyle}
            >
                <button
                    type="button"
                    onClick={handleCloseVa}
                    className="close"
                    style={{
                        color: 'white',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    X
                </button>
                <Varinha close={handleCloseVa} />
            </Modal>
            <Modal
                isOpen={bookIsOpen}
                onRequestClose={handleCloseBook}
                style={modalStyle}
            >
                <button
                    type="button"
                    onClick={handleCloseBook}
                    className="close"
                    style={{
                        color: 'white',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    X
                </button>
                <Livros close={handleCloseBook} />
            </Modal>
        </S.Container>
    );
}
