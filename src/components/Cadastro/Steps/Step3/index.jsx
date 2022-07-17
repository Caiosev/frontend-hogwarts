/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as S from './styled';

export default function Step3({
    setStep,
    login,
    setLogin,
    senha1,
    setSenha1,
    senha2,
    setSenha2,
    setFoto,
    SendRequest,
}) {
    const [preview, setPreview] = useState();
    const handleSelectFile = (e) => {
        setFoto(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = () => {
        if (login !== '' && senha1 !== '' && senha2 !== '') {
            if (senha1.length < 6) {
                toast.error('Senha deve ter no minimo 6 caracteres');
                return;
            }
            if (senha1 !== senha2) {
                toast.error('As senha não estão identicas');
                return;
            }
            SendRequest();
            return;
        }
        toast.error('Preencha todos Campos');
    };

    return (
        <S.Container>
            <div className="file-input">
                <img src={preview} alt="" id="foto" />
                <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    className="file-input__input"
                    onChange={handleSelectFile}
                />
                <label className="file-input__label" htmlFor="file-input">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="upload"
                        className="svg-inline--fa fa-upload fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                        />
                    </svg>
                    <span>Enviar Foto</span>
                </label>
            </div>
            <div className="items">
                <div className="item">
                    <p>Login</p>
                    <input
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className="item">
                    <p>Senha</p>
                    <input
                        type="password"
                        value={senha1}
                        onChange={(e) => setSenha1(e.target.value)}
                    />
                </div>
                <div className="item">
                    <p>Confirme sua Senha</p>
                    <input
                        type="password"
                        value={senha2}
                        onChange={(e) => setSenha2(e.target.value)}
                    />
                </div>
            </div>
            <div className="buttons">
                <img
                    src="/images/right-arrow.png"
                    className="voltar"
                    onClick={() => setStep(2)}
                    onKeyPress={() => setStep(2)}
                    alt=""
                />
                <button type="button" onClick={handleSubmit} className="prox">
                    Finalizar
                </button>
            </div>
        </S.Container>
    );
}

Step3.propTypes = {
    setStep: PropTypes.func,
    login: PropTypes.string,
    setLogin: PropTypes.func,
    senha1: PropTypes.string,
    setSenha1: PropTypes.func,
    senha2: PropTypes.string,
    setSenha2: PropTypes.func,
    SendRequest: PropTypes.func,
}.isRequired;
