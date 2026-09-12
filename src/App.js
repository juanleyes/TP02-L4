import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
