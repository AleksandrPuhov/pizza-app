import { fireEvent, screen } from "@testing-library/react";

import renderWithRedux from "../../util/renderWithRedux";

import PizzasItem from "./PizzasItem";

describe("PizzasItem", () => {
	test("render PizzasItem with initial state", () => {
		const newItem = {
			id: 1,
			imgName: "pepperoni.jpg",
			name: "Test Name",
			textInfo: "Testing text info",
			price: [1111, 2222, 3333],
			sortItem: {
				hot: false,
				bbq: false,
				mushrooms: false,
				meat: false,
			},
		};

		renderWithRedux(<PizzasItem {...newItem} />);

		expect(screen.getByAltText("Pizza")).toHaveAttribute(
			"src",
			"/pizzas-img/pepperoni.jpg"
		);
		expect(screen.getByText(/Test Name/i)).toBeInTheDocument();
		expect(screen.getByText(/Testing text info/i)).toBeInTheDocument();
		expect(screen.getByText(/22.22/i)).toBeInTheDocument();
	});

	test("PizzasItem test change price", () => {
		const newItem = {
			id: 1,
			imgName: "pepperoni.jpg",
			name: "Test Name",
			textInfo: "Testing text info",
			price: [1111, 2222, 3333],
			sortItem: {
				hot: false,
				bbq: false,
				mushrooms: false,
				meat: false,
			},
		};

		renderWithRedux(<PizzasItem {...newItem} />);

		expect(screen.getByText(/22.22/i)).toBeInTheDocument();

		const labelCheck10 = screen.getByText(/10/i);
		const labelCheck12 = screen.getByText(/12/i);
		const labelCheck14 = screen.getByText(/14/i);

		fireEvent.click(labelCheck10);
		expect(screen.getByText(/11.11/i)).toBeInTheDocument();

		fireEvent.click(labelCheck12);
		expect(screen.getByText(/22.22/i)).toBeInTheDocument();

		fireEvent.click(labelCheck14);
		expect(screen.getByText(/33.33/i)).toBeInTheDocument();
	});

	test("Check added order to the store on click button", () => {
		const newItem = {
			id: 1,
			imgName: "pepperoni.jpg",
			name: "Test Name",
			textInfo: "Testing text info",
			price: [1111, 2222, 3333],
			sortItem: {
				hot: false,
				bbq: false,
				mushrooms: false,
				meat: false,
			},
		};

		const { store } = renderWithRedux(<PizzasItem {...newItem} />, {
			preloadedState: {
				orderListReduser: {
					orders: [],
					fullPrice: 0,
				},
				pizzasListReduser: {
					pizzasList: [newItem],
				},
			},
		});

		const labelCheck10 = screen.getByText(/10/i);
		const labelCheck14 = screen.getByText(/14/i);
		const originalCheck = screen.getByText(/Original/i);
		const thinCheck = screen.getByText(/Thin/i);

		const addBtn = screen.getByText(/Add to cart/i);

		fireEvent.click(labelCheck10);
		fireEvent.click(thinCheck);
		fireEvent.click(addBtn);

		expect(store.getState().orderListReduser.fullPrice).toEqual(1111);
		expect(store.getState().orderListReduser.orders[0].id).toEqual(1);
		expect(
			store.getState().orderListReduser.orders[0].doughSelected
		).toEqual(1);
		expect(
			store.getState().orderListReduser.orders[0].sizeSelected
		).toEqual(0);
		expect(store.getState().orderListReduser.orders[0].num).toEqual(1);

		fireEvent.click(labelCheck14);
		fireEvent.click(originalCheck);
		fireEvent.click(addBtn);

		expect(store.getState().orderListReduser.fullPrice).toEqual(4444);
		expect(store.getState().orderListReduser.orders[1].id).toEqual(1);
		expect(
			store.getState().orderListReduser.orders[1].doughSelected
		).toEqual(0);
		expect(
			store.getState().orderListReduser.orders[1].sizeSelected
		).toEqual(2);
		expect(store.getState().orderListReduser.orders[1].num).toEqual(1);
	});
});
