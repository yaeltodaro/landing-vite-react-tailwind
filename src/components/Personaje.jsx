import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../funciones/Rickandmorty";
import Header from "./Header";

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);

  const params = useParams();
  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje);
  }, []);
  return (
    <>
      <Header></Header>
      {personaje != null ? (
        <div className="p-8 flex flex-col items-center">
          <h2 className="font-black text-2xl">
            Personaje con el id {params.id}
          </h2>
          <p>Nombre: {personaje.name}</p>
          <img className="rounded-full w-[200px]" src={personaje.image} alt="" />

          <a
            className="text-gray-900 font-bold bg-orange-400 mt-4 p-2 px-4"
            href="/landing-vite-react-tailwind/#/rick"
          >
            Atrás
          </a>
        </div>
      ) : (
        "no hay personaje"
      )}
    </>
  );
};

export default Personaje;
