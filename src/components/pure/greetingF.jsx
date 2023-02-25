import React, {useState} from 'react'
import PropTypes from 'prop-types'


const Greetingf = (props) => {

  const [age, setage] = useState(10);

  const birthday = () =>{
    setage(age + 1)
  }

  return (
    <div>  
    <h1>Hola, {props.name} desde componente funcional</h1>
    <h2>Tu edad es: {age}</h2>
      <div>
       <button onClick={birthday}>Cumplir anios</button>
      </div>    
    </div>
    
  )
}

Greetingf.propTypes = {
 name: PropTypes.string
}

export default Greetingf
