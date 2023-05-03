import { useContext } from 'react';
import { ShopContext } from '../context';

function Good(props) {
    const { addToCart = Function.prototype } = useContext(ShopContext);
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        displayAssets: [{ full_background: image }],
        price: { regularPrice: price },
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

export { Good };
