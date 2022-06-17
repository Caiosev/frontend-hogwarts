/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function SliderElement({ setNews }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    useEffect(() => {
        document.querySelector('.slick-prev').addEventListener('click', () => {
            setTimeout(() => {
                const currentNode = document.querySelector('.slick-current');
                const news = currentNode.dataset.index;
                setNews(news);
            }, 500);
        });

        document.querySelector('.slick-next').addEventListener('click', () => {
            setTimeout(() => {
                const currentNode = document.querySelector('.slick-current');
                const news = currentNode.dataset.index;
                setNews(news);
            }, 500);
        });
    });

    return (
        <S.Container>
            <Slider {...settings}>
                <div className="news1">
                    <div className="img-texto">
                        <div className="foto" />
                        <h3>
                            Neste mes hogwarts dá as boas vindas a novos
                            estudantes, todos ja foram postos em suas devidas
                            casas pelo chapeu seletor, este evento foi
                            acompanhado de uma grande ceia junto com uma breve
                            explicação de dumbledore sobre o funcionameto da
                            escola.
                        </h3>
                    </div>
                    <div className="titulo-texto">
                        <h2>Boas vindas a todos nossos novos estudantes!</h2>
                        <h3>
                            Entre os alunos notaveis temos Harry Potter, o
                            garoto que sobreviveu ao ataque de aquele que nao
                            deve ser nomeado, apos uma demorada reflexao do
                            chapeu seletor ele foi para grifinoria, temos tambem
                            Draco Malfoy, filho do temido Lucio Malfoy, Draco
                            foi colocado na sonserina pelo chapeu sem maiores
                            dificuldades.
                        </h3>
                    </div>
                </div>
                <div className="news2">
                    <h2>
                        Harry Potter torna-se o mais jovem apanhador do século
                    </h2>
                    <div className="texto-image">
                        <h3>
                            O Jovem com 10 anos se tornou o apanhador mais mais
                            jovem do seculo. Apos suas primeiras aulas de voo o
                            talento de Harry foi notado pelo time da Grifinoria,
                            sendo assim convocando-o para o time{' '}
                        </h3>
                        <div className="foto" />
                        <h3>
                            Harry James Potter nasceu em 31 de julho de 1980, de
                            Tiago e Lílian Potter, membros da primeira Ordem da
                            Fênix na época da Primeira Guerra Bruxa, famoso por
                            ser o unico a ter ressistido por um ataque de
                            Voldemort.
                        </h3>
                    </div>
                </div>
                <div className="news3">
                    <div className="img-titulo">
                        <div className="foto" />
                        <h2>3Boas vindas a todos nossos novos estudantes!</h2>
                    </div>
                    <div className="texto">
                        <h3>Lorem ipsum dolor, sit amet consectetur</h3>
                        <hr />
                        <h3>Lorem ipsum dolor, sit amet consectetur</h3>
                    </div>
                </div>
                <div className="news4">
                    <div className="img-titulo">
                        <div className="foto" />
                        <h2>4Boas vindas a todos nossos novos estudantes!</h2>
                    </div>
                    <div className="texto">
                        <h3>Lorem ipsum dolor, sit amet consectetur</h3>
                        <hr />
                        <h3>Lorem ipsum dolor, sit amet consectetur</h3>
                    </div>
                </div>
                <div className="news5">
                    <div className="img-titulo">
                        <div className="foto" />
                        <h2>5Boas vindas a todos nossos novos estudantes!</h2>
                    </div>
                    <div className="texto">
                        <h3>Lorem ipsum dolor, sit amet consectetur</h3>
                        <hr />
                        <h3>Lorem ipsum dolor, sit amet consectetur</h3>
                    </div>
                </div>
                <div className="news6">
                    <div className="img-titulo">
                        <div className="foto" />
                        <h2>6Boas vindas a todos nossos novos estudantes!</h2>
                    </div>
                    <div className="texto">
                        <h3>Lorem ipsum dolor, sit amet consectetur</h3>
                        <hr />
                        <h3>Lorem ipsum dolor, sit amet consectetur</h3>
                    </div>
                </div>
            </Slider>
        </S.Container>
    );
}

SliderElement.propTypes = {
    setNews: PropTypes.func.isRequired,
};
