import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/Navbar";
import { Paragraph } from "./components/Paragraph";
import {Myself} from "./components/Myself";
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Paragraph/>
      <input type="My Name Is Samuel" />
      <Myself name="Samuel" age={19} gender="male" />
      <Myself name="Micheal" age={19} gender="woman" />
      <Myself name="Tacy" age={19} gender="female" />
      <Counter />
    </div>
  )
}

export default App;

