import React, { useState, useEffect } from 'react';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import * as S from './styled';
import Sidebar from '../../components/Sidebar';
import axios from '../../services/axios';

export default function Dashboard() {
    const [house, setHouse] = useState('hogwarts');
    const [logo, setLogo] = useState();
    const [color, setColor] = useState('#242633');
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function loadAlunos() {
            const response = await axios.get('/alunos');
            setAlunos(response.data);
            console.log(alunos);
        }
        loadAlunos();
    }, []);

    useEffect(() => {
        switch (house) {
            case 'hogwarts':
                setLogo('/images/logo.png');
                setColor('#242633');
                break;

            case 'grifinoria':
                setLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/'
                );
                setColor('#B71B15');
                break;

            case 'corvinal':
                setLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png/'
                );
                setColor('#088EB3');
                break;

            case 'lufa-lufa':
                setLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/'
                );
                setColor('#DBB409');
                break;

            case 'sonserina':
                setLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/'
                );
                setColor('#10450E');
                break;
            default:
                break;
        }
    }, [house]);

    return (
        <S.Container>
            <Sidebar setHouse={setHouse} />
            <S.Content>
                <S.Header house={house} color={color}>
                    <img src={logo} alt="" />
                    <div className="">
                        <FaUserAlt size={25} style={{ marginRight: '20px' }} />
                        <FaSignOutAlt size={25} />
                    </div>
                </S.Header>
                <S.ListContainer>
                    {alunos.map((aluno) => {
                        return (
                            <div className="aluno" key={String(aluno.id)}>
                                <img src={aluno['aluno-foto'][0].url} alt="" />
                            </div>
                        );
                    })}
                </S.ListContainer>
            </S.Content>
        </S.Container>
    );
}
