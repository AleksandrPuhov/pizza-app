import { fireEvent, render, screen } from "@testing-library/react";
import ToggleSize from "./ToggleSize";

describe("ToggleSize", () => {
	test("render ToggleSize initial state", () => {
		const changeSize = jest.fn();
		render(<ToggleSize changeSizeClick={changeSize} />);

		expect(screen.getByRole("radio", { name: '10"' })).not.toBeChecked();
		expect(screen.getByRole("radio", { name: '12"' })).toBeChecked();
		expect(screen.getByRole("radio", { name: '14"' })).not.toBeChecked();
	});

	test("ToggleSize test clicked changes", () => {
		const changeSize = jest.fn();
		render(<ToggleSize changeSizeClick={changeSize} />);

		const labelCheck10 = screen.getByText(/10/i);
		const labelCheck12 = screen.getByText(/12/i);
		const labelCheck14 = screen.getByText(/14/i);

		expect(screen.getByRole("radio", { name: '10"' })).not.toBeChecked();
		expect(screen.getByRole("radio", { name: '12"' })).toBeChecked();
		expect(screen.getByRole("radio", { name: '14"' })).not.toBeChecked();

		fireEvent.click(labelCheck10);
		expect(screen.getByRole("radio", { name: '10"' })).toBeChecked();
		expect(screen.getByRole("radio", { name: '12"' })).not.toBeChecked();
		expect(screen.getByRole("radio", { name: '14"' })).not.toBeChecked();

		fireEvent.click(labelCheck12);
		expect(screen.getByRole("radio", { name: '10"' })).not.toBeChecked();
		expect(screen.getByRole("radio", { name: '12"' })).toBeChecked();
		expect(screen.getByRole("radio", { name: '14"' })).not.toBeChecked();

		fireEvent.click(labelCheck14);
		expect(screen.getByRole("radio", { name: '10"' })).not.toBeChecked();
		expect(screen.getByRole("radio", { name: '12"' })).not.toBeChecked();
		expect(screen.getByRole("radio", { name: '14"' })).toBeChecked();
	});
});
