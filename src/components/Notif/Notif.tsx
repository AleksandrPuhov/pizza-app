type NotifProps = {
    num: number;
};

const Notif = ({ num }: NotifProps) => {
    return num > 0 ? <span className="Notif">{num}</span> : null;
};
export default Notif;
