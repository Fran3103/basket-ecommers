
import img from '../img/image-product-1-thumbnail.jpg'
import eliminar from '../img/icon-delete.svg'


const Cart = ({ Buy, precio, cantidad, setContador}) => {
    
const vaciar = () => setContador(0)

    

  return (
    <div className={Buy ? 'close-carrito ' : 'carrito-content'}>
    <h3>Cart</h3>
    <hr />
   <div className={cantidad > 0 ? 'carrito-lleno': 'carrito-vacio'}>
        <div className="buy">
                <img src={img} alt="producto" className='producto-seleccionado'/>
                <div className='titulo'>
                <p>Fall Limited Edition Sneakers
                $125.00   x <span>{cantidad}</span> <span>{precio}</span></p>

                </div>
                <img src={eliminar} alt="delete" onClick={vaciar}/> 
            </div>
            <button className='btn-buy'>Checkout</button>
    </div>

    <div className={cantidad=== 0 ? 'sin-producto': 'carrito-vacio'}>
        <p>Your cart is empty.</p>
    </div>

  </div>
  )
}

export default Cart