/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useNavigate, useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import * as S from './styled';

import axios from '../../services/axios';

export default function CadastroAluno() {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [sangue, setSangue] = useState('');
    const [varinha, setVarinha] = useState('');
    const [patrono, setPatrono] = useState('');
    const [house, setHouse] = useState('');
    const [sala, setSala] = useState('');
    const [color, setColor] = useState();
    const [preview, setPreview] = useState(undefined);
    const [imgLogo, setImgLogo] = useState('');
    const [foto, setFoto] = useState(undefined);
    const [provas, setProvas] = useState([]);
    const [ativo, setAtivo] = useState('p');
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;

        async function getData() {
            try {
                const { data } = await axios.get(`/alunos/${id}`);
                setNome(data.nome);
                setSobrenome(data.sobrenome);
                setIdade(data.idade);
                setSangue(data.sangue_status);
                setVarinha(data.varinha);
                setPatrono(data.patrono);
                setHouse(data.casa_id);
                setSala(data.sala_id);
                setLogin(data.login);
                setPreview(
                    data['aluno-foto'][data['aluno-foto'].length - 1].url
                );
                setFoto(data['aluno-foto'][0].url);
                console.log(data);
            } catch (error) {
                console.log('Erro ao buscar aluno');
            }
            try {
                axios.get(`/provas/${id}`).then((res) => {
                    setProvas(res.data);
                });
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    useEffect(() => {
        switch (house) {
            case 1:
                setColor('#B71B15');
                setImgLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/'
                );
                break;
            case 3:
                setColor('#DBB409');
                setImgLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/'
                );
                break;
            case 2:
                setColor('#10450E');
                setImgLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/'
                );
                break;
            case 4:
                setColor('#088EB3');
                setImgLogo(
                    'https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png/'
                );
                break;
            default:
                setColor('#242633');
                setImgLogo('/images/logo.png');
                break;
        }
    }, [house]);

    const handleSubmit = async (element) => {
        element.preventDefault();

        try {
            const data = await axios.put(`/alunos/${id}`, {
                nome,
                sobrenome,
                idade,
                sangue_status: sangue,
                varinha,
                patrono,
                casa_id: house,
                sala_id: sala,
                login,
                senha,
            });
            const idA = data.data.id;
            const formData = new FormData();
            formData.append('aluno_id', idA);
            formData.append('foto', foto);
            try {
                await axios.post('/fotosAlunos', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } catch (error) {
                toast.error('Erro ao cadastrar foto');
                console.log(error);
            }
            navigate('/painel');
        } catch (e) {
            toast.error('Erro ao editar aluno');
            const errors = get(e, 'response.data.errors', []);
            errors.map((error) => toast.error(error));
        }
    };

    const handleSelectFile = (e) => {
        setFoto(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    };
    return (
        <S.Container>
            <S.Header color={color}>
                <Link to="/painel">
                    <FaArrowAltCircleLeft size={30} />
                </Link>
                <img src={imgLogo} alt="" />
            </S.Header>
            <S.Section>
                <div className="mobile">
                    <S.Foto className="foto">
                        <div className="file-input">
                            <img src={preview} alt="" id="foto" />
                            <input
                                type="file"
                                name="file-input"
                                id="file-input"
                                className="file-input__input"
                                onChange={handleSelectFile}
                            />
                            <label
                                className="file-input__label"
                                htmlFor="file-input"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="upload"
                                    className="svg-inline--fa fa-upload fa-w-16"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                    />
                                </svg>
                                <span>Enviar Foto</span>
                            </label>
                        </div>
                    </S.Foto>
                    <hr />
                    <S.Abas ativo={ativo}>
                        <button
                            type="button"
                            id="p"
                            onClick={() => setAtivo('p')}
                        >
                            Provas
                        </button>
                        <button
                            type="button"
                            id="i"
                            onClick={() => setAtivo('i')}
                        >
                            Infos
                        </button>
                    </S.Abas>
                    <S.Infos className="infos" ativo={ativo}>
                        <form action="">
                            <div className="">
                                <label htmlFor="nome">
                                    Nome
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            setNome(e.target.value)
                                        }
                                        id="nome"
                                        name="Nome"
                                        value={nome}
                                    />
                                </label>
                                <label htmlFor="sobrenome">
                                    Sobrenome
                                    <input
                                        type="text"
                                        id="sobrenome"
                                        onChange={(e) =>
                                            setSobrenome(e.target.value)
                                        }
                                        name="Sobrenome"
                                        value={sobrenome}
                                    />
                                </label>
                            </div>
                            <div className="">
                                <label htmlFor="idade">
                                    Idade
                                    <input
                                        type="number"
                                        id="idade"
                                        onChange={(e) =>
                                            setIdade(Number(e.target.value))
                                        }
                                        name="Idade"
                                        value={idade}
                                    />
                                </label>
                                <label htmlFor="sangue">
                                    Sangue
                                    <select
                                        name="sangue"
                                        id="sangue"
                                        onChange={(e) =>
                                            setSangue(e.target.value)
                                        }
                                        value={sangue}
                                    >
                                        <option value="puro">Puro</option>
                                        <option value="Mestiço">Mestiço</option>
                                        <option value="Nascido Trouxa">
                                            Nascido Trouxa
                                        </option>
                                    </select>
                                </label>
                            </div>
                            <div className="">
                                <label htmlFor="Varinha">
                                    Varinha
                                    <input
                                        type="text"
                                        id="varinha"
                                        onChange={(e) =>
                                            setVarinha(e.target.value)
                                        }
                                        name="Varinha"
                                        value={varinha}
                                    />
                                </label>
                                <label htmlFor="Patrono">
                                    Patrono
                                    <input
                                        type="text"
                                        id="patrono"
                                        onChange={(e) =>
                                            setPatrono(e.target.value)
                                        }
                                        name="patrono"
                                        value={patrono}
                                    />
                                </label>
                            </div>
                            <div className="">
                                <label htmlFor="Login">
                                    Login
                                    <input
                                        type="text"
                                        id="login"
                                        onChange={(e) =>
                                            setLogin(e.target.value)
                                        }
                                        name="login"
                                        value={login}
                                    />
                                </label>
                                <label htmlFor="senha">
                                    Nova Senha
                                    <input
                                        type="text"
                                        id="senha"
                                        onChange={(e) =>
                                            setSenha(e.target.value)
                                        }
                                        name="senha"
                                        value={senha}
                                    />
                                </label>
                            </div>
                            <div className="">
                                <label htmlFor="casa">
                                    Casa
                                    <select
                                        id="casa"
                                        onChange={(e) =>
                                            setHouse(Number(e.target.value))
                                        }
                                        name="Casa"
                                        value={house}
                                    >
                                        <option value="0"> </option>
                                        <option value="1">Grifinoria</option>
                                        <option value="3">Lufa-Lufa</option>
                                        <option value="4">Corvinal</option>
                                        <option value="2">Sonserina</option>
                                    </select>
                                </label>
                                <label htmlFor="sala">
                                    Sala
                                    <select
                                        id="sala"
                                        onChange={(e) =>
                                            setSala(Number(e.target.value))
                                        }
                                        name="Sala"
                                        value={sala}
                                    >
                                        <option value="0"> </option>
                                        <option value="1">Primeiro ano</option>
                                        <option value="2">Segundo ano</option>
                                        <option value="3">Terceiro ano</option>
                                        <option value="4">Quarto ano</option>
                                        <option value="5">Quinto ano</option>
                                        <option value="6">Sexto ano</option>
                                        <option value="7">Setimo ano</option>
                                    </select>
                                </label>
                            </div>
                            <div className="btn">
                                <button type="submit" onClick={handleSubmit}>
                                    Atulizar
                                </button>
                            </div>
                        </form>
                    </S.Infos>
                    <S.Provas ativo={ativo}>
                        <div className="env">
                            <h1>Provas Enviadas</h1>
                            <div className="provas">
                                {provas.length === 0 ? (
                                    <p>Nenhuma prova Enviada</p>
                                ) : (
                                    provas.map((prova) => (
                                        <div
                                            className="prova"
                                            id="feita"
                                            key={prova.id}
                                        >
                                            {prova['prova-prof']['prof-materia']
                                                .nome === 'Aritmancia' && (
                                                <img
                                                    src="/images/materias/math.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome === 'Astronomia' && (
                                                <img
                                                    src="/images/materias/astronomy.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome ===
                                                'Trato das Criaturas Mágicas' && (
                                                <img
                                                    src="/images/materias/dragon.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome === 'Feitiços' && (
                                                <img
                                                    src="/images/materias/magic-wand.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome ===
                                                'Defesa Contra as Artes das Trevas' && (
                                                <img
                                                    src="/images/materias/shield.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome === 'Advinhação' && (
                                                <img
                                                    src="/images/materias/divination.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome === 'Vôo' && (
                                                <img
                                                    src="/images/materias/witch.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome === 'Herbologia' && (
                                                <img
                                                    src="/images/materias/sapling.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome ===
                                                'História da Magia' && (
                                                <img
                                                    src="/images/materias/history.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome === 'Estudos trouxas' && (
                                                <img
                                                    src="/images/materias/anatomy.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome === 'Poções' && (
                                                <img
                                                    src="/images/materias/serum.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome === 'Transfiguração' && (
                                                <img
                                                    src="/images/materias/cat.png"
                                                    alt=""
                                                />
                                            )}
                                            {prova['prova-prof']['prof-materia']
                                                .nome ===
                                                'Estudo de Runas Antigas' && (
                                                <img
                                                    src="/images/materias/runes.png"
                                                    alt=""
                                                />
                                            )}

                                            <h2>
                                                {
                                                    prova['prova-prof'][
                                                        'prof-materia'
                                                    ].nome
                                                }
                                            </h2>
                                            {prova.valor === 0 && (
                                                <h3 className="notaT">
                                                    Resultado: Trasgo
                                                </h3>
                                            )}
                                            {prova.valor === 1 && (
                                                <h3 className="notaD">
                                                    Resultado: Deploravel
                                                </h3>
                                            )}
                                            {prova.valor === 2 && (
                                                <h3 className="notaP">
                                                    Resultado: Pessimo
                                                </h3>
                                            )}
                                            {prova.valor === 3 && (
                                                <h3 className="notaA">
                                                    Resultado: Aceitavel
                                                </h3>
                                            )}
                                            {prova.valor === 4 && (
                                                <h3 className="notaE">
                                                    Resultado: Excedeu
                                                    Expectativas
                                                </h3>
                                            )}
                                            {prova.valor === 5 && (
                                                <h3 className="notaO">
                                                    Resultado: Otimo
                                                </h3>
                                            )}
                                            <h3>{prova.valor}/5</h3>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </S.Provas>
                </div>
                <div className="desk">
                    <S.SideBar ativo={ativo} className="sidebar">
                        <h1>{nome}</h1>
                        <h2>{sobrenome}</h2>
                        <div className="buttons">
                            <button
                                type="button"
                                id="p"
                                onClick={() => setAtivo('p')}
                            >
                                Provas
                            </button>

                            <button
                                type="button"
                                id="i"
                                onClick={() => setAtivo('i')}
                            >
                                Infos
                            </button>
                        </div>
                    </S.SideBar>
                    <S.Content>
                        <S.Foto className="foto">
                            <div className="file-input">
                                <img src={preview} alt="" id="foto" />
                                <input
                                    type="file"
                                    name="file-input"
                                    id="file-input"
                                    className="file-input__input"
                                    onChange={handleSelectFile}
                                />
                                <label
                                    className="file-input__label"
                                    htmlFor="file-input"
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="upload"
                                        className="svg-inline--fa fa-upload fa-w-16"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                        />
                                    </svg>
                                    <span>Enviar Foto</span>
                                </label>
                            </div>
                        </S.Foto>

                        <S.Infos className="infos" ativo={ativo}>
                            <h1>Informações</h1>
                            <form action="">
                                <div className="">
                                    <label htmlFor="nome">
                                        Nome
                                        <input
                                            type="text"
                                            onChange={(e) =>
                                                setNome(e.target.value)
                                            }
                                            id="nome"
                                            name="Nome"
                                            value={nome}
                                        />
                                    </label>
                                    <label htmlFor="sobrenome">
                                        Sobrenome
                                        <input
                                            type="text"
                                            id="sobrenome"
                                            onChange={(e) =>
                                                setSobrenome(e.target.value)
                                            }
                                            name="Sobrenome"
                                            value={sobrenome}
                                        />
                                    </label>
                                </div>
                                <div className="">
                                    <label htmlFor="idade">
                                        Idade
                                        <input
                                            type="number"
                                            id="idade"
                                            onChange={(e) =>
                                                setIdade(Number(e.target.value))
                                            }
                                            name="Idade"
                                            value={idade}
                                        />
                                    </label>
                                    <label htmlFor="sangue">
                                        Sangue
                                        <select
                                            name="sangue"
                                            id="sangue"
                                            onChange={(e) =>
                                                setSangue(e.target.value)
                                            }
                                            value={sangue}
                                        >
                                            <option value="puro">Puro</option>
                                            <option value="Mestiço">
                                                Mestiço
                                            </option>
                                            <option value="Nascido Trouxa">
                                                Nascido Trouxa
                                            </option>
                                        </select>
                                    </label>
                                </div>
                                <div className="">
                                    <label htmlFor="Varinha">
                                        Varinha
                                        <input
                                            type="text"
                                            id="varinha"
                                            onChange={(e) =>
                                                setVarinha(e.target.value)
                                            }
                                            name="Varinha"
                                            value={varinha}
                                        />
                                    </label>
                                    <label htmlFor="Patrono">
                                        Patrono
                                        <input
                                            type="text"
                                            id="patrono"
                                            onChange={(e) =>
                                                setPatrono(e.target.value)
                                            }
                                            name="patrono"
                                            value={patrono}
                                        />
                                    </label>
                                </div>
                                <div className="">
                                    <label htmlFor="Login">
                                        Login
                                        <input
                                            type="text"
                                            id="login"
                                            onChange={(e) =>
                                                setLogin(e.target.value)
                                            }
                                            name="login"
                                            value={login}
                                        />
                                    </label>
                                    <label htmlFor="senha">
                                        Nova Senha
                                        <input
                                            type="text"
                                            id="senha"
                                            onChange={(e) =>
                                                setSenha(e.target.value)
                                            }
                                            name="senha"
                                            value={senha}
                                        />
                                    </label>
                                </div>
                                <div className="">
                                    <label htmlFor="casa">
                                        Casa
                                        <select
                                            id="casa"
                                            onChange={(e) =>
                                                setHouse(Number(e.target.value))
                                            }
                                            name="Casa"
                                            value={house}
                                        >
                                            <option value="0"> </option>
                                            <option value="1">
                                                Grifinoria
                                            </option>
                                            <option value="3">Lufa-Lufa</option>
                                            <option value="4">Corvinal</option>
                                            <option value="2">Sonserina</option>
                                        </select>
                                    </label>
                                    <label htmlFor="sala">
                                        Sala
                                        <select
                                            id="sala"
                                            onChange={(e) =>
                                                setSala(Number(e.target.value))
                                            }
                                            name="Sala"
                                            value={sala}
                                        >
                                            <option value="0"> </option>
                                            <option value="1">
                                                Primeiro ano
                                            </option>
                                            <option value="2">
                                                Segundo ano
                                            </option>
                                            <option value="3">
                                                Terceiro ano
                                            </option>
                                            <option value="4">
                                                Quarto ano
                                            </option>
                                            <option value="5">
                                                Quinto ano
                                            </option>
                                            <option value="6">Sexto ano</option>
                                            <option value="7">
                                                Setimo ano
                                            </option>
                                        </select>
                                    </label>
                                </div>
                                <div className="btn">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Atulizar
                                    </button>
                                </div>
                            </form>
                        </S.Infos>
                        <S.Provas className="provas" ativo={ativo}>
                            <div className="env">
                                <h1>Provas Enviadas</h1>
                                <div className="provas">
                                    {provas.length === 0 ? (
                                        <p>Nenhuma prova Enviada</p>
                                    ) : (
                                        provas.map((prova) => (
                                            <div
                                                className="prova"
                                                id="feita"
                                                key={prova.id}
                                            >
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Aritmancia' && (
                                                    <img
                                                        src="/images/materias/math.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Astronomia' && (
                                                    <img
                                                        src="/images/materias/astronomy.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome ===
                                                    'Trato das Criaturas Mágicas' && (
                                                    <img
                                                        src="/images/materias/dragon.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Feitiços' && (
                                                    <img
                                                        src="/images/materias/magic-wand.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome ===
                                                    'Defesa Contra as Artes das Trevas' && (
                                                    <img
                                                        src="/images/materias/shield.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Advinhação' && (
                                                    <img
                                                        src="/images/materias/divination.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Vôo' && (
                                                    <img
                                                        src="/images/materias/witch.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Herbologia' && (
                                                    <img
                                                        src="/images/materias/sapling.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome ===
                                                    'História da Magia' && (
                                                    <img
                                                        src="/images/materias/history.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome ===
                                                    'Estudos trouxas' && (
                                                    <img
                                                        src="/images/materias/anatomy.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Poções' && (
                                                    <img
                                                        src="/images/materias/serum.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome === 'Transfiguração' && (
                                                    <img
                                                        src="/images/materias/cat.png"
                                                        alt=""
                                                    />
                                                )}
                                                {prova['prova-prof'][
                                                    'prof-materia'
                                                ].nome ===
                                                    'Estudo de Runas Antigas' && (
                                                    <img
                                                        src="/images/materias/runes.png"
                                                        alt=""
                                                    />
                                                )}

                                                <h2>
                                                    {
                                                        prova['prova-prof'][
                                                            'prof-materia'
                                                        ].nome
                                                    }
                                                </h2>
                                                {prova.valor === 0 && (
                                                    <h3 className="notaT">
                                                        Resultado: Trasgo
                                                    </h3>
                                                )}
                                                {prova.valor === 1 && (
                                                    <h3 className="notaD">
                                                        Resultado: Deploravel
                                                    </h3>
                                                )}
                                                {prova.valor === 2 && (
                                                    <h3 className="notaP">
                                                        Resultado: Pessimo
                                                    </h3>
                                                )}
                                                {prova.valor === 3 && (
                                                    <h3 className="notaA">
                                                        Resultado: Aceitavel
                                                    </h3>
                                                )}
                                                {prova.valor === 4 && (
                                                    <h3 className="notaE">
                                                        Resultado: Excedeu
                                                        Expectativas
                                                    </h3>
                                                )}
                                                {prova.valor === 5 && (
                                                    <h3 className="notaO">
                                                        Resultado: Otimo
                                                    </h3>
                                                )}
                                                <h3>{prova.valor}/5</h3>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </S.Provas>
                    </S.Content>
                </div>
            </S.Section>
        </S.Container>
    );
}

CadastroAluno.propTypes = {
    match: PropTypes.shape({}),
}.isRequired;
