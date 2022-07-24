import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function Pocoes({ submitProva, setLoading }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['2', '1', '3', '2', '1'];

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
        submitProva(soma, 11);
    };

    const optionsQ1 = [
        {
            id: 1,
            value: '1',
            label: 'Solanaceae',
        },
        {
            id: 2,
            value: '2',
            label: 'Belladonna',
        },
        {
            id: 3,
            value: '3',
            label: 'Hyoscyamus niger',
        },
        {
            id: 4,
            value: '4',
            label: 'Datura stramonium',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: 'Braço',
        },
        {
            id: 6,
            value: '2',
            label: 'Perna',
        },
        {
            id: 7,
            value: '3',
            label: 'Dedos',
        },
        {
            id: 8,
            value: '4',
            label: 'Torax',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'Força',
        },
        {
            id: 10,
            value: '2',
            label: 'Agilidade',
        },
        {
            id: 11,
            value: '3',
            label: 'Sorte',
        },
        {
            id: 12,
            value: '4',
            label: 'Clareza',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Faz com que o bebedor odeie mortalmente a primeria pessoa que ele ver após tomar a poção',
        },
        {
            id: 14,
            value: '2',
            label: 'Faz com que o bebedor responde qualquer pergunta com honestidade',
        },
        {
            id: 15,
            value: '3',
            label: 'Faz com que o bebedor sinta odio de si mesmo',
        },
        {
            id: 16,
            value: '4',
            label: 'Revela os piores traços e hábitos do bebedor para a primeria pessoa que ele ver após tomar a poção',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'Azul/Verde',
        },
        {
            id: 18,
            value: '2',
            label: 'Azul/Roxo',
        },
        {
            id: 19,
            value: '3',
            label: 'Azul/Amarelo',
        },
        {
            id: 20,
            value: '4',
            label: 'Amarelo/Verde',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Poções</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 - Qual o vegetal mais basico para a criação de poções?"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - O ossso de qual parte do corpo é usado para fazer a poção de força?"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - Qual o efeito da poção Felix Felicis?"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - Qual efeito da poção Veritaserum?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - A poção Wideye se caracteriza pela cor:"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

Pocoes.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
