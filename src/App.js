import React, { useState } from "react";
import '../src/App.css'
import Logo from '../src/logo.svg'

function Button() {
  const [text, setText] = useState("AMARELO");
  const [backgroundColor, setBackgroundColor] = useState("yellow");
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);

    if ((counter % 10 === 0) & (counter > 1)) {
      setBackgroundColor("yellow");
      setText("AMARELO");
    }
  }

  function Clicar() {
    setText("VERDE");
    setBackgroundColor("green");
  }

  return (
    <div id="componente">
      <img id="logotipo" src={Logo} alt="Logo React"/>
      <h1>Clique no botão abaixo:</h1>
      <button style={{ backgroundColor }} onClick={Clicar}>
        <strong>{ text }</strong>
      </button>
      <button id="contador" onClick={increment}>Contador de Cliques</button><br/>
      <p>{ counter }</p>
    </div>
  );
}

export default Button;
