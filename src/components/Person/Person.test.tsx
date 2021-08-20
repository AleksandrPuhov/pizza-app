import { screen } from "@testing-library/react";

import renderWithRedux from "../../util/RenderWithRedux";

import Person from "./Person";

describe("Person", () => {
	test("checks initial state", () => {
		const { container } = renderWithRedux(<Person />);

		expect(container.querySelector(".Person-bell")).toBeInTheDocument();
		expect(
			container.querySelector(".Person-avatar__img")
		).toBeInTheDocument();
		expect(container.querySelector(".Person-avatar__character")).toBeNull();
		expect(container.querySelector(".Person-info")).toBeInTheDocument();
	});

	test("render Person small", () => {
		const { container } = renderWithRedux(<Person personSmall={true} />);
		expect(container.querySelector(".Person-bell")).toBeNull();
		expect(container.querySelector(".Person-avatar__img")).toBeNull();
		expect(
			container.querySelector(".Person-avatar__character")
		).toBeInTheDocument();
		expect(container.querySelector(".Person-info")).toBeNull();
	});

	test("Person normal check store state work", () => {
		const { container } = renderWithRedux(<Person />, {
			preloadedState: {
				personReduser: {
					name: "RandomName",
					status: "User123",
					notificationsNum: 7,
					avatarBGColor: "#dddfff",
					avatarTextColor: "#999000",
				},
			},
		});

		expect(screen.getByText(/RandomName/)).toBeInTheDocument();
		expect(screen.getByText(/User123/)).toBeInTheDocument();
		expect(screen.getByText(/7/)).toBeInTheDocument();
		expect(container.querySelector(".Person-avatar")).toHaveStyle(
			`background-color: #dddfff`
		);
	});

	test("Person normal check notification = 0", () => {
		const { container } = renderWithRedux(<Person />, {
			preloadedState: {
				personReduser: {
					name: "RandomName",
					status: "User123",
					notificationsNum: 0,
					avatarBGColor: "#dddfff",
					avatarTextColor: "#999000",
				},
			},
		});

		expect(screen.getByText(/RandomName/)).toBeInTheDocument();
		expect(screen.getByText(/User123/)).toBeInTheDocument();
		expect(container.querySelector(".Notif")).toBeNull();
		expect(container.querySelector(".Person-avatar")).toHaveStyle(
			`background-color: #dddfff`
		);
	});

	test("Person small check store state work", () => {
		const { container } = renderWithRedux(<Person personSmall={true} />, {
			preloadedState: {
				personReduser: {
					name: "RandomName",
					status: "User123",
					notificationsNum: 7,
					avatarBGColor: "#dddfff",
					avatarTextColor: "#999000",
				},
			},
		});
		expect(screen.queryByText(/RandomName/)).toBeNull();
		expect(screen.getByText(/R/)).toBeInTheDocument();
		expect(screen.queryByText(/User123/)).toBeNull();
		expect(screen.queryByText(/7/)).toBeNull();
		expect(
			container.querySelector(".Person-avatar__character")
		).toHaveStyle(`color: #999000`);
	});
});
