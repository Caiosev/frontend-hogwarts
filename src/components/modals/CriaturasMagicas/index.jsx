import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function CriaturasMagicas({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['t', '3', 'aco', '4', '3'];

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
        setIdProf(3);
    };

    useEffect(() => {
        if (pontos === undefined) return;
        switch (pontos) {
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
        close();
        setValor(pontos);
        toast.success(
            'Prova realizada com Sucesso, acesse a aba de provas enviadas'
        );
    }, [pontos]);

    const optionsQ1 = [
        {
            id: 1,
            value: 'v',
            label: 'Vampiro',
        },
        {
            id: 2,
            value: 't',
            label: 'Thestral',
        },
        {
            id: 3,
            value: 'h',
            label: 'Hipógrifo',
        },
        {
            id: 4,
            value: 'troll',
            label: 'Troll',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: 'Se aproximiar devagar e pular em suas costas',
        },
        {
            id: 6,
            value: '2',
            label: 'Oferecer comida e se andar em sua direção lentamente',
        },
        {
            id: 7,
            value: '3',
            label: 'Pedir permissao, esperar ela ser retribuida e se aproximar mantendo contato visual',
        },
        {
            id: 8,
            value: '4',
            label: 'Nunca devemos nos aproximar de um grifo',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: 'lobe',
            label: 'Lobelia erinus',
        },
        {
            id: 10,
            value: 'dada',
            label: 'Dadaleira',
        },
        {
            id: 11,
            value: 'ver',
            label: 'Verbena',
        },
        {
            id: 12,
            value: 'aco',
            label: 'Aconito',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Pisar ou esbarrar em suas arvores',
        },
        {
            id: 14,
            value: '2',
            label: 'Pisá-los',
        },
        {
            id: 15,
            value: '3',
            label: 'Acorda-los com som muito alto',
        },
        {
            id: 16,
            value: '4',
            label: 'Ameaçar de qualquer maneira a integridade de suas arvores',
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
                    label="1 - O _______ mata suas vitimas ao olhá-las diretamente nos olhos"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - Quais passos devem ser seguidos para se aproximar de um grifo em segurança?"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - Qual a planta utilizada para fazer a poção que impede um lobisomen de se tranformar?"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - Qual situação deixa os Tronquilhos agressivos?"
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
