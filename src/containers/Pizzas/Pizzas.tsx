import PizzasList from '../../components/PizzasList/PizzasList';
import Wrapper from '../Wrapper/Wrapper';

const Pizzas = () => {
    return (
        <section className="Pizzas">
            <Wrapper>
                <div>Sorting</div>

                <PizzasList />
            </Wrapper>
        </section>
    );
};

export default Pizzas;
