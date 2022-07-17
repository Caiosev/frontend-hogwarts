import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function Sidebar({
    setHouse,
    menuMobile,
    handleLogout,
    setNome,
    nome,
}) {
    return (
        <S.Container className={`sidebar ${menuMobile && 'active'}`}>
            <div className="desk">
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <div
                    role="button"
                    onClick={() => {
                        setHouse('hogwarts');
                    }}
                    onKeyPress={() => {}}
                    tabIndex="0"
                >
                    <img src="/images/logo.png" alt="" />
                </div>

                <div
                    role="button"
                    onClick={() => {
                        setHouse('Grifinória');
                    }}
                    onKeyPress={() => {}}
                    tabIndex="0"
                >
                    <img
                        src="https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/"
                        alt=""
                    />
                </div>

                <div
                    className=""
                    role="button"
                    onClick={() => {
                        setHouse('Corvinal');
                    }}
                    onKeyPress={() => {}}
                    tabIndex="0"
                >
                    <img
                        src="https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png/"
                        alt=""
                    />
                </div>

                <div
                    className=""
                    role="button"
                    onClick={() => {
                        setHouse('Lufa-lufa');
                    }}
                    onKeyPress={() => {}}
                    tabIndex="0"
                >
                    <img
                        src="https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/"
                        alt=""
                    />
                </div>

                <div
                    className=""
                    role="button"
                    onClick={() => {
                        setHouse('Sonserina');
                    }}
                    onKeyPress={() => {}}
                    tabIndex="0"
                >
                    <img
                        src="https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/"
                        alt=""
                    />
                </div>
            </div>
            <div className="mobile">
                <Link to="/">
                    <button type="button">Home</button>
                </Link>
                <Link to="/aluno">
                    <button type="button">Adicionar Aluno</button>
                </Link>

                <Link to="/usuario">
                    <button type="button">Perfil</button>
                </Link>

                <button type="button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </S.Container>
    );
}

Sidebar.propTypes = {
    setHouse: Proptypes.func.isRequired,
    menuMobile: Proptypes.string.isRequired,
    handleLogout: Proptypes.func.isRequired,
    setNome: Proptypes.func.isRequired,
    nome: Proptypes.string.isRequired,
};
