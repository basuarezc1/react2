import styled from "styled-components";

//Padding(Agrega relleno alrededor del contenido dentro), Display(Permite organizar elementos secundario), Gap(Espacio con los elementos secundarios)

export const MainLayout = styled.div`                     
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;

`;

//Padding(2 arriba y abajo,l.5 lados)
export const InnerLayout = styled.div`                     
    padding: 2rem 1.5rem;
    width: 100%;

`;

