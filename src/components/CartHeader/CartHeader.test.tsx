import { fireEvent, screen } from "@testing-library/react";

import renderWithRedux from "../../util/renderWithRedux";
import renderWithRouterAndRedux from "../../util/renderWithReduxAndRouter";

import CartHeader from "./CartHeader";

describe("CartHeader", () => {
	test("checks initial state", () => {
		renderWithRedux(<CartHeader />);
		expect(screen.getByText(/My order/i)).toBeInTheDocument();
		expect(screen.getByText("0")).toBeInTheDocument();
		expect(screen.getByText(/0.00/i)).toBeInTheDocument();
	});

	test("not render CartHeader text", () => {
		renderWithRedux(<CartHeader cartSmall={true} />);
		expect(screen.queryByText(/My order/i)).toBeNull();
	});

	test("check store state work", () => {
		renderWithRedux(<CartHeader />, {
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
		expect(screen.getAllByText(/10.00/i)[0]).toBeInTheDocument();
	});

	test("check rerouting on click", () => {
		const { container, history } = renderWithRouterAndRedux(
			<CartHeader />,
			{
				preloadedState: {
					orderListReduser: {
						orders: [
							{
								id: 1,
								doughSelected: 0,
								sizeSelected: 1,
								num: 3,
							},
							{
								id: 2,
								doughSelected: 0,
								sizeSelected: 1,
								num: 2,
							},
						],
						fullPrice: 1000,
					},
				},
				route: "/some-route",
			}
		);

		fireEvent.click(screen.getByText(/Total/i));

		expect(history.location.pathname).toEqual("/some-route");

		const el = container.firstChild;
		if (el !== null) {
			fireEvent.click(el);
		}

		expect(history.location.pathname).toEqual("/cart");
	});
});
