import React from 'react'
import carrito from '../img/icon-cartcopy.svg'
const Section = ({contador, setContador, setPrecio, setCantidad}) => {
    

    const sumar = () => {
        setContador( contador + 1)
    }

    const restar = () => {
        if(contador > 0){

            setContador( contador - 1)
        }
    }

    


  return (
    <div className='container-section'>
        <h4>Sneaker Company</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className='description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="price">
            <h2 >$125.00</h2><div className="descuento"><p>50%</p></div>
            
        </div>
        <span className='desc'>$250.00</span>
        <div className="add-cart">
            <div className="contador">
                <p onClick={restar} className='sumayresta'>-</p>
                <p className='contador-total'>{contador}</p>
                <p onClick={sumar} className='sumayresta'>+</p>
            </div>
            <button className='add-cart-btn'onClick={ 
                () => {
                         const totalPrecio = () => contador * 125.00 
                         setPrecio(totalPrecio)
                         setCantidad(contador)
                         }}>
                        <p><img src={carrito} className='cart' alt="carrito" />  
                 Add to cart </p></button>
        </div>
    </div>
  )
}

export default Section