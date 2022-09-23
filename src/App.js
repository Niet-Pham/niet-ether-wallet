import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <ul>
            <li><img src={logo} className='App-logo' alt='logo'></img></li>
            <li>
              <img></img>
              <a>Home</a>
            </li>
            <li>
              Tools
              <ul className="sub-menu">
                <li><a>Interact with smart contract</a></li>
                <li><a>Decode input data</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
