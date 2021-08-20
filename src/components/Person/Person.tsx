import { ReactComponent as BellSvg } from "../../assets/icons/bell.svg";
import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";
import { useAppSelector } from "../../store/store";
import {
	personInfoName,
	personInfoStatus,
	personInfoNotifNum,
	personInfoAvBGColor,
	personInfoAvTextColor,
} from "../../store/reducers/personReduser";

import UserAvatar from "../../assets/images/user-avatar.png";
import Notif from "../Notif/Notif";

type personProps = {
	personSmall?: boolean;
};

const Person = ({ personSmall = false }: personProps) => {
	const name = useAppSelector(personInfoName);
	const status = useAppSelector(personInfoStatus);
	const notificationsNum = useAppSelector(personInfoNotifNum);
	const avatarBGColor = useAppSelector(personInfoAvBGColor);
	const avatarTextColor = useAppSelector(personInfoAvTextColor);

	const personBell: JSX.Element = (
		<div className="Person-bell">
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

	return (
		<div className="Person">
			{personSmall ? null : personBell}
			<div className="Person-user">
				<div
					className="Person-avatar"
					style={{ backgroundColor: avatarBGColor }}
				>
					{personSmall ? personAvatarCharacter : personAvatarImg}
				</div>
				{personSmall ? null : personInfo}
				<div className="Person-arrowDown">
					<DownArrow />
				</div>
			</div>
		</div>
	);
};
export default Person;
