import { BrowserRouter, Route, Routes } from "react-router-dom";
import Iniciorick from "./components/Iniciorick";
import Personaje from "./components/Personaje";
import Home from "./components/Home"

function App() {
  return (
    <div>
      <BrowserRouter basename="/landing-vite-react-tailwind/">
        <Routes>
          <Route exact path="/" element={ <Home/>}></Route>
          <Route path="/rick" element={<Iniciorick></Iniciorick>}></Route>
          <Route path="/personaje/:id" element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
