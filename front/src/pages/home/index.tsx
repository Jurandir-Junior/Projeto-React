import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import filmes from '../../assets/images/cinema.png';
import categoria from '../../assets/images/theater.png';
import '../../assets/style/global.css';
import './style.css';
	
function Home(){
    return (
        <div>
            <Header description="Conheça nossa coletânea">
                <p>Olá, tudo bem?</p>
            </Header>
            <div className="centro">
                <div className="home">
                    <h1>Monte sua coletânea de filmes...</h1>
                    <div>
                        <h3>Lorem ipsum dolor sit amet conse ctetur adipisscing elit, sed do eiusmod tempor</h3>
                        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                    </div>
                    <div className="content">
                        <div className="filmes">
                            <img src={filmes} alt="Ícone cinema"/>
                            <h3>Filmes</h3>
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="categoria">
                            <img src={categoria} alt="Ícone categorias"/>
                            <h3>Categoria</h3>
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
    
export default Home;