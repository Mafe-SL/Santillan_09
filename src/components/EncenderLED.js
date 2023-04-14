import react from 'react'

const EncederLED = () => {
    return(
       <div>
       <form action=''>
        <input type='radio' name='status' id='ledOn' value='ON' checked></input>
        <label for="ledOn">Encendido</label><br></br>
        <input type='radio' name='status' id='ledOff' value='OFF'></input>
        <label for="ledOff">Apagado</label><br></br>
        <button type="submit" value="Submit">Actualizar</button>
      
        </form> 
       </div> 
    )
}

export default EncederLED;