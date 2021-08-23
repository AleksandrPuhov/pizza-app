import { useState } from "react";
import { doughType } from "../../store/constants";

type ToggleDoughType = {
	changeDoughClick: (id: number) => void;
};

const ToggleDough = ({ changeDoughClick }: ToggleDoughType) => {
	const [selectedDough, setSelectedDough] = useState(0);

	const changeDoughHandler = (id: number) => {
		setSelectedDough(id);
		changeDoughClick(id);
	};

	const doughTypeList = doughType.map((el, index) => {
		return (
			<label key={index} className="ToggleDough-item">
				{el}
				<input
					className="ToggleDough-item__input"
					type="radio"
					value={index}
					checked={selectedDough === index}
					onChange={() => changeDoughHandler(index)}
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
