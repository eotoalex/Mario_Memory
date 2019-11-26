import React from 'react';
// This style contains the background image. 
let styles = {
    backgroundImage:`url(https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg`,
    height:"300px",
    width:"auto"
};

let font = {
    color:"white"
};

let spacing = {
    position:"relative",
    top:"90px"

};


class JumboTron extends React.Component {
    


    render(){
        return(
    <div className="jumbotron" style={styles}>
        <nav className="nav">
            <div className="text-container" style={spacing}>
                <h1 style={font}>Clicky Game</h1> 
                <h2 style={font}>Click on an image to earn points, but don't click on an image more than once!</h2> 
            </div>
        </nav>
    </div>
                 
        );
    };
};


    export default JumboTron;