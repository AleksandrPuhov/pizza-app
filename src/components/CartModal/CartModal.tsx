import { useAppSelector } from "../../store/store";

import { orderListSelector } from "../../store/reducers/orderListReduser";
import { fullPizzasList } from "../../store/reducers/pizzasListReduser";
import { sizeType, doughType } from "../../store/constants";

const CartModal = () => {
	const orderList = useAppSelector(orderListSelector);
	const pizzasList = useAppSelector(fullPizzasList);

	const ordersListEl = orderList.orders.map((orderEl) => {
		const index: number = pizzasList.findIndex(
			(pizzasEl) => pizzasEl.id === orderEl.id
		);

		if (index < 0) {
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
						<p className="CartModal-item__info-options">
							{sizeType[orderEl.sizeSelected] +
								", " +
								doughType[orderEl.doughSelected]}
						</p>

						<div className="CartModal-item__info-price">
							<p className="CartModal-item__info-calc">
								{orderEl.num +
									" x $ " +
									(price[orderEl.sizeSelected] / 100).toFixed(
										2
									)}
							</p>
							<p className="CartModal-item__info-price">
								{(
									(price[orderEl.sizeSelected] *
										orderEl.num) /
									100
								).toFixed(2)}
							</p>
						</div>
					</div>
					<button className="CartModal-item__del"></button>
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
			<button className="CartModal-cart">To cart</button>
		</div>
	);
};

export default CartModal;
