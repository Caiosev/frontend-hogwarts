import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function Login() {
    return (
        <S.Container>
            <Link to="/">
                <button id="back" type="submit">
                    Voltar
                </button>
            </Link>
            <div className="options">
                <div className="option">
                    <img src="/images/books.png" alt="" />
                    <p>Alunos</p>
                </div>
                <div className="option">
                    <img src="/images/wand.png" alt="" />
                    <p>Professores</p>
                </div>
            </div>
            <div className="login-container">
                <img src="/images/logo.png" id="#logo" alt="" />
                <form action="">
                    <label htmlFor="#username">
                        Username
                        <input type="text" id="username" />
                    </label>

                    <label htmlFor="#senha">
                        Senha
                        <input type="text" id="senha" />
                    </label>
                    <button id="next" type="submit">
                        Continuar
                    </button>
                </form>
            </div>
        </S.Container>
    );
}
