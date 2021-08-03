import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderList: [],
    fullPrise: 0,
};

export const orderList = createSlice({
    name: 'orderList',
    initialState,
    reducers: {},
});

export const fullPriseSelector = (state: any) => state.orderList.fullPrise;

export default orderList.reducer;
