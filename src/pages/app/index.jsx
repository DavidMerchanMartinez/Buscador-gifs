import Busqueda from "../../components/Busqueda"
import Contenedor from "../../components/contenedorGif"
import { ContextoProvider } from "../../context"
import "./app.css"

function App() {
 
  return (
    <div className="bg-slate-900  h-full min-h-screen">
    <div className=" flex flex-col">
   
      <ContextoProvider>
          <Busqueda/>
          <Contenedor/>
      </ContextoProvider>

    </div>

    </div>
    
  )
}

export default App
