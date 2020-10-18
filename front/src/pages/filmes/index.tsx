import React, { useEffect, useState } from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Button from '../../components/button/index';
import Input from '../../components/input/index';

import imgRefresh from '../../assets/images/refresh.png';
import imgTrash from '../../assets/images/trash.png';
import imgCinema from '../../assets/images/cinema.png';

import '../../assets/style/global.css';
import './style.css';

function parseJwt(token: any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

function Filmes() {

    const [filme, setFilme] = useState('');
    const [idFilme, setIdFilme] = useState(0);
    const [filmes, setFilmes] = useState([]);

    const [genero, setGenero] = useState('');
    const [idGenero, setIdGenero] = useState(0);
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        listarFilmes();
        listarGeneros();
    }, []);

    const listarFilmes = () => {
        fetch('http://localhost:5000/api/Filmes', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setFilmes(dados);
            })
            .catch(erro => console.error(erro))
    }

    const listarGeneros = () => {
        fetch('http://localhost:5000/api/Generos', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setGeneros(dados);
            })
            .catch(erro => console.error(erro))
    }

    const trash = (id: any) => {
        fetch('http://localhost:5000/api/Filmes/' + id, {
            method: 'DELETE',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                listarFilmes()
            })
            .catch(erro => console.error(erro))
    }

    const refresh = (id: any) => {
        fetch('http://localhost:5000/api/Filmes/' + id, {
            method: 'PUT',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setIdFilme(dados.idFilme);
                setIdFilme(dados.nome);
            })
    }

    const salvar = () => {
        const form = {
            nome: filme
        };
        const method = (idFilme === 0 ? 'POST' : 'PUT')
        const urlRequest = (idFilme === 0 ? 'http://localhost:5000/api/Filmes' : 'http://localhost:5000/api/Filmes/ ' + idFilme)

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(() => {
                setIdFilme(0);
                setFilme('');
                listarFilmes()
            })
            .catch(erro => console.error(erro))
    }

    let tokenDecode = parseJwt(localStorage.getItem('token-filmes'));

    const menu = () => {
        if (tokenDecode.email === 'adm@adm.com') {
            return (
                <table>
                    <thead>
                        <tr>
                            <td className="rowFilmes">Id</td>
                            <td className="rowFilme">Filmes</td>
                            <td className="rowFilmes">Gênero</td>
                            <td className="rowImg">Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filmes.map((item: any) => {
                                return (
                                    <tr key={item.idFilme}>
                                        <td className="rowFilmes">{item.idFilme}</td>
                                        <td className="rowTitulo">{item.titulo}</td>
                                        <td className="rowFilmes">{item.genero.nome}</td>
                                        <td className="rowFilmes">
                                            <img className="iconFilmes" src={imgRefresh} onClick={() => refresh(item.idFilme)} alt="" />
                                            <img className="iconFilmes" src={imgTrash} onClick={() => trash(item.idFilme)} alt="" />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )
        }
        else {
            return (
                <table>
                    <thead>
                        <tr>
                            <td className="rowFilme">Filmes</td>
                            <td className="rowFilmes">Gênero</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filmes.map((item: any) => {
                                return (
                                    <tr key={item.idFilme}>
                                        <td className="rowTitulo">{item.titulo}</td>
                                        <td className="rowFilmes">{item.genero.nome}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )

        }
    }

    const menuCadastro = () => {
        if (tokenDecode.email === 'adm@adm.com') {
            return (
                <form onSubmit={event => {
                    event.preventDefault();
                    salvar();
                }}>
                    <div className="formF">
                        <Input className="filmeInput" name="filme" label="Cadastrar Filme" value={filme} onChange={e => setFilme(e.target.value)} />
                        <select className="selectGenero" onClick={() => listarGeneros()} name="genero" onChange={e => setGenero(e.target.value)} value={filme}>
                            <option value="0">Gênero</option>
                            {
                                generos.map((item: any) => {
                                    return <option value={item.idGenero}>{item.nome}</option>
                                })
                            }
                        </select>
                        <div className="btnSalvar">
                            <Button value="Salvar" />
                        </div>
                    </div>
                </form>
            )

        }
        else {
            return (
                <div >
                    <p>Busque seu Filme</p>
                    <input onChange={CRIARFUNÇAO} placeholder="digite aqui.."></input>
                </div>

            )
        }
    }

    return (
        <div>
            <Header description="Cadastre os filmes de sua preferência" />
            <div className="centro">
                <div className="filmes">
                    <div className="title">
                        <h3>Filmes</h3>
                        <img className="cinema" src={imgCinema} alt="" />
                    </div>
                    {menu()}
                    {menuCadastro()}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Filmes;