import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import img from './sprite.png'
import { SpriteSheet } from 'react-spritesheet'
import { Component } from 'react'
import Sprites from './Sprites';

let score=0;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      class:"",
      cactus_count: 1,
      dino_count:1,
      cactus_array: [ "cactus1", "cactus2", "cactus3", "cactus4"],
      dino_array: [ "dino0","dino1","dino0","dino1"],//100
    }
    this.switchCactus = this.switchCactus.bind(this);
    this.switchDino = this.switchDino.bind(this);
  }

  handleKeyPress=(e)=>{
    this.setState({class:"jump"});
    setTimeout(function(){
      this.setState({class:""});
    }.bind(this),200);
    score++; 
  }

  switchCactus() {
    if (this.state.cactus_count < 3) 
    {this.setState({ cactus_count: this.state.cactus_count + 1}); }
     else
      { this.setState({cactus_count: 0}); }
    return this.state.cactus_count;
  }
  switchDino() {
    if (this.state.dino_count < 3) 
    { this.setState({ dino_count: this.state.dino_count + 1});} 
    else 
    {this.setState({dino_count: 0}); }
    return this.state.dino_count;
  }

  componentDidMount() {
    setInterval(this.switchCactus, 4000);
    setInterval(this.switchDino, 200);
    document.addEventListener("keypress",this.handleKeyPress.bind(this))
  }

  render() {
    return (
      <div>
        <Router>
          <div className="game">
            <div id="dino" className={this.state.class} onKeyPress={this.handleKeyPress}>
              <SpriteSheet filename={img} data={Sprites} sprite={this.state.dino_array[this.state.dino_count]} />
            </div>
            <div id="cactus" >
              <SpriteSheet filename={img} data={Sprites} sprite={this.state.cactus_array[this.state.cactus_count]} />
            </div>
            <div className="scoreboard">
              <h1>Score: {score}</h1>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}
