import React from 'react';
import * as S from './styled';

export default function Uniform() {
    return (
        <S.Container>
            <div className="item">
                <img src="/images/materiais/mathBlack.png" alt="" />
            </div>
            <p>
                O uniforme de Hogwarts é a roupa que os estudantes que
                frequentam a Escola de Magia e Bruxaria de Hogwarts são
                obrigados a usar; o uniforme deve ser usado durante todas as
                suas aulas, quando de suas refeições no Salão Principal e em seu
                tempo livre no Salão de Estudo, Sala Comum ou biblioteca.
            </p>
            <p>
                Lojas: Vassouras de Segunda Mão, Vassourax, Loja de Vestes de
                Segunda Mão, Madame Malkin - Roupas para Todas as Ocasiões,
                Talhejusto & Janota
            </p>
        </S.Container>
    );
}
