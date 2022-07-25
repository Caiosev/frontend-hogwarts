import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function CriaturasMagicas({ submitProva, setLoading }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['210', '1', '2', '4', '3'];

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
        submitProva(soma, 3);
    };

    const optionsQ1 = [
        {
            id: 1,
            value: '180',
            label: '1,80m',
        },
        {
            id: 2,
            value: '190',
            label: '1,90m',
        },
        {
            id: 3,
            value: '200',
            label: '2,00m',
        },
        {
            id: 4,
            value: '210',
            label: '2,10m',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: 'Impossível de treinar ou domesticar',
        },
        {
            id: 6,
            value: '2',
            label: 'Treináveis',
        },
        {
            id: 7,
            value: '3',
            label: 'Domesticáveis',
        },
        {
            id: 8,
            value: '4',
            label: 'Possível de treinar ou domesticar',
        },
    ];

    const optionsQ3 = [
        {
            id: 5,
            value: '1',
            label: 'Impossível de treinar ou domesticar',
        },
        {
            id: 6,
            value: '2',
            label: 'Perigosas, apenas magos treinados devem lidar com eles',
        },
        {
            id: 7,
            value: '3',
            label: 'Impossível de serem capturadas',
        },
        {
            id: 8,
            value: '4',
            label: 'Doceis, apenas magos treinados devem lidar com eles',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Cabelo',
        },
        {
            id: 14,
            value: '2',
            label: 'Nuca',
        },
        {
            id: 15,
            value: '3',
            label: 'Pescoço',
        },
        {
            id: 16,
            value: '4',
            label: 'Orelha',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'Importação Proibida, punição severa',
        },
        {
            id: 18,
            value: '2',
            label: 'Consumo Proibido, punição moderada',
        },
        {
            id: 19,
            value: '3',
            label: 'Importação ou venda proibida, punição severa',
        },
        {
            id: 20,
            value: '4',
            label: 'Importação ou venda proibida, punição leve',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Trato das Criaturas Magicas</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 - Qual a altura minima de um Centauro"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - Os dragões são classificados pelo Ministério como: "
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - Os Grifos são classificados pelo Ministério como:"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - Os Diabretes (Pixies) gostam de levantar as pessoas por qual parte do corpo?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - Os ovos de acromântula são classificados como artigos de classe A pelo Departamento para Regulamentação e Controle de Criaturas Mágica, o que isso significa?"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

CriaturasMagicas.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
