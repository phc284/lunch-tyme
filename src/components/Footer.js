import React from 'react';

import LunchTabImg from '../Cuts/tab_lunch@2x.png'
import InternetTabImg from '../Cuts/tab_internets@2x.png'

const Footer = () => {
    return (
      <div className="footer">
	      <div className="footer-tab lunch">
	      	<img src={LunchTabImg} alt=""/>
	      	<span>lunch</span>
	      </div>
	      <div className="footer-tab internets">
	      	<img src={InternetTabImg} alt=""/>
	      	<span>internets</span>
	      </div>
      </div>
    );
}

export default Footer;
