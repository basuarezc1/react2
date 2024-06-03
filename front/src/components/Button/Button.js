import React from 'react'
import styled from 'styled-components'

//Define un componente funcional llamado Button que recibe varias propiedades (props) como argumentos:
//name: Texto que se muestra en el botón (obligatorio).
//onClick: Función que se ejecuta cuando se hace clic en el botón (obligatoria).
//bg: Color de fondo del botón (opcional, por defecto hereda el color del padre).
//bPad: Padding del botón (opcional, por defecto hereda el padding del padre).
//color: Color del texto del botón (opcional, por defecto hereda el color del padre).
//bRad: Radio del borde del botón (opcional, por defecto hereda el radio del borde del padre)
//{icon} {name}: Dentro del botón, se muestran el ícono (si se proporciona) y el texto del botón (contenido de la prop name).
function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

//outline: none;: Elimina el borde de enfoque predeterminado del botón.
//border: none;: Elimina el borde predeterminado del botón.
//display: flex;: Define que el contenido del botón se comporte como un contenedor flexible.
//align-items: center;: Alinea el contenido del botón verticalmente en el centro.
//cursor: pointer;: Cambia el cursor a "puntero" cuando se pasa sobre el botón.
//transition: all .4s ease-in-out;: Agrega una transición suave a todos los estilos del botón cuando se aplican o modifican (duración de 0.4 segundos con una curva de animación "ease-in-out")

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;


export default Button