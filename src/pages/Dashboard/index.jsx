import React, { useState, useEffect } from 'react';
import {
    FaSignOutAlt,
    FaUserAlt,
    FaPlusCircle,
    FaEdit,
    FaUserMinus,
} from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
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
    const [addAluno, setaddAluno] = useState(true);
    const [editAluno, seteditAluno] = useState(false);
    const [points, setPoints] = useState(-1);
    const [allPoints, setallPoints] = useState([-1]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        switch (house) {
            case 'hogwarts':
                setLogo('/images/logo.png');
                setColor('#242633');
                setAlunos(todosalunos);
                setPoints(allPoints[0]);
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
                setPoints(allPoints[1]);
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
                setPoints(allPoints[4]);
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
                setPoints(allPoints[3]);
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
                setPoints(allPoints[2]);
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
        async function loadPoints() {
            const { data } = await axios.get('/casas');
            setallPoints([
                ...allPoints,
                data[0].nota_total,
                data[1].nota_total,
                data[2].nota_total,
                data[3].nota_total,
            ]);
        }
        loadAlunos();
        loadPoints();
    }, []);

    const handleLogout = () => {
        dispatch(actions.loginFailure());
        navigate('/');
    };

    const deleteData = async (e, id) => {
        try {
            await axios.delete(`/alunos/${id}`);
            e.parentElement.parentElement.remove();
        } catch (error) {
            console.log(error);
        }
    };

    const handleClickAluno = (e, id) => {
        if (deleteAluno) {
            deleteData(e, id);
        }
        if (editAluno) {
            console.log('hogwarts');
            navigate(`/aluno/${id}`);
        }
    };

    useEffect(() => {
        if (!editAluno && !deleteAluno) setaddAluno(true);
    }, [editAluno, deleteAluno]);

    return (
        <S.Container>
            <Sidebar setHouse={setHouse} />
            <S.Content>
                <S.Header house={house} color={color}>
                    <img src={logo} alt="" />
                    <div className="options">
                        <Link to="/aluno">
                            <FaPlusCircle
                                size={25}
                                onClick={() => {
                                    setaddAluno(true);
                                    seteditAluno(false);
                                    setDeleteAluno(false);
                                }}
                                opacity={addAluno ? 1 : 0.5}
                            />
                        </Link>

                        <FaEdit
                            size={25}
                            onClick={() => {
                                setaddAluno(false);
                                seteditAluno(!editAluno);
                                setDeleteAluno(false);
                            }}
                            opacity={editAluno ? 1 : 0.5}
                            color={editAluno ? 'blue' : '#fff'}
                        />
                        <FaUserMinus
                            size={28}
                            onClick={() => {
                                setaddAluno(false);
                                seteditAluno(false);
                                setDeleteAluno(!deleteAluno);
                            }}
                            opacity={deleteAluno ? 1 : 0.5}
                            color={deleteAluno ? 'red' : '#fff'}
                        />
                        <Link to="/user">
                            <FaUserAlt size={25} />
                        </Link>
                        <FaSignOutAlt size={25} onClick={handleLogout} />
                    </div>
                </S.Header>
                <S.Points points={points} className="points">
                    <h4>Pontos:{points}</h4>
                </S.Points>
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
