import { useState } from "react";

import { useAppDispatch } from "../../store/store";

import { pizzaListItemType } from "../../store/reducers/pizzasListReduser";
import { addNewOrder } from "../../store/actions/orderListActions";

import ToggleDough from "../ToggleDough/ToggleDough";
import ToggleSize from "../ToggleSize/ToggleSize";

const PizzasItem = ({
	id,
	imgName,
	name,
	textInfo,
	price,
}: pizzaListItemType) => {
	const [priceSelected, setPriceSelected] = useState(price[1]);

	const [doughSelected, setDoughSelected] = useState(0);
	const [sizeSelected, setSizeSelected] = useState(1);

	const changeSize = (id: number) => {
		setPriceSelected(price[id]);
		setSizeSelected(id);
	};

	const changeDough = (id: number) => {
		setDoughSelected(id);
	};

	const dispatch = useAppDispatch();

	const addBtnHandler = () => {
		dispatch(
			addNewOrder({
				id: id,
				doughSelected: doughSelected,
				sizeSelected: sizeSelected,
			})
		);
	};

	return (
		<li className="PizzasItem">
			<img
				className="PizzasItem__img"
				src={"/pizzas-img/" + imgName}
				alt="Pizza"
			/>
			<h3 className="PizzasItem__name">{name}</h3>
			<p className="PizzasItem__info">{textInfo}</p>
			<ToggleSize changeSizeClick={changeSize} />
			<ToggleDough changeDoughClick={changeDough} />

			<div className="PizzasItem__price">
				<p className="PizzasItem__price-text">
					{"$ " + (priceSelected / 100).toFixed(2)}
				</p>
				<button
					className="PizzasItem__price-btn"
					onClick={addBtnHandler}
				>
					Add to cart
				</button>
			</div>
		</li>
	);
};
export default PizzasItem;
