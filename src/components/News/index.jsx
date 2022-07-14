import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Slider from '../Slider';

export default function News() {
    const [selectedNews, setSelectedNews] = useState('0');

    useEffect(() => {
        const I = document.querySelector('#I');
        const II = document.querySelector('#II');
        const III = document.querySelector('#III');
        const IV = document.querySelector('#IV');
        switch (selectedNews) {
            case '0':
                I.classList.add('active');
                [II, III, IV].forEach((el) => el.classList.remove('active'));
                break;
            case '1':
                II.classList.add('active');
                [I, III, IV].forEach((el) => el.classList.remove('active'));
                break;
            case '2':
                III.classList.add('active');
                [I, II, IV].forEach((el) => el.classList.remove('active'));
                break;
            case '3':
                IV.classList.add('active');
                [I, II, III].forEach((el) => el.classList.remove('active'));
                break;

            default:
                break;
        }
    }, [selectedNews]);
    return (
        <S.SecNews>
            <h1>Ultimas Noticias</h1>
            <div className="select-news">
                <span id="I">I</span>-<span id="II">II</span>-
                <span id="III">III</span>-<span id="IV">IV</span>
            </div>
            <Slider setNews={setSelectedNews} />
            <hr className="line" />
        </S.SecNews>
    );
}
