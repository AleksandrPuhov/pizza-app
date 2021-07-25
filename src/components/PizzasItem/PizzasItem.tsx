const PizzasItem = () => {
    const doughType: string[] = ['Original', 'Thin'];
    const sizeType: string[] = ['10"', '12"', '14"'];

    const pizzaItem = {
        img: '123',
        name: 'Pepperoni',
        text: 'Marinara sauce, extra mozzarella, double pepperoni',
        pizzaDough: 1,
        pizzaSize: 1,

    };

    return (
        <div className="PizzasItem">
            <img src="" alt="" />
            <p>Img</p>
            <p>Pepperoni</p>
            <p>Marinara sauce, extra mozzarella, double pepperoni</p>
            <p>Original Thin</p>
            <p>10" 12" 14"</p>
            <p>15.99 $</p>
            <p>add to cart (2)</p>
        </div>
    );
};
export default PizzasItem;
