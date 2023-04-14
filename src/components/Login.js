import React from 'react';
import GoogleLogin from 'react-google-login';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { FcGoogle } from "react-icons/fc";
// CommonJS
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";

function Login() {
  const key_login = "577134996976-f5hipsbl1ebsmd1i2t17nrtdeskn3c51.apps.googleusercontent.com";
  const[user, setUser] = useState([]);

  useEffect(() => {
    const start = () => {
      gapi.Auth2.init({
        clientId: key_login,
      });
    }
    gapi.load("client:auth2", start)
  }, [])





const Swal = require('sweetalert2')
    const logeado_exito = (res) => 
      {
         console.log("LOGUEADO CON ÉXITO SANTILLAN:",res.profileObj);
         setUser(res.profileObj);
          
Swal.fire({
  icon: 'success',
  title: 'LOGUEADO CON ÉXITO SANTILLÁN',
  text: 'La sesión se inició correctamente',
  footer: '<a href="https://utd.edu.mx/">UTD</a>'
})
      }
      
    const fallo_login = (res) => 
      {
          console.log("FALLO EN EL ACCESO:",res.profileObj);
           
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Algo salió mal',
  footer: '<a href="">Aceptar</a>'
})
      }
  
   return(
    <>
    <div className="center">

    <div class={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt=""/>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>           

      </div>

      <div className='btn'>
      <GoogleLogin
            clientId="577134996976-f5hipsbl1ebsmd1i2t17nrtdeskn3c51.apps.googleusercontent.com"
           icon={false}
           buttonText= <FcGoogle/>
            onSuccess={logeado_exito}
            onFailure={fallo_login}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />  
      </div>

      

    </div>
    
      </>   
   )   
}      
export default Login;