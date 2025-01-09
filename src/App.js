import logo from './logo.svg';
import './App.css';
import Nabvar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'


function App() { 
  return (
    <div className="App">

      <div className="bg-slate-900">
      <Nabvar/>
      </div>

      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/cart"  element={<Cart/>} />
      </Routes>

    </div>
  );
}

export default App;
