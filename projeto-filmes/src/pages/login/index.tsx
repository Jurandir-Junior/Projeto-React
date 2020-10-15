import React, {useState} from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import {useHistory} from 'react-router-dom';
import '../../assets/style/global.css';
	
function Login(){

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = () =>{
        const login ={
            email:email,
            senha:senha
        }
    

        fetch('http://localhost:5000/api/conta/login',{
                method: 'POST',
                body: JSON.stringify(login),
                headers: {
                    'content-type':'application/json'
                }
        })  
        .then(response => response.json())
        .then(dados => {

            if(dados.token !== undefined){
                localStorage.setItem('token-filmes', dados.token)
                history.push('/');
            } else {
                alert('Senha ou email inválidos')
            }
            
        })
        .catch(erro => console.error(erro))
    }

    return (
        <div>
            <Header description="Faça o login e acesse a coletânea"/>
            <div className="centro">
                <div className="login">
                    <h2>Login</h2>
                    <form onSubmit={event => {
                        event.preventDefault();
                        login();
                        }}>
                        <Input name="email" label="E-mail" onChange={e=>setEmail(e.target.value)}/>
                        <Input type="password" name="senha" label="Senha" onChange={e=>setSenha(e.target.value)}/>
                        <Button value="Enviar"/>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
    
export default Login;