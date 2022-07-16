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
            setStep(4);
            return;
        }
        toast.error('Preencha todos Campos');
    };

    return (
        <S.Container>
            <div className="item" id="divfoto">
                <p>Foto</p>
                <img src={preview} alt="" id="foto" />
                <input type="file" onChange={handleSelectFile} />
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
                <button type="button" onClick={() => setStep(1)}>
                    Voltar
                </button>
                <button type="button" onClick={handleSubmit}>
                    Continuar
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
}.isRequired;
