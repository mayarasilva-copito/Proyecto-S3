import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Portada from "./components/portada";
import Quienessomos from "./components/quienessomos";
import Listademascotas from "./components/mascotas";
import Formulario from "./components/formulario";
import Tips from "./components/tips";
import Contactanos from "./components/contactanos";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/Portada"
            element={
              <>
                <div>
                  <Portada />
                </div>
              </>
            }
          />
          <Route
            path="/Quienessomos"
            element={
              <>
                <Quienessomos />
              </>
            }
          />
          <Route
            path="/Listademascotas"
            element={
              <>
                <Listademascotas />
              </>
            }
          />
          <Route
            path="/tips"
            element={
              <>
                <Tips/>
              </>
            }
          />
          <Route path="/Formulario" 
          element=
          {<>
          <Formulario/>
          </>} />
          <Route path="/Contactanos" 
          element=
          {<>
          <Contactanos/>
          </>} />
        </Routes>
        <br />
        <br />
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
