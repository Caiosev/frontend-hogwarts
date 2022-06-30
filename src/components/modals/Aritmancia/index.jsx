import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Aritmancia({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['2', '19', 'dmv', 'ir', '58'];

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
        setIdProf(1);
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
            <h1>Prova de Aritmancia</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - Quantas Leis existem na Aritmância?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="1" />1
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="5" />5
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="2" />2
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="10" />
                            10
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - Numeros de _ a _ possuem importancia vital para a
                    Aritmancia.
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="19" />1 a
                            9
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="110" />1
                            a 10
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="10" />0 a
                            10
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="100" />0
                            a 100
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - Segundo a Tabela Pitagórica Bruxa quais letras possuem o
                    numero 4 como valor?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="ajs" />A
                            J S
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="gpy" />G
                            P Y
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="dmv" />D
                            M V
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="aku" />A
                            K U
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - Segundo a Tabela Pitagórica Bruxa quais letras possuem o
                    numero 9 como valor?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="enw" />E
                            N W
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="hqz" />H
                            Q Z
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="nxf" />N
                            X F
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="ir" />I R
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - Qual valor se resulta da conversão escansiva do nome
                    Nicholas Flames?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="58" />
                            58
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="49" />
                            49
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="30" />
                            30
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="32" />
                            32
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

Aritmancia.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
