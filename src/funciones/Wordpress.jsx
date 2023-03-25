import React, { useState, useEffect } from 'react';
import axios from 'axios';


// usando Axios

export function Post({slug}) {
  // Aquí puedes definir tu estado y otras variables
  const [post, setPost] = useState(null); // Inicializamos el estado con null

  useEffect(() => {
    // Esta función se ejecutará cada vez que cambie el slug
    axios.get(`https://piezaweb.com/lab1/wp-json/wp/v2/posts?slug=${slug}`)
      .then(res => {
        // Aquí puedes procesar los datos que recibes
        console.log(res.data);
        setPost(res.data[0]); // Guardamos el primer elemento del array en el estado
      })
      .catch(err => {
        // Aquí puedes manejar los errores que ocurran
        console.error(err);
      });
  }, [slug]); // El array contiene el slug como dependencia

  return (
    // Aquí podemos devolver el JSX de nuestro componente
    <div>
      {post ? ( // Si tenemos un post, lo mostramos
        <div>
           <h1 className='text-lg font-black'>{post.title.rendered}</h1> {/* // Esto muestra el título del post */}
          <div className='text-lg text-gray-400' dangerouslySetInnerHTML={{__html: post.content.rendered}} /> {/*// Esto muestra el contenido del post como HTML*/}
        </div>
      ) : ( // Si no tenemos un post, mostramos un mensaje de carga
        <p className='bg-lime-300 text-black font-bold'>Cargando...</p>
      )}
    </div>
  );
}


// Usando fetch


// function Post({slug}) {
//   // Aquí puedes definir tu estado y otras variables
//   const [post, setPost] = useState(null); // Inicializamos el estado con null

//   useEffect(() => {
//     // Esta función se ejecutará cada vez que cambie el slug
//     fetch(`https://piezaweb.com/lab1/wp-json/wp/v2/posts?slug=${slug}`)
//       .then(res => res.json())
//       .then(data => {
//         // Aquí puedes procesar los datos que recibes
//         console.log(data);
//         setPost(data[0]); // Guardamos el primer elemento del array en el estado
//       })
//       .catch(err => {
//         // Aquí puedes manejar los errores que ocurran
//         console.error(err);
//       });
//   }, [slug]); // El array contiene el slug como dependencia

//   return (
//     // Aquí podemos devolver el JSX de nuestro componente
//     <div>
//       {post ? ( // Si tenemos un post, lo mostramos
//         <div className='border-gray-400 border-2 p-2 rounded-lg'>
//            <h1 className='text-lg font-black'>{post.title.rendered}</h1> {/* // Esto muestra el título del post */}
//           <div className='text-lg text-gray-400' dangerouslySetInnerHTML={{__html: post.content.rendered}} /> {/*// Esto muestra el contenido del post como HTML*/}
//         </div>
//       ) : ( // Si no tenemos un post, mostramos un mensaje de carga
//         <p className='bg-lime-300 text-black font-bol'>Cargando...</p>
//       )}
//     </div>
//   );
// }

export default Post; // Exportamos el componente para poder usarlo en otros archivos
