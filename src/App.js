import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import img from './sprite.png'
import { SpriteSheet } from 'react-spritesheet'
import { Component } from 'react'
import Sprites from './Sprites';


export default class App extends Component {
  state={
    class:""
  }
  handleKeyPress=()=>{
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
              <SpriteSheet filename={img} data={Sprites} sprite="dino" />
            </div>
            <div id="cactus" >
              <SpriteSheet filename={img} data={Sprites} sprite="cactus1" />
            </div>
            <button className="button" onClick={this.handleKeyPress}>Jump</button>
          </div>
          <div class="wrapper">          </div>
        </Router>
      </div>
    )
  }
}

