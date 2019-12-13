import React from 'react';
import {Container, Row} from 'reactstrap';
import './App.css';
import NavBar from "./components/Nav";
import JumboTron from "./components/JumboTron"
import Image from "./components/Images.js"
import yoshi from "./img/yoshi.jpeg";
import toad from "./img/toad.jpeg";
import luigi from "./img/luigi.jpeg";
import bowser from "./img/bowser.jpeg";
import goomba from "./img/goomba.jpeg";
import mario from "./img/mario.jpeg";
import warrio from "./img/warrio.jpeg";
import peach from "./img/peach.jpeg";
import pinky from "./img/pinky.jpeg";
import snake_mario from "./img/snake_mario.jpeg";
import ghost_face from "./img/ghost_face.png";
import waluigi from "./img/waluigi.jpeg";

// This array of objects holds all the mario characters I will be using for this clicky game.
const arrImages = [
        {
          id: 0,
          name: yoshi
        },
        {
          id: 1,
          name: toad
        },
        {
          id: 2,
          name: luigi
        },
        {
          id: 3,
          name: bowser
        },
        {
          id: 4,
          name: goomba
        },
        {
          id: 5,
          name: mario
        },
        {
          id: 6,
          name: warrio
        },
        {
          id: 7,
          name: peach
        },
        {
          id: 8,
          name: pinky
        },
        {
          id: 9,
          name: snake_mario
        },
        {
          id: 10,
          name: ghost_face
        },
        {
          id: 11,
          name: waluigi
        }
      ];

class App extends React.Component {
  state = {
    characters: arrImages,
    value:0,
    id:"",
    pickedChars : [],
    score:0,
    loser:0
  };

   // This array takes in an array and an id to check to see if the user clicked on a given character already.
   isInArr  = (arr, id, points) => {
    let tempArr = [];
    
    if (arr.length < 1){
      arr.push(id);
    } else {  
        arr.filter ((char) => {      
          if(id === char){
          console.log(char," is the same as ", id);
            points = arr.length;
            let diff = 12 - arr.length;
            tempArr = [];
            arr = [];
            alert(`Memory Limit: ${points} choices.\n
            You lose. You had ${diff} choices left to win.
            Try again. You might get all 12 next time!`
            );
            window.location.reload();
            } else if (arr.length === 11) {
                window.location.reload();
                alert("YOU WIN! You got all 12 characters.");
              } else {
                  console.log("You got a point.");
                  tempArr.push(id);
                }
        });
        if(tempArr.length > 0){
          arr.push(tempArr[0]);
        }
      };
  };

  handleClick = (id) => {
    let score = this.state.score;
    let charId = id;
    let pickedChars = this.state.pickedChars;
    
    // pickedChars.push(charId)
    this.isInArr(pickedChars, charId, score);
    this.setState({ 
        characters:createArr(arrImages),
        value: this.state.value + 1 ,
        id:this.state.data,
        score:this.state.score + 1
    });
      console.log("Picked chars set in the state ",pickedChars);
      console.log( "Score",this.state.score);
  };
  
  renderAllCharacters = () => {      
    // Loop and return
    return this.state.characters.map((data) => {
      return (
        <div>
         <Container>
          <Image 
            url={data.name} 
            alt="Super Mario Character" 
            id={data.id} 
            handleClick={this.handleClick}
          />  
          </Container>            
        </div>
      );
    });
  };
  render() {
      return (
        <div>
            <NavBar
              score={this.state.score}
            />
            <JumboTron/>
            <Row>    
              {this.renderAllCharacters()}
            </Row> 
        </div> 
      );
    };
  };

//This function takes in arrImages to create a temporary array.
function createArr(arr) {
  let tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    tempArr.push(arr[i])
  };
  return randomImgGen(arr, tempArr)
};

// This function will take the temporary array and randomly pick out image urls from the tempArr, then remove that url from tempArr, to then choose another image url until there are no more image url's in tempArr.
function randomImgGen(array, tempArray) {
  var tempArr = [];
  for (var i = 0; i <= array.length - 1; i++) {
    let j = Math.floor((Math.random() * tempArray.length));
    var x = tempArray.splice(j, 1)
    tempArr.push(x[0])
  };
  return (tempArr);
};

export default App;
