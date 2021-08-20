import { ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import personReduser from "../store/reducers/personReduser";
import orderListReduser from "../store/reducers/orderListReduser";
import pizzasListReduser from "../store/reducers/pizzasListReduser";

const renderWithRedux = (
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
		...renderOptions
	}: any = {}
) => {
	const Wrapper: React.FC<{}> = ({ children }) => {
		return <Provider store={store}>{children}</Provider>;
	};
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderWithRedux;
