import { useContext } from 'react';
import { ShopContext } from '../context';
import { Good } from './Good';

function GoodsList() {
    const { goods = [] } = useContext(ShopContext);
    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className='items'>
            {goods.map((item) => (
                <Good key={item.mainId} {...item} />
            ))}
        </div>
    );
}

export { GoodsList };
