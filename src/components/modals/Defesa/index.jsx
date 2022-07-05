import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Defesa({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['4', '3', '2', '4', '2'];

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
        setIdProf(5);
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
            <h1>Prova de Defesa Contra as Artes das Trevas</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - Se você balançar sua varinha em um movimento circular
                    sobre a cabeça enquanto diz lentamente Verdimillious ,
                    mirando apenas em ar rarefeito, qual será o efeito?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="1" />
                            Faiscas apareceram no ar, na cor vermelha, emitindo
                            uma luz cegante
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="2" />
                            Faiscas apareceram no ar, na cor verde, emitindo um
                            som ensurdecedor
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="3" />
                            Uma orbe aparecerá no ar, na cor vermelha, emitindo
                            som ensurdecedor
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="4" />
                            Uma orbe aparecerá no ar, na cor verde, emitindo uma
                            luz cegante
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - Qual o movimento utilizado para executar o Flipendo?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" />{' '}
                            Movimento Circular
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="2" />
                            Movimento Oval
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />
                            Movimento de Aceno
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="4" />
                            Movimento em U
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - O feitiço Riddikulus é utilizado para:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="1" />
                            Se defender de vampiros
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="2" />
                            Se defender do bicho-papão
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="3" />
                            Se defender de diabretes
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="4" />
                            Matar diabretes
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - Como você pode se defender de um Kappa?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="1" />
                            Dando um banana para ele
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="2" />
                            Faze-lo perder o equilibrio
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="3" />
                            Você deve ficar de ponta cabeça
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="4" />
                            Jogar um pepino com o seu nome gravado à faca para
                            ele
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - Como podemos indentificar um vampiro ?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="1" />
                            Musculosos palidos altos com presas e noturnos
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="2" />
                            Magros palidos altos com presas e noturnos
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />
                            Magros palidos altos com presas e diurnos
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />
                            Não conseguimos identificar até que ele mostre sua
                            verdadeira forma
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

Defesa.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
