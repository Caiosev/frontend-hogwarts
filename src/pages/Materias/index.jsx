/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function Spells() {
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
                                    <div className="icon">
                                        <img
                                            src="/images/materias/serumBlack.png"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <h5>Herbologia</h5>
                            </div>
                        </div>
                    </div>
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                    <div className="spell-card">
                        <div className="spell-card__inner">
                            <div className="spell-card__name">
                                <div className="images">
                                    <img src="/images/bookMateria.png" alt="" />
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
                </main>
            </S.Container>
        </>
    );
}
