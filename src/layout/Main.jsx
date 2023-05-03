import { useContext, useEffect } from 'react';
import { Alert } from '../components/Alert';
import { Cart } from '../components/Cart';
import { CartList } from '../components/CartList';
import { GoodsList } from '../components/GoodsList';
import { Preloader } from '../components/Preloader';
import { API_KEY, API_URL } from '../config';
import { ShopContext } from '../context';

function Main() {
    const { loading, isCartShow, alertName, getGoods } =
        useContext(ShopContext);

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                getGoods(data.shop);
            });
        //eslint-disable-next-line
    }, []);
    return (
        <main className='container content'>
            <Cart />
            {!loading ? <GoodsList /> : <Preloader />}
            {isCartShow && <CartList />}
            {alertName && <Alert />}
        </main>
    );
}

export { Main };
