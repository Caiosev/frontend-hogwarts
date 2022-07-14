import React from 'react';
import * as S from './styled';

export default function Varinha() {
    return (
        <S.Container>
            <div className="item">
                <img src="/images/magic-wand(1).png" alt="" />
            </div>
            <p>
                Normalmente, a magia com varinha é usada com um encantamento,
                mas feitiços não-verbais são também possíveis para bruxos com
                mais experiência e são melhores para duelos, porque o oponente
                não terá jeito de saber qual será o feitiço lançado e pode não
                ser capaz de proteger-se adequadamente a tempo. Varinhas são
                chamadas de quase conscientes porque elas são o mais próximo de
                animado do que um ser inanimado pode chegar. Provavelmente é
                porque elas são cheias de magia.
            </p>
            <p>Lojas: Loja de Lixo, Loja de Varinhas Olivaras</p>
        </S.Container>
    );
}
