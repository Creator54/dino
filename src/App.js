import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import img from './sprite.png'
import { SpriteSheet } from 'react-spritesheet'

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

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Dino">
          <SpriteSheet filename={img} data={spritesheet} sprite="dino" />
          <SpriteSheet filename={img} data={spritesheet} sprite="cactus1" />
          <SpriteSheet filename={img} data={spritesheet} sprite="cactus2" />
          <SpriteSheet filename={img} data={spritesheet} sprite="cactus3" />
          <SpriteSheet filename={img} data={spritesheet} sprite="cactus4" />
        </div>
        <header className="App-header">
        </header>
      </div>
    </Router>
  );
}

export default App;
