export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'GET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            };
        case 'TOGGLE_CART':
            return {
                ...state,
                isCartShow: !state.isCartShow,
            };
        case 'ADD_TO_CART': {
            const itemIndex = state.order.findIndex(
                (item) => item.id === payload.id
            );
            let newOrder = null;
            if (itemIndex < 0) {
                // Add the good to the cart
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
                // alert('The good has been added to the cart.');
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            };
        }
        case 'INC_QUANTITY':
            return {
                ...state,
                order: state.order.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    } else {
                        return item;
                    }
                }),
            };

        case 'DEC_QUANTITY':
            return {
                ...state,
                order: state.order.map((item) => {
                    if (item.id === payload.id) {
                        const newQuantity = item.quantity - 1;
                        return {
                            ...item,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return item;
                    }
                }),
            };
        default:
            return state;
    }
};
