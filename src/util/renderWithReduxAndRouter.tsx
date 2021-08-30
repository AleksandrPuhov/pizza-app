import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import personReduser from "../store/reducers/personReduser";
import orderListReduser from "../store/reducers/orderListReduser";
import pizzasListReduser from "../store/reducers/pizzasListReduser";

const renderWithRouterAndRedux = (
	ui: ReactElement,
	{
		preloadedState,
		store = configureStore({
			reducer: {
				orderListReduser: orderListReduser,
				personReduser: personReduser,
				pizzasListReduser: pizzasListReduser,
			},
			preloadedState,
		}),
		route = "/",
		...renderOptions
	}: any = {}
) => {
	window.history.pushState({}, "Test page", route);

	const Wrapper: React.FC<{}> = ({ children }) => {
		return (
			<Provider store={store}>
				<BrowserRouter>{children}</BrowserRouter>
			</Provider>
		);
	};
	return { ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }), store };
};

export default renderWithRouterAndRedux;
