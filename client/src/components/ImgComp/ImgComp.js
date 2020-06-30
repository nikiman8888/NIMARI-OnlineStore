import React, { Component } from 'react'
import './ImgComp.css';

function ImgComp ({src}) {
   
    return (
        <div className= {`img-wrapper center`} >
              <img src={src} />
            </div>
    )

}
export default ImgComp;