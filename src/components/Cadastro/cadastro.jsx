import React, { useState } from 'react';
import * as S from './styled';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

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
    console.log(foto);
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
                    />
                )}
            </div>
        </S.Container>
    );
}
