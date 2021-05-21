import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import img from './sprite.png'
import { Sprite } from 'react-spritesheet'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Dino">
          <Sprite filename={ img } width={1200} height={115} />
        </div>
        <header className="App-header">
        </header>
      </div>
    </Router>
  );
}

export default App;
