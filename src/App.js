import './App.css';
import Dino from './components/Dino';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Dino />
          <p> Hello World from React with Nodejs </p>
        </header>
      </div>
    </Router>
  );
}

export default App;
