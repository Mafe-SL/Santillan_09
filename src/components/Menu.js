import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"

function Menu() {
  return (
    <div className="Contenedor">
            
              <Link className="btnAction" to="/">
                Inicio
              </Link>
             
              <Link className="btnAction" to="/galeria">
                Galeria
              </Link>
              <Link className="btnAction" to="/mapa">
                Mapa
              </Link>
              <Link className="btnAction" to="/Curriculum">
                Curriculum
              </Link>
              <Link className="btnAction" to="/mockups">
                Mockups
              </Link>
              
              <Link className="btnAction" to="/entrar">
                Entrar
              </Link>
              <Link className="btnAction" to="/cerrar">
                Cerrar Sesión
              </Link>
              
             
            </div>
  )
}

export default Menu