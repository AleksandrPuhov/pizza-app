type NotifProps = {
    num: number;
};

const Notif = ({ num }: NotifProps) => {
    return <span className="Notif">{num}</span>;
};
export default Notif;
