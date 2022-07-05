import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Herbo({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['3', '1', '1', '4', '4'];

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
        setIdProf(8);
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
            <h1>Prova de Herbologia</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - Mandrágoras maduras podem ser cortadas para servir como
                    um ingrediente principal para o Tônico Restaurador de
                    Mandrágoras, que é usado para curar:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="1" />
                            Feridas
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="2" />
                            Ossos
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="3" />
                            Petrificações
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="4" />
                            Queimaduras
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - Poção Polissuco é uma poção que permite ao bebedor
                    assumir a forma de outra pessoa. Com qual planta essa poção
                    é feita?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" />{' '}
                            Sanguinária
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="2" />
                            Bubotúbera
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />
                            Tentáculo Venenoso
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="4" />
                            Hortelã-pimenta
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - A planta ______ quando colhido em noite de lua cheia,
                    tambem pode ser utilizada para fazer a poção de Poção
                    Polissuco.
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="1" />
                            Descurainia
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="2" />
                            Hortelã-pimenta
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="3" />
                            Ditamno
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="4" />
                            Nabo tibetano
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - Em que país é cultivado as Árvores resistentes à
                    gravidade?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="1" />
                            Inglaterra
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="2" />
                            Escócia
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="3" />
                            Suécia
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="4" />
                            Nepal
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - As folhas das madragoras são a base essencial da
                    maioria:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="1" />
                            das Varinhas
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="2" />
                            das Roupas
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />
                            dos Fertilizantes
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />
                            dos Antidotos
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

Herbo.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
