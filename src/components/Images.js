import React from "react";
// import yoshi from "../img/yoshi.jpeg";
// import toad from "../img/toad.jpeg";
// import luigi from "../img/luigi.jpeg";
// import bowser from "../img/bowser.jpeg";
// import goomba from "../img/goomba.jpeg";
// import mario from "../img/mario.jpeg";
// import warrio from "../img/warrio.jpeg";
// import peach from "../img/peach.jpeg";
// import pinky from "../img/pinky.jpeg";
// import snake_mario from "../img/snake_mario.jpeg";
// import ghost_face from "../img/ghost_face.png";
// import waluigi from "../img/waluigi.jpeg";




    // This array of images holds all the rick and morty images.
    const arrImages = ['yoshi', 'toad', 'luigi', 'bowser', 'goomba', 'mario', 'warrio', 'peach', 'pinky',
    'snake_mario', 'ghost_face', 'waluigi'];

    createArr (arrImages)

    function createArr (arr) {
      let tempArr = [];
      for(var i = 0; i < arr.length; i++){
        tempArr.push(arr[i])
      }
      randomImgGen(arr,tempArr)
    };

    randomImgGen (arrImages)

    // This function will generate the images after each click the user makes on any image.
    function randomImgGen (array,tempArray) {
    
      for(var i = 0; i <= array.length; i++){
     var tempArr = tempArray
      let j = Math.floor((Math.random()*tempArr.length));
      tempArray.splice(j,1)


      console.log(i, "-->", tempArr[j],"--> ", j);
      console.log(tempArr)
    }; 
   
    }
    

      const sizing = {
          height: "200px",
          width: "200px"
        }

      const ImageSquare = () => {
          return(<img style = {sizing} src={"#"} alt=" yoshi" value="1"/>)
      }

export default ImageSquare;