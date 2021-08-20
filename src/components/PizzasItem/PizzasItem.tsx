import { useState } from "react";
import { pizzaListItemType } from "../../store/reducers/pizzasListReduser";
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

	const changeSize = (id: number) => {
		setPriceSelected(price[id]);
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
			<ToggleDough />
			<p>{(priceSelected / 100).toFixed(2) + " $"}</p>
			<p>add to cart (2)</p>
		</li>
	);
};
export default PizzasItem;
