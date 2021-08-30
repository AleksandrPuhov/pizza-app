import { render, screen } from "@testing-library/react";

import Area from "./Area";

describe("Area", () => {
	test("render Area text", () => {
		render(<Area />);
		expect(screen.getByText(/Delivery Area/i)).toBeInTheDocument();
	});
});
