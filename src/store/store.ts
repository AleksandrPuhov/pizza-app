import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import orderListReduser from './reducers/orderListReduser';
import personReduser from './reducers/personReduser';
import pizzasListReduser from './reducers/pizzasListReduser';


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
    reducer: {
        orderListReduser: orderListReduser,
        personReduser: personReduser,
        pizzasListReduser:pizzasListReduser,
    },
});

