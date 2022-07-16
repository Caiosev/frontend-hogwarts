import React, { useState } from 'react';
import * as S from './styled';
import Step1 from './Steps/Step1';

export default function Cadastro() {
    const [step, setStep] = useState(1);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');
    const [sangue, setSangue] = useState('puro');

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
            </div>
        </S.Container>
    );
}
