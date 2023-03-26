import React, { useEffect, useState } from "react";
import { todosPersonajes } from "../funciones/Rickandmorty";
import Header from "./Header";

const Iniciorick = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);
  return (
    <>
      <Header></Header>
      <h1 className="text-2xl text-center font-black p-8">
        Los personajes de Rick and Morty
      </h1>
      <p className="text-center text-gray-800 pb-10">
        Datos cargados a tarvés de la API
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-content-center gap-6 w-full py-4 px-8">
        {personajes != null
          ? personajes.map((personajes) => (
              <div
                className="bg-slate-200 rounded-xl p-4 m-3 hover:bg-green-300 flex flex-col items-center"
                key={personajes.id}
              >
                <a
                  className="font-bold text-center"
                  href={`/landing-vite-react-tailwind/#/personaje/${personajes.id}`}
                >
                  {personajes.name}
                  <img
                    className="rounded-full w-[200px] mt-5 mb-5"
                    src={personajes.image}
                    alt=""
                  />
                </a>

                <p className="text-sm">Especie: {personajes.species}</p>
                <p className="text-sm">Location: {personajes.location.name}</p>
                <a
                  className="text-white bg-green-600 mt-10 p-2 px-4 text-center rounded-md"
                  href={`/landing-vite-react-tailwind/#/personaje/${personajes.id}`}
                >
                  Ver más ...
                </a>
              </div>
            ))
          : "no hay personaje"}
      </div>
    </>
  );
};

export default Iniciorick;
