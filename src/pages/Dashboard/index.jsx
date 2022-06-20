import React, { useState, useEffect } from 'react';
import {
    FaSignOutAlt,
    FaUserAlt,
    FaPlusCircle,
    FaEdit,
    FaUserMinus,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as S from './styled';
import Sidebar from '../../components/Sidebar';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

export default function Dashboard() {
    const [house, setHouse] = useState('hogwarts');
    const [logo, setLogo] = useState();
    const [color, setColor] = useState('#242633');
    const [loading, setLoading] = useState(true);
    const [alunos, setAlunos] = useState([]);
    const [todosalunos, setTodosAlunos] = useState([]);
    const [deleteAluno, setDeleteAluno] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        switch (house) {
            case 'hogwarts':
                setLogo('/images/logo.png');
                setColor('#242633');
                setAlunos(todosalunos);
                break;

            case 'Grifinória':
                setLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/'
                );
                setColor('#B71B15');
                setAlunos(
                    todosalunos.filter(
                        (aluno) => aluno['aluno-casa'].nome === 'Grifinória'
                    )
                );
                break;

            case 'Corvinal':
                setLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png/'
                );
                setColor('#088EB3');
                setAlunos(
                    todosalunos.filter(
                        (aluno) => aluno['aluno-casa'].nome === 'Corvinal'
                    )
                );
                break;

            case 'Lufa-lufa':
                setLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/'
                );
                setColor('#DBB409');
                setAlunos(
                    todosalunos.filter(
                        (aluno) => aluno['aluno-casa'].nome === 'Lufa-lufa'
                    )
                );
                break;

            case 'Sonserina':
                setLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/'
                );
                setColor('#10450E');
                setAlunos(
                    todosalunos.filter(
                        (aluno) => aluno['aluno-casa'].nome === 'Sonserina'
                    )
                );
                break;
            default:
                break;
        }
    }, [house, loading === false]);

    useEffect(() => {
        async function loadAlunos() {
            const response = await axios.get('/alunos');
            setTodosAlunos(response.data);
            setLoading(false);
        }
        loadAlunos();
    }, []);

    const handleLogout = () => {
        dispatch(actions.loginFailure());
        navigate('/');
    };
    const handleClickAluno = async (e, id) => {
        console.log();
        if (deleteAluno) {
            setLoading(true);
            try {
                await axios.delete(`/alunos/${id}`);
                e.parentElement.parentElement.remove();
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <S.Container>
            <Sidebar setHouse={setHouse} />
            <S.Content>
                <S.Header house={house} color={color}>
                    <img src={logo} alt="" />
                    <div className="options">
                        <FaPlusCircle size={25} />
                        <FaEdit size={25} />
                        <FaUserMinus
                            size={28}
                            onClick={() => setDeleteAluno(!deleteAluno)}
                            opacity={deleteAluno ? 1 : 0.5}
                            color={deleteAluno ? 'red' : '#fff'}
                        />
                        <FaUserAlt size={25} />
                        <FaSignOutAlt size={25} onClick={handleLogout} />
                    </div>
                </S.Header>
                <S.ListContainer>
                    {alunos.map((aluno) => {
                        return (
                            <div
                                className="aluno"
                                key={String(aluno.id)}
                                onClick={(e) =>
                                    handleClickAluno(e.target, aluno.id)
                                }
                                onKeyDown={() => handleClickAluno(aluno.id)}
                                role="button"
                                tabIndex="0"
                            >
                                <div className="grid-frame">
                                    <span className="grid-border" />
                                    <span className="square tl" />
                                    <span className="square tr" />
                                    <span className="square bl" />
                                    <span className="square br" />
                                    <img
                                        className="foto-aluno"
                                        src={
                                            aluno['aluno-foto'].length > 0
                                                ? aluno['aluno-foto'][0].url
                                                : 'images/user.png'
                                        }
                                        alt=""
                                    />
                                </div>
                                <h2 className="aluno-nome">
                                    {' '}
                                    {`${aluno.nome} ${aluno.sobrenome}`}
                                </h2>
                                <h3 className="aluno-info">{`${aluno['aluno-casa'].nome} ${aluno['aluno-sala'].nome}`}</h3>
                            </div>
                        );
                    })}
                </S.ListContainer>
            </S.Content>
        </S.Container>
    );
}

// {
// 	"nome":"Teste",
// 	"sobrenome":"Teste",
// 	"idade":10,
// 	"sangue_status":"Puro",
// 	"varinha":"TEste",
// 	"patrono":"teste",
// 	"sala_id":2,
// 	"casa_id":3
// }
