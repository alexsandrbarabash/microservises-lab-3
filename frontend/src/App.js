import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
	const apiRequestHandler = () => {
		axios
			.get('/api/testwithcurrentuser')
			.then(res => {
				console.log(res.data);
			});
	}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
			<button onClick={apiRequestHandler}>
				Make api request
			</button>
    </div>
  );
}

export default App;
