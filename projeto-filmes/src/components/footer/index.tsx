import React from 'react';
import '../../assets/style/global.css';
import './style.css';
import logonegativo from '../../assets/images/logonegativo.png';
import filler from '../../assets/images/whitebar.png';
	
function Footer(){
    return (
    <div className="principal">
        <div className="footer">
            <img className="logoNegativo" src={logonegativo} alt="logo negativo"/>
            <img className="filler" src={filler} alt="barra de preenchimento"/>
            <div className="info">
                <p>Company Inc. 8901 Marmora Road, Glasgow, D04 89GR</p>
                <p>Call us now toll free: (800)2345-6789</p>
                <p>Customer support: support@demolink.org</p>
                <p>Skype: sample-username</p>
            </div>
        </div>
    </div>
    );
}
    
export default Footer;