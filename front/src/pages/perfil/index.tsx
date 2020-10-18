import React, {useEffect, useState} from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input/index';
import Button from '../../components/button';
import './style.css';
import '../../assets/style/global.css';

function Perfil(){

    return(
        <div>
            <Header description=""/>
            <div className="centro">
                <div className="perfil">
                    <h2>Perfil</h2>
                    <Input label="Nome" name="nome"/>
                    <Input label="E-Mail" name="email"/>
                    <select className="permissoes" name="permissao">
                    <option value="0">Permissões</option>
                    <option value="1">Administrador</option>
                    <option value="2">Usuário</option>
                    </select>
                    <Input label="Senha" name="senha" type="password"/>
                    <div className="buttons">
                        <Button value="Editar"/>
                        <Button value="Salvar"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Perfil;