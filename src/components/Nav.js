import React from "react";
import {Row} from 'reactstrap';
import App from '../App.js';
let styles = {
    height:"60px",
    backgroundColor:"black"
};

let font = {
    color:"white"
};

class NavBar extends React.Component {

    render() {
        return(
           
            <nav className="nav" style={styles}>
                
                <ul>
                <Row>
  <li className="nav-link active" style={font}>Clicky Game</li>
  <li className="nav-link" style={font}>Click an Image to begin!</li>
  <li className="nav-link" style={font}>Score:0 | Top Score: 0</li>
  </Row>
  </ul>
  
</nav>
        )

    }



}


export default NavBar;