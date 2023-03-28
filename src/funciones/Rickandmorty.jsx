import axios from "axios";


// const todosPersonajes = async (state) => {
//   const peticion = await axios.get("https://rickandmortyapi.com/api/character");
//   state(peticion.data.results);

// };
const unicoPersonaje = async (id, state) => {
  const peticion = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  state(peticion.data);
};


const todosPersonajes = async (setPersonajes, page) => {
  const result = await axios(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  setPersonajes(result.data.results);
  return result.data.info;
};




export { unicoPersonaje, todosPersonajes };
