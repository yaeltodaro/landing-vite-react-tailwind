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
        <div className="grid justify-items-center max-w-xs bg-slate-200 rounded-xl p-5 m-0 m-auto hover:bg-green-300 ">
          <h2 className="font-black text-2xl">
            Personaje con el id {params.id}
          </h2>
          <p>Nombre: {personaje.name}</p>
          <img className="rounded-full w-[200px] mt-10" src={personaje.image} alt="" />

          <a
            className="text-white bg-green-600 mt-10 p-2 px-4 text-center rounded-md"
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
