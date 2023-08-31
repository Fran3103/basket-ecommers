import React, { useState } from 'react'
import img1 from '../img/image-product-1-thumbnail.jpg'
import img2 from '../img/image-product-2-thumbnail.jpg'
import img3 from '../img/image-product-3-thumbnail.jpg'
import img4 from '../img/image-product-4-thumbnail.jpg'

import imgG1 from '../img/image-product-1.jpg'
import imgG2 from '../img/image-product-2.jpg'
import imgG3 from '../img/image-product-3.jpg'
import imgG4 from '../img/image-product-4.jpg'

import imgGrande1 from '../img/image-product-1.jpg'
import imgGrande2 from '../img/image-product-2.jpg'
import imgGrande3 from '../img/image-product-3.jpg'
import imgGrande4 from '../img/image-product-4.jpg'

import imagen1 from '../img/image-product-1-thumbnail.jpg'
import imagen2 from '../img/image-product-2-thumbnail.jpg'
import imagen3 from '../img/image-product-3-thumbnail.jpg'
import imagen4 from '../img/image-product-4-thumbnail.jpg'

import botones1 from '../img/icon-next.svg'
import botones2 from '../img/icon-previous.svg'
import close from '../img/icon-close.svg'
const Gallery = () => {

  // const [open, setOpen] = useState(false)

  // const openModal = setOpen(!open)

  const [imagen, setImagen]= useState(imgGrande1)
    const [cerrar, setCerrar] = useState(false)
   


    const imagenes1 = () => setImagen(imgGrande1)
    const imagenes2 = () => setImagen(imgGrande2)
    const imagenes3 = () => setImagen(imgGrande3)
    const imagenes4 = () => setImagen(imgGrande4)
    const closeModal = () => setCerrar(!cerrar)

  return (

    
  <div id="carouselExampleCaptions" className="carousel    slide  ">
    
      <div className="carousel-indicators rounded-4">
    
        
        <img type="button" data-bs-target="#carouselExampleCaptions" id='boton' data-bs-slide-to="0"  className="active " aria-current="true" aria-label="Slide 1"  src={img1}/>
        <img type="button" data-bs-target="#carouselExampleCaptions" id='boton'  data-bs-slide-to="1" aria-label="Slide 2"  src={img2}/>
        <img type="button" data-bs-target="#carouselExampleCaptions" id='boton'  data-bs-slide-to="2" aria-label="Slide 3"  src={img3}/>
        <img type="button" data-bs-target="#carouselExampleCaptions" id='boton'  data-bs-slide-to="3" aria-label="Slide 4"  src={img4}/>
      </div>
      <div className="carousel-inner rounded-4">
        <div className="carousel-item active">
          <img src={imgG1} className="d-block w-100" alt="..." onClick={closeModal}  />
          
        </div>
        <div className="carousel-item">
          <img src={imgG2} className="d-block w-100" alt="..." onClick={closeModal}  />
          
        </div>
        <div className="carousel-item" >
          <img src={imgG3} className="d-block w-100" alt="..." onClick={closeModal}  />
        
        </div>
        <div className="carousel-item">
          <img src={imgG4} className="d-block w-100" alt="..." onClick={closeModal}  />
        
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>

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

    

</div>
  )
}

export default Gallery