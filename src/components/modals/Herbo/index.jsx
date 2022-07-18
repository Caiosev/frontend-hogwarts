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
            label: 'Sanguinária',
        },
        {
            id: 6,
            value: '2',
            label: 'Bubotúbera',
        },
        {
            id: 7,
            value: '3',
            label: 'Tentáculo Venenoso',
        },
        {
            id: 8,
            value: '4',
            label: 'Hortelã-pimenta',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'Descurainia',
        },
        {
            id: 10,
            value: '2',
            label: 'Hortelã-pimenta',
        },
        {
            id: 11,
            value: '3',
            label: 'Ditamno',
        },
        {
            id: 12,
            value: '4',
            label: 'Nabo tibetano',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Inglaterra',
        },
        {
            id: 14,
            value: '2',
            label: 'Escócia',
        },
        {
            id: 15,
            value: '3',
            label: 'Suécia',
        },
        {
            id: 16,
            value: '4',
            label: 'Nepal',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'das Varinhas',
        },
        {
            id: 18,
            value: '2',
            label: 'das Roupas',
        },
        {
            id: 19,
            value: '3',
            label: 'dos Fertilizantes',
        },
        {
            id: 20,
            value: '4',
            label: 'dos Antidotos',
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
                    label="2 - Poção Polissuco é uma poção que permite ao bebedor assumir a forma de outra pessoa. Com qual planta essa poção é feita?"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - A planta ______ quando colhido em noite de lua cheia, tambem pode ser utilizada para fazer a poção de Poção Polissuco."
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - Em que país é cultivado as Árvores resistentes à gravidade?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - Qual o significado do nome Wingardium Leviosa?"
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
