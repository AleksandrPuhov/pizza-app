import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface orderListInterface {
    orders: Array<any>;
    fullPrise: number;
}

const initialState: orderListInterface = {
    orders: [],
    fullPrise: 0,
};

export const orderList = createSlice({
    name: 'orderList',
    initialState,
    reducers: {},
});

export const fullPriseSelector = (state: RootState) =>
    state.orderList.fullPrise;

export const ordersNumSelector = (state: RootState) =>
    state.orderList.orders.length;

export default orderList.reducer;
