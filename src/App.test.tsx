import { render } from "@testing-library/react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./App";

describe("App", () => {
	test("renders App component", () => {
		const { container } = render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		expect(container.querySelector(".Header")).toBeInTheDocument();
		expect(container.querySelector(".Pizzas")).toBeInTheDocument();
		expect(container.querySelector(".Footer")).toBeInTheDocument();
	});
});
