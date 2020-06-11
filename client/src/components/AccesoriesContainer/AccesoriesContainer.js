import React,{Component} from 'react';
import './AccesoriesContainer.css';
import accHolder from '../../utils/accesoriesHolder.js';
import Accesoties from './Accesories/Accesories';

class AccesoriesContainer extends Component {
  render() {
    const items = accHolder.map((name) => 
     <Accesoties key = {name} name = {name}/>);
    return (
      <div className="accesories-wrapper" onMouseOver={this.props.closeNav}>
        {items}
      </div>
    );
  }
  }
  
  export default AccesoriesContainer;