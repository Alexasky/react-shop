import { useContext } from 'react';
import { ShopContext } from '../context';
import { CartItem } from './CartItem';
function CartList() {
    const { order = [], toggleCart = Function.prototype } =
        useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className='collection cart-list'>
            <li className='collection-item active'>
                Orders
                <span
                    className='secondary-content btn-delete'
                    onClick={toggleCart}
                >
                    <i className='material-icons'>close</i>
                </span>
            </li>
            <ul className='collection-item'>
                {order.length ? (
                    order.map((item) => <CartItem key={item.id} {...item} />)
                ) : (
                    <li className='collection-item'>Cart is empty</li>
                )}
            </ul>
            <li className='collection-item active checkout-item'>
                <span>Total price: {totalPrice} eur</span>
                <button className='btn checkout'>Checkout</button>
            </li>
        </ul>
    );
}

export { CartList };
