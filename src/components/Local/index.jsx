import React from 'react';
import * as S from './styled';

export default function Local() {
    return (
        <S.Container id="local">
            <h1>Como Chegar?</h1>
            <div className="img-text">
                <div className="image" />
                <div className="text">
                    <h2>A Plataforma 9 3/4</h2>
                    <p>
                        A Plataforma Nove e Meia ou Plataforma Nove e Três
                        Quartos é uma plataforma da Estação Kings Cross em
                        Londres. Magicamente escondida atrás da barreira antre
                        as plataformas trouxas Nove e Dez, esta plataforma é
                        onde os alunos da Escola de Magia e Bruxaria de Hogwarts
                        abordam o Expresso de Hogwarts no dia 1º de setembro
                        para chegarem na escola. Para se chegar na Plataforma
                        Nove e Meia, deve se andar diretamente à barreira que
                        divide as plataformas 9 e 10. Há um guarda fora da
                        entrada que supervisiona as entradas e saídas da
                        plataforma.
                    </p>
                </div>
            </div>
        </S.Container>
    );
}
