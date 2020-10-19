import React, { useState,useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/style/global.css';
import './style.css';
import {Link, useHistory} from 'react-router-dom';

interface HeaderProps{
    description: string;
    text?: string;
}

function parseJwt(token: any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

const Header:React.FC<HeaderProps> =(props) => {

    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Cargo, setCargo] = useState('');
    const [Senha, setSenha] = useState('');

    useEffect(() => {
        refresh();
      });

    const refresh = () => {
        fetch('http://localhost:5000/api/Usuarios/BuscarPorId', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setNome(dados.nome);
                setEmail(dados.email);
                setCargo(dados.permissao);
                setSenha(dados.senha);
            })
            .catch(err => console.error(err));
    }
    
    let history = useHistory();

    const logout = () => {
        localStorage.removeItem('token-filmes');
        history.push('/');
    }

    const menu = () => {
        const token = localStorage.getItem('token-filmes');
        
        if(token === undefined || token === null){
            return (
                <ul className="menu">
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/login" className="link">Login</Link></li>
                    <li><Link to="/cadastro" className="link">Cadastro</Link></li>
                </ul>
                )
            } else{
                let tokenDecode = parseJwt(localStorage.getItem('token-filmes'));
                if(tokenDecode.email === 'adm@adm.com'){
                return(
                    <ul className="menu">
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="/perfil" className="link">Perfil</Link></li>
                        <li><Link to="/filmes" className="link">Filmes</Link></li>
                        <li><Link to="/generos" className="link">Generos</Link></li>
                        <li><Link to="" onClick={event => { 
                            event.preventDefault();
                            logout();
                        }} >Logout</Link></li>
                    </ul>
                )
            } else{
                return(
                    <ul className="menu">
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="/perfil" className="link">Perfil</Link></li>
                        <li><Link to="/filmes" className="link">Lista Filmes</Link></li>
                        <li><Link to="" onClick={event => { 
                            event.preventDefault();
                            logout();
                        }} >Logout</Link></li>
                    </ul>
                )
            }
        }
    }
    
    return (
    <div className="principal">
        <div className="header">
            <div className="align">
                <nav>
                    <Link to="/"><img src={logo} alt="logo da coletanea"/></Link>
                    {menu()}
                </nav>
                <h3>{props.description}</h3>
                {props.children}
                {props.text && <p>{props.text}</p>}
            </div>
        </div>
    </div>
    );
}

    
export default Header;