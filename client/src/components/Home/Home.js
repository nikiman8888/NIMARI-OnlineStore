import React from 'react';
import './Home.css';
import image from '../../images/store-home.png';
function Home (){
    return (
        <div className = 'home-wrapper'>
           <div className = 'image-wrapper'>
               <img src = {image}/>
           </div>
           <div className = 'image-wrapper'>
               <img src = {image}/>
           </div>
           
        </div>
    )
}

export default Home;
