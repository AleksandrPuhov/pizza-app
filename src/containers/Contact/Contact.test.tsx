import { render, screen } from "@testing-library/react";

import Contact from "./Contact";

describe("Contact", () => {
	test("render Footer text", () => {
		render(<Contact />);
		expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
	});
});
