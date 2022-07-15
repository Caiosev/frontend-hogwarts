import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function Astronomia({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['96', '5', 'venus', '63', '4'];

    const handleSubmit = (data) => {
        const resAluno = Object.values(data);
        if (resAluno.length < 5) {
            toast.error('Responda todas as questoes');
            return;
        }
        let soma = 0;
        resAluno.forEach((element, i) => {
            if (element === res[i]) {
                soma += 1;
            }
        });
        setPontos(soma);
        setIdProf(2);
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
        close();
        setValor(pontos);
        toast.success(
            'Prova realizada com Sucesso, acesse a aba de provas enviadas'
        );
    }, [pontos]);

    const optionsQ1 = [
        {
            id: 1,
            value: '90',
            label: '90%',
        },
        {
            id: 2,
            value: '85',
            label: '85%',
        },
        {
            id: 3,
            value: '82',
            label: '82%',
        },
        {
            id: 4,
            value: '96',
            label: '96%',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '5',
            label: '5',
        },
        {
            id: 6,
            value: '8',
            label: '8',
        },
        {
            id: 7,
            value: '1',
            label: '1',
        },
        {
            id: 8,
            value: '3',
            label: '3',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: 'mercurio',
            label: 'Mercúrio',
        },
        {
            id: 10,
            value: 'plutao',
            label: 'Plutão',
        },
        {
            id: 11,
            value: 'marte',
            label: 'Marte',
        },
        {
            id: 12,
            value: 'venus',
            label: 'Vênus',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '34',
            label: '34',
        },
        {
            id: 14,
            value: '33',
            label: '33',
        },
        {
            id: 15,
            value: '63',
            label: '63',
        },
        {
            id: 16,
            value: '25',
            label: '25',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '5',
            label: '5',
        },
        {
            id: 18,
            value: '3',
            label: '3',
        },
        {
            id: 19,
            value: '4',
            label: '4',
        },
        {
            id: 20,
            value: '6',
            label: '6',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Astronomia</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label=" 1 - Energia e matéria escuras representam ___ do universo?"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - Quantos planetas anões existem em nosso sistema solar?"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - Qual o planeta mais quente do sistema solar?"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - Quantas luas o planeta Júpiter possui?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - Quantos planetas gasosos existem?"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

Astronomia.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
