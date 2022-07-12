import React from 'react';
import * as S from './styled';

export default function History() {
    return (
        <S.SecHistory id="history">
            <div id="foto" />
            <div id="texto">
                <h3>
                    Hogwarts foi fundada por volta de 993 d.C. por dois bruxos,
                    Godric Grifinória e Salazar Sonserina, e duas bruxas, Helga
                    Lufa-Lufa e Rowena Ravenclaw.{'\n'} O castelo possui
                    terrenos extensos cobertos por gramas e arbustos com flores
                    e hortas, um lago, uma floresta densa, várias estufas e um
                    estádio de Quadribol. Há 142 lances de escada, que são
                    conhecidas por se moverem, no castelo, que foi construído em
                    enormes rochas sobre o lago.{' '}
                </h3>
            </div>
        </S.SecHistory>
    );
}
