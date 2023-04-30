import { CartItem } from './CartItem';
function CartList(props) {
    const {
        order = [],
        removeItem = Function.prototype,
        handelCartShow = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className='collection cart-list'>
            <li className='collection-item active'>
                Orders
                <span
                    className='secondary-content btn-delete'
                    onClick={handelCartShow}
                >
                    <i className='material-icons'>close</i>
                </span>
            </li>
            <ul className='collection-item'>
                {order.length ? (
                    order.map((item) => (
                        <CartItem
                            key={item.id}
                            {...item}
                            removeItem={removeItem}
                            incQuantity={incQuantity}
                            decQuantity={decQuantity}
                        />
                    ))
                ) : (
                    <li className='collection-item'>Cart is empty</li>
                )}
            </ul>
            <li className='collection-item active checkout-item'>
                <span>Total price: {totalPrice} eur</span>
                <button className='btn checkout'>Proceed to checkout</button>
            </li>
        </ul>
    );
}

export { CartList };
