import React from 'react';
import Particles from '../../components/Particles';
import * as S from './styled';

export default function Home() {
    return (
        <S.Container>
            <S.Bg>
                <Particles />
            </S.Bg>
        </S.Container>
    );
}
