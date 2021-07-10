const Cart = () => {
    const ordersNum: number = 1;
    const fullPrice: number = 1320;

    return (
        <div className="Cart">
            <div className="Cart__num">
                <span className="Cart__num-text">{ordersNum}</span>
            </div>
            <p className="Cart__text">My order</p>
            <p className="Cart__price">{(fullPrice / 100).toFixed(2)} $</p>
        </div>
    );
};
export default Cart;