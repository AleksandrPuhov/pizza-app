import { useAppSelector } from "../../store/store";

import { orderListSelector } from "../../store/reducers/orderListReduser";
import { fullPizzasList } from "../../store/reducers/pizzasListReduser";

const CartModal = () => {
	const orderList = useAppSelector(orderListSelector);
	const pizzasList = useAppSelector(fullPizzasList);

	const ordersListEl = orderList.orders.map((orderEl) => {
		const index: number = pizzasList.findIndex(
			(pizzasEl) => pizzasEl.id === orderEl.id
		);

		if (index < 1) {
			return null;
		} else {
			const { imgName, name, price } = pizzasList[index];
			return (
				<li key={orderEl.id} className="CartModal-item">
					<img
						className="CartModal-item__img"
						src={"/pizzas-img/" + imgName}
						alt="Pizza"
					/>

					<div className="CartModal-item__info">
						<p className="CartModal-item__info-name">{name}</p>
						<p className="CartModal-item__info-options">options</p>
						<p className="CartModal-item__info-calc">
							{orderEl.num +
								" x $ " +
								(price[orderEl.sizeSelected] / 100).toFixed(2)}
						</p>
						<p className="CartModal-item__info-price">price</p>
					</div>
					<button className="CartModal-item__btn"></button>
				</li>
			);
		}
	});

	return (
		<div className="CartModal">
			<ul className="CartModal-list">{ordersListEl}</ul>
			<p className="CartModal-total">
				{"Total: $ " + (orderList.fullPrice / 100).toFixed(2)}
			</p>
		</div>
	);
};

export default CartModal;
