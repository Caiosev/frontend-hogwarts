import React from 'react';
import { FaSearch } from 'react-icons/fa';
import * as S from './styled';

export default function Sidebar() {
    return (
        <S.Container>
            <FaSearch />
            <input type="text" />
            <img src="/images/logo.png" alt="" />
            <img
                src="https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/"
                alt=""
            />
            <img
                src="https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png/"
                alt=""
            />
            <img
                src="https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/"
                alt=""
            />
            <img
                src="https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/"
                alt=""
            />
        </S.Container>
    );
}
