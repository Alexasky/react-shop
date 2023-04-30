function Item(props) {
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        displayAssets: [{ full_background: image }],
        price: { regularPrice: price },
        addToCart = Function.prototype,
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() => addToCart({ id, name, price })}
                >
                    Buy
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {price} eur
                </span>
            </div>
        </div>
    );
}

export { Item };
