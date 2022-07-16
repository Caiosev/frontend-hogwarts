/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export default function FilterMobile({ setHouse, house }) {
    const [isOpen, setIsOpen] = useState();
    const [display, setDisplay] = useState('/images/logo.png');
    useEffect(() => {
        switch (house) {
            case 'hogwarts':
                setDisplay('/images/logo.png');
                break;
            case 'Grifinória':
                setDisplay(
                    'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/'
                );
                break;
            case 'Corvinal':
                setDisplay(
                    'https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png/'
                );
                break;
            case 'Lufa-lufa':
                setDisplay(
                    'https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/'
                );
                break;
            case 'Sonserina':
                setDisplay(
                    'https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/'
                );
                break;

            default:
                break;
        }
    }, [house]);

    return (
        <S.Container isOpen={isOpen}>
            <div className="filter">
                <div className="options">
                    <img src={display} alt="" id="inDisplay" />
                    <img
                        src="/images/logo.png"
                        onClick={() => {
                            setHouse('hogwarts');
                            setIsOpen(false);
                        }}
                        onKeyUp={() => {
                            setHouse('hogwarts');
                            setIsOpen(false);
                        }}
                        alt=""
                        className="option"
                    />
                    <img
                        src="https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/"
                        alt=""
                        onClick={() => {
                            setHouse('Grifinória');
                            setIsOpen(false);
                        }}
                        onKeyUp={() => {
                            setHouse('Grifinória');
                            setIsOpen(false);
                        }}
                        className="option"
                    />
                    <img
                        src="https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png/"
                        alt=""
                        onClick={() => {
                            setHouse('Corvinal');
                            setIsOpen(false);
                        }}
                        onKeyUp={() => {
                            setHouse('Corvinal');
                            setIsOpen(false);
                        }}
                        className="option"
                    />
                    <img
                        src="https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/"
                        alt=""
                        onClick={() => {
                            setHouse('Lufa-lufa');
                            setIsOpen(false);
                        }}
                        onKeyUp={() => {
                            setHouse('Lufa-lufa');
                            setIsOpen(false);
                        }}
                        className="option"
                    />
                    <img
                        src="https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/"
                        alt=""
                        onClick={() => {
                            setHouse('Sonserina');
                            setIsOpen(false);
                        }}
                        onKeyUp={() => {
                            setHouse('Sonserina');
                            setIsOpen(false);
                        }}
                        className="option"
                    />
                </div>
                <img
                    src="/images/right-arrow.png"
                    onClick={() => setIsOpen(!isOpen)}
                    onKeyUp={() => setIsOpen(!isOpen)}
                    id="arrow"
                    alt=""
                />
            </div>

            <input type="text" id="search" />
        </S.Container>
    );
}

FilterMobile.propTypes = {
    setHouse: PropTypes.func,
    house: PropTypes.string,
}.isRequired;
