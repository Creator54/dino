import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import img from './sprite.png'
import { SpriteSheet } from 'react-spritesheet'
import React, { Component } from 'react'

const spritesheet = {
  dino: {
    x: 1338,
    y: 0,
    width: 86,
    height: 100,
  },
  cactus1: {
    x:440,
    y: 0,
    width: 40,
    height: 100,
  },
  cactus2: {
    x: 480,
    y: 0,
    width: 35,
    height: 100,
  },
  cactus3: {
    x: 512,
    y: 0,
    width: 35,
    height: 100,
  },
  cactus4: {
    x: 580,
    y: 0,
    width: 35,
    height: 100,
  },
}


export default class App extends Component {
  state={
    class:""
  }
  handleKeyPress=(event)=>{
      this.setState({class:"jump"});
      // console.log(this.state.class);
      setTimeout(function(){
        this.setState({class:""});
      }.bind(this),200);
      
  }
  render() {
    return (
      <div>
    <Router>
      <div className="game">
        <div id="dino" className={this.state.class} >
          <SpriteSheet filename={img} data={spritesheet} sprite="dino" />
        </div>
        <div id="cactus" >
        <SpriteSheet filename={img} data={spritesheet} sprite="cactus1" />
        </div>
      </div>
      <div>
      <button className="button" onClick={this.handleKeyPress}>Jump</button>
      </div>
    </Router>
  );
      </div>
    )
  }
}

