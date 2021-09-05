type NotifProps = {
	num: number;
	centerPos?: boolean;
};

const Notif = ({ num, centerPos = false }: NotifProps) => {
	const myClassName = centerPos
		? "Notif Notif--center"
		: "Notif Notif--topLeft";

	return num > 0 ? <span className={myClassName}>{num}</span> : null;
};
export default Notif;
