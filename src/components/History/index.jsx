import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as S from './styled';

export default function History() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to('#texto', {
            scrollTrigger: {
                trigger: '#foto',
                start: 'top center',
                end: 'center center',
            },
            marginTop: 50,
            duration: 1,
            ease: 'power3.out',
        });
    });

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
