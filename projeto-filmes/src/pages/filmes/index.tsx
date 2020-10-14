import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

function Filmes(){
    return(
        <div>
            <Header description=""/>
            <div className="centro">
                <div className="filmes">
                    <h2>Filmes</h2>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Filmes;