import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function CriaturasMagicas({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['1', '4', '3', '3', '4'];

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
            <h1>Prova de Feitiços</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - O feitiço Expelliarmus serve para:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="1" />
                            Jogar a varinha do alvo para trás
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="2" />
                            Repar objetos
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="3" />
                            Controlar a mente do alvo
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="4" />
                            Trazer objetos para suas mãos
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - O feitiço Alorromora permite abrir trancas desde que:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" /> As
                            trancas sejam fabricadas por trouxas
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="2" />
                            As trancas sejam fabricadas por bruxos
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />
                            As trancas não estejam dentro de um local protegido
                            por outros feitiços
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="4" />
                            As trancas não estejam protegidas por outros
                            feitiços
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - Qual o efeito do feitiço Arresto Momentum ?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="1" />
                            Congela o alvo no tempo
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="2" />
                            Deixa o alvo estatico
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="3" />
                            Diminui a velocidade do alvo
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="4" />
                            Petrifica o alvo
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - Existe um encantamento utilizado para descobrir todos
                    feitiços conjurados por uma varinha, qual seu nome?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="1" />
                            Priori Incantatem
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="2" />
                            Cave Inimicum
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="3" />
                            Prior Incantato
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="4" />
                            Piertotum Locomotor
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - Qual o significado do nome Wingardium Leviosa ?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="1" />
                            Levitar
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="2" />
                            Levitar Alto
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />
                            Levantar
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />
                            Levantar Alto
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

CriaturasMagicas.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
