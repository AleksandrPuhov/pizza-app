import { useAppSelector } from "../../store/store";

import {
	fullPriceSelector,
	ordersNumSelector,
} from "../../store/reducers/orderListReduser";

import CartModal from "../CartModal/CartModal";

type cartProps = {
	cartSmall?: boolean;
};

const Cart = ({ cartSmall = false }: cartProps) => {
	const ordersNum = useAppSelector(ordersNumSelector);

	const fullPrice = useAppSelector(fullPriceSelector);

	return (
		<div className="Cart">
			<div className="Cart__num">
				<span className="Cart__num-text">{ordersNum}</span>
			</div>

			{cartSmall ? null : <p className="Cart__text">My order</p>}

			<p className="Cart__price">{"$ " + (fullPrice / 100).toFixed(2)}</p>

			<div className="Cart__modal">
				<div className="Cart__modal-wrapper">
					<CartModal />
				</div>
			</div>
		</div>
	);
};
export default Cart;
