/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as S from './styled';

export default function Step1({
    setStep,
    nome,
    setNome,
    sobrenome,
    setSobrenome,
    idade,
    setIdade,
    sangue,
    setSangue,
}) {
    const handleSubmit = () => {
        if (nome !== '' && sobrenome !== '' && idade !== '' && sangue !== '') {
            setStep(2);
            return;
        }
        toast.error('Preencha todos Campos');
    };

    return (
        <S.Content className="content">
            <S.Container>
                <div className="items">
                    <div className="item">
                        <p>Nome</p>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div className="item">
                        <p>Sobrenome</p>
                        <input
                            type="text"
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
                        />
                    </div>
                    <div className="item">
                        <p>Idade</p>
                        <input
                            type="number"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                        />
                    </div>
                    <div className="item">
                        <p>Sangue</p>
                        <select
                            name="sangue"
                            id="sangue"
                            onChange={(e) => setSangue(e.target.value)}
                            value={sangue}
                        >
                            <option value="puro">Puro</option>
                            <option value="Mestiço">Mestiço</option>
                            <option value="Nascido Trouxa">
                                Nascido Trouxa
                            </option>
                        </select>
                    </div>
                </div>
            </S.Container>
            <div className="buttons">
                <img
                    src="/images/right-arrow.png"
                    alt=""
                    className="prox"
                    onClick={handleSubmit}
                    onKeyPress={() => setStep(2)}
                />
            </div>
        </S.Content>
    );
}

Step1.propTypes = {
    setStep: PropTypes.func,
    nome: PropTypes.string,
    setNome: PropTypes.func,
    sobrenome: PropTypes.string,
    setSobrenome: PropTypes.func,
    idade: PropTypes.string,
    setIdade: PropTypes.func,
    sangue: PropTypes.string,
    setSangue: PropTypes.func,
}.isRequired;
