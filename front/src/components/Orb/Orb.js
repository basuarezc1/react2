//rea un componente animado que muestra una esfera que se mueve de un lado a otro en la pantalla utilizando la información del ancho y alto de la ventana del navegador

import React from 'react'                                           //Crear componentes
import styled, {keyframes} from 'styled-components'                 //keyframes para animaciones
import { useWindowSize } from '../../utils/useWindowSize';          //Hook que devuelve ancho y alto de ventqana del navegador

function Orb(){                                                     //Componente principal

    const {width, height} = useWindowSize()

    console.log(width, height)

    //Define animación 
    //0%: En el inicio de la animación (0% del tiempo total), la esfera se transforma para no tener desplazamiento (transform: translate(0, 0))
    //50%: A la mitad de la animación (50% del tiempo total), la esfera se desplaza hacia la derecha por el ancho completo de la ventana (widthpx) y hacia la mitad del alto (height/2px).
    //100%: Al final de la animación (100% del tiempo total), la esfera vuelve a su posición inicial (transform: translate(0, 0))

    const moveOrb = keyframes`                                        
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `

    //Forma de orbe, widht y height => 70% de la ventana, border-radius: 50%;: Crea un borde redondeado para simular una esfera.
    //margin-left: -37vh; margin-top: -37vh;: Centra la esfera en la pantalla ajustando los márgenes.
    //background: linear-gradient(...): Define un degradado lineal del color rosa (#F56692) al naranja (#F2994A) como fondo del orbe
    //filter: blur(100px);: Aplica un efecto de desenfoque al orbe.
    //animation: ${moveOrb} 10s alternate linear infinite;: Anima el orbe usando la animación moveOrb con una duración de 10 segundos, en modo alterno (va y vuelve) y en bucle infinito
    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(100px);
        animation: ${moveOrb} 10s alternate linear infinite;

    `;

    return (
        <OrbStyled>  </OrbStyled>
    )
}

export default Orb