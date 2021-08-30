import { screen } from "@testing-library/react";

import renderWithRedux from "../../util/renderWithRedux";

import PizzasList from "./PizzasList";

describe("PizzasList", () => {
	test("render PizzasList with inital state", () => {
		renderWithRedux(<PizzasList />, {
			preloadedState: {
				pizzasListReduser: {
					pizzasList: [
						{
							id: 1,
							imgName: "111.jpg",
							name: "Test Name 1",
							textInfo: "Testing text info 1",
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
			},
		});

		expect(screen.getAllByAltText("Pizza")[0]).toHaveAttribute(
			"src",
			"/pizzas-img/111.jpg"
		);

		expect(screen.getByText(/Test Name 1/i)).toBeInTheDocument();
		expect(screen.getByText(/Testing text info 1/i)).toBeInTheDocument();
		expect(screen.getByText(/20.00/i)).toBeInTheDocument();
	});
	test("PizzasList with sorting", () => {
		renderWithRedux(<PizzasList />, {
			preloadedState: {
				pizzasListReduser: {
					pizzasList: [
						{
							id: 1,
							imgName: "111.jpg",
							name: "Name1",
							textInfo: "Testing text",
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
							imgName: "222.jpg",
							name: "Name2",
							textInfo: "Testing text",
							price: [1000, 2000, 3000],
							sortItem: {
								hot: false,
								bbq: true,
								mushrooms: false,
								meat: true,
							},
						},
					],
					sortingSelected: {
						hot: false,
						bbq: true,
						mushrooms: false,
						meat: true,
					},
				},
			},
		});

		expect(screen.queryByText(/Name1/i)).not.toBeInTheDocument();
		expect(screen.getByText(/Name2/i)).toBeInTheDocument();
	});

	test("PizzasList is empty", () => {
		renderWithRedux(<PizzasList />, {
			preloadedState: {
				pizzasListReduser: {
					pizzasList: [
						{
							id: 1,
							imgName: "111.jpg",
							name: "Name1",
							textInfo: "Testing text",
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
						bbq: true,
						mushrooms: false,
						meat: true,
					},
				},
			},
		});

		expect(screen.queryByText(/Name1/i)).not.toBeInTheDocument();
		expect(
			screen.queryByText(/No Pizzas found with this filters/i)
		).toBeInTheDocument();
	});
});
