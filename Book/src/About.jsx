import React from 'react'
import Ab from './assets/ab.jpg'
import './about.css'

function About() {
    return (
        <div className='about'>
            <div className='left' style={{ backgroundImage: `url(${Ab})` }}>
            </div>
            <div className='right'>
                <h1 className='op'>About Us</h1>
                <p className='mn'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ex nunc, fermentum sit amet porta in, molestie in mi.
                    Maecenas vulputate tincidunt neque, at sodales erat sagittis vel.
                    Vestibulum vitae ipsum facilisis, lacinia mi eget, dictum nibh.
                    Nullam non ullamcorper mauris.
                    Nunc faucibus nisl in tortor blandit placerat.
                    Nunc rutrum ipsum eget arcu imperdiet, quis commodo nisl eleifend.
                    Nam vestibulum sodales ex.
                    Duis eget dui vitae risus tempus tempus.
                    Curabitur nec luctus magna, a interdum leo.
                    Vestibulum luctus tortor sed imperdiet bibendum.
                    Duis aliquet turpis velit, mollis luctus nibh porta eget.
                    Cras commodo, ante in venenatis gravida, erat sapien ornare massa, eget dapibus velit augue tincidunt sapien.
                    Nulla facilisi.
                    Vestibulum eleifend lectus in blandit lobortis.</p>
            </div>
        </div>
    )

}

export default About