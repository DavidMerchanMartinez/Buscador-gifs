import { useContext } from "react"
import { contexto } from "../../context"


const Contenedor = () => {

 const Contexto = useContext(contexto)   

return(
    <div className=" m-32 grid grid-cols-3 ">
          {Contexto.gifFiltrado.map(gif => (
          <img 
          key={gif.id}
          className=" w-full h-full border-2 border-white border-solid p-5"
          src={gif.images.original.url}
          alt={gif.title}
          />
      ))}

    </div>
)

}


export default Contenedor




