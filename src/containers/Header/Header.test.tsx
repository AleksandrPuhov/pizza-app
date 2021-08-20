import { fireEvent } from "@testing-library/react";

import renderWithRedux from "../../util/RenderWithRedux";

import Header from "./Header";

describe("Header", () => {
	test("render Header with initial state", () => {
		const { container } = renderWithRedux(<Header />);
		expect(
			container.querySelector(".Header-top__inner .Logo")
		).toBeInTheDocument();
		expect(
			container.querySelector(".Header-top__inner .Person")
		).toBeInTheDocument();
		expect(
			container.querySelector(".Header-bottom__inner")
		).not.toHaveClass("Header--fixed");
		expect(
			container.querySelector(".Header-navbar__left .Logo")
		).toBeNull();
		expect(
			container.querySelector(".Header-navbar__right .Person")
		).toBeNull();
	});

	test("render Header with scroll", () => {
		const { container } = renderWithRedux(<Header />);

		const elTop = container
			.querySelector(".Header-bottom__inner")!
			.getBoundingClientRect().top;

		fireEvent.scroll(window, { target: { pageYOffset: elTop - 1 } });

		expect(
			container.querySelector(".Header-bottom__inner")
		).not.toHaveClass("Header--fixed");

		fireEvent.scroll(window, { target: { pageYOffset: elTop + 1 } });

		expect(container.querySelector(".Header-bottom__inner")).toHaveClass(
			"Header--fixed"
		);
		expect(
			container.querySelector(".Header-navbar__left .Logo")
		).toBeInTheDocument();
		expect(
			container.querySelector(".Header-navbar__right .Person")
		).toBeInTheDocument();
	});
});
