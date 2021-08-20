import React, { useState } from "react";
import { sizeType } from "../../store/constants";

type ToggleSizeType = {
	changeSizeClick: (id: number) => void;
};

const ToggleSize = ({ changeSizeClick }: ToggleSizeType) => {
	const [selectedSize, setSelectedSize] = useState(1);

	const changeSizeHandler = (id: number) => {
		setSelectedSize(id);
		changeSizeClick(id);
	};

	const sizeList = sizeType.map((el, id) => {
		return (
			<label key={id} className="ToggleSize-item">
				{el}
				<input
					className="ToggleSize-item__input"
					type="radio"
					value={id}
					checked={selectedSize === id}
					onChange={() => changeSizeHandler(id)}
				/>
			</label>
		);
	});

	return (
		<div className="ToggleSize">
			{sizeList}
			<div
				className="ToggleSize__check"
				style={{
					transform: `translateX(${selectedSize}00%)`,
				}}
			></div>
		</div>
	);
};

export default ToggleSize;
