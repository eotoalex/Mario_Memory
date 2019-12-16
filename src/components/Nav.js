import React from "react";
import {Row} from 'reactstrap';

let styles = {
    height:"60px",
    backgroundColor:"black"
};

let font = {
    color:"white",
    fontFamily: 'Lilita One, cursive',
    fontSize: '24px'
};

let fontScore = {
     position:'relative',
     right:'-10%',
     color:"white",
     fontFamily: 'Lilita One, cursive',
     fontSize: '24px'
}

class NavBar extends React.Component {
    render() {
        return(
            <nav className="nav" style={styles}>            
                <ul>
                <Row>
                    <li className="nav-link" style={font}>A game of clicks of and giggles.</li>
                    <li className="nav-link" style={fontScore}>Score: {this.props.score}</li>
                </Row>
                </ul>
            </nav>
        );
    };
};
export default NavBar;