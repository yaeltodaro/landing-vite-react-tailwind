import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Iniciorick from "./components/Iniciorick";
import Personaje from "./components/Personaje";
import Home from "./components/Home";

function App() {
  return (
    <div>
  
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/rick" element={<Iniciorick></Iniciorick>}></Route>
            <Route
              path="/personaje/:id"
              element={<Personaje></Personaje>}
            ></Route>
          </Routes>
        </HashRouter>

    </div>
  );
}

export default App;
