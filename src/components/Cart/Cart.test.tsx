import { screen } from "@testing-library/react";

import renderWithRedux from "../../util/RenderWithRedux";

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
				orderListReduser: { orders: [1, 2, 3], fullPrise: 1000 },
			},
		});
		expect(screen.getByText("3")).toBeInTheDocument();
		expect(screen.getByText(/10.00/i)).toBeInTheDocument();
	});
});
