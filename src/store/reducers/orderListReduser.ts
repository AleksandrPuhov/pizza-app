import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface orderListInterface {
	orders: Array<any>;
	fullPrise: number;
}

const initialState: orderListInterface = {
	orders: [],
	fullPrise: 0,
};

export const orderListReduser = createSlice({
	name: "orderListReduser",
	initialState,
	reducers: {},
});

export const fullPriseSelector = (state: RootState) =>
	state.orderListReduser.fullPrise;

export const ordersNumSelector = (state: RootState) =>
	state.orderListReduser.orders.length;

export default orderListReduser.reducer;
