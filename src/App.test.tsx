import App from "./App";
import renderWithRouterAndRedux from "./util/renderWithReduxAndRouter";

describe("App", () => {
	test("renders App component", () => {
		const { container } = renderWithRouterAndRedux(<App />);

		expect(container.querySelector(".Header")).toBeInTheDocument();
		expect(container.querySelector(".Pizzas")).toBeInTheDocument();
		expect(container.querySelector(".Footer")).toBeInTheDocument();
	});
});
