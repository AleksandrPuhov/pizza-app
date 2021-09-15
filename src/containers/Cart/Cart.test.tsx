import { render, screen } from "@testing-library/react";
import renderWithRedux from "../../util/renderWithRedux";

import Cart from "./Cart";

describe("Cart", () => {
	test("render Cart text", () => {
		renderWithRedux(<Cart />);
		expect(screen.getByText(/Cart/i)).toBeInTheDocument();
	});
});
