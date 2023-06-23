import logo from './logo.svg';
import './App.css';
import LifecycleComp from './components/classBasedComponents/LifecycleComp';
import FormHandle from './components/functionBasedComponents/useStatehook/Formhandle';


//import Counter from './components/functionBasedComponents/useStatehook/Counter';

function App() {
  return (
    <div className="App">
        {/* <LifecycleComp /> */}
        <FormHandle />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
