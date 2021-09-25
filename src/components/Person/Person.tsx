import { useAppSelector } from "../../store/store";
import {
	personInfoName,
	personInfoStatus,
	personInfoNotifNum,
	personInfoAvBGColor,
	personInfoAvTextColor,
} from "../../store/reducers/personReduser";

import { ReactComponent as BellSvg } from "../../assets/icons/bell.svg";
import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";

import UserAvatar from "../../assets/images/user-avatar.png";
import Notif from "../Notif/Notif";
import PersonMenu from "../PersonMenu/PersonMenu";
import { useState } from "react";
import { useHistory } from "react-router-dom";

type personProps = {
	personSmall?: boolean;
	windowsSmall?: boolean;
};

const Person = ({ personSmall = false, windowsSmall = false }: personProps) => {
	const name = useAppSelector(personInfoName);
	const status = useAppSelector(personInfoStatus);
	const notificationsNum = useAppSelector(personInfoNotifNum);
	const avatarBGColor = useAppSelector(personInfoAvBGColor);
	const avatarTextColor = useAppSelector(personInfoAvTextColor);

	const [showModal, setShowModal] = useState(false);

	const history = useHistory();

	const personNotifBtnHandler = () => {
		history.push("/profile");
	};

	const personBell: JSX.Element = (
		<div className="Person-bell" onClick={personNotifBtnHandler}>
			{notificationsNum > 0 ? <Notif num={notificationsNum} /> : null}
			<div className="Person-bell__icon">
				<BellSvg />
			</div>
		</div>
	);

	const personInfo: JSX.Element = (
		<div className="Person-info">
			<p className="Person-info__name">{name}</p>
			<p className="Person-info__status">{status}</p>
		</div>
	);

	const personAvatarImg: JSX.Element = (
		<img className="Person-avatar__img" src={UserAvatar} alt="Pizza Hot" />
	);

	const personAvatarCharacter: JSX.Element = (
		<p
			className="Person-avatar__character"
			style={{ color: avatarTextColor }}
		>
			{name.charAt(0).toUpperCase()}
		</p>
	);

	const personCickHandler = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<div className="Person">
				{personSmall ? null : personBell}

				<div className="Person-user" onClick={personCickHandler}>
					<div
						className="Person-avatar"
						style={{ backgroundColor: avatarBGColor }}
					>
						{personSmall ? personAvatarCharacter : personAvatarImg}
					</div>
					{personSmall ? null : personInfo}
					<div
						className="Person-arrowDown"
						style={{
							transform: showModal
								? "rotateX(180deg)"
								: "rotateX(0deg)",
						}}
					>
						<DownArrow />
					</div>
				</div>
			</div>
			<div
				className="Person-menu__bg"
				style={{ display: showModal ? "block" : "none" }}
				onClick={personCickHandler}
			/>
			<div
				className="Person-menu"
				style={{
					display: showModal ? "block" : "none",
					top: personSmall ? "117%" : "85%",
				}}
			>
				<PersonMenu
					closeClickHandler={personCickHandler}
					windowsSmall={windowsSmall}
				/>
			</div>
		</>
	);
};
export default Person;
