import React from 'react';
import * as S from './styled';

export default function Materiais() {
    return (
        <S.Container>
            <h1>O que preciso levar?</h1>
            <div className="foto-texto">
                <div className="image" />
                <div className="texto">
                    <h2>
                        Tudo que você precisa pode ser encontrado no Beco
                        Diagonal
                    </h2>
                    <p>
                        Beco Diagonal é uma área bruxa de compras empedrada
                        localizado em Londres, Inglaterra atrás de um pub
                        chamado o Caldeirão Furado. Dentro do beco há uma
                        variedade de restaurantes, lojas e outras atrações.
                        Todos os itens da lista de Hogwarts podem ser comprados
                        no Beco Diagonal. O beco é completamente escondido do
                        mundo trouxa, sendo fora dos limites deste. É muito
                        grande em área e essencialmente o centro da Londres
                        bruxa.
                    </p>
                </div>
            </div>
            <div className="items">
                <div className="item">
                    <img src="/images/cauldron.png" alt="" />
                </div>
                <div className="item">
                    <img src="/images/uniform.png" alt="" />
                </div>
                <div className="item">
                    <img src="/images/wand.png" alt="" />
                </div>
                <div className="item">
                    <img src="/images/Logo_télescope.png" alt="" />
                </div>
            </div>
        </S.Container>
    );
}
