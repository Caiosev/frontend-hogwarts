import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function Herbo({ submitProva, setLoading }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['3', '1', '1', '4', '4'];

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
        submitProva(soma, 8);
    };

    const optionsQ1 = [
        {
            id: 1,
            value: '1',
            label: 'Feridas',
        },
        {
            id: 2,
            value: '2',
            label: 'Ossos',
        },
        {
            id: 3,
            value: '3',
            label: 'Petrificações',
        },
        {
            id: 4,
            value: '4',
            label: 'Queimaduras',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: 'Carne',
        },
        {
            id: 6,
            value: '2',
            label: 'Apenas Agua',
        },
        {
            id: 7,
            value: '3',
            label: 'Luz do Sol',
        },
        {
            id: 8,
            value: '4',
            label: 'Sementes',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'Rosa e Roxa',
        },
        {
            id: 10,
            value: '2',
            label: 'Rosa e Verde',
        },
        {
            id: 11,
            value: '3',
            label: 'Verde e Roxa',
        },
        {
            id: 12,
            value: '4',
            label: 'Verde e Azul',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Branca e Preta',
        },
        {
            id: 14,
            value: '2',
            label: 'Preta e Verde',
        },
        {
            id: 15,
            value: '3',
            label: 'Verde e Branca',
        },
        {
            id: 16,
            value: '4',
            label: 'Preta e Branca',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'Claro e Umido',
        },
        {
            id: 18,
            value: '2',
            label: 'Claro e Seco',
        },
        {
            id: 19,
            value: '3',
            label: 'Escuro e Seco',
        },
        {
            id: 20,
            value: '4',
            label: 'Escuro e Umido',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Herbologia</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 - Mandrágoras maduras podem ser cortadas para servir como um ingrediente principal para o Tônico Restaurador de Mandrágoras, que é usado para curar:"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - O arbusto autofetilizante se alimenta de:"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - Qual a cor da planta PuffaPod"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - A Moly tem folhas _____ e flores ______"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - Qual o ambiente que deve ser cultivado o Visgo do Diabo?"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

Herbo.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
