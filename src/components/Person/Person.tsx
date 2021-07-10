import { ReactComponent as BellSvg } from '../../assets/icons/bell.svg';
import { ReactComponent as DownArrow } from '../../assets/icons/down-arrow.svg';

import UserAvatar from '../../assets/images/user-avatar.png';
import Notif from '../Notif/Notif';

const Person = () => {
    const personName: string = 'Jeremy';
    const personStatus: string = 'User';

    return (
        <div className="Person">
            <div className="Person-bell">
                <Notif num="3" />
                <div className="Person-bell__icon">
                    <BellSvg />
                </div>
            </div>
            <div className="Person-user">
                <div className="Person-avatar">
                    <img
                        className="Person-avatar__img"
                        src={UserAvatar}
                        alt="Pizza Hot"
                    />
                </div>
                <div className="Person-info">
                    <p className="Person-info__name">{personName}</p>
                    <p className="Person-info__status">{personStatus}</p>
                </div>
                <div className="Person-arrowDown">
                    <DownArrow />
                </div>
            </div>
        </div>
    );
};
export default Person;
