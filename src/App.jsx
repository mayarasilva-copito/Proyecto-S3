import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Portada from "./components/portada";
import Quienessomos from "./components/quienessomos";
import Footer from "./components/footer";
import Listademascotas from "./components/mascotas";

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
          <Route path="/Formulario" element={<></>} />
          <Route path="/Contactanos" element={<></>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
