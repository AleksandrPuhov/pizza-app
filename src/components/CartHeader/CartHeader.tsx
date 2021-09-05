import { useAppSelector } from "../../store/store";

import {
	fullPriceSelector,
	ordersNumSelector,
} from "../../store/reducers/orderListReduser";

import CartModal from "../CartModal/CartModal";
import { useHistory } from "react-router-dom";

type cartProps = {
	cartSmall?: boolean;
};

const CartHeader = ({ cartSmall = false }: cartProps) => {
	const ordersNum = useAppSelector(ordersNumSelector);

	const fullPrice = useAppSelector(fullPriceSelector);

	const history = useHistory();

	const modalEl =
		ordersNum === 0 ? null : (
			<div className="CartHeader__modal">
				<div className="CartHeader__modal-wrapper">
					<CartModal />
				</div>
			</div>
		);

	const cartClickHandler = (event: React.MouseEvent) => {
		const el = event.target as HTMLDivElement;

		if (
			el.className.includes("CartHeader") &&
			!el.className.includes("CartHeader__modal")
		) {
			history.push("/cart");
		}
	};

	return (
		<div className="CartHeader" onClick={cartClickHandler}>
			<div className="CartHeader__num">
				<span className="CartHeader__num-text">{ordersNum}</span>
			</div>

			{cartSmall ? null : <p className="CartHeader__text">My order</p>}

			<p className="CartHeader__price">
				{"$ " + (fullPrice / 100).toFixed(2)}
			</p>

			{modalEl}
		</div>
	);
};
export default CartHeader;
