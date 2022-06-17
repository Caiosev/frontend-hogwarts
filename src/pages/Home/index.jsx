import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaMagic } from 'react-icons/fa';
import { gsap } from 'gsap';
import Slider from '../../components/Slider';
import Particles from '../../components/Particles';
import * as S from './styled';
import * as scrollActions from '../../store/modules/scroll/actions';
import History from '../../components/History';

export default function Home() {
    const [offset, setOffset] = useState(0);
    const dispatch = useDispatch();
    const [selectedNews, setSelectedNews] = useState('0');

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
            .to('.divWand', { scale: 1, duration: 1 })
            .to('.divWand', { y: 100, duration: 1 })
            .to('.divWand', { scale: 0, duration: 1 })
            .to('.divWand', { y: -100 })
            .repeat(-1, 0);
    }, []);

    useEffect(() => {
        const I = document.querySelector('#I');
        const II = document.querySelector('#II');
        const III = document.querySelector('#III');
        const IV = document.querySelector('#IV');
        const V = document.querySelector('#V');
        const VI = document.querySelector('#VI');
        switch (selectedNews) {
            case '0':
                I.classList.add('active');
                [II, III, IV, V, VI].forEach((el) =>
                    el.classList.remove('active')
                );
                break;
            case '1':
                II.classList.add('active');
                [I, III, IV, V, VI].forEach((el) =>
                    el.classList.remove('active')
                );
                break;
            case '2':
                III.classList.add('active');
                [I, II, IV, V, VI].forEach((el) =>
                    el.classList.remove('active')
                );
                break;
            case '3':
                IV.classList.add('active');
                [I, II, III, V, VI].forEach((el) =>
                    el.classList.remove('active')
                );
                break;
            case '4':
                V.classList.add('active');
                [I, II, III, IV, VI].forEach((el) =>
                    el.classList.remove('active')
                );
                break;
            case '5':
                VI.classList.add('active');
                [I, II, III, IV, V].forEach((el) =>
                    el.classList.remove('active')
                );
                break;

            default:
                break;
        }
    }, [selectedNews]);

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
            <S.SecNews>
                <h1>Ultimas Noticias</h1>
                <div className="select-news">
                    <span id="I">I</span>-<span id="II">II</span>-
                    <span id="III">III</span>-<span id="IV">IV</span>-
                    <span id="V">V</span>-<span id="VI">VI</span>
                </div>
                <Slider setNews={setSelectedNews} />
                <hr className="line" />
            </S.SecNews>
            <History />
        </S.Container>
    );
}
