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
	fullPrise: number;
}

const initialState: orderListInterface = {
	orders: [],
	fullPrise: 0,
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
			state.fullPrise = state.fullPrise + action.payload;
		},
	},
});

export const { addNewOrderItem, addOrderItemNum, recalcFullprice } =
	orderListReduser.actions;

export const fullPriseSelector = (state: RootState) =>
	state.orderListReduser.fullPrise;

export const ordersNumSelector = (state: RootState) =>
	state.orderListReduser.orders.reduce((acc, curr) => acc + curr.num, 0);

export default orderListReduser.reducer;
