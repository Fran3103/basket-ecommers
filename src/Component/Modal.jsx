import React, { useState } from 'react'
import imagen1 from '../img/image-product-1-thumbnail.jpg'
import imagen2 from '../img/image-product-2-thumbnail.jpg'
import imagen3 from '../img/image-product-3-thumbnail.jpg'
import imagen4 from '../img/image-product-4-thumbnail.jpg'

import imgGrande1 from '../img/image-product-1.jpg'
import imgGrande2 from '../img/image-product-2.jpg'
import imgGrande3 from '../img/image-product-3.jpg'
import imgGrande4 from '../img/image-product-4.jpg'

import botones1 from '../img/icon-next.svg'
import botones2 from '../img/icon-previous.svg'
import close from '../img/icon-close.svg'
const Modal = () => {


    const [imagen, setImagen]= useState(imgGrande1)
    const [cerrar, setCerrar] = useState(false)
   


    const imagenes1 = () => setImagen(imgGrande1)
    const imagenes2 = () => setImagen(imgGrande2)
    const imagenes3 = () => setImagen(imgGrande3)
    const imagenes4 = () => setImagen(imgGrande4)
    const closeModal = () => setCerrar(!cerrar)
    
  return (
    <div className= {`container-modal ${cerrar&& 'cerrar'}`}>
       <div className="imagen-container">
            <img src={close} alt="close" onClick={closeModal} />
            <div className="imagenGrande">
                <img src={imagen} alt="---" />
                <div className="botones">
                    <img src={botones2} alt="previus" />
                    <img src={botones1} alt="next" />
                </div>
            
            </div>
            <div className="imagenes">
                <img src={imagen1} alt="---" onClick={imagenes1} />
                <img src={imagen2} alt="---" onClick={imagenes2}/>
                <img src={imagen3} alt="---" onClick={imagenes3}/>
                <img src={imagen4} alt="---"  onClick={imagenes4}/>
            </div>
       </div>
    </div>
  )
}

export default Modal