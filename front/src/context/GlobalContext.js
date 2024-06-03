import React, { useContext, useState } from "react"
import axios from 'axios'                       //axios se utiliza para realizar peticiones HTTP a un servidor.


const BASE_URL = "http://localhost:5000/api/v1/"        // URL base de la API del servidor 

const GlobalContext = React.createContext()     //Este contexto permitirá a otros componentes de la aplicación acceder y modificar el estado global

//COMPONENTE
export const GlobalProvider = ({children}) => {

    // El estado se llama ganancia y es un array inicializado vacío, para almacenar información sobre las ganancias
    const [ganancia,setGanancia] = useState([])
    
    //se utilizará para almacenar cualquier mensaje de error que ocurra durante las peticiones HTTP.
    const [error, setError] = useState(null)

    //Define una función asíncrona  addPlay que recibe un argumento ganancia. Esta función se utiliza para agregar una nueva ganancia al servidor
    //se utiliza axios para realizar una petición POST a la URL(combina la URL base con el endpoint específico board). Se envía el objeto ganancia como parte de la petición. La función espera la respuesta de la petición de forma asíncrona usando await.
    //Se incluye un bloque catch para manejar cualquier error que pueda ocurrir durante la petición. Si hay un error, se extrae el mensaje del error de la respuesta (err.response.data.message) y se asigna al estado error utilizando setError
    const addPlay = async (ganancia) =>{
        const response = await axios.post(`${BASE_URL}board`, ganancia)
            .catch((err) => {
                setError(err.response.data.message)
            })
    }

    //La función devuelve un proveedor del contexto global usando GlobalContext.Provider. El valor del proveedor es un objeto que contiene la función addPlay para que otros componentes puedan accederla.
    //{children}: Los componentes hijos del GlobalProvider se renderizan dentro de las etiquetas del proveedor.
    return(
        <GlobalContext.Provider value={{
            addPlay
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

//Define un hook personalizado llamado useGlobalContext que se exporta para que pueda ser utilizado por otros componentes
//utiliza useContext para acceder al valor del contexto global (GlobalContext) y lo devuelve
export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}