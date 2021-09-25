import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/store";

import {
	personInfoName,
	personInfoStatus,
	personInfoNotifNum,
	personInfoAvBGColor,
} from "../../store/reducers/personReduser";

import UserAvatar from "../../assets/images/user-avatar.png";
import Notif from "../Notif/Notif";
import Nav from "../Nav/Nav";

type PersonMenuType = {
	closeClickHandler: () => void;
	windowsSmall?: boolean;
};

const PersonMenu = ({
	closeClickHandler,
	windowsSmall = false,
}: PersonMenuType) => {
	const name = useAppSelector(personInfoName);
	const avatarBGColor = useAppSelector(personInfoAvBGColor);
	const status = useAppSelector(personInfoStatus);
	const notificationsNum = useAppSelector(personInfoNotifNum);

	return (
		<div className="PersonMenu">
			<div className="PersonMenu__user">
				<img
					className="PersonMenu__user-img"
					src={UserAvatar}
					alt="Pizza Hot"
					style={{ backgroundColor: avatarBGColor }}
				/>
				<div className="PersonMenu__user-info">
					<p className="PersonMenu__user-name">{name}</p>
					<p className="PersonMenu__user-status">{status}</p>
				</div>
			</div>
			{windowsSmall ? (
				<Nav
					windowsSmall={windowsSmall}
					closeClickHandler={closeClickHandler}
				/>
			) : null}
			<ul className="PersonMenu__list">
				<li className="PersonMenu__list-item">
					<Link
						to={"/profile"}
						className="PersonMenu__list-ref"
						onClick={closeClickHandler}
					>
						Profile
						{notificationsNum > 0 ? (
							<Notif num={notificationsNum} centerPos={true} />
						) : null}
					</Link>
				</li>
				<li className="PersonMenu__list-item">
					<Link
						to={"/"}
						className="PersonMenu__list-ref"
						onClick={closeClickHandler}
					>
						Log out
					</Link>
				</li>
			</ul>
			<button
				className="PersonMenu__btn"
				onClick={closeClickHandler}
			></button>
		</div>
	);
};

export default PersonMenu;
