import React from 'react'
import { Menulist } from './Helpers'
import Menuitem from './Menuitem'
import './Menu.css'

function Menu() {
    return (
        <div className='menu'>
            <h1 className='title'>
                Our Menu
            </h1>
            <div className='menulist'>
                {Menulist.map((items, key) => {
                    return <Menuitem 
                    key={key}
                    image={items.image} 
                    name={items.name} 
                    price={items.price} />
                })}

            </div>
        </div>
    )
}

export default Menu