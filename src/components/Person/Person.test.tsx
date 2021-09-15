import { fireEvent, screen } from "@testing-library/react";

import renderWithRouterAndRedux from "../../util/renderWithReduxAndRouter";

import Person from "./Person";

describe("Person", () => {
	test("checks initial state", () => {
		const { container } = renderWithRouterAndRedux(<Person />);

		expect(container.querySelector(".Person-bell")).toBeInTheDocument();
		expect(
			container.querySelector(".Person-avatar__img")
		).toBeInTheDocument();
		expect(container.querySelector(".Person-avatar__character")).toBeNull();
		expect(container.querySelector(".Person-info")).toBeInTheDocument();
	});

	test("render Person small", () => {
		const { container } = renderWithRouterAndRedux(
			<Person personSmall={true} />
		);
		expect(container.querySelector(".Person-bell")).toBeNull();
		expect(container.querySelector(".Person-avatar__img")).toBeNull();
		expect(
			container.querySelector(".Person-avatar__character")
		).toBeInTheDocument();
		expect(container.querySelector(".Person-info")).toBeNull();
	});

	test("Person normal check store state work", () => {
		const { container } = renderWithRouterAndRedux(<Person />, {
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

		expect(screen.getAllByText(/RandomName/)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/User123/)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/7/)[0]).toBeInTheDocument();
		expect(container.querySelector(".Person-avatar")).toHaveStyle(
			`background-color: #dddfff`
		);
	});

	test("Person normal check notification = 0", () => {
		const { container } = renderWithRouterAndRedux(<Person />, {
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

		expect(screen.getAllByText(/RandomName/)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/User123/)[0]).toBeInTheDocument();
		expect(container.querySelector(".Notif")).toBeNull();
		expect(container.querySelector(".Person-avatar")).toHaveStyle(
			`background-color: #dddfff`
		);
	});

	test("Person small check store state work", () => {
		const { container } = renderWithRouterAndRedux(
			<Person personSmall={true} />,
			{
				preloadedState: {
					personReduser: {
						name: "RandomName",
						status: "User123",
						notificationsNum: 7,
						avatarBGColor: "#dddfff",
						avatarTextColor: "#999000",
					},
				},
			}
		);
		expect(screen.getByText("R")).toBeInTheDocument();
		expect(
			container.querySelector(".Person-avatar__character")
		).toHaveStyle(`color: #999000`);
	});

	test("Show and hide person modal", () => {
		const { container } = renderWithRouterAndRedux(<Person />, {
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

		const personEl = container.firstChild;
		const personMenuBg = container.querySelector(".Person-menu__bg");
		const personMenu = container.querySelector(".Person-menu");

		expect(personMenuBg).toHaveStyle("display: none");
		expect(personMenu).toHaveStyle("display: none");

		if (personEl !== null) {
			fireEvent.click(personEl);
		}
		expect(personMenuBg).toHaveStyle("display: block");
		expect(personMenu).toHaveStyle("display: block");

		if (personMenuBg !== null) {
			fireEvent.click(personMenuBg);
		}

		expect(personMenuBg).toHaveStyle("display: none");
		expect(personMenu).toHaveStyle("display: none");
	});
});
