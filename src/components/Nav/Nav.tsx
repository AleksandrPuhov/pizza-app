import { Link } from "react-router-dom";
import { navRefs } from "../../store/constants";

const Nav = () => {
	const navList = navRefs.map(({ text, link }, i) => {
		return (
			<li className="Nav-list__item" key={i}>
				<Link to={link} className="Nav-ref">
					{text}
				</Link>
			</li>
		);
	});

	return (
		<nav className="Nav">
			<ul className="Nav-list">{navList}</ul>
		</nav>
	);
};

export default Nav;
