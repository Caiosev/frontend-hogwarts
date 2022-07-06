import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as S from './styled';

export default function Staff() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to('.alvo', {
            scrollTrigger: {
                trigger: '.alvo',
                start: 'top center',
                end: 'bottom center',
            },
            opacity: 1,
            duration: 1,
        });

        gsap.to('.minerva', {
            scrollTrigger: {
                trigger: '.minerva',
                start: 'top center',
                end: 'bottom center',
            },
            opacity: 1,
            duration: 1,
        });
        gsap.to('.pomona', {
            scrollTrigger: {
                trigger: '.pomona',
                start: 'top center',
                end: 'bottom center',
            },
            opacity: 1,
            duration: 1,
        });
        gsap.to('.filius', {
            scrollTrigger: {
                trigger: '.filius',
                start: 'top center',
                end: 'bottom center',
            },
            opacity: 1,
            duration: 1,
        });
        gsap.to('.snape', {
            scrollTrigger: {
                trigger: '.snape',
                start: 'top center',
                end: 'bottom center',
            },
            opacity: 1,
            duration: 1,
        });
    });

    return (
        <S.Sec id="staff">
            <h1>Staff</h1>

            <div className="heads">
                <div className="card minerva">
                    <div className="grid-frame">
                        <span className="grid-border" />
                        <span className="square tl" />
                        <span className="square tr" />
                        <span className="square bl" />
                        <span className="square br" />
                        <div className="grid-image">
                            <img
                                src="/images/minerva.jpg"
                                id="minerva"
                                alt=""
                                srcSet=""
                            />
                        </div>
                    </div>
                    <h2>Minerva McGonagall</h2>
                    <h3>Head Grifinoria</h3>
                </div>
                <div className="card pomona">
                    <div className="grid-frame">
                        <span className="grid-border" />
                        <span className="square tl" />
                        <span className="square tr" />
                        <span className="square bl" />
                        <span className="square br" />
                        <div className="grid-image">
                            <img
                                src="/images/pomona.png"
                                id="pomona"
                                alt=""
                                srcSet=""
                            />
                        </div>
                    </div>
                    <h2>Pomona Sprout</h2>
                    <h3>Head Lufa-Lufa</h3>
                </div>
                <div className="card-head alvo">
                    <div className="grid-frame">
                        <span className="grid-border" />
                        <span className="square tl" />
                        <span className="square tr" />
                        <span className="square bl" />
                        <span className="square br" />
                        <div className="grid-image-dumbledore">
                            <img
                                src="/images/dumbledore.jpg"
                                alt=""
                                id="dumbledorePhoto"
                                srcSet=""
                            />
                        </div>
                    </div>
                    <h2>Alvo Dumbledore</h2>
                    <h3>Headmaster</h3>
                </div>
                <div className="card filius">
                    <div className="grid-frame">
                        <span className="grid-border" />
                        <span className="square tl" />
                        <span className="square tr" />
                        <span className="square bl" />
                        <span className="square br" />
                        <div className="grid-image">
                            <img
                                src="/images/filius.jpg"
                                id="filius"
                                alt=""
                                srcSet=""
                            />
                        </div>
                    </div>
                    <h2>Filius Flitwick</h2>
                    <h3>Head Corvinal</h3>
                </div>
                <div className="card snape">
                    <div className="grid-frame">
                        <span className="grid-border" />
                        <span className="square tl" />
                        <span className="square tr" />
                        <span className="square bl" />
                        <span className="square br" />
                        <div className="grid-image">
                            <img
                                src="/images/snape.jpg"
                                id="snape"
                                alt=""
                                srcSet=""
                            />
                        </div>
                    </div>
                    <h2>Severus Snape</h2>
                    <h3>Head Sonserina</h3>
                </div>
            </div>
        </S.Sec>
    );
}
