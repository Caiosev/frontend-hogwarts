import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Proptypes from 'prop-types';
import * as S from './styled';

export default function Sidebar({ setHouse }) {
    return (
        <S.Container>
            <FaSearch />
            <input type="text" />
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
                    setHouse('grifinoria');
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
                    setHouse('corvinal');
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
                    setHouse('lufa-lufa');
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
                    setHouse('sonserina');
                }}
                onKeyPress={() => {}}
                tabIndex="0"
            >
                <img
                    src="https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/"
                    alt=""
                />
            </div>
        </S.Container>
    );
}

Sidebar.propTypes = {
    setHouse: Proptypes.func.isRequired,
};
