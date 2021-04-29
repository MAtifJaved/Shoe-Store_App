import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import Invoice from './Invoice';

function App() {
  return (
    <div className="App">
      <h1> Welcome </h1>
      <NavBar/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>/>
        <Route path = "/home" element = {<Home/>}></Route>
        <Route path = "/about" element = {<About/>}></Route>
        <Route path = "/invoice" element = {<Invoice/>}></Route>
            <Route path ="/invoice/:Id" element = {<Invoice/>}></Route>
        <Route path = "*" element ={<Home/>}></Route>
      </Routes>
    </div>
  );  
}

export default App;
