import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Location from './pages/location.js';
import League from './pages/league.js';
import Coaches from './pages/coaches.js';
import Contact from './pages/contact.js';
import Gloves from './pages/gloves.js';
import Balls from './pages/balls.js';
import Cleats from './pages/cleats.js';
import Register from './pages/register_league';
import Bar from './pages/components/bar';
import Home from './pages/home.js';

function App() {
  return (
  <BrowserRouter>
    <Bar />
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/location" element={<Location />}/>
        <Route path="/league" element={<League />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/coaches" element={<Coaches />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/gloves" element={<Gloves />}/>
        <Route path="/cleats" element={<Cleats />}/>
        <Route path="/balls" element={<Balls />}/>
      </Routes>
    </div>
   
  </BrowserRouter>
  );
}

export default App;
