import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Formulario from "./components/formulario";
import Portada from "./components/portada";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Portada />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
