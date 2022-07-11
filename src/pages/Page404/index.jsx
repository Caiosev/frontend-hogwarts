import React from 'react';
import { Link } from 'react-router-dom';
import Particles from '../../components/Particles';
import * as S from './style';

export default function Page404() {
    return (
        <S.Container>
            <Particles />
            <div className="content">
                <div className="text">
                    <h1>Erro 404</h1>
                    <h2>A Pagina acessada não foi encontrada</h2>
                </div>
                <Link to="/">
                    <S.Btn type="button">Pagina Inical</S.Btn>
                </Link>
            </div>
        </S.Container>
    );
}
