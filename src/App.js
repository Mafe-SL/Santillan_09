import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./App.css";
import Carrousel from "./components/Carrousel";
import Mapa from "./components/Mapa";
import Home from "./components/Home";
import Curriculum from "./components/Curriculum";
import Menu from "./components/Menu";
import Mockups from "./components/Carrusel2";
import Logout from "./components/Cerrar";
import Entrar from "./components/Entrar";
import EncederLED from "./components/EncenderLED";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          
          <Route path={"/galeria"} element={<Carrousel />}>
            {}
          </Route>
          <Route path={"/mapa"} element={<Mapa/>}>
            
          </Route>
          <Route path="/curriculum" element={<Curriculum/>}></Route>
          <Route path={"/mockups"} element={<Mockups />}>
            {}
          </Route>
         
          <Route path={"/entrar"} element={<Entrar/>}>
            {}
          </Route>
          <Route path={"/cerrar"} element={<Logout/>}>
            {}
          </Route>
          
         
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
