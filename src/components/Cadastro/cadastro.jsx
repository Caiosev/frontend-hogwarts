import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { get } from 'lodash';
import * as S from './styled';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

import axios from '../../services/axios';

export default function Cadastro() {
    const [step, setStep] = useState(1);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');
    const [sangue, setSangue] = useState('puro');

    const [patrono, setPatrono] = useState('');
    const [varinha, setVarinha] = useState('');
    const [casa, setCasa] = useState('0');
    const [sala, setSala] = useState('0');

    const [login, setLogin] = useState('');
    const [senha1, setSenha1] = useState('');
    const [senha2, setSenha2] = useState('');
    const [foto, setFoto] = useState('');
    const navigate = useNavigate();

    const SendRequest = async () => {
        try {
            const { data } = await axios.post('/alunos', {
                nome,
                sobrenome,
                idade,
                sangue_status: sangue,
                varinha,
                patrono,
                casa_id: casa,
                sala_id: sala,
                login,
                password: senha1,
            });
            const { id } = data;
            const formData = new FormData();
            formData.append('aluno_id', id);
            formData.append('foto', foto);
            try {
                await axios.post('/fotosAlunos', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } catch (error) {
                toast.error('Erro ao cadastrar foto');
                console.log(error);
            }
            toast.success('Cadastrado com sucesso');
            navigate('/painel');
        } catch (e) {
            toast.error('Erro ao cadastrar aluno');
            const errors = get(e, 'response.data.errors', []);
            errors.map((error) => toast.error(error));
        }
    };

    return (
        <S.Container>
            <h1>Cadastro de Aluno</h1>
            <div className="step">
                {step === 1 && (
                    <Step1
                        setStep={setStep}
                        nome={nome}
                        setNome={setNome}
                        sobrenome={sobrenome}
                        setSobrenome={setSobrenome}
                        idade={idade}
                        setIdade={setIdade}
                        sangue={sangue}
                        setSangue={setSangue}
                    />
                )}
                {step === 2 && (
                    <Step2
                        setStep={setStep}
                        patrono={patrono}
                        setPatrono={setPatrono}
                        varinha={varinha}
                        setVarinha={setVarinha}
                        casa={casa}
                        setCasa={setCasa}
                        sala={sala}
                        setSala={setSala}
                    />
                )}
                {step === 3 && (
                    <Step3
                        setStep={setStep}
                        login={login}
                        setLogin={setLogin}
                        senha1={senha1}
                        setSenha1={setSenha1}
                        senha2={senha2}
                        setSenha2={setSenha2}
                        setFoto={setFoto}
                        SendRequest={SendRequest}
                    />
                )}
            </div>
        </S.Container>
    );
}
