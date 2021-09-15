import { useHistory } from "react-router-dom";
import CartList from "../CartList/CartList";

import { useAppSelector } from "../../store/store";

import { orderListSelector } from "../../store/reducers/orderListReduser";

const CartModal = () => {
	const orderList = useAppSelector(orderListSelector);

	const history = useHistory();

	const toCartBtnHandler = () => {
		history.push("/cart");
	};

	return (
		<div className="CartModal">
			<CartList inModal={true} />

			<div className="CartModal-total">
				<p className="CartModal-total__price">
					{"Total: $ " + (orderList.fullPrice / 100).toFixed(2)}
				</p>
				<button
					className="CartModal-total__btn"
					onClick={toCartBtnHandler}
				>
					To cart
				</button>
			</div>
		</div>
	);
};

export default CartModal;
