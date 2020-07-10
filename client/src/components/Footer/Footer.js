import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer (){
    return (
        <div className = 'footer-wrapper'>
            <p>Copyright © 2020 Nimari.com / Design by NZ Soft</p>
            
            <ul>
              <li><Link to= '/'>НАЧАЛО</Link></li>
              <li><Link to = '/clothes'>ДРЕХИ</Link></li>
              <li><Link to = 'accesories'>АКСЕСОАРИ</Link></li>
              <li><Link to = 'www.google.com'>КИНКАЛЕРИЯ</Link></li>
              <li><Link to = '/contacts'>КОНТАКТИ</Link></li>
          </ul>
            
         
        </div>
    )
}

export default Footer;
