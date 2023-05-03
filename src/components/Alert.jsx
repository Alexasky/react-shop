import { useContext, useEffect } from 'react';
import { ShopContext } from '../context';

function Alert() {
    const { alertName: name = '', closeAlert = Function.prototype } =
        useContext(ShopContext);
    useEffect(() => {
        const timerID = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerID);
        };
        // eslint-disable-next-line
    }, [name]);
    return (
        <div id='toast-container'>
            <div className='toast'>{name} added to Your Cart</div>
        </div>
    );
}
export { Alert };
