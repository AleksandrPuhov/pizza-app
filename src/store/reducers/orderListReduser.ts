import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface orderItemType {
	id: number;
	doughSelected: number;
	sizeSelected: number;
	num: number;
}

export interface orderListInterface {
	orders: Array<orderItemType>;
	fullPrice: number;
}

const initialState: orderListInterface = {
	orders: [],
	fullPrice: 0,
};

export const orderListReduser = createSlice({
	name: "orderListReduser",
	initialState,
	reducers: {
		addNewOrderItem: (state, action) => {
			state.orders.push({
				id: action.payload.id,
				doughSelected: action.payload.doughSelected,
				sizeSelected: action.payload.sizeSelected,
				num: 1,
			});
		},
		addOrderItemNum: (state, action) => {
			state.orders[action.payload].num++;
		},
		recalcFullprice: (state, action) => {
			state.fullPrice = state.fullPrice + action.payload;
		},
	},
});

export const { addNewOrderItem, addOrderItemNum, recalcFullprice } =
	orderListReduser.actions;

export const orderListSelector = (state: RootState) => state.orderListReduser;

export const fullPriceSelector = (state: RootState) =>
	state.orderListReduser.fullPrice;

export const ordersNumSelector = (state: RootState) =>
	state.orderListReduser.orders.reduce((acc, curr) => acc + curr.num, 0);

export default orderListReduser.reducer;
