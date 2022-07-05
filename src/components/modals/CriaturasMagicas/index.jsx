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
    const res = ['t', '3', 'aco', '4', '3'];

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
        setIdProf(3);
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
            <h1>Prova de Trato das Criaturas Magicas</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - O _______ mata suas vitimas ao olhá-las diretamente nos
                    olhos
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="v" />
                            Vampiro
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="t" />
                            Thestral
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="h" />
                            Hipógrifo
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="troll" />
                            Troll
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - Quais passos devem ser seguidos para se aproximar de um
                    grifo em segurança?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" /> Se
                            aproximiar devagar e pular em suas costas
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="2" />
                            Oferecer comida e se andar em sua direção lentamente
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />
                            Pedir permissao, esperar ela ser retribuida e se
                            aproximar mantendo contato visual
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="4" />
                            Nunca devemos nos aproximar de um grifo
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - Qual a planta utilizada para fazer a poção que impede um
                    lobisomen de se tranformar ?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="lobe" />
                            Lobelia erinus
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="dada" />
                            Dadaleira
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="ver" />
                            Verbena
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="aco" />
                            Aconito
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - Qual situação deixa os Tronquilhos agressivos?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="1" />
                            Pisar ou esbarrar em suas arvores
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="2" />
                            Pisá-los
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="3" />
                            Acorda-los com som muito alto
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="4" />
                            Ameaçar de qualquer maneira a integridade de suas
                            arvores
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - Os ovos de acromântula são classificados como artigos de
                    classe A pelo Departamento para Regulamentação e Controle de
                    Criaturas Mágica, o que isso significa?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="1" />
                            Importação Proibida, punição severa
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="2" />
                            Consumo Proibido, punição moderada
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />
                            Importação ou venda proibida, punição severa
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />
                            Importação ou venda proibida, punição leve
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
