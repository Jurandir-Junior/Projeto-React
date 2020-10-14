import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input/index';

function Perfil(){
    return(
        <div>
            <Header description=""/>
            <div className="centro">
                <div className="perfil">
                    <h2>Perfil</h2>
                    <Input name="email" label="E-mail"/>
                    <Input type="password" name="senha" label="Senha"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Perfil;