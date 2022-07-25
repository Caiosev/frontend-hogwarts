import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function Defesa({ submitProva, setLoading }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['4', '3', '2', '4', '2'];

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
        submitProva(soma, 5);
    };

    const optionsQ1 = [
        {
            id: 1,
            value: '1',
            label: 'Faiscas apareceram no ar, na cor vermelha, emitindo uma luz cegante',
        },
        {
            id: 2,
            value: '2',
            label: 'Faiscas apareceram no ar, na cor verde, emitindo um som ensurdecedor',
        },
        {
            id: 3,
            value: '3',
            label: 'Uma orbe aparecerá no ar, na cor vermelha, emitindo som ensurdecedor',
        },
        {
            id: 4,
            value: '4',
            label: 'Uma orbe aparecerá no ar, na cor verde, emitindo uma luz cegante',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: 'Amortais, que assume a forma do observador',
        },
        {
            id: 6,
            value: '2',
            label: 'Mortais, que assume a forma do observador',
        },
        {
            id: 7,
            value: '3',
            label: 'Mortais, que assume a forma do maior medo do observador',
        },
        {
            id: 8,
            value: '4',
            label: 'Amortais, que assume a forma do maior medo do observador',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'Se defender de vampiros',
        },
        {
            id: 10,
            value: '2',
            label: 'Se defender do bicho-papão',
        },
        {
            id: 11,
            value: '3',
            label: 'Se defender de diabretes',
        },
        {
            id: 12,
            value: '4',
            label: 'Matar diabretes',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Dando um banana para ele',
        },
        {
            id: 14,
            value: '2',
            label: 'Faze-lo perder o equilibrio',
        },
        {
            id: 15,
            value: '3',
            label: 'Você deve ficar de ponta cabeça',
        },
        {
            id: 16,
            value: '4',
            label: 'Jogar um pepino com o seu nome gravado à faca para ele',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'Musculosos palidos altos com presas e noturnos',
        },
        {
            id: 18,
            value: '2',
            label: 'Magros palidos altos com presas e noturnos',
        },
        {
            id: 19,
            value: '3',
            label: 'Magros palidos altos com presas e diurnos',
        },
        {
            id: 20,
            value: '4',
            label: 'Não conseguimos identificar até que ele mostre sua verdadeira forma',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Defesa Contra as Artes das Trevas</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 - Se você balançar sua varinha em um movimento circular sobre a cabeça enquanto diz lentamente Verdimillious, mirando apenas em ar rarefeito, qual será o efeito?"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - Os Boggarts são:"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - O feitiço Riddikulus é utilizado para:"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - Como você pode se defender de um Kappa?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label=" 5 - Como podemos indentificar um vampiro?"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

Defesa.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
