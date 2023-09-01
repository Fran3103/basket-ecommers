
import {  useState } from 'react';
import './App.css';
import Gallery from './Component/Gallery';
import Modal from './Component/Modal';

import NavBar from './Component/NavBar';
import Section from './Component/Section';

import imgG1 from './img/image-product-1.jpg'
import imgG2 from './img/image-product-2.jpg'
import imgG3 from './img/image-product-3.jpg'
import imgG4 from './img/image-product-4.jpg'
import Cart from './Component/Cart';

function App() {


  //modal
  const [cerrar, setCerrar] = useState(false)

  const [imagen, setImagen]= useState(imgG1)



  const open = () => setCerrar(true)

  const closeModal = () => {
    
    setCerrar(!cerrar)
  
  }


    const btn1 = () => {
      setImagen(imgG1)
      open()
     
    }

    const btn2 = () =>{
      setImagen(imgG2)
      open()
    }
    const btn3 = () => {
      setImagen(imgG3)
      open()
    }
    const btn4 = () => {
      setImagen(imgG4)
      open()
      
     
    }
  




    // carrito

    const [Buy, setBuy] = useState(true)

    const actualizar = () => setBuy(!Buy)

    const [precio, setPrecio] = useState(0) 
    const [cantidad, setCantidad] = useState(0) 


    const [contador, setContador] = useState (0)



  return (
    <div className="App">

      <NavBar
      actualizar={actualizar}
      cantidad={cantidad}
      
      />
      <Cart 
       
        Buy={Buy}
        precio={precio}
        setCantidad={setCantidad}
        cantidad={cantidad}
        setContador={setContador}
     
      />
      <div className='container-gral container '>
          <Gallery 
            closeModal={closeModal} 
            imagen={setImagen}
            btn1={btn1} 
            btn2={btn2} 
            btn3={btn3} 
            btn4={btn4} 
            />
          <Section 
          setCantidad={setCantidad}
          setPrecio={setPrecio}
          contador={contador}
          setContador={setContador}
          />
          <Modal 
            closeModal={closeModal} 
            cerrar={cerrar}  
            imagen={imagen} 
            btn1={btn1} 
            btn2={btn2} 
            btn3={btn3} 
            btn4={btn4}/>
      </div>


    </div>
  );
}

export default App;
