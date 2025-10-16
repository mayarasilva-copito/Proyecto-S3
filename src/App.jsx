import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Portada from "./components/portada";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Portada />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
