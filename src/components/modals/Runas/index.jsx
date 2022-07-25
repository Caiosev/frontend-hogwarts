import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function Runas({ submitProva, setLoading }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['3', '1', '1', '3', '2'];

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
        submitProva(soma, 12);
    };

    const optionsQ1 = [
        {
            id: 1,
            value: '1',
            label: 'Elder Rings',
        },
        {
            id: 2,
            value: '2',
            label: 'Elder Scrolls',
        },
        {
            id: 3,
            value: '3',
            label: 'Elder Futhark',
        },
        {
            id: 4,
            value: '4',
            label: 'Older Futhark',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: 'f',
        },
        {
            id: 6,
            value: '2',
            label: 'p',
        },
        {
            id: 7,
            value: '3',
            label: 'y',
        },
        {
            id: 8,
            value: '4',
            label: 'k',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'z',
        },
        {
            id: 10,
            value: '2',
            label: 'f',
        },
        {
            id: 11,
            value: '3',
            label: 'v',
        },
        {
            id: 12,
            value: '4',
            label: 'y',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'M',
        },
        {
            id: 14,
            value: '2',
            label: 'N',
        },
        {
            id: 15,
            value: '3',
            label: 'E',
        },
        {
            id: 16,
            value: '4',
            label: 'C',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'N',
        },
        {
            id: 18,
            value: '2',
            label: 'U',
        },
        {
            id: 19,
            value: '3',
            label: 'D',
        },
        {
            id: 20,
            value: '4',
            label: 'I',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Runas Antigas</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 - O mais antigo alfabeto rúnico é chamado de:"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - A runa ᚠ do alfabeto runico representa qual letra no latim?"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - A runa ᛉ do alfabeto runico representa qual letra no latim?"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - A runa ᛖ do alfabeto runico representa qual letra no latim?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - A runa ᚢ do alfabeto runico representa qual letra no latim?"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

Runas.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
