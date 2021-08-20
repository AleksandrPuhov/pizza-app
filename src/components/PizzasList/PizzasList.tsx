import { useAppSelector } from "../../store/store";

import { fullPizzasList } from "../../store/reducers/pizzasListReduser";

import PizzasItem from "../PizzasItem/PizzasItem";

const PizzasList = () => {
	const pizzasList = useAppSelector(fullPizzasList);

	const pizzasListEl = pizzasList.map((el) => (
		<PizzasItem key={el.id} {...el} />
	));

	return <ul className="PizzasList">{pizzasListEl}</ul>;
};
export default PizzasList;
