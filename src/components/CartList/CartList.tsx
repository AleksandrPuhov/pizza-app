import { useAppDispatch, useAppSelector } from "../../store/store";

import { orderListSelector } from "../../store/reducers/orderListReduser";
import { fullPizzasList } from "../../store/reducers/pizzasListReduser";
import { sizeType, doughType } from "../../store/constants";

import { deleteOrderEl } from "../../store/actions/orderListActions";

const CartList = ({ inModal = false }) => {
	const orderList = useAppSelector(orderListSelector);
	const pizzasList = useAppSelector(fullPizzasList);

	const dispatch = useAppDispatch();

	const deleteOrderBtnHandler = (
		id: number,
		doughSelected: number,
		sizeSelected: number
	) => {
		dispatch(deleteOrderEl({ id, doughSelected, sizeSelected }));
	};

	const ordersListEl = orderList.orders.map((orderEl, ind) => {
		const index: number = pizzasList.findIndex(
			(pizzasEl) => pizzasEl.id === orderEl.id
		);

		if (index < 0) {
			return null;
		} else {
			const { imgName, name, price } = pizzasList[index];
			return (
				<li key={ind} className="CartList-item">
					<img
						className="CartList-item__img"
						src={"/pizzas-img/" + imgName}
						alt="Pizza"
					/>
					<div className="CartList-item__info">
						<div className="CartList-item__info-text">
							<p className="CartList-item__info-name">{name}</p>
							<p className="CartList-item__info-options">
								{sizeType[orderEl.sizeSelected] +
									", " +
									doughType[orderEl.doughSelected]}
							</p>
						</div>
						<div className="CartList-item__info-price">
							<p className="CartList-item__info-calc">
								{orderEl.num +
									" x $ " +
									(price[orderEl.sizeSelected] / 100).toFixed(
										2
									)}
							</p>
							<p className="CartList-item__info-full">
								{"$ " +
									(
										(price[orderEl.sizeSelected] *
											orderEl.num) /
										100
									).toFixed(2)}
							</p>
						</div>
					</div>
					<button
						className="CartList-item__del"
						onClick={() =>
							deleteOrderBtnHandler(
								orderEl.id,
								orderEl.doughSelected,
								orderEl.sizeSelected
							)
						}
					></button>
				</li>
			);
		}
	});

	return (
		<ul
			className={
				inModal
					? "CartList CartList--inModal"
					: "CartList CartList--inFull"
			}
		>
			{ordersListEl}
		</ul>
	);
};

export default CartList;
