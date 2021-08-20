import { render, screen } from "@testing-library/react";
import Wrapper from "./Wrapper";

describe("Wrapper", () => {
	test("Wrapper render children component", () => {
		render(
			<Wrapper>
				<p>Test text</p>
			</Wrapper>
		);
		expect(screen.getByText(/Test text/i)).toBeInTheDocument();
	});
});
