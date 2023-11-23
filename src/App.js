import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Navbar from './Router/Navbar';
import AllRouts from './Router/AllRouts';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <AllRouts/>
    </div>
  );
}

export default App;
