import { BrowserRouter, Route, Routes } from "react-router-dom";
import Iniciorick from "./components/Iniciorick";
import Personaje from "./components/Personaje";
import Home from "./components/Home"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/rick" element={<Iniciorick></Iniciorick>}></Route>
          <Route path="/landing-vite-react-tailwind/personaje/:id" element={<Personaje></Personaje>}></Route>
          <Route path="/landing-vite-react-tailwind/" element={ <Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
