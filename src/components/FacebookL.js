import FacebookLogin from 'react-facebook-login';
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
function Login_face() {

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

  const responseFacebook = (respuesta_correcta) => {
    console.log(respuesta_correcta);
    setUser(respuesta_correcta);
    const Swal = require('sweetalert2')
    Swal.fire({
      icon: 'success',
      title: 'LOGUEADO CON ÉXITO SANTILLÁN',
      text: 'La sesión se inició correctamente',
      footer: '<a href="https://utd.edu.mx/">UTD</a>'
    })
  }
  return (
    <div>
      <div class={user ? "profile" : "hidden"}>
        <img src={user.picture} alt=""/>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>           

      </div>
    <div className='Login_face'>
      <center><br/><br/>
      <FacebookLogin
        appId="218077357396460"
        autoLoad={false}
        fields="name,email,picture"       
        callback={responseFacebook} />     
        </center>
      </div> 
      </div>   
      );  
}

export default Login_face;