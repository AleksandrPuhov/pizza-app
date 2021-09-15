import { fireEvent, screen } from "@testing-library/react";

import renderWithRouterAndRedux from "../../util/renderWithReduxAndRouter";

import CartList from "./CartList";

describe("CartList", () => {
	const preloadedState = {
		pizzasListReduser: {
			pizzasList: [
				{
					id: 1,
					imgName: "111.jpg",
					name: "Name1",
					textInfo: "Testing text info",
					price: [1000, 2000, 3000],
					sortItem: {
						hot: false,
						bbq: false,
						mushrooms: false,
						meat: false,
					},
				},
				{
					id: 2,
					imgName: "111.jpg",
					name: "Name2",
					textInfo: "Testing text info",
					price: [1100, 2200, 3300],
					sortItem: {
						hot: true,
						bbq: false,
						mushrooms: true,
						meat: false,
					},
				},
			],
			sortingSelected: {
				hot: false,
				bbq: false,
				mushrooms: false,
				meat: false,
			},
		},
		orderListReduser: {
			orders: [
				{
					id: 1,
					doughSelected: 1,
					sizeSelected: 1,
					num: 1,
				},
				{
					id: 2,
					doughSelected: 0,
					sizeSelected: 1,
					num: 2,
				},
			],
			fullPrice: 6400,
		},
	};

	test("checks initial state", () => {
		renderWithRouterAndRedux(<CartList />, {
			preloadedState: preloadedState,
		});

		expect(screen.getByText(/Name1/i)).toBeInTheDocument();
		expect(screen.getByText(/12", Thin/i)).toBeInTheDocument();
		expect(screen.getByText("1 x $ 20.00")).toBeInTheDocument();
		expect(screen.getByText("$ 20.00")).toBeInTheDocument();

		expect(screen.getByText(/Name2/i)).toBeInTheDocument();
		expect(screen.getByText(/12", Original/i)).toBeInTheDocument();
		expect(screen.getByText("2 x $ 22.00")).toBeInTheDocument();
		expect(screen.getByText("$ 44.00")).toBeInTheDocument();
	});

	test("checks delete order item", () => {
		const { container } = renderWithRouterAndRedux(<CartList />, {
			preloadedState: preloadedState,
		});

		expect(screen.getByText(/Name1/i)).toBeInTheDocument();
		expect(screen.getByText(/Name2/i)).toBeInTheDocument();

		fireEvent.click(container.querySelectorAll(".CartList-item__del")[0]);

		expect(screen.queryByText(/Name1/i)).not.toBeInTheDocument();
		expect(screen.getByText(/Name2/i)).toBeInTheDocument();
	});

	test("Empty order list", () => {
		const { container } = renderWithRouterAndRedux(<CartList />, {
			preloadedState: {
				pizzasListReduser: {
					pizzasList: [
						{
							id: 1,
							imgName: "111.jpg",
							name: "Name1",
							textInfo: "Testing text info",
							price: [1000, 2000, 3000],
							sortItem: {
								hot: false,
								bbq: false,
								mushrooms: false,
								meat: false,
							},
						},
					],
					sortingSelected: {
						hot: false,
						bbq: false,
						mushrooms: false,
						meat: false,
					},
				},
				orderListReduser: {
					orders: [
						{
							id: 2,
							doughSelected: 1,
							sizeSelected: 1,
							num: 1,
						},
					],
					fullPrice: 0,
				},
			},
		});
		expect(container.querySelector(".CartList-item")).toBeNull();
	});
});
