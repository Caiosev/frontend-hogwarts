import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Runas({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['3', '1', '1', '1', '2'];

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
            <h1>Prova de Runas Antigas</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - O mais antigo alfabeto rúnico é chamado de:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="1" />
                            Elder Rings
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="2" />
                            Elder Scrolls
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="3" />
                            Elder Futhark
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="4" />
                            Older Futhark
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - A Runa de Demiguise representa qual numero?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" />0
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="2" />1
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />2
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="4" />3
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - A Runa da Hydra representa qual numero?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="1" />9
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="2" />8
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="3" />7
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="4" />5
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - A runa ᛖ do alfabeto runico represental qual letra no
                    latim?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="1" />M
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="2" />N
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="3" />E
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="4" />C
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - A runa ᚢ do alfabeto runico represental qual letra no
                    latim?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="1" />N
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="2" />U
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />D
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />I
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

Runas.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
