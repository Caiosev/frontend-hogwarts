import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Trans({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['1', '3', '1', '3', '4'];

    const handleSubmit = () => {
        if (
            q1 === undefined ||
            q2 === undefined ||
            q3 === undefined ||
            q4 === undefined ||
            q5 === undefined
        ) {
            toast.error('Responda todas as questoes');
            return;
        }
        let soma = 0;
        [q1, q2, q3, q4, q5].forEach((element, i) => {
            if (element === res[i]) {
                soma += 1;
            }
        });
        setPontos(soma);
        setIdProf(13);
    };

    useEffect(() => {
        if (pontos === undefined) return;
        switch (pontos) {
            case 0:
                setNota('Trasgo');
                break;
            case 1:
                setNota('Deploravel');
                break;
            case 2:
                setNota('Pessimo');
                break;
            case 3:
                setNota('Aceitavel');
                break;
            case 4:
                setNota('Excede Expectativas');
                break;
            case 5:
                setNota('Otimo');
                break;

            default:
                break;
        }
        setValor(pontos);
        close();
    }, [pontos]);

    return (
        <S.Container>
            <h1>Prova de Transfiguração</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - Como é chamada a lei que impoe limite e regula as
                    Tranfigurações?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="1" />
                            Lei de Gamp
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="2" />
                            Lei de Mutabilidade
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="3" />
                            Lei de Gramp
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="4" />
                            Lei de Imutabilidade
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - Quantas letras existem no alfabeto de transfiguração?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" />
                            20
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="2" />
                            24
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />
                            26
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="4" />
                            28
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - Qual a cor da luz deve ser emitida quando a magia de
                    Troca é executada com perfeição?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="1" />
                            Branco
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="2" />
                            Azul
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="3" />
                            Verde
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="4" />
                            Preta
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - Qual o movimento de mãos é feito para conjurar o feitiço
                    Flintifors?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="1" />
                            Balançar a varinha para esquerda duas vezes
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="2" />
                            Balançar a varinha para direita duas vezes
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="3" />
                            Segurar a varinha para esquerda
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="4" />
                            Balançar a varinha para direita
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - O feitiço Flintifors transforma o alvo em:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="1" />
                            Cadeira
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="2" />
                            Cachorro
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />
                            Mesa
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />
                            Caixa de Fosforos
                        </div>
                    </div>
                </label>
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={nota !== undefined}
                >
                    Enviar
                </button>
            </form>
        </S.Container>
    );
}

Trans.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
