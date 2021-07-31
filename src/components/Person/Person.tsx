import { ReactComponent as BellSvg } from '../../assets/icons/bell.svg';
import { ReactComponent as DownArrow } from '../../assets/icons/down-arrow.svg';

import UserAvatar from '../../assets/images/user-avatar.png';
import Notif from '../Notif/Notif';

type personType = {
    name: string;
    status: string;
    notificationsNum: number;
    avatarBGColor: string;
    avatarTextColor: string;
};

type personProps = {
    personSmall?: boolean;
};

const Person = ({ personSmall = false }: personProps) => {
    const person: personType = {
        name: 'Jeremy',
        status: 'User',
        notificationsNum: 3,
        avatarBGColor: '#d7f5ff',
        avatarTextColor: '#9370db',
    };

    const personBell: JSX.Element = (
        <div className="Person-bell">
            {person.notificationsNum > 0 ? (
                <Notif num={person.notificationsNum} />
            ) : null}
            <div className="Person-bell__icon">
                <BellSvg />
            </div>
        </div>
    );

    const personInfo: JSX.Element = (
        <div className="Person-info">
            <p className="Person-info__name">{person.name}</p>
            <p className="Person-info__status">{person.status}</p>
        </div>
    );

    const personAvatarImg: JSX.Element = (
        <img className="Person-avatar__img" src={UserAvatar} alt="Pizza Hot" />
    );

    const personAvatarCharacter: JSX.Element = (
        <p
            className="Person-avatar__character"
            style={{ color: person.avatarTextColor }}
        >
            {person.name.charAt(0).toUpperCase()}
        </p>
    );

    return (
        <div className="Person">
            {personSmall ? null : personBell}
            <div className="Person-user">
                <div
                    className="Person-avatar"
                    style={{ backgroundColor: person.avatarBGColor }}
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
