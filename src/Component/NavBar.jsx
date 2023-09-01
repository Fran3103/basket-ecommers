import React from 'react'

import logo from '../img/logo.svg'
import carrito from '../img/icon-cart.svg'
import usuario from '../img/image-avatar.png'


const NavBar = ({actualizar}) => {

 


  return (
    <div>
        <nav className="navbar navbar-expand-lg  ">
            <div className="container justify-content-center m-2  ">


{/* boton y logo               */}
              <div className='row  w-100 align-items-center ' >
                  
                  <div className="col  ">
                      <button className="navbar-toggler  " type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon "></span>
                      </button>
                      <img src={logo} alt="logo" className='logo  ' />
                  </div>
             
{/* links */}
                  <div className="offcanvas navbar-collapse offcanvas-start  links " id="navbarSupportedContent">

                      

                      <ul className="navbar-nav me-auto  ">
                          <li>
                            <button type="button " className="btn-close navbar-toggler" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                          </li>
                          <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Collections</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/"> Men</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/">Women</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/">About</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">  Contact</a>
                          </li>
                          
                        
                      </ul>
                  
                  </div>

{/* carrito y usuario */}
                  <div className='d-flex carrito  col-2'>
                      <img src={carrito} alt="carrito" className='img  carrito-img' onClick={actualizar}/>
                      <img src={usuario} alt="usuario" className='img usuario ' />

                  </div>
              </div>
            </div>
        </nav>

    </div>
  )
}

export default NavBar