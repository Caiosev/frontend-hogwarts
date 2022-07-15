import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import * as S from './styled';
import Radio from '../../Form/radio';

export default function Trans({ setValor, setIdProf, close }) {
    const [pontos, setPontos] = useState(undefined);
    const [nota, setNota] = useState(undefined);
    const res = ['1', '3', '1', '3', '4'];

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
        setIdProf(13);
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
            label: 'Lei de Gamp',
        },
        {
            id: 2,
            value: '2',
            label: 'Lei de Mutabilidade',
        },
        {
            id: 3,
            value: '3',
            label: 'Lei de Gramp',
        },
        {
            id: 4,
            value: '4',
            label: 'Lei de Imutabilidade',
        },
    ];
    const optionsQ2 = [
        {
            id: 5,
            value: '1',
            label: '20',
        },
        {
            id: 6,
            value: '2',
            label: '24',
        },
        {
            id: 7,
            value: '3',
            label: '26',
        },
        {
            id: 8,
            value: '4',
            label: '28',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'Branco',
        },
        {
            id: 10,
            value: '2',
            label: 'Azul',
        },
        {
            id: 11,
            value: '3',
            label: 'Verde',
        },
        {
            id: 12,
            value: '4',
            label: 'Preta',
        },
    ];

    const optionsQ4 = [
        {
            id: 13,
            value: '1',
            label: 'Balançar a varinha para esquerda duas vezes',
        },
        {
            id: 14,
            value: '2',
            label: 'Balançar a varinha para direita duas vezes',
        },
        {
            id: 15,
            value: '3',
            label: 'Segurar a varinha para esquerda',
        },
        {
            id: 16,
            value: '4',
            label: 'Balançar a varinha para direita',
        },
    ];

    const optionsQ5 = [
        {
            id: 17,
            value: '1',
            label: 'Cadeira',
        },
        {
            id: 18,
            value: '2',
            label: 'Cachorro',
        },
        {
            id: 19,
            value: '3',
            label: 'Mesa',
        },
        {
            id: 20,
            value: '4',
            label: 'Caixa de Fosforos',
        },
    ];

    return (
        <S.Container>
            <h1>Prova de Transfiguração</h1>
            <h2>Questões</h2>
            <Form onSubmit={handleSubmit}>
                <Radio
                    name="q1"
                    label="1 - Como é chamada a lei que impoe limite e regula as Tranfigurações?"
                    options={optionsQ1}
                />
                <Radio
                    name="q2"
                    label="2 - Quantas letras existem no alfabeto de transfiguração?"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - Qual a cor da luz deve ser emitida quando a magia de Troca é executada com perfeição?"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - Qual o movimento de mãos é feito para conjurar o feitiço Flintifors?"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - O feitiço Flintifors transforma o alvo em:"
                    options={optionsQ5}
                />
                {nota}
                {pontos && '/5'}
                <button type="submit">Enviar</button>
            </Form>
        </S.Container>
    );
}

Trans.propTypes = {
    setValor: PropTypes.func,
    setIdProf: PropTypes.func,
    close: PropTypes.func,
}.isRequired;
