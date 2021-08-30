import { render, screen } from "@testing-library/react";
import renderWithRouter from "../../util/renderWithRouter";
import Nav from "./Nav";

describe("Nav", () => {
	test("render Nav list", () => {
		renderWithRouter(<Nav />);

		expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
		expect(screen.getByText(/Delivery Area/i)).toBeInTheDocument();
		expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
		expect(screen.getByText(/About Us/i)).toBeInTheDocument();
	});
});
