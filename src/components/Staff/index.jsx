import React from 'react';
import * as S from './styled';

export default function index() {
    return (
        <S.Sec>
            <h1>Staff</h1>
            <div className="card-head">
                <div className="grid-frame">
                    <span className="grid-border" />
                    <span className="square tl" />
                    <span className="square tr" />
                    <span className="square bl" />
                    <span className="square br" />
                    <div className="grid-image-dumbledore">
                        <img src="/images/dumbledore.jpg" alt="" srcSet="" />
                    </div>
                </div>
                <h2>Alvo Dumbledore</h2>
                <h3>Headmaster</h3>
            </div>
            <div className="heads">
                <div className="card">
                    <div className="grid-frame">
                        <span className="grid-border" />
                        <span className="square tl" />
                        <span className="square tr" />
                        <span className="square bl" />
                        <span className="square br" />
                        <div className="grid-image">
                            <img src="/images/minerva.jpg" alt="" srcSet="" />
                        </div>
                    </div>
                    <h2>Minerva McGonagall</h2>
                    <h3>Head Grifinoria</h3>
                </div>
                <div className="card">
                    <div className="grid-frame">
                        <span className="grid-border" />
                        <span className="square tl" />
                        <span className="square tr" />
                        <span className="square bl" />
                        <span className="square br" />
                        <div className="grid-image">
                            <img src="/images/pomona.png" alt="" srcSet="" />
                        </div>
                    </div>
                    <h2>Pomona Sprout</h2>
                    <h3>Head Lufa-Lufa</h3>
                </div>
                <div className="card">
                    <div className="grid-frame">
                        <span className="grid-border" />
                        <span className="square tl" />
                        <span className="square tr" />
                        <span className="square bl" />
                        <span className="square br" />
                        <div className="grid-image">
                            <img src="/images/filius.jpg" alt="" srcSet="" />
                        </div>
                    </div>
                    <h2>Filius Flitwick</h2>
                    <h3>Head Corvinal</h3>
                </div>
                <div className="card">
                    <div className="grid-frame">
                        <span className="grid-border" />
                        <span className="square tl" />
                        <span className="square tr" />
                        <span className="square bl" />
                        <span className="square br" />
                        <div className="grid-image">
                            <img src="/images/snape.jpg" alt="" srcSet="" />
                        </div>
                    </div>
                    <h2>Severus Snape</h2>
                    <h3>Head Sonserina</h3>
                </div>
            </div>
        </S.Sec>
    );
}
