function CartItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeItem = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
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
                onClick={() => removeItem(id)}
            >
                <i className='material-icons'>close</i>
            </span>
        </li>
    );
}

export { CartItem };
