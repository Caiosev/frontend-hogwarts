import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaMagic } from 'react-icons/fa';
import { gsap } from 'gsap';
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

    useEffect(() => {
        gsap.timeline()
            .to('.divWand', { scale: 1, duration: 2 })
            .to('.divWand', { y: 100, duration: 2 })
            .to('.divWand', { scale: 0, duration: 2 })
            .to('.divWand', { y: -100, duration: 2 })
            .repeat(-1, 0);
    }, []);

    return (
        <S.Container>
            <S.BgParticles>
                <Particles />
            </S.BgParticles>
            <S.HomeBg />
            <S.HomeText>
                <h1>Hogwarts</h1>
                <h2>Escola de Magia e Bruxaria</h2>
                <div className="divWand">
                    <FaMagic />
                </div>
            </S.HomeText>
        </S.Container>
    );
}
