import React from 'react'
import avatar from '../../img/avatar.png'
import styled from 'styled-components'
import { menuItems } from '../../utils/menuItems'


function Navigation(){

    return (
        <Navstyled> 
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Mike</h2>
                    <p>Tu partida</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((items) => {
                    return <li
                        key={items.id}>
                        {items.icon}    
                        <span>{items.title}</span>    
                        </li>
                })}
            </ul>
            <div className=""></div>

            
        </Navstyled>
    )
}

const Navstyled = styled.nav`


`;

export default Navigation
