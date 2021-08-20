import Header from "./containers/Header/Header";
import Pizza from "./containers/Pizzas/Pizzas";
import Footer from "./containers/Footer/Footer";

import "./App.scss";

const App = () => {
	return (
		<>
			<Header />

			<Pizza />

			<Footer />
		</>
	);
};

export default App;
