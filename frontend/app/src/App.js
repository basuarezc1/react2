import styled from "styled-components";
import cas from './img/cas.jpeg'

function App() {
  return (
    <AppStyled cas={cas} className="App">
      <main>
        
      </main>
    </AppStyled>
  );

}

const AppStyled = styled.div`
  height: 100vh;
  background-image:url(${props => props.cas});
  position: relative;

`;

export default App;
