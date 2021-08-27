import { fireEvent, screen } from "@testing-library/react";

import renderWithRedux from "../../util/RenderWithRedux";

import Pizza from "./Pizza";

describe("Pizzas", () => {
	test("render Pizzas with inital state", () => {
		renderWithRedux(<Pizza />, {
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

		expect(screen.getByAltText("Pizza")).toHaveAttribute(
			"src",
			"/pizzas-img/111.jpg"
		);
		expect(screen.getByText(/Test Name 1/i)).toBeInTheDocument();
		expect(screen.getByText(/Testing text info 1/i)).toBeInTheDocument();
		expect(screen.getByText(/20.00/i)).toBeInTheDocument();
	});

	test("Pizzas test sorting changes", () => {
		renderWithRedux(<Pizza />, {
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
						{
							id: 2,
							imgName: "111.jpg",
							name: "Name2",
							textInfo: "Testing text info",
							price: [1000, 2000, 3000],
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
			},
		});

		const spanAll = screen.getByText(/All/i);
		const spanMeat = screen.getByText(/Meat/i);
		const spanMushrooms = screen.getByText(/Mushrooms/i);

		expect(spanAll).toHaveClass("PizzasSorting-btn--select");
		expect(screen.getByText(/Name1/i)).toBeInTheDocument();
		expect(screen.getByText(/Name2/i)).toBeInTheDocument();

		fireEvent.click(spanMeat);
		expect(spanMeat).toHaveClass("PizzasSorting-btn--select");
		expect(screen.queryByText(/Name1/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/Name2/i)).not.toBeInTheDocument();

		fireEvent.click(spanMeat);
		fireEvent.click(spanMushrooms);
		expect(spanMushrooms).toHaveClass("PizzasSorting-btn--select");
		expect(screen.queryByText(/Name1/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/Name2/i)).toBeInTheDocument();
	});
});
