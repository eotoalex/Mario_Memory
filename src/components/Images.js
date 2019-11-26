import React from "react";
let sizing = {
  height: "200px",
  width: "200px",
  margin: "auto",
  display:"block"
}
// onClick={() => props.handleClick()

    const Image = (props) => {
      
        return(
      <div>
        <img 
        style={sizing} 
        src={props.url} 
        alt="Super mario character"
        id={props.id}
        onClick ={() => props.handleClick(props.id)}
          />
      </div>
        )
      
    }

export default Image;

