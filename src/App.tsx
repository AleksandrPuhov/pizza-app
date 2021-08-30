import { Redirect, Route, Switch } from "react-router-dom";

import { navRefs } from "./store/constants";

import "./App.scss";

import Header from "./containers/Header/Header";
import Pizza from "./containers/Pizza/Pizza";
import Footer from "./containers/Footer/Footer";
import Area from "./containers/Area/Area";
import Contact from "./containers/Contact/Contact";
import About from "./containers/About/About";

const App = () => {
	return (
		<>
			<Header />

			<Switch>
				<Route exact path={navRefs[0].link}>
					<Pizza />
				</Route>
				<Route path={navRefs[1].link}>
					<Area />
				</Route>
				<Route path={navRefs[2].link}>
					<Contact />
				</Route>
				<Route path={navRefs[3].link}>
					<About />
				</Route>
				<Redirect to="/" />
			</Switch>

			<Footer />
		</>
	);
};

export default App;
