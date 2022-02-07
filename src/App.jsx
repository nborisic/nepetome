// import Logo from './logo.svg';
import './App.scss';
import { ReactComponent as Logo } from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          test1
        </a>
      </header>
    </div>
  );
}

export default App;
