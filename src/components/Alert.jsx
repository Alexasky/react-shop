import { useContext, useEffect } from 'react';
import { ShopContext } from '../context';

function Alert() {
    const { alertName = '', closeAlert = Function.prototype } =
        useContext(ShopContext);
    useEffect(() => {
        const timerID = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerID);
        };
        // eslint-disable-next-line
    }, [alertName]);
    return (
        <div id='toast-container'>
            <div className='toast'>{alertName} added to Your Cart</div>
        </div>
    );
}
export { Alert };
