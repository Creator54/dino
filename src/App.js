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

  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      count: 1,
      cactus_array: [ "cactus1", "cactus2", "cactus3", "cactus4"],//4000
      dino_array: [ "dino0","dino1","dino0","dino1"],//100
    }
  }

  switchImage() {
    if (this.state.count < 3) {
      this.setState({
        count: this.state.count + 1
      });
    } else {
      this.setState({
        count: 1
      });
    }
    return this.count;
  }

  componentDidMount() {
    setInterval(this.switchImage, 100);
  }

  render() {
    return (
      <div>
        <Router>
          <div className="game">
            <div id="dino" className={this.state.class} >
              <SpriteSheet filename={img} data={Sprites} sprite={this.state.dino_array[this.state.count]} />
            </div>
            <div id="cactus" >
              <SpriteSheet filename={img} data={Sprites} sprite={this.state.cactus_array[this.state.count]} />
            </div>
            <button className="button" onClick={this.handleKeyPress}>Jump</button>
          </div>
        </Router>
      </div>
    )
  }
}
