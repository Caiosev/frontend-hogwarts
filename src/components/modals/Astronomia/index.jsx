import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Astronomia({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['96', '5', 'venus', '63', '4'];

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
        setIdProf(2);
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
            <h1>Prova de Astronomia</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - Energia e matéria escuras representam ___ do universo?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="90" />
                            90%
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="85" />
                            85%
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="82" />
                            82%
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="96" />
                            96%
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - Quantos planetas anões existem em nosso sistema solar?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="5" />5
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="8" />8
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" />1
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />3
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - Qual o planeta mais quente do sistema solar?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="venus" />
                            Vênus
                        </div>
                        <div className="">
                            <input
                                type="radio"
                                name="q3"
                                id=""
                                value="mercurio"
                            />
                            Mercúrio
                        </div>
                        <div className="">
                            <input
                                type="radio"
                                name="q3"
                                id=""
                                value="plutao"
                            />
                            Plutão
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="marte" />
                            Marte
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - Quantas luas o planeta Júpiter possui?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="34" />
                            34
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="33" />
                            33
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="63" />
                            63
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="25" />
                            25
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - Quantos planetas gasosos existem?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="5" />5
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />3
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />4
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="6" />6
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

Astronomia.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
