import { render as rtlRender } from "@testing-library/react";
import { ReactElement } from "react";
import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";

const renderWithRouter = (
	ui: ReactElement,
	{ route = "/", ...renderOptions } = {}
) => {
	const testHistory = createMemoryHistory({ initialEntries: [route] });

	const Wrapper: React.FC<{}> = ({ children }) => {
		return <Router history={testHistory}>{children}</Router>;
	};

	return {
		...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
		history: testHistory,
	};
};

export default renderWithRouter;
