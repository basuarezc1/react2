//define un hook personalizado de React llamado useWindowSize que te permite obtener el ancho y alto de la ventana del navegador en tus componentes.

//useEffect: Permite ejecutar efectos secundarios en un componente React, como suscribirse a eventos o realizar llamadas API.
//useState: Permite manejar el estado dentro de un componente funcional.

import { useEffect, useState } from "react"


//useState para crear un estado inicial llamado size que es un array con dos elementos: el ancho (innerWidth) y el alto (innerHeight) de la ventana del navegador en el momento de renderizado inicial
//setSize es una función para actualizar el estado size.

export const useWindowSize = () =>{
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

    //useEffect(() => {...}, []): Este hook ejecuta un efecto secundario (obtener el tamaño de la ventana y actualizar el estado) cada vez que se renderiza el componente que utiliza este hook.
    //El array de dependencias [] indica que el efecto solo se ejecuta una vez después del renderizado inicial (porque está vacío).

    //setSize([window.innerWidth, window.innerHeight]): Actualiza el estado size con el ancho y alto actuales de la ventana

    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }

        //window.addEventListener('resize', updateSize): Añade un escuchador para el evento resize de la ventana. Cuando el tamaño de la ventana cambie, se ejecuta la función updateSize para actualizar el estado size con las nuevas dimensiones.
        window.addEventListener('resize', updateSize)
        
        //return () => window.removeEventListener('resize', updateSize): Esta función de limpieza se ejecuta cuando el componente que utiliza este hook deja de renderizarse (por ejemplo, al cambiar de página). Elimina el escuchador del evento resize para evitar fugas de memoria.
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    //return { width: size[0], height: size[1] }: Devuelve un objeto con las propiedades width y height que contienen el ancho y el alto actual de la ventana, extraídos del estado size
    return {
        width: size[0],
        height: size[1]
    }
}