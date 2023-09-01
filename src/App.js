
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
  

    // const precio = () => 125


    // carrito

    const [Buy, setBuy] = useState(false)

    const actualizar = () => setBuy(!Buy)

    const [precio, setPrecio] = useState(0) 
    const [cantidad, setCantidad] = useState(0) 

    

   
      const total = () => {

        const totalPrecio = ()=> contador * 125 
   
        setPrecio(totalPrecio)
        setCantidad(contador)
         
       }

       

    

    // const [vaciar, setVaciar] = useState(cantidad)
    // const vaciarcarro = () =>setVaciar(0)

    // Añadir al Carrito

    const [contador, setContador] = useState (0)


  // const imgClick1 = setImagen(imgGrande1)
  //   const imgClick2 = setImagen(imgGrande2)
  //   const imgClick3 = setImagen(imgGrande3)
  //   const imgClick4 = setImagen(imgGrande4)
  return (
    <div className="App">

      <NavBar
      actualizar={actualizar}
      
      />
      <Cart 
       
        Buy={Buy}
        precio={precio}
        setCantidad={setCantidad}
        cantidad={cantidad}
        setContador={setContador}
        // vaciar={vaciar}
        // vaciarcarro={vaciarcarro}
      />
      <div className='container-gral '>
          <Gallery 
            closeModal={closeModal} 
            imagen={setImagen}
            btn1={btn1} 
            btn2={btn2} 
            btn3={btn3} 
            btn4={btn4} 
            />
          <Section 
          total={total}
          contador={contador}
          setContador={setContador}
          />
          <Modal closeModal={closeModal} cerrar={cerrar}  imagen={imagen} btn1={btn1} 
            btn2={btn2} 
            btn3={btn3} 
            btn4={btn4}/>
      </div>


    </div>
  );
}

export default App;
