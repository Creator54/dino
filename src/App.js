import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import img from './sprite.png'
import { SpriteSheet } from 'react-spritesheet'
import { Component } from 'react'
import Sprites from './Sprites';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.switchImage = this.switchImage.bind(this);
      this.state = {
        random_cactus: 1,
        cactus_array: [ "cactus1", "cactus2", "cactus3", "cactus4"],
      }
  }


  switchImage() {
    if (this.state.random_cactus < this.state.cactus_array.length - 1) {
      this.setState({
        random_cactus: this.state.random_cactus + 1
      });
    } else {
      this.setState({
        random_cactus: 0
      });
    }
    return this.random_cactus;
  }

  componentDidMount() {
    setInterval(this.switchImage, 4000);
  }

  render() {
    return (
      <div>
        <Router>
          <div className="game"   onKeyPress={this.handleKeyPress}>
            <div id="dino" className={this.state.class} >
              <SpriteSheet filename={img} data={Sprites} sprite="dino" />
            </div>
            <div id="cactus" >
              <SpriteSheet filename={img} data={Sprites} sprite={this.state.cactus_array[this.state.random_cactus]} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

