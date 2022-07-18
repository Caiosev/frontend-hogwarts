import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function Advinhacao({ submitProva, setLoading }) {
    const [nota, setNota] = useState('');
    const res = ['3', '1', '4', '3', '1'];
    const [pontos, setPontos] = useState();

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
        submitProva(soma, 6);
    };

    const optionsQ1 = [
        {
            id: 1,
            value: '1',
            label: 'Passaros',
        },
        {
            id: 2,
            value: '2',
            label: 'Galinhas',
        },
        {
            id: 3,
            value: '3',
            label: 'Peixes',
        },
        {
            id: 4,
            value: '4',
            label: 'Corujas',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: 'Relaxamento da mente consciente e da visão exterior para limpar a visão interior e a supraconsciência.',
        },
        {
            id: 6,
            value: '2',
            label: ' Conexão com os animais e a natureza.',
        },
        {
            id: 7,
            value: '3',
            label: 'Estado mais profundo de hipnose, acessando assim seu subconsciente, liberando o poder do terceiro olho',
        },
        {
            id: 8,
            value: '4',
            label: 'Seu tipo de sangue de nascensa e seu historico familiar.',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: '2',
        },
        {
            id: 10,
            value: '2',
            label: '3',
        },
        {
            id: 11,
            value: '3',
            label: '5',
        },
        {
            id: 12,
            value: '4',
            label: '7',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Utiliza de seu temperamento',
        },
        {
            id: 14,
            value: '2',
            label: ' Utiliza do formato de sua mordida',
        },
        {
            id: 15,
            value: '3',
            label: ' Utiliza a froma que eles invadem sua moradia',
        },
        {
            id: 16,
            value: '4',
            label: 'Utiliza de sua alimentação',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'As Mãos',
        },
        {
            id: 18,
            value: '2',
            label: 'Cabeça',
        },
        {
            id: 19,
            value: '3',
            label: 'Os Pés',
        },
        {
            id: 20,
            value: '4',
            label: 'Os Cabelos',
        },
    ];
    return (
        <S.Container>
            <h1>Prova de Advinhação</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label=" 1 - O metedo de advinhação Ictimancia envolve qual animal?"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - O sucesso na Cristalomancia depende do:"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - A Heptomologia tem relação com o numero:"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - Como a Miomancia utiliza os ratos a seu favor?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - A Quiromancia utiliza qual parte do corpo?"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

Advinhacao.propTypes = {
    submitProva: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
