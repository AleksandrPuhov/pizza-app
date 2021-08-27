import { useAppSelector } from "../../store/store";

import {
	fullPizzasList,
	pizzasSortingSelected,
} from "../../store/reducers/pizzasListReduser";

import PizzasItem from "../PizzasItem/PizzasItem";

const PizzasList = () => {
	const pizzasList = useAppSelector(fullPizzasList);
	const sortingSelected = useAppSelector(pizzasSortingSelected);

	const pizzasListEl = pizzasList
		.filter(
			(el) =>
				((el.sortItem.hot && sortingSelected.hot) ||
					!sortingSelected.hot) &&
				((el.sortItem.bbq && sortingSelected.bbq) ||
					!sortingSelected.bbq) &&
				((el.sortItem.mushrooms && sortingSelected.mushrooms) ||
					!sortingSelected.mushrooms) &&
				((el.sortItem.meat && sortingSelected.meat) ||
					!sortingSelected.meat)
		)
		.map((el) => <PizzasItem key={el.id} {...el} />);

	return (
		<ul className="PizzasList">
			{pizzasListEl.length > 0 ? (
				pizzasListEl
			) : (
				<p>No Pizzas found with this filters</p>
			)}
		</ul>
	);
};
export default PizzasList;
