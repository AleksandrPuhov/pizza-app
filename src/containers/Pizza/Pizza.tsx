import PizzasList from "../../components/PizzasList/PizzasList";
import PizzasSorting from "../../components/PizzasSorting/PizzasSorting";
import Wrapper from "../Wrapper/Wrapper";

const Pizzas = () => {
	return (
		<section className="Pizzas">
			<Wrapper>
				<PizzasSorting />

				<PizzasList />
			</Wrapper>
		</section>
	);
};

export default Pizzas;
