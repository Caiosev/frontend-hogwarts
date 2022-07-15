import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export const Boletim = React.forwardRef(({ provasFeitas }, ref) => {
    return (
        <div>
            <S.Container ref={ref}>
                {provasFeitas.map((nota, i) => (
                    <div className={`nota nota${i}`}>
                        {nota === 0 && <h1>T</h1>}
                        {nota === 1 && <h1>D</h1>}
                        {nota === 2 && <h1>P</h1>}
                        {nota === 3 && <h1>A</h1>}
                        {nota === 4 && <h1>E</h1>}
                        {nota === 5 && <h1>O</h1>}
                        {nota === 'NA' && <h1>NA</h1>}
                    </div>
                ))}
                <img src="/images/Boletim.png" alt="" />
            </S.Container>
        </div>
    );
});

Boletim.propTypes = {
    provasFeitas: PropTypes.array,
}.isRequired;
