import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import Button from '../Button/Button'
import { plus } from '../../utils/Icons'
import styled from 'styled-components'

function Form(){

    const {addPlay} = useGlobalContext()

    //Define un estado local del componente usando useState de React. El estado se llama input y es un objeto que contiene las propiedades de cada campo del formulario (betValue, pleno, etc.). El valor inicial del estado se establece con un objeto que tiene todas las propiedades como cadenas vacías.
    const [inputState, setInputState] = useState({
        mesa:'',
        dealer:'',
        betValue:'',
        pleno:'',
        caballo:'',
        transversal:'',
        cuadro:'',
        seisena:'',
        dosColumnas:'',
        dosDocena:'',
        columna:'',
        docena:'',
        pasaFalta:'',
        parImpar:'',
        rojoNegro:'',

    })

    //realiza una destructuración del objeto de estado inputState para crear variables individuales para cada propiedad del formulario, haciendo el código más legible.
    const {mesa,dealer,betValue, pleno, caballo, transversal, cuadro, seisena, dosColumnas, dosDocena, columna, docena, pasaFalta, parImpar, rojoNegro} = inputState

    //Define una función manejadora de eventos llamada handleInput que toma un argumento name. Esta función se utiliza para manejar los cambios en los campos del formulario. La función interna toma un evento como argumento (e). Dentro de la función, se crea una copia del estado actual usando el operador de propagación (...) y luego se actualiza la propiedad correspondiente ([name]) con el nuevo valor del campo del formulario (e.target.value). Finalmente, se actualiza el estado usando setInputState con la copia modificada
    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }
    
    //Define una función manejadora de eventos llamada handleSubmit que se ejecuta cuando se envía el formulario (evento onSubmit). Dentro de la función, se previene el comportamiento predeterminado del envío del formulario (e.preventDefault). Luego, se llama a la función addPlay (obtenida del contexto global) y se le pasa el estado actual del formulario (inputState) como argumento. Esto probablemente envía los datos del formulario al contexto global para su procesamiento.
    const handleSubmit = (e) =>{
        e.preventDefault();
    
        const ganancia = calculateEarnings(
          inputState.betValue,
          inputState.pleno,
          inputState.caballo,
          inputState.transversal,
          inputState.cuadro,
          inputState.seisena,
          inputState.dosColumnas,
          inputState.dosDocena,
          inputState.columna,
          inputState.docena,
          inputState.pasaFalta,
          inputState.parImpar,
          inputState.rojoNegro,
        );
    
        const playData = {
          Dealer: inputState.dealer,
          Mesa: inputState.mesa,
          Ganancia: ganancia,
          
        };
    
        addPlay(playData);
      }

    

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className= "input-control">
                <input
                 type="number"
                 value={mesa}
                 name={'mesa'}
                 placeHolder="Mesa"
                 onChange={handleInput('mesa')}                            
                 />
            </div>
            <div className= "input-control">
                <input
                 type="string"
                 value={dealer}
                 name={'dealer'}
                 placeHolder="Dealer"
                 onChange={handleInput('dealer')}                            
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={betValue}
                 name={'betValue'}
                 placeHolder="Valor apuesta"
                 onChange={handleInput('betValue')}                            
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={pleno}
                 name={'pleno'}
                 placeHolder="Pleno"
                 onChange={handleInput('pleno')}                               
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={caballo}
                 name={'caballo'}
                 placeHolder="Caballo"
                 onChange={handleInput('caballo')}                                 
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={transversal}
                 name={'transversal'}
                 placeHolder="Transversal"
                 onChange={handleInput('transversal')}                                 
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={cuadro}
                 name={'cuadro'}
                 placeHolder="Cuadro"
                 onChange={handleInput('cuadro')}                                 
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={seisena}
                 name={'seisena'}
                 placeHolder="Seisena"
                 onChange={handleInput('seisena')}                                 
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={dosColumnas}
                 name={'dosColumnas'}
                 placeHolder="Dos Columnas"
                 onChange={handleInput('dosColumnas')}                                 
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={dosDocena}
                 name={'dosDocena'}
                 placeHolder="Dos Docena"
                 onChange={handleInput('dosDocena')}                                 
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={columna}
                 name={'columna'}
                 placeHolder="columna"
                 onChange={handleInput('columna')}                                 
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={docena}
                 name={'docena'}
                 placeHolder="Docena"
                 onChange={handleInput('Docena')}                                 
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={pasaFalta}
                 name={'pasaFalta'}
                 placeHolder="Pasa Falta"
                 onChange={handleInput('pasaFalta')}                                 
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={parImpar}
                 name={'parImpar'}
                 placeHolder="Par Impar"
                 onChange={handleInput('parImpar')}                                 
                 />
            </div>
            <div className= "input-control">
                <input
                 type="number"
                 value={rojoNegro}
                 name={'rojoNegro'}
                 placeHolder="Rojo Negro"
                 onChange={handleInput('rojoNegro')}                                 
                 />
            </div>
            <div className= "submit-btn">
                <Button
                    name={'Add Play'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
            
        </FormStyled>
    )
}

function calculateEarnings(betAmount, pl,ca,tr,cu,se,dc,dd,co,doc,pf,pi,rn) {
    
    // Calcular la ganancia

    //Asignar 0 si el campo esta vacio
    if (pl === "") {
        pl = 0;
    } 
    if (ca === "") {
        ca=0;
    } 
    if (tr === "") {
        tr=0;
    } 
    if (cu === "") {
        cu=0;
    } 
    if (se === "") {
        se=0;
    } 
    if (dc === "") {
        dc=0;
    } 
    if (dd === "") {
        dd=0;
    } 
    if (co === "") {
        co=0;
    } 
    if (doc === "") {
        doc=0;
    } 
    if (pf === "") {
        pf=0;
    } 
    if (pi === "") {
        pi=0;
    } 
    if (rn === "") {
        rn=0;
    } 

    let a = betAmount*pl*35;
    let b = betAmount*ca*17;
    let c = betAmount*tr*11;
    let d = betAmount*cu*8;
    let e = betAmount*se*5;
    let f = betAmount*dc*0.5;
    let g = betAmount*dd*0.5;
    let h = betAmount*co*2;
    let i = betAmount*doc*2;
    let j = betAmount*pf*1;
    let k = betAmount*pi*1;
    let l = betAmount*rn*1;

    return a + b + c + d + e + f + g + h + i + j + k + l;
}


//display: flex;: Define que el formulario se comporte como un contenedor flexible.
// Los elementos dentro del formulario se ordenan en una columna.
//font-family: inherit;: Hereda la fuente definida por el padre del formulario.
//outline: none;: Elimina el borde de enfoque predeterminado de los elementos.
//border: none;: Elimina el borde predeterminado de los elementos.
//border: 2px solid #fff;: Agrega un borde sólido de 2px de color blanco (#fff) alrededor de los elementos.
//resize: none;: Deshabilita la opción de redimensionar el tamaño de los elementos
//box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);: Agrega una sombra sutil a los elemento
//&::placeholder { ... }: Aplica estilos específicos al texto del placeholder (texto que aparece antes de que se ingrese un valor).
//.input-control { ... }: Define estilos para una clase llamada .input-control, utilizada para envolver a los elementos input dentro del formulario
//width: 100%;: Define el ancho de los elementos input como 100% del contenedor padre.
//&:hover { ... }: Aplica estilos al botón cuando el usuario pasa el cursor por encima (hover).
//background: var(--color-green) !important;: Cambia el color de fondo del botón a una variable definida como --color-green (la cual no se muestra en este código) e indica que este estilo es importante y debe sobrescribir cualquier otro estilo en conflicto.

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;



export default Form