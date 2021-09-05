import { render, screen } from "@testing-library/react";

import Profile from "./Profile";

describe("Profile", () => {
	test("render Profile text", () => {
		render(<Profile />);
		expect(screen.getByText(/Profile/i)).toBeInTheDocument();
	});
});
