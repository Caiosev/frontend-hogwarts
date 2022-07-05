import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function His({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['4', '1', '1', '2', '2'];

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
        setIdProf(9);
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
                    1 - Duas das mais antigas sociedades mágicas que conhecemos,
                    vem a ser os:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="1" />
                            Egípcios e Incas
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="2" />
                            Indios e Vikings
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="3" />
                            Romanos e Gregos
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="4" />
                            Egípcios e Celtas
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - É na Grécia Antiga que encontramos os primeiros relatos
                    a respeito de grandes e poderosas feiticeiras como:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" />{' '}
                            Circe, Medéia e Samanta
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="2" />
                            Cercei, Meedila e Samanta
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />
                            Circe, Medála e Semante
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="4" />
                            Cercei, Madalena e Samanta
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - O Caldeirão Gundestrup é:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="1" />
                            um caldeirão de chumbo a qual constitui um dos mais
                            enigmáticos vestígios do mundo celta.
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="2" />
                            uma vasilha de ouro a qual constitui um dos mais
                            enigmáticos vestígios do mundo inca.
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="3" />
                            uma vasilha de prata a qual constitui um dos mais
                            enigmáticos vestígios do mundo celta.
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="4" />
                            uma vasilha de prata a qual constitui um dos mais
                            enigmáticos vestígios do mundo egipcio.
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - O Palladium trata-se de uma estátua de madeira que
                    segundo a mitologia ______ veio a cair do céu.
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="1" />
                            Romana
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="2" />
                            Grega
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="3" />
                            Nordica
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="4" />
                            Egipcia
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - Exitiam tres categorias de druidas durante o apogeu
                    celta, as quais eram:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="1" />
                            Padres, Medicos e Cozinheiros
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="2" />
                            Bardos, Ovados e Druidas
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />
                            Curandeiros, Padres e Guerreiros
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />
                            Professores, Medicos e Guerreiros
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

His.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
