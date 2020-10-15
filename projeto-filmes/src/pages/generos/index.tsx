import React, {useEffect, useState} from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

function Generos(){

    const [genero,setGenero] = useState('');
    const [idGenero, setIdGenero] = useState(0);
    const [generos,setGeneros] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    return(
        <div>
            <Header description="Cadastre os gêneros dos filmes"/>
            <div className="centro">
                <div className="perfil">
                    <h2>Generos</h2>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Generos;