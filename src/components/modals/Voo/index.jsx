import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Voo({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['1', '2', '3', '1', '4'];

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
        setIdProf(7);
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
            <h1>Prova de Voo</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - Qual a palavra que deve ser dita para a vassoura ir para
                    suas mãos?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="1" />
                            Suba
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="2" />
                            Venha
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="3" />
                            Levite
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="4" />
                            Pra Cima
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - Quem inventou o amuleto de amortecimento?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" />{' '}
                            Alvo dumbledore
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="2" />
                            Elliot Smethwyck
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />
                            Bob Ollerton
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="4" />
                            Rolanda Hooch
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - Quem foram os fundadores da Cleansweep Broom Company?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="1" />
                            Tom e Newton
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="2" />
                            Gelbert e Credence
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="3" />
                            Os irmaos Ollerton
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="4" />
                            Gwendolyn Morgan
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - O pomo de ouro é baseado em uma criatura, qual é seu
                    nome?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="1" />
                            Pomorim
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="2" />
                            Podrorim
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="3" />
                            Prolorim
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="4" />
                            Promirim
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - Em que seculo surgiu o Quadribol?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="1" />X
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="2" />A II
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />
                            IX
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />
                            XI
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

Voo.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
