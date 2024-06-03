import React,{useState,useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import Board from './components/Board/Board';
import { useGlobalContext } from './context/GlobalContext';

function App() {                                  //Appstyled => Componente personalizado, pasa cas como propiedad del componente

//Esta línea utiliza el hook useState para crear una variable de estado llamada active con un valor inicial de 1. La función setActive se utiliza para actualizar el valor de active. Esta variable de estado probablemente controla el estado activo de algo en la interfaz  
  const [active, setActive] = useState(1)

//Permite acceder e interactuar con el estado global dentro de un componente funcional  
  const global =useGlobalContext()


  const displayData = () =>{
    switch(active){
      case 1:
        return <Board/>
      case 2:
        return <Board/>

      default:
        return <Board/>    
    }
  }
//Esta línea utiliza el hook useMemo para memorizar (caché) la creación del componente Orb. La función de flecha dentro de useMemo solo se ejecutará una vez cuando el componente se renderiza por primera vez, y el resultado se reutilizará para las renderizaciones posteriores siempre que la matriz de dependencias [] permanezca vacía. Esta es una técnica de optimización para evitar renderizaciones innecesarias del componente Orb.
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  
  return (
    <AppStyled bg={bg} className="App">  
      {orbMemo}           
      |<MainLayout>        
        <Navigation active={active} setActive={setActive} />  
        <main>
          {displayData()}
        </main>
      |</MainLayout>
    </AppStyled>
  );

}

// Toma el elemento div como elemento base para el estilo
//Función url toma valor de prop cas (la ruta de la imagen) e incorpora en la URL de la imagen de fondo. Esto permite que el componente reciba diferentes imágenes como props de otros componentes.
//position: relative;: Posiciona el elemento de manera relativa, permitiendo posicionar elementos hijos de forma absoluta o relativa a su posición.
//main{flex:1}=> ocupa todo el espacio restante disponible dentro de su contenedor padre
//overflow-x: hidden;: Oculta el scroll horizontal si el contenido del elemento main excede su ancho
//&::-webkit-scrollbar { ... }: Elimina la barra de scroll horizontal para navegadores basados en WebKit (como Chrome, Safari).

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
