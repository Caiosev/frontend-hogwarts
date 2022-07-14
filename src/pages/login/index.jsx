import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as S from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [options, setOptions] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (options === 'prof' || options === 'aluno') {
            dispatch(
                actions.loginRequest({
                    login,
                    senha: password,
                    navigate,
                    options,
                })
            );
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'p') {
            setOptions('prof');
        }
        if (e.key === 'a') {
            setOptions('aluno');
        }
    };
    return (
        <S.Container options={options}>
            <div className="select-options">
                <h1>Gostaria de Logar como:</h1>
                <div className="options">
                    <div
                        className="option"
                        onClick={() => {
                            setOptions('aluno');
                            document.querySelector('#aluno-img').style.opacity =
                                '1';
                            document.querySelector('#prof-img').style.opacity =
                                '0.5';
                        }}
                        onKeyPress={handleKeyPress}
                        role="button"
                        tabIndex="0"
                    >
                        <img src="/images/student.png" id="aluno-img" alt="" />
                        <p>Aluno</p>
                    </div>
                    <div
                        className="option"
                        onClick={() => {
                            setOptions('prof');
                            document.querySelector('#prof-img').style.opacity =
                                '1';
                            document.querySelector('#aluno-img').style.opacity =
                                '0.5';
                        }}
                        onKeyPress={handleKeyPress}
                        role="button"
                        tabIndex="-1"
                    >
                        <img src="/images/mago.png" id="prof-img" alt="" />
                        <p>Professor</p>
                    </div>
                </div>
            </div>
            <Link to="/" id="link-back">
                <button id="back" type="submit">
                    Voltar
                </button>
            </Link>

            <div className="login-container">
                <img src="/images/logo.png" id="logo" alt="" />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="#username">
                        Username
                        <input
                            type="text"
                            onChange={(e) => setLogin(e.target.value)}
                            value={login}
                            id="username"
                        />
                    </label>

                    <label htmlFor="#senha">
                        Senha
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="senha"
                        />
                    </label>
                    <button id="next" type="submit">
                        Continuar
                    </button>
                </form>
            </div>
        </S.Container>
    );
}
