import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function Aritmancia({ submitProva, setLoading }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['2', '19', 'dmv', 'ir', '58'];

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
        switch (soma) {
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
        toast.success(
            'Prova realizada com Sucesso, acesse a aba de provas enviadas'
        );
        setLoading(true);
        submitProva(soma, 1);
    };

    const optionsQ1 = [
        {
            id: 1,
            value: '1',
            label: '1',
        },
        {
            id: 2,
            value: '5',
            label: '5',
        },
        {
            id: 3,
            value: '2',
            label: '2',
        },
        {
            id: 4,
            value: '10',
            label: '10',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '19',
            label: '1 a 9',
        },
        {
            id: 6,
            value: '110',
            label: '1 a 10',
        },
        {
            id: 7,
            value: '10',
            label: '0 a 10',
        },
        {
            id: 8,
            value: '100',
            label: '0 a 100',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: 'ajs',
            label: 'A J S',
        },
        {
            id: 10,
            value: 'gpy',
            label: 'G P Y',
        },
        {
            id: 11,
            value: 'dmv',
            label: 'D M V',
        },
        {
            id: 12,
            value: 'aku',
            label: 'A K U',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: 'enw',
            label: 'E N W',
        },
        {
            id: 14,
            value: 'hqz',
            label: 'H Q Z',
        },
        {
            id: 15,
            value: 'nxf',
            label: 'N X F',
        },
        {
            id: 16,
            value: 'ir',
            label: 'I R',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '58',
            label: '58',
        },
        {
            id: 18,
            value: '49',
            label: '49',
        },
        {
            id: 19,
            value: '30',
            label: '30',
        },
        {
            id: 20,
            value: '32',
            label: '32',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Aritmancia</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 - Quantas Leis existem na Aritmância?"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - Numeros de _ a _ possuem importancia vital para a
                    Aritmancia."
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - Segundo a Tabela Pitagórica Bruxa quais letras possuem o
                    numero 4 como valor?"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - Segundo a Tabela Pitagórica Bruxa quais letras possuem o
                    numero 9 como valor?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - Qual valor se resulta da conversão escansiva do nome
                    Nicholas Flamel?"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

Aritmancia.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
