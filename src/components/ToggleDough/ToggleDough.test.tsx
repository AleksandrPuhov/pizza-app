import { fireEvent, render, screen } from "@testing-library/react";
import ToggleDough from "./ToggleDough";

describe("ToggleDough", () => {
	test("render ToggleDough initial state", () => {
		const changeDough = jest.fn();
		render(<ToggleDough changeDoughClick={changeDough} />);

		expect(screen.getByRole("radio", { name: "Original" })).toBeChecked();
		expect(screen.getByRole("radio", { name: "Thin" })).not.toBeChecked();
	});

	test("ToggleDough test clicked changes", () => {
		const changeDough = jest.fn();
		render(<ToggleDough changeDoughClick={changeDough} />);

		const originalCheck = screen.getByText(/Original/i);
		const thinCheck = screen.getByText(/Thin/i);

		expect(screen.getByRole("radio", { name: "Original" })).toBeChecked();
		expect(screen.getByRole("radio", { name: "Thin" })).not.toBeChecked();

		fireEvent.click(thinCheck);
		expect(
			screen.getByRole("radio", { name: "Original" })
		).not.toBeChecked();
		expect(screen.getByRole("radio", { name: "Thin" })).toBeChecked();

		fireEvent.click(originalCheck);
		expect(screen.getByRole("radio", { name: "Original" })).toBeChecked();
		expect(screen.getByRole("radio", { name: "Thin" })).not.toBeChecked();
	});
});
