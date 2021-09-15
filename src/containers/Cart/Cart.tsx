import CartList from "../../components/CartList/CartList";
import Wrapper from "../Wrapper/Wrapper";

const Cart = () => {
	return (
		<section className="Cart">
			<Wrapper>
				<h2 className="Cart-title">My order</h2>
				<CartList />
				<p className="Cart-price">
					Total prise:{" "}
					<span className="Cart-price__cost">$ 31.22</span>
				</p>
				<button className="Cart-btn">Payment</button>
			</Wrapper>
		</section>
	);
};

export default Cart;
