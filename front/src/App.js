import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from "./components/Orb/Orb";

function App() {                                  //Appstyled => Componente personalizado, pasa cas como propiedad del componente
  return (
    <AppStyled bg={bg} className="App">  
      <Orb />           
      |<MainLayout>
      |</MainLayout>
    </AppStyled>
  );

}

// Toma el elemento div como elemento base para el estilo
//Función url toma valor de prop cas (la ruta de la imagen) e incorpora en la URL de la imagen de fondo. Esto permite que el componente reciba diferentes imágenes como props de otros componentes.

const AppStyled = styled.div`                     
  height: 100vh;
  background-image:url(${props => props.bg});
  position: relative;

`;

export default App;
