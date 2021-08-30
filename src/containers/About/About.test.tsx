import { render, screen } from "@testing-library/react";

import About from "./About";

describe("About", () => {
	test("render About text", () => {
		render(<About />);
		expect(screen.getByText(/About Us/i)).toBeInTheDocument();
	});
});
