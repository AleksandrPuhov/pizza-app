import { fireEvent, screen } from "@testing-library/react";

import renderWithRouterAndRedux from "../../util/renderWithReduxAndRouter";

import PersonMenu from "./PersonMenu";

describe("PersonMenu", () => {
	test("checks initial state", () => {
		const closeClick = jest.fn();
		const { container } = renderWithRouterAndRedux(
			<PersonMenu closeClickHandler={closeClick} />
		);

		expect(
			container.querySelector(".PersonMenu__user-img")
		).toBeInTheDocument();
		expect(
			container.querySelector(".PersonMenu__user-name")
		).toBeInTheDocument();
		expect(
			container.querySelector(".PersonMenu__user-status")
		).toBeInTheDocument();
	});

	test("Check store state work", () => {
		const closeClick = jest.fn();
		const { container } = renderWithRouterAndRedux(
			<PersonMenu closeClickHandler={closeClick} />,
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

		expect(screen.getAllByText(/RandomName/)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/User123/)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/7/)[0]).toBeInTheDocument();
		expect(container.querySelector(".PersonMenu__user-img")).toHaveStyle(
			`background-color: #dddfff`
		);
	});

	test("Check notification = 0", () => {
		const closeClick = jest.fn();
		const { container } = renderWithRouterAndRedux(
			<PersonMenu closeClickHandler={closeClick} />,
			{
				preloadedState: {
					personReduser: {
						name: "RandomName",
						status: "User123",
						notificationsNum: 0,
						avatarBGColor: "#dddfff",
						avatarTextColor: "#999000",
					},
				},
			}
		);

		expect(screen.getAllByText(/RandomName/)[0]).toBeInTheDocument();
		expect(container.querySelector(".Notif")).toBeNull();
	});

	test("Click close button", () => {
		const closeClick = jest.fn();
		const { container } = renderWithRouterAndRedux(
			<PersonMenu closeClickHandler={closeClick} />
		);

		const closeBtn = container.querySelector(".PersonMenu__btn");

		if (closeBtn !== null) {
			fireEvent.click(closeBtn);
		}
		expect(closeClick).toHaveBeenCalledTimes(1);
	});

	test("Person menu navigation test", () => {
		const closeClick = jest.fn();
		const { history } = renderWithRouterAndRedux(
			<PersonMenu closeClickHandler={closeClick} />,
			{ route: "/some-route" }
		);

		expect(history.location.pathname).toEqual("/some-route");

		fireEvent.click(screen.getByText(/Profile/i));

		expect(history.location.pathname).toEqual("/profile");

		fireEvent.click(screen.getByText(/Log out/i));

		expect(history.location.pathname).toEqual("/");
	});
});
