import cart from './../LaptopSvg/laptopcart.svg'
import './CartHeader.css'

function CartHeader(){
    return(
        <div className='total-cart-header'>
            <img src={cart} />
            <span>Cart</span>
        </div>
    )
}

export default CartHeader