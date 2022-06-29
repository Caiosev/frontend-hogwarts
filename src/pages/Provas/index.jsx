import React from 'react';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import * as S from './styled';

export default function Provas() {
    const id = useSelector((state) => state.auth);
    console.log(id);
    return (
        <S.Container>
            <S.Header>
                <img src="/images/logo.png" alt="" srcSet="" />
                <div className="options">
                    <FaSignOutAlt size={25} />
                    <FaUserAlt size={25} />
                </div>
            </S.Header>
            <S.Content>
                <h1>Provas</h1>
                <hr />
                <h2>Poçoes</h2>
                <hr />
                <h1>Provas Concluidas</h1>
            </S.Content>
        </S.Container>
    );
}
