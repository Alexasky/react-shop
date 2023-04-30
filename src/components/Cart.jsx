function Cart(props) {
    const { quantity = 0, handelCartShow = Function.prototype } = props;
    return (
        <div
            className='cart  light-blue darken-4 white-text'
            onClick={handelCartShow}
        >
            <i className='material-icons'>shopping_basket</i>
            {quantity ? <span>{quantity}</span> : null}
        </div>
    );
}
export { Cart };
