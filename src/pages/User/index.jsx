import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { get } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import * as S from './styled';

export default function User() {
    const id = useSelector((state) => state.auth.user.id);
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [login, setLogin] = useState();
    const [foto, setFoto] = useState();
    const [materia, setMateria] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            axios.get(`/prof/${id}`).then((res) => {
                console.log(res.data);
                setNome(res.data.nome);
                setSobrenome(res.data.sobrenome);
                setLogin(res.data.login);
                setMateria(res.data.prof_materia.nome);
                setFoto(res.data.prof_foto[0].url);
                setLoading(false);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleSubmit = async () => {
        try {
            await axios.put(`/prof/${id}`, {
                id,
                nome,
                sobrenome,
                login,
            });
            toast.success('Editado com sucesso');
            navigate('/dashboard');
        } catch (e) {
            toast.error('Erro ao editar aluno');
            const errors = get(e, 'response.data.errors', []);
            errors.map((error) => toast.error(error));
        }
    };

    return (
        <S.Container>
            {loading ? (
                ''
            ) : (
                <>
                    <S.Header>
                        <Link to="/painel">
                            <FaArrowAltCircleLeft size={30} />
                        </Link>
                        <img src="/images/logo.png" alt="" />
                    </S.Header>
                    <S.Card>
                        <div className="card">
                            <div className="grid-frame">
                                <span className="grid-border" />
                                <span className="square tl" />
                                <span className="square tr" />
                                <span className="square bl" />
                                <span className="square br" />
                                <div className="grid-image">
                                    <img src={foto} alt="" srcSet="" />
                                </div>
                            </div>
                        </div>
                    </S.Card>
                    <S.Inputs>
                        <div className="infos">
                            <label htmlFor="nome">
                                {' '}
                                Nome
                                <input
                                    type="text"
                                    value={nome}
                                    name="nome"
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </label>
                            <label htmlFor="sobrenome">
                                {' '}
                                Sobrenome
                                <input
                                    type="text"
                                    name="sobrenome"
                                    value={sobrenome}
                                    onChange={(e) =>
                                        setSobrenome(e.target.value)
                                    }
                                />
                            </label>
                            <label htmlFor="login">
                                {' '}
                                Login
                                <input
                                    type="text"
                                    name="name"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                            </label>
                            <label htmlFor="materia">
                                Leciona{' '}
                                <input
                                    type="text"
                                    name="materia"
                                    value={materia}
                                    onChange={(e) => setMateria(e.target.value)}
                                />
                            </label>
                        </div>
                    </S.Inputs>
                    <S.Btn className="">
                        <button type="button" onClick={handleSubmit}>
                            Enviar
                        </button>
                    </S.Btn>
                </>
            )}
        </S.Container>
    );
}
