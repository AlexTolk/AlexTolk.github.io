import logo from './satellite.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cool things are coming. Stay tuned!
        </p>
        <a
          className="App-link"
          href="https://github.com/alextolk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open GitHub
        </a>  
      </header>
    </div>
  );
}

export default App;
