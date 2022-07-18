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
            label: 'Ovos de Cinzal',
        },
        {
            id: 6,
            value: '2',
            label: 'Ovos de Unicornio',
        },
        {
            id: 7,
            value: '3',
            label: 'Ovos de Dodo',
        },
        {
            id: 8,
            value: '4',
            label: 'Ovos de Galinha',
        },
    ];

    const optionsQ3 = [
        {
            id: 9,
            value: '1',
            label: 'Animais',
        },
        {
            id: 10,
            value: '2',
            label: 'Galego',
        },
        {
            id: 11,
            value: '3',
            label: 'Português',
        },
        {
            id: 12,
            value: '4',
            label: 'Russo',
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
            label: 'Revela os piores traços e hábitos de uma pessoa em particular para o bebedor',
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
            label: 'Bolhas multicolor',
        },
        {
            id: 18,
            value: '2',
            label: 'Um brilho intenso na cor amarela',
        },
        {
            id: 19,
            value: '3',
            label: 'Um brilho intenso na cor azul',
        },
        {
            id: 20,
            value: '4',
            label: 'Um cheiro insuportavel',
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
                    label="2 - Existem varios tipos de poções do amor, dentre eles, qual é o ingrediente mais utilizado?"
                    options={optionsQ2}
                />
                <Radio
                    name="q3"
                    label="3 - A Poção Ellayse é uma poção usada, entre outros meios, para fazer quem a beba entender fluentemente:"
                    options={optionsQ3}
                />
                <Radio
                    name="q4"
                    label="4 - A Poção do ódio é uma poção que:"
                    options={optionsQ4}
                />
                <Radio
                    name="q5"
                    label="5 - A poção emebelezadora se caracteriza por emitir:"
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
