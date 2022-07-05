import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Advinhacao({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [q1, setQ1] = useState(undefined);
    const [q2, setQ2] = useState(undefined);
    const [q3, setQ3] = useState(undefined);
    const [q4, setQ4] = useState(undefined);
    const [q5, setQ5] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['3', '1', '4', '3', '1'];

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
        setIdProf(6);
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
            <h1>Prova de Advinhação</h1>
            <h2>Questões</h2>
            <form action="">
                <label
                    htmlFor="q1"
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                >
                    {' '}
                    1 - O metedo de advinhação Ictimancia envolve qual animal?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q1" id="" value="1" />
                            Passaros
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="2" />
                            Galinhas
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="3" />
                            Peixes
                        </div>
                        <div className="">
                            <input type="radio" name="q1" id="" value="4" />
                            Corujas
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q2"
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                >
                    {' '}
                    2 - O sucesso na Cristalomancia depende do:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q2" id="" value="1" />{' '}
                            Relaxamento da mente consciente e da visão exterior
                            para limpar a visão interior e a supraconsciência.
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="2" />
                            Conexão com os animais e a natureza.
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="3" />
                            Estado mais profundo de hipnose, acessando assim seu
                            subconsciente, liberando o poder do terceiro olho
                        </div>
                        <div className="">
                            <input type="radio" name="q2" id="" value="4" />
                            Seu tipo de sangue de nascensa e seu historico
                            familiar.
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q3"
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                >
                    {' '}
                    3 - A Heptomologia tem relação com o numero:
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q3" id="" value="1" />2
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="2" />3
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="3" />5
                        </div>
                        <div className="">
                            <input type="radio" name="q3" id="" value="4" />7
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q4"
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                >
                    {' '}
                    4 - Como a Miomancia utiliza os ratos a seu favor?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q4" id="" value="1" />
                            Utiliza de seu temperamento
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="2" />
                            Utiliza do formato de sua mordida
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="3" />
                            Utiliza a froma que eles invadem sua moradia
                        </div>
                        <div className="">
                            <input type="radio" name="q4" id="" value="4" />
                            Utiliza de sua alimentação
                        </div>
                    </div>
                </label>
                <label
                    htmlFor="q5"
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                >
                    {' '}
                    5 - A Quiromancia utiliza qual parte do corpo ?
                    <div className="options">
                        <div className="">
                            <input type="radio" name="q5" id="" value="1" />
                            As Mãos
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="2" />A
                            Cabeça
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="3" />
                            Os Pés
                        </div>
                        <div className="">
                            <input type="radio" name="q5" id="" value="4" />
                            Os Cabelos
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

Advinhacao.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
