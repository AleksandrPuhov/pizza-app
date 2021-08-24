import {
	addNewOrderItem,
	addOrderItemNum,
	recalcFullprice,
	orderItemType,
} from "../reducers/orderListReduser";

import { pizzaListItemType } from "../../store/reducers/pizzasListReduser";
import { AppDispatch, RootState } from "../store";

type AddNewItemType = {
	id: number;
	doughSelected: number;
	sizeSelected: number;
};

export const addNewOrder =
	({ id, doughSelected, sizeSelected }: AddNewItemType) =>
	(dispatch: AppDispatch, getState: () => RootState) => {
		const pizzasList = getState().pizzasListReduser.pizzasList;
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

		const findIndexPizzas = pizzasList.findIndex(
			(el: pizzaListItemType) => el.id === id
		);
		dispatch(
			recalcFullprice(pizzasList[findIndexPizzas].price[sizeSelected])
		);
	};
