import { useAppSelector } from '../../store/store';

import {
    fullPriseSelector,
    ordersNumSelector,
} from '../../store/reducers/orderList';

type cartProps = {
    cartSmall?: boolean;
};

const Cart = ({ cartSmall = false }: cartProps) => {
    const ordersNum = useAppSelector(ordersNumSelector);

    const fullPrice = useAppSelector(fullPriseSelector);

    return (
        <div className="Cart">
            <div className="Cart__num">
                <span className="Cart__num-text">{ordersNum}</span>
            </div>

            {cartSmall ? null : <p className="Cart__text">My order</p>}

            <p className="Cart__price">{(fullPrice / 100).toFixed(2)} $</p>
        </div>
    );
};
export default Cart;
