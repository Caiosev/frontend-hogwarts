import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Particles from '../../components/Particles';
import * as S from './styled';
import * as scrollActions from '../../store/modules/scroll/actions';

export default function Home() {
    const [offset, setOffset] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (offset < 100) dispatch(scrollActions.desativaNav());
        if (offset >= 180) dispatch(scrollActions.ativaNav());
    }, [offset, dispatch]);

    return (
        <S.Container>
            <S.BgParticles>
                <Particles />
            </S.BgParticles>
            <S.HomeBg />
            <S.HomeText>
                <h1>Hogwarts</h1>
                <h2>Escola de Magia e Bruxaria</h2>
            </S.HomeText>
        </S.Container>
    );
}
