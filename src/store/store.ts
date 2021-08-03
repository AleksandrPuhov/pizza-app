import { configureStore } from '@reduxjs/toolkit';

import orderListReducer from './reducers/orderList';

export const store = configureStore({
    reducer: {
        orderList: orderListReducer,
    },
});
