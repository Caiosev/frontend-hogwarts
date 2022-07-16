import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as S from './styled';

export default function Step2({
    setStep,
    patrono,
    setPatrono,
    varinha,
    setVarinha,
    casa,
    setCasa,
    sala,
    setSala,
}) {
    const handleSubmit = () => {
        if (patrono !== '' && varinha !== '' && casa !== '0' && sala !== '0') {
            setStep(3);
            return;
        }
        toast.error('Preencha todos Campos');
    };

    return (
        <S.Container>
            <div className="items">
                <div className="item">
                    <p>Patrono</p>
                    <input
                        type="text"
                        id="patrono"
                        value={patrono}
                        onChange={(e) => setPatrono(e.target.value)}
                    />
                </div>
                <div className="item">
                    <p>Varinha</p>
                    <input
                        type="text"
                        value={varinha}
                        onChange={(e) => setVarinha(e.target.value)}
                    />
                </div>
                <div className="item">
                    <p>Casa</p>
                    <select
                        id="casa"
                        onChange={(e) => setCasa(Number(e.target.value))}
                        name="Casa"
                        value={casa}
                    >
                        <option value="0"> </option>
                        <option value="1">Grifinoria</option>
                        <option value="3">Lufa-Lufa</option>
                        <option value="4">Corvinal</option>
                        <option value="2">Sonserina</option>
                    </select>
                </div>
                <div className="item">
                    <p>Sala</p>
                    <select
                        id="sala"
                        onChange={(e) => setSala(Number(e.target.value))}
                        name="sala"
                        value={sala}
                    >
                        <option value="0"> </option>
                        <option value="1">Primeiro ano</option>
                        <option value="2">Segundo ano</option>
                        <option value="3">Terceiro ano</option>
                        <option value="4">Quarto ano</option>
                        <option value="5">Quinto ano</option>
                        <option value="6">Sexto ano</option>
                        <option value="7">Setimo ano</option>
                    </select>
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

Step2.propTypes = {
    setStep: PropTypes.func,
    patrono: PropTypes.string,
    setPatrono: PropTypes.func,
    varinha: PropTypes.string,
    setVarinha: PropTypes.func,
    casa: PropTypes.string,
    setCasa: PropTypes.func,
    sala: PropTypes.string,
    setSala: PropTypes.func,
}.isRequired;
