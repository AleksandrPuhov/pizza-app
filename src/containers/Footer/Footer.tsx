import Logo from "../../components/Logo/Logo";
import Wrapper from "../Wrapper/Wrapper";

import AppStoreImg from "../../assets/icons/appstore.png";
import GooglePlayImg from "../../assets/icons/googleplay.png";

import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";

const Footer = () => {
	return (
		<footer className="Footer">
			<Wrapper>
				<div className="Footer-info">
					<div className="Footer-info__logo">
						<Logo />
					</div>
					<div className="Footer-info__links">
						<p className="Footer-info__links-text">Find us in:</p>
						<div className="Footer-info__links-apps">
							<a
								href="/"
								target="_blank"
								className="Footer-info__links-apps-icon"
							>
								<img
									src={GooglePlayImg}
									alt="Google Play"
									className="Footer-info__links-apps-img"
								/>
							</a>
							<a
								href="/"
								target="_blank"
								className="Footer-info__links-apps-icon"
							>
								<img
									src={AppStoreImg}
									alt="App Store"
									className="Footer-info__links-apps-img"
								/>
							</a>
						</div>
						<p className="Footer-info__links-text">
							We are in social:
						</p>
						<div className="Footer-info__links-social">
							<a
								href="/"
								target="_blank"
								className="Footer-info__links-social-icon"
							>
								<Instagram className="Footer-info__links-social-img" />
							</a>
							<a
								href="/"
								target="_blank"
								className="Footer-info__links-social-icon"
							>
								<Facebook className="Footer-info__links-social-img" />
							</a>
						</div>
					</div>
				</div>
				<p className="Footer-bottom">PIZZA HOT © 2021</p>
			</Wrapper>
		</footer>
	);
};

export default Footer;
