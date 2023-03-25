import React, { useEffect, useState } from "react";
import { todosPersonajes } from "../funciones/Rickandmorty";

const Iniciorick = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);
  return (
    <>
      <h1 className="text-2xl text-center font-black p-8">Los personajes de Rick and Morty</h1>
      <p className="text-center text-gray-800 pb-10">Datos cargados a tarvés de la API</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-content-around gap-8 w-full py-4 px-8">
        {personajes != null
          ? personajes.map((personajes) => (
              <div className="hover:bg-violet-200" key={personajes.id}>
                <a
                  className="font-bold"
                  href={`/landing-vite-react-tailwind/personaje/${personajes.id}`}
                >
                  {personajes.name}
                  <img className="rounded-full w-1/2" src={personajes.image} alt="" />
                </a>
              </div>
            ))
          : "no hay personaje"}
      </div>
    </>
  );
};

export default Iniciorick;
