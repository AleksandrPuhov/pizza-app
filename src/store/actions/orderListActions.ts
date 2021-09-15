import {
	addNewOrderItem,
	addOrderItemNum,
	orderItemType,
	deleteOrderItem,
	changeFullprice,
} from "../reducers/orderListReduser";

import { pizzaListItemType } from "../../store/reducers/pizzasListReduser";
import { AppDispatch, RootState } from "../store";

export type ItemType = {
	id: number;
	doughSelected: number;
	sizeSelected: number;
};

export const recalcFullPrice =
	() => (dispatch: AppDispatch, getState: () => RootState) => {
		const pizzasList = getState().pizzasListReduser.pizzasList;
		const orderList = getState().orderListReduser.orders;

		const newFullPrice = orderList.reduce((acc, curr) => {
			const findIndexPizzas = pizzasList.findIndex(
				(el: pizzaListItemType) => el.id === curr.id
			);

			return (
				acc +
				curr.num * pizzasList[findIndexPizzas].price[curr.sizeSelected]
			);
		}, 0);

		dispatch(changeFullprice(newFullPrice));
	};

export const addNewOrder =
	({ id, doughSelected, sizeSelected }: ItemType) =>
	(dispatch: AppDispatch, getState: () => RootState) => {
		const orderList = getState().orderListReduser.orders;

		const findIndexOrder = orderList.findIndex(
			(el: orderItemType) =>
				el.id === id &&
				el.doughSelected === doughSelected &&
				el.sizeSelected === sizeSelected
		);

		if (findIndexOrder < 0) {
			dispatch(
				addNewOrderItem({
					id,
					doughSelected,
					sizeSelected,
				})
			);
		} else {
			dispatch(addOrderItemNum(findIndexOrder));
		}
		dispatch(recalcFullPrice());
	};

export const deleteOrderEl =
	({ id, doughSelected, sizeSelected }: ItemType) =>
	(dispatch: AppDispatch, getState: () => RootState) => {
		dispatch(deleteOrderItem({ id, doughSelected, sizeSelected }));
		dispatch(recalcFullPrice());
	};
