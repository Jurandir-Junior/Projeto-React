import React, {useEffect, useState} from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import imgTheater from '../../assets/images/theater.png';
import imgRefresh from '../../assets/images/refresh.png';
import imgTrash from '../../assets/images/trash.png';
import Button from '../../components/button';
import Input from '../../components/input';
import './style.css';

function Generos(){

    const [genero,setGenero] = useState('');
    const [idGenero, setIdGenero] = useState(0);
    const [generos,setGeneros] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    const listar = () => {
        fetch('http://localhost:5000/api/Generos', {
            method: 'GET',
            headers:{
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
        .then(response => response.json())
        .then(dados =>{
            setGeneros(dados);
        })
        .catch(erro => console.error(erro))
    }

    const trash = (id:any) => {
        fetch('http://localhost:5000/api/Generos/' + id, {
            method: 'DELETE',
            headers:{
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
        .then(response => response.json())
        .then(dados => {
            listar()
        })
        .catch(erro => console.error(erro))
    }

    const refresh = (id:any) => {
        fetch('http://localhost:5000/api/Generos/' + id, {
            method: 'PUT',
            headers:{
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
        .then(response => response.json())
        .then(dados => {
            setIdGenero(dados.idGenero);
            setIdGenero(dados.nome);
        })
    }

    const salvar = () => {
        const form = {
            nome: genero
        };
        const method = (idGenero === 0 ? 'POST': 'PUT')
        const urlRequest = (idGenero === 0 ? 'http://localhost:5000/api/Generos': 'http://localhost:5000/api/Generos/ ' + idGenero)

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(form),
            headers:{
                'content-type':'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
        .then(() => {
            setIdGenero(0);
            setGenero('');
            listar()
        })
        .catch(erro => console.error(erro))
    }

    return(
        <div>
            <Header description="Cadastre os gêneros dos filmes"/>
            <div className="centro">
                <div className="generos">
                    <div className="title">
                        <h3>Generos</h3>
                        <img className="theater" src={imgTheater} alt=""/>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <td className="row">Id</td>
                                <td className="row">Gêneros</td>
                                <td className="rowImg">Ações</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                generos.map((item:any) => {
                                    return(
                                        <tr key={item.idGenero}>
                                            <td className="row">{item.idGenero}</td>
                                            <td className="row">{item.nome}</td>
                                            <td className="row">
                                                <img className="icon" src={imgRefresh} onClick={() => refresh(item.idGenero)} alt=""/>
                                                <img className="icon" src={imgTrash} onClick={() => trash(item.idGenero)} alt=""/>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <form onSubmit={event => {
                        event.preventDefault(); 
                        salvar();
                    }}>
                        <div className="form">
                            <Input className="generoInput" name="genero" label="Cadastrar Gênero" value={genero} onChange={e => setGenero(e.target.value)}/>
                            <Button value="Salvar"/>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Generos;