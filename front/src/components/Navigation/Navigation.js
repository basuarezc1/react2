import React from 'react'
import avatar from '../../img/avatar.png'
import styled from 'styled-components'
import { menuItems } from '../../utils/menuItems'
import {signout} from '../../utils/Icons'

//Recbe 2 props, active: Representa el ID del elemento de navegación actualmente activo. setActive: Una función utilizada para actualizar el estado active
function Navigation({active,setActive}){

    return (
        <NavStyled> 
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Brayan</h2>
                    <p>Tu partida</p>
                </div>
            </div>
            <ul className="menu-items">         
                {menuItems.map((item) => {                                 //Recorre el objeto menuItems utilizando map
                    return <li
                        key={item.id}                                      //prop key es importante para que React actualice la lista de manera eficiente.
                        onClick={() => setActive(item.id)}                  //Establece el estado active en el ID del elemento seleccionado cuando se hace clic en el elemento de la lista.
                        className={active === item.id ? 'active': ''}       //Agrega la clase "active" al elemento de la lista si su ID coincide con el estado active actual
                        >
                        {item.icon}    
                        <span>{item.title}</span>                          
                        </li>                                               //Span: Es un contenedor en línea
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign out
                </li>
            </div>
        </NavStyled>
    )
}

//<ul>lista----<li>elemento de lista
//Padding: Agrega un relleno de 2rem en la parte superior e inferior y 1.5rem a los lados.
//width: Establece el ancho del componente de navegación en 374px
//height:  Define la altura del componente al 100% de su contenedor padre.
//backg: Establece un fondo semi-transparente con un color blanco (#f4f6f9) y una opacidad del 78%
//border: Añade un borde sólido de 3px de ancho en color blanco (#FFFFFF).
//back-fil:  Aplica un filtro de desenfoque de fondo con un valor de 4.5px, creando un efecto de profundidad
//border-ra:Establece las esquinas redondeadas del componente con un radio de 32px.
//display: Define el contenedor como un elemento flexible para organizar su contenido en filas o columnas.
//flex-dire:Establece la dirección del contenedor flexible en vertical (columna)
//justify:Distribuye los elementos hijos del contenedor flexible de manera uniforme, dejando espacios entre ellos en la parte superior e inferior.
//gap: Agrega un espacio de 2rem entre los elementos hijos del contenedor flexible
//align-items: center;: Alinea los elementos del contenedor flexible verticalmente en el centro.
//img
//border-radius: 50%;: Aplica un borde redondeado completo, creando una forma circular
//object-fit: cover;: Hace que la imagen cubra toda el área del elemento contenedor, manteniendo su proporción de aspecto.
//padding: .2rem;: Agrega un relleno de 0.2rem a la imagen, creando un pequeño espacio entre el borde y el contenido.
//box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);: Aplica una sombra sutil a la imagen para darle profundidad.
//p
//color: rgba(34, 34, 96, .6);: Define el color del texto del párrafo en un azul oscuro (#222260) con una opacidad del 60%, haciéndolo más tenue que el título
//menu-items
//flex: 1;: Ocupa todo el espacio restante disponible dentro del contenedor flexible padre.
//display: grid;: Define el elemento de la lista como un contenedor con un diseño de cuadrícula
//grid-template-columns: 40px auto;: Divide la cuadrícula en dos columnas, primera de 40 y otra restante
//font-weight: 500;: Aplica un peso de fuente seminegrita al texto del elemento
//cursor: pointer;: Cambia el cursor a una mano cuando se pasa sobre el elemento, indicando que es interactivo.
//transition: all .4s ease-in-out;: Agrega una transición suave de 0.4 segundos a todas las propiedades del elemento de la lista al interactuar con él (pasar el mouse por encima o hacer clic).
//position: relative;: Posiciona el elemento de la lista de forma relativa, permitiendo colocar elementos hijos sobre él de manera absoluta.
//i:iconos
//transition: all .4s ease-in-out;: Agrega una transición suave de 0.4 segundos a todas las propiedades del ícono al interactuar con él (pasar el mouse por encima o hacer clic).
//active
//!important: Se usa para forzar la aplicación de este estilo en caso de conflictos con otras reglas CSS.
//&::before { ... }: Agrega un pseudo-elemento ::before antes del contenido del elemento de la lista activo:
//content: "";: Oculta el contenido por defecto del pseudo-elemento
//position: absolute;: Posiciona el pseudo-elemento de manera absoluta sobre el elemento de la lista activo.
//left: 0;: Lo ubica en el borde izquierdo del elemento de la lista
//top: 0;: Lo coloca en la parte superior del elemento de la lista.
//border-radius: 0 10px 10px 0;: Aplica un borde redondeado solo en las esquinas superior derecha e inferior derecha del pseudo-elemento, creando una barra lateral visual para el elemento de la lista activo.
const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 230px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation
