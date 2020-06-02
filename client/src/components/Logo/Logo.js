import React from 'react';
import './Logo.css';
import flower from '../../images/flower1.jpg';
import shevron from '../../images/logo-name1.png'

function Logo (){
    return (
        <div className = 'logo-wrapper'>
            <div className= 'left-part'>
                <img src = {flower}/>
            </div>
            <div className ='center-part'>
                <span className = 'first-part-logo'>Boutique</span>
                <h1>NIMARI</h1>
            </div>
            <div className ='right-part'>
                <img src = {shevron}/>
            </div>
        </div>
    )
}

export default Logo;
