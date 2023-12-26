import { useContext } from "react"
import { contexto } from "../../context"

const Busqueda = () => {

const Contexto = useContext(contexto)

console.log(Contexto.texto)

return(
    <input className="rounded-lg bg-white text-black px-3 mt-5 w-[60%] h-[7vh] self-center text-center border-2 border-solid border-white font-serif font-bold
                     placeholder:text-black  placeholder:text-center" placeholder=" Buscar Gif"
        
            onChange={(event)=>{
                return(
                    Contexto.setTexto(event.target.value)    
                )        
            }}>

                        
    </input>
)

}

export default Busqueda