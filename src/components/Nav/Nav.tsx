import { Link } from "react-router-dom";
import { navRefs } from "../../store/constants";

type NavType = {
	windowsSmall?: boolean;
	closeClickHandler?: () => void;
};

const Nav = ({ windowsSmall = false, closeClickHandler }: NavType) => {
	const ulClassName = windowsSmall
		? "Nav-list Nav-list--vertical"
		: "Nav-list";

	const clickHandler = () => {
		if (windowsSmall && closeClickHandler !== undefined) {
			closeClickHandler();
		}
	};

	const navList = navRefs.map(({ text, link }, i) => {
		return (
			<li className="Nav-list__item" key={i}>
				<Link to={link} className="Nav-ref" onClick={clickHandler}>
					{text}
				</Link>
			</li>
		);
	});

	return (
		<nav className="Nav">
			<ul className={ulClassName}>{navList}</ul>
		</nav>
	);
};

export default Nav;
