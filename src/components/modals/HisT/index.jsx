import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function HisT({ submitProva, setLoading }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['3', '1', '2', '1', '3'];

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
        submitProva(soma, 10);
    };

    const optionsQ1 = [
        {
            id: 1,
            value: '1',
            label: 'Plantar / Criação de ferramentas',
        },
        {
            id: 2,
            value: '2',
            label: 'Fabricar armas / Descoberta do adubo',
        },
        {
            id: 3,
            value: '3',
            label: 'Controlar o fogo / Revolução Neolítica',
        },
        {
            id: 4,
            value: '4',
            label: 'Apagar o fogo / Revolução Política',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: 'Roda',
        },
        {
            id: 6,
            value: '2',
            label: 'Fogo',
        },
        {
            id: 7,
            value: '3',
            label: 'Fogueira',
        },
        {
            id: 8,
            value: '4',
            label: 'Vassoura',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'Eletricidade e Ciência',
        },
        {
            id: 10,
            value: '2',
            label: 'Ciência e Engenharia',
        },
        {
            id: 11,
            value: '3',
            label: 'Engenharia e Eletricidade',
        },
        {
            id: 12,
            value: '4',
            label: 'História e Ciência',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Utilidade, Usabilidade e Segurança',
        },
        {
            id: 14,
            value: '2',
            label: 'Inovação, Usabilidade e Segurança',
        },
        {
            id: 15,
            value: '3',
            label: 'Utilidade, Segurança e Inovação',
        },
        {
            id: 16,
            value: '4',
            label: 'Utilidade e Inovação',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'homo sapiens',
        },
        {
            id: 18,
            value: '2',
            label: 'Homo sapiens sapiens',
        },
        {
            id: 19,
            value: '3',
            label: 'Homo erectus',
        },
        {
            id: 20,
            value: '4',
            label: 'Homo Habilis',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Historia Trouxa</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 -  A descoberta pré-histórica de como ___________ e a subsequente ___________ aumentaram a disponibilidade de fontes de alimento"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - A invenção da _____ auxiliou humanos a viajar, transportar cargas e controlar seu ambiente."
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - A tecnologia é frequentemente uma consequência da:"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - As tecnologias geralmente não são exclusivamente produtos da ciência, porque precisam satisfazer requisitos como:"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - A data exata da descoberta do fogo pelos trouxas não é conhecida, evidências de ossos de animais queimados no Berço da humanidade sugerem que a domesticação do fogo ocorreu antes de 1 Ma, o consenso acadêmico indica que o __________ controlou o fogo entre 500 e 400 ka.["
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

HisT.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
