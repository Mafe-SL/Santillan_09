import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Swal from 'sweetalert2'
function Logout() {
    
    const Logout=()=>{
        const Swal = require('sweetalert2')
        console.log("SESIÓN TERMINADA SANTILLAN"); 
        Swal.fire({
            icon: 'success',
            title: 'CIERRE DE SESIÓN CON ÉXITO SANTILLÁN',
            text: 'La sesión se inició correctamente',
            confirmButtonText: 'Okay c:'
          })        
        
      }  
    return (        
            <GoogleLogout
                clientId="577134996976-f5hipsbl1ebsmd1i2t17nrtdeskn3c51.apps.googleusercontent.com"
                buttonText={"CERRAR SESIÓN"}
                onLogoutSuccess={Logout}
            />    
    )  
}/* //FIN DE LA FUNCION */

export default Logout;