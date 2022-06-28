import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import axios from '../../services/axios';

export default function CadastroAluno() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');
    const [sangue, setSangue] = useState('');
    const [varinha, setVarinha] = useState('');
    const [patrono, setPatrono] = useState('');
    const [house, setHouse] = useState('');
    const [sala, setSala] = useState('');
    const [color, setColor] = useState();
    const [preview, setPreview] = useState(undefined);
    const [imgLogo, setImgLogo] = useState('');
    const [foto, setFoto] = useState(undefined);
    // const [aluno, setAluno] = useState({});
    const navigate = useNavigate();
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
            const { data } = await axios.post('/alunos', {
                nome,
                sobrenome,
                idade,
                sangue_status: sangue,
                varinha,
                patrono,
                casa_id: house,
                sala_id: sala,
            });
            const { id } = data;
            const formData = new FormData();
            formData.append('aluno_id', id);
            formData.append('foto', foto);
            try {
                await axios.post('/fotosAlunos', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } catch (error) {
                toast.error('Erro ao cadastrar foto');
                console.log('erro na foto');
            }
            console.log(data);
            toast.success('Cadastrado com sucesso');
            navigate('/dashboard');
        } catch (e) {
            toast.error('Erro ao cadastrar aluno');
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
                <img src={imgLogo} alt="" />
            </S.Header>
            <S.Section>
                <S.Foto className="foto">
                    <img src={preview} alt="" />
                    <input
                        type="file"
                        name=""
                        onChange={handleSelectFile}
                        id=""
                    />
                </S.Foto>
                <hr />
                <S.Infos className="infos">
                    <form action="">
                        <div className="">
                            <label htmlFor="nome">
                                Nome
                                <input
                                    type="text"
                                    onChange={(e) => setNome(e.target.value)}
                                    id="nome"
                                    name="Nome"
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
                                />
                            </label>
                            <label htmlFor="sangue">
                                Sangue
                                <input
                                    type="text"
                                    id="sangue"
                                    onChange={(e) => setSangue(e.target.value)}
                                    name="Sangue"
                                />
                            </label>
                        </div>
                        <div className="">
                            <label htmlFor="Varinha">
                                Varinha
                                <input
                                    type="text"
                                    id="varinha"
                                    onChange={(e) => setVarinha(e.target.value)}
                                    name="Varinha"
                                />
                            </label>
                            <label htmlFor="Patrono">
                                Patrono
                                <input
                                    type="text"
                                    id="patrono"
                                    onChange={(e) => setPatrono(e.target.value)}
                                    name="patrono"
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
                        <button type="submit" onClick={handleSubmit}>
                            Enviar
                        </button>
                    </form>
                </S.Infos>
            </S.Section>
        </S.Container>
    );
}
