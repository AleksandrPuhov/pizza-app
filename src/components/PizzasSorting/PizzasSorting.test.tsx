import { fireEvent, screen } from "@testing-library/react";

import renderWithRedux from "../../util/RenderWithRedux";

import PizzasSorting from "./PizzasSorting";

describe("PizzasSorting", () => {
	test("render PizzasSorting initial state", () => {
		renderWithRedux(<PizzasSorting />);

		expect(screen.getByText(/All/i)).toHaveClass(
			"PizzasSorting-btn--select"
		);
		expect(screen.getByText(/Hot/i)).not.toHaveClass(
			"PizzasSorting-btn--select"
		);
		expect(screen.getByText(/Meat/i)).not.toHaveClass(
			"PizzasSorting-btn--select"
		);
		expect(screen.getByText(/Bbq sauce/i)).not.toHaveClass(
			"PizzasSorting-btn--select"
		);
		expect(screen.getByText(/Mushrooms/i)).not.toHaveClass(
			"PizzasSorting-btn--select"
		);
	});

	test("PizzasSorting test clicked changes", () => {
		renderWithRedux(<PizzasSorting />);

		const spanAll = screen.getByText(/All/i);
		const spanHot = screen.getByText(/Hot/i);
		const spanMeat = screen.getByText(/Meat/i);
		const spanBbq = screen.getByText(/Bbq sauce/i);
		const spanMushrooms = screen.getByText(/Mushrooms/i);

		fireEvent.click(spanHot);
		expect(spanAll).not.toHaveClass("PizzasSorting-btn--select");
		expect(spanHot).toHaveClass("PizzasSorting-btn--select");

		fireEvent.click(spanHot);
		expect(spanAll).toHaveClass("PizzasSorting-btn--select");
		expect(spanHot).not.toHaveClass("PizzasSorting-btn--select");

		fireEvent.click(spanMeat);
		expect(spanAll).not.toHaveClass("PizzasSorting-btn--select");
		expect(spanMeat).toHaveClass("PizzasSorting-btn--select");

		fireEvent.click(spanMeat);
		expect(spanAll).toHaveClass("PizzasSorting-btn--select");
		expect(spanMeat).not.toHaveClass("PizzasSorting-btn--select");

		fireEvent.click(spanBbq);
		expect(spanAll).not.toHaveClass("PizzasSorting-btn--select");
		expect(spanBbq).toHaveClass("PizzasSorting-btn--select");

		fireEvent.click(spanBbq);
		expect(spanAll).toHaveClass("PizzasSorting-btn--select");
		expect(spanBbq).not.toHaveClass("PizzasSorting-btn--select");

		fireEvent.click(spanMushrooms);
		expect(spanAll).not.toHaveClass("PizzasSorting-btn--select");
		expect(spanMushrooms).toHaveClass("PizzasSorting-btn--select");

		fireEvent.click(spanMushrooms);
		expect(spanAll).toHaveClass("PizzasSorting-btn--select");
		expect(spanMushrooms).not.toHaveClass("PizzasSorting-btn--select");

		fireEvent.click(spanHot);
		fireEvent.click(spanBbq);
		fireEvent.click(spanMushrooms);
		expect(spanAll).not.toHaveClass("PizzasSorting-btn--select");
		expect(spanHot).toHaveClass("PizzasSorting-btn--select");
		expect(spanMeat).not.toHaveClass("PizzasSorting-btn--select");
		expect(spanBbq).toHaveClass("PizzasSorting-btn--select");
		expect(spanMushrooms).toHaveClass("PizzasSorting-btn--select");

		fireEvent.click(spanAll);
		expect(spanAll).toHaveClass("PizzasSorting-btn--select");
		expect(spanHot).not.toHaveClass("PizzasSorting-btn--select");
		expect(spanMeat).not.toHaveClass("PizzasSorting-btn--select");
		expect(spanBbq).not.toHaveClass("PizzasSorting-btn--select");
		expect(spanMushrooms).not.toHaveClass("PizzasSorting-btn--select");
	});
});
