import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Pocoes({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['2', '1', '3', '2', '1'];

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
            <h1>Prova de Poções</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - Qual o vegetal mais basico para a criação de poções?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="1" />
                            Solanaceae
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="2" />
                            Belladonna
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="3" />
                            Hyoscyamus niger
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="4" />
                            Datura stramonium
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - Existem varios tipos de poções do amor, dentre eles,
                    qual é o ingrediente mais utilizado?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" />{' '}
                            Ovos de Cinzal
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="2" />
                            Ovos de Unicornio
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />
                            Ovos de Dodo
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="4" />
                            Ovos de Galinha
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - A Poção Ellayse é uma poção usada, entre outros meios,
                    para fazer quem a beba entender fluentemente:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="1" />
                            Animais
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="2" />
                            Galego
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="3" />
                            Português
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="4" />
                            Russo
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - A Poção do ódio é uma poção que:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="1" />
                            Faz com que o bebedor odeie mortalmente a primeria
                            pessoa que ele ver após tomar a poção
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="2" />
                            Revela os piores traços e hábitos de uma pessoa em
                            particular para o bebedor
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="3" />
                            Faz com que o bebedor sinta odio de si mesmo
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="4" />
                            Revela os piores traços e hábitos do bebedor para a
                            primeria pessoa que ele ver após tomar a poção
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - A poção emebelezadora se caracteriza por emitir:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="1" />
                            Bolhas multicolor
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="2" />
                            Um brilho intenso na cor amarela
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />
                            Um brilho intenso na cor azul
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />
                            Um cheiro insuportavel
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

Pocoes.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
