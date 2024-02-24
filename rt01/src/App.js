import logo from "./logo.svg";
import "./App.css";
const al = (e) => {
  e.preventDefault();
  console.log(e);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" onClick={al}>
          ok 이제 시작이야!!
        </a>
      </header>
    </div>
  );
}
export default App;
