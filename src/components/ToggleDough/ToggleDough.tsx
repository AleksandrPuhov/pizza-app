import { useState } from "react";
import { doughType } from "../../store/constants";

const ToggleDough = () => {
	const [selectedDough, setSelectedDough] = useState(0);

	const changeDoughHandler = (ind: number) => {
		setSelectedDough(ind);
	};

	const doughTypeList = doughType.map((el, ind) => {
		return (
			<label key={ind} className="ToggleDough-item">
				{el}
				<input
					className="ToggleDough-item__input"
					type="radio"
					value={ind}
					checked={selectedDough === ind}
					onChange={() => changeDoughHandler(ind)}
				/>
			</label>
		);
	});

	return (
		<div className="ToggleDough">
			{doughTypeList}
			<div
				className="ToggleDough__check"
				style={{
					transform: `translateX(${selectedDough}00%)`,
				}}
			></div>
		</div>
	);
};

export default ToggleDough;
