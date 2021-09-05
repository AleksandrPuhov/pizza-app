import { render, screen } from "@testing-library/react";

import Cart from "./Cart";

describe("Cart", () => {
	test("render Cart text", () => {
		render(<Cart />);
		expect(screen.getByText(/Cart/i)).toBeInTheDocument();
	});
});
