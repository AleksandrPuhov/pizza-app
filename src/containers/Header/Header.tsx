import { useEffect, useRef, useState } from "react";

import Wrapper from "../Wrapper/Wrapper";
import Logo from "../../components/Logo/Logo";
import Person from "../../components/Person/Person";
import Nav from "../../components/Nav/Nav";
import CartHeader from "../../components/CartHeader/CartHeader";
import { tabletSize } from "../../store/constants";

const Header = () => {
	const [menuFixed, setMenuFixed] = useState(false);

	const [windowsSmall, setWindowsSmall] = useState(false);

	const refHeaderBottom = useRef<HTMLDivElement | null>(null);

	const scrollEvent = () => {
		setMenuFixed(window.pageYOffset >= refHeaderBottom.current!.offsetTop);
	};

	useEffect(() => {
		if (window.innerWidth < tabletSize) {
			if (!menuFixed) {
				setMenuFixed(true);
			}
			if (!windowsSmall) {
				setWindowsSmall(true);
			}
		} else {
			window.addEventListener("scroll", scrollEvent);

			if (windowsSmall) {
				setWindowsSmall(false);
			}

			return () => {
				window.removeEventListener("scroll", scrollEvent);
			};
		}
	}, [menuFixed, windowsSmall]);

	const classNameCalc: string =
		"Header-bottom__inner" + (menuFixed ? " Header--fixed" : "");

	return (
		<header className="Header">
			{windowsSmall ? null : (
				<div className="Header-top">
					<Wrapper>
						<div className="Header-top__inner">
							<Logo />
							{menuFixed ? null : <Person />}
						</div>
					</Wrapper>
				</div>
			)}
			<div className="Header-bottom" ref={refHeaderBottom}>
				<div className={classNameCalc}>
					<Wrapper>
						<div className="Header-navbar">
							<div className="Header-navbar__left">
								{menuFixed ? (
									<Logo logoSmall={menuFixed} />
								) : null}

								{windowsSmall ? null : <Nav />}
							</div>
							<div className="Header-navbar__right">
								<CartHeader cartSmall={menuFixed} />
								{menuFixed ? (
									<Person
										personSmall={menuFixed}
										windowsSmall={windowsSmall}
									/>
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
