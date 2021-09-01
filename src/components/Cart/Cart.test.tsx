import { screen } from "@testing-library/react";

import renderWithRedux from "../../util/renderWithRedux";

import Cart from "./Cart";

describe("Cart", () => {
	test("checks initial state", () => {
		renderWithRedux(<Cart />);
		expect(screen.getByText(/My order/i)).toBeInTheDocument();
		expect(screen.getByText("0")).toBeInTheDocument();
		expect(screen.getByText(/0.00/i)).toBeInTheDocument();
	});

	test("not render Cart text", () => {
		renderWithRedux(<Cart cartSmall={true} />);
		expect(screen.queryByText(/My order/i)).toBeNull();
	});

	test("check store state work", () => {
		renderWithRedux(<Cart />, {
			preloadedState: {
				orderListReduser: {
					orders: [
						{ id: 1, doughSelected: 0, sizeSelected: 1, num: 3 },
						{ id: 2, doughSelected: 0, sizeSelected: 1, num: 2 },
					],
					fullPrice: 1000,
				},
			},
		});
		expect(screen.getByText("5")).toBeInTheDocument();
		expect(screen.getByText(/10.00/i)).toBeInTheDocument();
	});
});
