import React from 'react'

function Menuitem({image, name, price}) {
  return (
    <div className='menuitem'>
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h3>{name}</h3>
        <p>${price}</p>
    </div>

  )
}

export default Menuitem