import { ReactElement } from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

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
	const testHistory = createMemoryHistory({ initialEntries: [route] });

	const Wrapper: React.FC<{}> = ({ children }) => {
		return (
			<Provider store={store}>
				<Router history={testHistory}>{children}</Router>
			</Provider>
		);
	};
	return {
		...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
		store,
		history: testHistory,
	};
};

export default renderWithRouterAndRedux;
