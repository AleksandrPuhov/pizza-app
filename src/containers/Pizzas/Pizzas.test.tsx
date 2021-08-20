import { screen } from "@testing-library/react";

import renderWithRedux from "../../util/RenderWithRedux";

import Pizzas from "./Pizzas";

describe("Pizzas", () => {
	test("render Pizzas text", () => {
		renderWithRedux(<Pizzas />);
		expect(screen.getByText(/Sorting/i)).toBeInTheDocument();
	});
});
