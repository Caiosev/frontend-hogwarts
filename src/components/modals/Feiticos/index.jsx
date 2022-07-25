import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function Feiticos({ submitProva, setLoading }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['1', '4', '3', '3', '1'];

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
        submitProva(soma, 4);
    };

    const optionsQ1 = [
        {
            id: 1,
            value: '1',
            label: 'Jogar a varinha do alvo para trás',
        },
        {
            id: 2,
            value: '2',
            label: 'Repar objetos',
        },
        {
            id: 3,
            value: '3',
            label: 'Controlar a mente do alvo',
        },
        {
            id: 4,
            value: '4',
            label: 'Trazer objetos para suas mãos',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: 'As trancas sejam fabricadas por trouxas',
        },
        {
            id: 6,
            value: '2',
            label: 'As trancas sejam fabricadas por bruxos',
        },
        {
            id: 7,
            value: '3',
            label: 'As trancas não estejam dentro de um local protegido por outros feitiços',
        },
        {
            id: 8,
            value: '4',
            label: 'As trancas não estejam protegidas por outros feitiços',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'Congela o alvo no tempo',
        },
        {
            id: 10,
            value: '2',
            label: 'Deixa o alvo estatico',
        },
        {
            id: 11,
            value: '3',
            label: 'Diminui a velocidade do alvo',
        },
        {
            id: 12,
            value: '4',
            label: 'Petrifica o alvo',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Verde',
        },
        {
            id: 14,
            value: '2',
            label: 'Vermelho',
        },
        {
            id: 15,
            value: '3',
            label: 'Azul',
        },
        {
            id: 16,
            value: '4',
            label: 'Preto',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'Apagar memorias especificas do alvo',
        },
        {
            id: 18,
            value: '2',
            label: 'Trazer memorias do subconsiente do alvo',
        },
        {
            id: 19,
            value: '3',
            label: 'Crair uma defesa contra o feitiço de falsa memorias',
        },
        {
            id: 20,
            value: '4',
            label: 'Apaga totalmente a memoria do alvo',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Feitiços</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 - O feitiço Expelliarmus serve para:"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - O feitiço Alorromora permite abrir trancas desde que:"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - Qual o efeito do feitiço Arresto Momentum?"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - Qual a luz emitida pelo feitiço Descendo?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - O Feitiço da Memoria(Obliviate) tem o efeito de:?"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

Feiticos.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
