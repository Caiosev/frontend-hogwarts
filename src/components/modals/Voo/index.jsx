import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function Voo({ submitProva, setLoading }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['1', '2', '3', '1', '4'];

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
        submitProva(soma, 7);
    };

    const optionsQ1 = [
        {
            id: 1,
            value: '1',
            label: 'Suba',
        },
        {
            id: 2,
            value: '2',
            label: 'Venha',
        },
        {
            id: 3,
            value: '3',
            label: 'Levite',
        },
        {
            id: 4,
            value: '4',
            label: 'Pra cima',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: '955',
        },
        {
            id: 6,
            value: '2',
            label: '962',
        },
        {
            id: 7,
            value: '3',
            label: '402',
        },
        {
            id: 8,
            value: '4',
            label: '820',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'Tom e Newton',
        },
        {
            id: 10,
            value: '2',
            label: 'Gelbert e Credence',
        },
        {
            id: 11,
            value: '3',
            label: 'Os irmaos Ollerton',
        },
        {
            id: 12,
            value: '4',
            label: 'Gwendolyn Morgan',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Suécia',
        },
        {
            id: 14,
            value: '2',
            label: 'Suíça',
        },
        {
            id: 15,
            value: '3',
            label: 'Finlândia',
        },
        {
            id: 16,
            value: '4',
            label: 'Inglaterra',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'JogaBol (Playpot)',
        },
        {
            id: 18,
            value: '2',
            label: 'Agilbola (Quickpot)',
        },
        {
            id: 19,
            value: '3',
            label: 'Esquvabola (Dodgepot)',
        },
        {
            id: 20,
            value: '4',
            label: 'Trancabola (Quodpot)',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Transfiguração</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 - Qual a palavra que deve ser dita para a vassoura ir para suas mãos?"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - O primeiro uso registrado de uma vassoura destinada a voo foi em:"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - Quem foram os fundadores da Cleansweep Broom Company?"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - Aonde acontece a corrida anual de vassouras?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - Qual o nome do jogo similar com Quadribol que é jogado nos EUA?"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

Voo.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
