import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function HisT({ setValor, setIdProf, close }) {
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
        setIdProf(10);
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
            value: '1',
            label: 'Benjamin franklin',
        },
        {
            id: 2,
            value: '2',
            label: 'Abraham lincoln',
        },
        {
            id: 3,
            value: '3',
            label: 'Thomas Édison',
        },
        {
            id: 4,
            value: '4',
            label: 'Nikola tesla',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: 'René Descartes',
        },
        {
            id: 6,
            value: '2',
            label: 'Immanuel Kant',
        },
        {
            id: 7,
            value: '3',
            label: 'John Locke',
        },
        {
            id: 8,
            value: '4',
            label: 'Francis Bacon',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'Controlador de carga eletrica',
        },
        {
            id: 10,
            value: '2',
            label: 'Interruptor',
        },
        {
            id: 11,
            value: '3',
            label: 'Estabilizador',
        },
        {
            id: 12,
            value: '4',
            label: 'Controle Remoto',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Japão',
        },
        {
            id: 14,
            value: '2',
            label: 'China',
        },
        {
            id: 15,
            value: '3',
            label: 'Tailandia',
        },
        {
            id: 16,
            value: '4',
            label: 'Russia',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'Fred Mercury',
        },
        {
            id: 18,
            value: '2',
            label: 'Alan Turing',
        },
        {
            id: 19,
            value: '3',
            label: 'Charles Darwin',
        },
        {
            id: 20,
            value: '4',
            label: 'Tom Cruise',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Historia Trouxa</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 - A Lampada é um objeto utilizado por trouxas para iluminar o ambiente, qual o nome de seu criador?"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - O método científico é um conjunto de regras para a obtenção do conhecimento durante a investigação científica. Quem foi o primeiro a definir o metodo cientifico?"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - O _____ é um objeto colocado na parede em casas de Trouxas, ele controla a passagem de corrente eletrica, na maioria das vezes é utilizado para acender a luz"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - O jogo Pedra, papel e tesoura tem sua origem em qual país?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - Quem é responsavel pela teoria da evolução?"
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
