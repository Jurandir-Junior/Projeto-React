import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import '../../assets/style/global.css';

function Cadastro(){
    return(
        <div>
            <Header description="Faça o cadastro para o acesso"/>
            <div className="centro">
                <div className="cadastro">
                    <h2>Cadastro</h2>
                    <Input name="nome" label="Nome"/>
                    <Input name="email" label="E-mail"/>
                    <Input type="password" name="senha" label="Senha"/>
                    <Input name="permissao" label="Permissão"/>
                    <Button value="Cadastrar"/>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
}

export default Cadastro;