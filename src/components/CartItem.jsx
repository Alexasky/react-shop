import { useContext } from 'react';
import { ShopContext } from '../context';

function CartItem(props) {
    const {
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = useContext(ShopContext);
    const { id, name, price, quantity } = props;
    return (
        <li className='collection-item '>
            {name}
            <span className='price-item'>
                <i
                    className='material-icons btn-quantity waves-effect waves-light btn'
                    onClick={() => incQuantity(id)}
                >
                    add
                </i>
                {quantity}
                <i
                    className='material-icons btn-quantity waves-effect waves-light btn'
                    onClick={() => decQuantity(id)}
                >
                    remove
                </i>
                * {price} = {quantity * price} eur
            </span>

            <span
                className='secondary-content btn-delete'
                onClick={() => removeFromCart(id)}
            >
                <i className='material-icons'>close</i>
            </span>
        </li>
    );
}

export { CartItem };
