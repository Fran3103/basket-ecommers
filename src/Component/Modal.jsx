import React from 'react'
import imagen1 from '../img/image-product-1-thumbnail.jpg'
import imagen2 from '../img/image-product-2-thumbnail.jpg'
import imagen3 from '../img/image-product-3-thumbnail.jpg'
import imagen4 from '../img/image-product-4-thumbnail.jpg'

// import imgGrande1 from '../img/image-product-1.jpg'
// import imgGrande2 from '../img/image-product-2.jpg'
// import imgGrande3 from '../img/image-product-3.jpg'
// import imgGrande4 from '../img/image-product-4.jpg'

import botones1 from '../img/icon-next.svg'
import botones2 from '../img/icon-previous.svg'
import close from '../img/icon-close.svg'
const Modal = ({closeModal, cerrar,  btn1 , btn2, btn3, btn4 , imagen, activa, activar, setActiva}) => {


    // const [imagene, setImagene]= useState(imgGrande1)
   
   

    // const imagenes1 = () => setImagene(imgGrande1)
    // const imagenes2 = () => setImagene(imgGrande2)
    // const imagenes3 = () => setImagene(imgGrande3)
    // const imagenes4 = () => setImagene(imgGrande4)
 
    
  return (
    <div className= { cerrar ? 'container-modal ' : 'cerrar'} >
       <div className="imagen-container">
            <img src={close} alt="close" className='close' onClick={closeModal} />
            <div className="imagenGrande">
                <img src={imagen} alt="---" />
                <div className="botones">
                    <img src={botones2} alt="previus" />
                    <img src={botones1} alt="next" />
                </div>
            
            </div>
            <div className="imagenes">
                <img src={imagen1} alt="---" onClick={()=> btn1()}  className="activa"/>
                <img src={imagen2} alt="---" onClick={()=> btn2()} className="activa"/>
                <img src={imagen3} alt="---" onClick={()=>btn3()} className="activa"/>
                <img src={imagen4} alt="---"  onClick={()=>btn4()}   className="activa"/>

                {/* <img src={imagen1} alt="---" onClick={imagenes1} />
                <img src={imagen2} alt="---" onClick={imagenes2}/>
                <img src={imagen3} alt="---" onClick={imagenes3}/>
                <img src={imagen4} alt="---"  onClick={imagenes4}/> */}
            </div>
       </div>
    </div>
  )
}

export default Modal