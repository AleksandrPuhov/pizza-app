import { useEffect, useRef, useState } from "react";

import Wrapper from "../Wrapper/Wrapper";
import Logo from "../../components/Logo/Logo";
import Person from "../../components/Person/Person";
import Nav from "../../components/Nav/Nav";
import Cart from "../../components/Cart/Cart";

const Header = () => {
	const [menuFixed, setMenuFixed] = useState(false);

	const refHeaderBottom = useRef<HTMLDivElement | null>(null);

	const scrollEvent = () => {
		setMenuFixed(window.pageYOffset >= refHeaderBottom.current!.offsetTop);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollEvent);
		return () => {
			window.removeEventListener("scroll", scrollEvent);
		};
	});

	const classNameCalc: string =
		"Header-bottom__inner" + (menuFixed ? " Header--fixed" : "");

	return (
		<header className="Header">
			<div className="Header-top">
				<Wrapper>
					<div className="Header-top__inner">
						<Logo />
						{menuFixed ? null : <Person />}
					</div>
				</Wrapper>
			</div>
			<div className="Header-bottom" ref={refHeaderBottom}>
				<div className={classNameCalc}>
					<Wrapper>
						<div className="Header-navbar">
							<div className="Header-navbar__left">
								{menuFixed ? (
									<Logo logoSmall={menuFixed} />
								) : null}
								<Nav />
							</div>
							<div className="Header-navbar__right">
								<Cart cartSmall={menuFixed} />
								{menuFixed ? (
									<Person personSmall={menuFixed} />
								) : null}
							</div>
						</div>
					</Wrapper>
				</div>
			</div>
		</header>
	);
};

export default Header;
