import { useAppSelector } from "../../store/store";

import { orderListSelector } from "../../store/reducers/orderListReduser";

import CartList from "../../components/CartList/CartList";
import Wrapper from "../Wrapper/Wrapper";

const Cart = () => {
	const orderList = useAppSelector(orderListSelector);

	return (
		<section className="Cart">
			<Wrapper>
				<h2 className="Cart-title">My order</h2>
				<CartList />
				<p className="Cart-price">
					Total prise:
					<span className="Cart-price__cost">
						{" $ " + (orderList.fullPrice / 100).toFixed(2)}
					</span>
				</p>
				<button className="Cart-btn">Payment</button>
			</Wrapper>
		</section>
	);
};

export default Cart;
