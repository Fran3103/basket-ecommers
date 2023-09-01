import React from 'react'
import img1 from '../img/image-product-1-thumbnail.jpg'
import img2 from '../img/image-product-2-thumbnail.jpg'
import img3 from '../img/image-product-3-thumbnail.jpg'
import img4 from '../img/image-product-4-thumbnail.jpg'

import imgG1 from '../img/image-product-1.jpg'
import imgG2 from '../img/image-product-2.jpg'
import imgG3 from '../img/image-product-3.jpg'
import imgG4 from '../img/image-product-4.jpg'

const Gallery = ({ btn1 , btn2, btn3, btn4}) => {

  // const [open, setOpen] = useState(false)

  // const openModal = setOpen(!open)

 

   

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
          <img src={imgG1} className="d-block w-100" alt="..." onClick={ btn1}  />
          
        </div>
        <div className="carousel-item">
          <img src={imgG2} className="d-block w-100" alt="..." onClick={ btn2}  />
          
        </div>
        <div className="carousel-item" >
          <img src={imgG3} className="d-block w-100" alt="..." onClick={btn3}  />
        
        </div>
        <div className="carousel-item">
          <img src={imgG4} className="d-block w-100" alt="..." onClick={ btn4}  />
        
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

     

    

</div>
  )
}

export default Gallery