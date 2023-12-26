import { createContext, useEffect, useState } from "react";

export const contexto = createContext()

export const ContextoProvider = ({children}) => {

    // api 

    const apiKey = 'ZvpyJoUjFBCq272aAnJL8Pzgjii8LFbX'; 
    const endpoint = 'https://api.giphy.com/v1/gifs/search';
    const searchTerm = 'all';
    const limit = 200;


        const [gifs, setGifs] = useState([]);
        const [gifFiltrado, setGifFiltrado] = useState([])

        useEffect(() => {
            const url = `${endpoint}?api_key=${apiKey}&q=${searchTerm}&limit=${limit}`;
        
            fetch(url)
            .then(response => response.json())
            .then(data => {
                setGifs(data.data);
                setGifFiltrado(data.data);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud a la API de Giphy', error);
            });
        }, []);

        

    // barra de busqueda

     const [texto, setTexto] = useState()
     
     useEffect(() =>{ 
        

       const imagenesFiltradas = gifs.filter((imagen) =>
           imagen.title.toLowerCase().includes(texto.toLowerCase())
        )
        setGifFiltrado(imagenesFiltradas);
     },[texto]);


    


    return(
        <contexto.Provider value={{
            gifs,
            setGifs,
            texto,
            setTexto,
            gifFiltrado,
            setGifFiltrado
        }}>
        {children}
        </contexto.Provider>
       
    
    )
}