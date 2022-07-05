import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function HisT({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['3', '1', '2', '1', '3'];

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
        setIdProf(10);
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
            <h1>Prova de Historia da Magia</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - A Lampada é um objeto utilizado por trouxas para
                    iluminar o ambiente, qual o nome de seu criador?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="1" />
                            Benjamin franklin
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="2" />
                            Abraham lincoln
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="3" />
                            Thomas Édison
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="4" />
                            Nikola tesla
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - O método científico é um conjunto de regras para a
                    obtenção do conhecimento durante a investigação científica.
                    Quem foi o primeiro a definir o metodo cientifico?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" />{' '}
                            René Descartes
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="2" />
                            Immanuel Kant
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />
                            John Locke
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="4" />
                            Francis Bacon
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - O _____ é um objeto colocado na parede em casas de
                    Trouxas, ele controla a passagem de corrente eletrica, na
                    maioria das vezes é utilizado para acender a luz
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="1" />
                            Controlador de carga eletrica
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="2" />
                            Interruptor
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="3" />
                            Estabilizador
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="4" />
                            Controle Remoto
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - O jogo Pedra, papel e tesoura tem sua origem em qual
                    país?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="1" />
                            Japão
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="2" />
                            China
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="3" />
                            Tailandia
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="4" />
                            Russia
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - Quem é responsavel pela teoria da evolução?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="1" />
                            Fred Mercury
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="2" />
                            Alan Turing
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />
                            Charles Darwin
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />
                            Tom Cruise
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

HisT.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
