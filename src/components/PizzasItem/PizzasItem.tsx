type pizzaItemType = {
    img: string;
    name: string;
    text: string;
    pizzaDough: string;
    pizzaSize: string;
    price: number;
};

const PizzasItem = () => {
    const doughType: string[] = ['Original', 'Thin'];
    const sizeType: string[] = ['10"', '12"', '14"'];

    const pizzaItem: pizzaItemType = {
        img: 'pepperoni-img.jpg',
        name: 'Pepperoni',
        text: 'Marinara sauce, extra mozzarella, double pepperoni',
        pizzaDough: doughType[0],
        pizzaSize: sizeType[0],
        price: 1599,
    };

    return (
        <li className="PizzasItem">
            <img
                className="PizzasItem__img"
                src={'/pizzas-img/' + pizzaItem.img}
                alt="Pizza"
            />
            <h3 className="PizzasItem__name">{pizzaItem.name}</h3>
            <p className="PizzasItem__info">{pizzaItem.text}</p>
            <p>10" 12" 14"</p>
            <p>Original Thin</p>
            <p>{(pizzaItem.price / 100).toFixed(2) + ' $'}</p>
            <p>add to cart (2)</p>
        </li>
    );
};
export default PizzasItem;
