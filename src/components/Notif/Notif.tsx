type NotifProps = {
    num: string;
};

const Notif = ({ num }: NotifProps) => {
    return <span className="Notif">{num}</span>;
};
export default Notif;
