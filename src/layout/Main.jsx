import { useEffect, useState } from 'react';
import { Alert } from '../components/Alert';
import { Cart } from '../components/Cart';
import { CartList } from '../components/CartList';
import { ItemsList } from '../components/ItemsList';
import { Preloader } from '../components/Preloader';
import { API_KEY, API_URL } from '../config';

function Main() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrders] = useState([]);
    const [isCartShow, setIsCartShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const closeAlert = () => {
        setAlertName('');
    };

    const handelCartShow = () => {
        setIsCartShow(!isCartShow);
    };

    const removeItem = (idToRemove) => {
        const updatedOrder = order.filter((item) => item.id !== idToRemove);
        setOrders(updatedOrder);
    };

    const addToCart = (good) => {
        // Check if the item is already in the cart
        const itemIndex = order.findIndex((item) => item.id === good.id);
        if (itemIndex < 0) {
            // Add the good to the cart
            const newItem = {
                ...good,
                quantity: 1,
            };
            setOrders([...order, newItem]);
            // alert('The good has been added to the cart.');
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrders(newOrder);
            setAlertName(good.name);
        }
    };
    const incQuantity = (id) => {
        const newOrder = order.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }

            return item;
        });
        setOrders(newOrder);
    };
    const decQuantity = (id) => {
        const newOrder = order.map((item) => {
            if (item.id === id) {
                const newQuantity = item.quantity - 1;
                return {
                    ...item,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            }

            return item;
        });
        setOrders(newOrder);
    };

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setItems(data.shop);
                setLoading(false);
            });
    }, []);
    return (
        <main className='container content'>
            <Cart quantity={order.length} handelCartShow={handelCartShow} />
            {!loading ? (
                <ItemsList items={items} addToCart={addToCart} />
            ) : (
                <Preloader />
            )}
            {isCartShow && (
                <CartList
                    order={order}
                    removeItem={removeItem}
                    handelCartShow={handelCartShow}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
}

export { Main };
