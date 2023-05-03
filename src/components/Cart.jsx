import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
    const { order = [], toggleCart = Function.prototype } =
        useContext(ShopContext);
    const quantity = order.length;
    return (
        <div
            className='cart  light-blue darken-4 white-text'
            onClick={toggleCart}
        >
            <i className='material-icons'>shopping_basket</i>
            {quantity ? <span>{quantity}</span> : null}
        </div>
    );
}
export { Cart };
