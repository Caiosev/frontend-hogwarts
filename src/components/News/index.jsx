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
    );
}
