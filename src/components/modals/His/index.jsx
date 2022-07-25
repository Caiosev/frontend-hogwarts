import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function His({ submitProva, setLoading }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['4', '1', '1', '2', '2'];

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
        submitProva(soma, 9);
    };

    const optionsQ1 = [
        {
            id: 1,
            value: '1',
            label: '1901',
        },
        {
            id: 2,
            value: '2',
            label: '1910',
        },
        {
            id: 3,
            value: '3',
            label: '1912',
        },
        {
            id: 4,
            value: '4',
            label: '1911',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: '1637',
        },
        {
            id: 6,
            value: '2',
            label: '1547',
        },
        {
            id: 7,
            value: '3',
            label: '1324',
        },
        {
            id: 8,
            value: '4',
            label: '1527',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'Mago',
        },
        {
            id: 10,
            value: '2',
            label: 'Dragão',
        },
        {
            id: 11,
            value: '3',
            label: 'Rei',
        },
        {
            id: 12,
            value: '4',
            label: 'Hydra',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Uma cabeça de urso',
        },
        {
            id: 14,
            value: '2',
            label: 'Uma água-viva',
        },
        {
            id: 15,
            value: '3',
            label: 'Um saco de batata',
        },
        {
            id: 16,
            value: '4',
            label: 'Um caldeirão',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'Tom Riddle',
        },
        {
            id: 18,
            value: '2',
            label: 'Gaspard Shingleton',
        },
        {
            id: 19,
            value: '3',
            label: 'Gellert Grindelwald',
        },
        {
            id: 20,
            value: '4',
            label: 'St Mungo',
        },
    ];

    return (
        <S.Container>
            <h1>Prova da Historia da Magia</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 - O Protesto dos Gárgulas aconteceu em:"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - O código de conduta dos Lobisomens foi feito em:"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - Emerico o Mal, foi um:"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label=" 4 - Urico, o  Esquisitão, ficou conhecido por usar _____ como chapéu"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - Quem foi o inventor do caldeirão que se mexe sozinho?"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

His.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
