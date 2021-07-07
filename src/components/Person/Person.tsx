import { ReactComponent as BellSvg } from '../../assets/icons/bell.svg';
import { ReactComponent as DownArrow } from '../../assets/icons/down-arrow.svg';

import UserAvatar from '../../assets/images/user-avatar.png';

const Person = () => {
    return (
        <div className="Person">
            <div className="Person-bell">
                <BellSvg />
            </div>
            <div className="Person-avatar">
                <img
                    className="Person-avatar__img"
                    src={UserAvatar}
                    alt="Pizza Hot"
                />
            </div>
            <div className="Person-info">
                <p className="Person-info__name">Jeremy</p>
                <p className="Person-info__status">User</p>
            </div>
            <div className="Person-arrowDown">
                <DownArrow />
            </div>
        </div>
    );
};
export default Person;
