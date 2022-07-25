/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function Materias() {
    return (
        <>
            <S.Header>
                <Link to="/provas">
                    <FaArrowAltCircleLeft size={30} />
                </Link>
                <img src="/images/logo.png" alt="" />
            </S.Header>
            <S.Container>
                <h1>Materias</h1>
                <h3>Estude a teoria para a prova</h3>
                <main>
                    <a
                        href="https://aula-aritmancia.weebly.com/capiacutetulo-i1.html#:~:text=1ª%20Lei%20Aritmântica%20-%20O%20nome,cada%20número%20têm%20seu%20significado."
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/mathBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Aritmancia</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://pt.wikipedia.org/wiki/Planeta"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/astronomyBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Astronomia</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://harrypotter.fandom.com/wiki/List_of_creatures"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/dragonBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Trato das Criaturas Magicas</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://harrypotter.fandom.com/wiki/Category:Charms"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/wandBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Feitiços</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://harrypotter.fandom.com/wiki/Defence_Against_the_Dark_Arts?so=search"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/shieldBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Defesa Contra as Artes das Trevas</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://harrypotter.fandom.com/pt-br/wiki/Categoria:Adivinhação"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/divinationBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Advinhação</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://harrypotter.fandom.com/wiki/Broomstick"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/witchBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Voo</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://harrypotter.fandom.com/wiki/Herbology"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/saplingBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Herbologia</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://harrypotter.fandom.com/wiki/History_of_Magic_Classroom"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/historyBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Historia da Magia</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://pt.wikipedia.org/wiki/Tecnologia"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/anatomyBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Estudo Trouxa</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://harrypotter.fandom.com/wiki/Potions_(class)"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/serumBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Poções</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://pt.wikipedia.org/wiki/Futhark_antigo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/runesBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Estudo de Runas Antigas</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://harrypotter.fandom.com/wiki/Transfiguration_(class)"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="spell-card">
                            <div className="spell-card__inner">
                                <div className="spell-card__name">
                                    <div className="images">
                                        <img
                                            src="/images/bookMateria.png"
                                            alt=""
                                        />
                                        <div className="icon">
                                            <img
                                                src="/images/materias/catBlack.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <h5>Transfiguração</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                </main>
            </S.Container>
        </>
    );
}
