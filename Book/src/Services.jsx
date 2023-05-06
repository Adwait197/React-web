import React from 'react'
import Sev from './assets/sev.jpg'
import './services.css'

function Services() {
    return (
        <div className='serv'>
            <div className='lef'>
                <h1 className='fg'>Our services</h1>
                <p className='hj'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse elit dolor, eleifend ac dapibus in, vestibulum sed tellus.
                    Proin in elementum nunc.
                    Morbi et est at ex ultricies auctor at vel massa.
                    Aenean velit ex, aliquam vel convallis in, porttitor eu nibh.
                    Mauris volutpat tristique ex, quis convallis enim tristique vel.
                    Nunc vel dolor dolor.
                    Ut massa eros, auctor non turpis at, maximus viverra orci.
                    Nullam hendrerit sapien in urna egestas tristique.
                    Morbi risus purus, facilisis nec mauris id, tristique semper dui.
                    Sed lacinia venenatis posuere.
                    Duis eu velit ornare, tincidunt ante vitae, hendrerit ipsum.
                    Aliquam condimentum scelerisque libero et gravida.
                    Phasellus aliquam elementum lectus ut tincidunt.
                    Nunc ultrices velit non velit tincidunt, vel tempus leo fermentum.
                    Cras est nibh, sollicitudin id pulvinar in, consequat at magna.
                    Ut eget viverra turpis, id ullamcorper orci.
                    <div>
                        Nulla a pharetra justo, a cursus est.
                        Nullam et elementum nulla, a pulvinar purus.
                        Etiam in malesuada ex.
                        Aenean suscipit malesuada mattis.
                        Quisque iaculis ex eu massa commodo suscipit. 
                        Sed et sem nisi.
                        Pellentesque sit amet ultricies est.
                        Donec dapibus porttitor sem.
                        Nulla placerat sed est nec pellentesque.
                        Quisque ex sem, vulputate sit amet laoreet non, ornare ac sapien.
                        Aliquam molestie lectus at nulla semper feugiat.
                        Nunc quis semper ex.
                        Vivamus varius posuere nisi eu ornare.
                    </div>
                </p>
            </div>
            <div className='rig' style={{ backgroundImage: `url(${Sev})` }}>
            </div>
        </div>
    )
}

export default Services