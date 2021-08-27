import { useAppSelector, useAppDispatch } from "../../store/store";

import {
	pizzasSortingSelected,
	changeSortingSelected,
} from "../../store/reducers/pizzasListReduser";

const PizzasSorting = () => {
	const selectedSort = useAppSelector(pizzasSortingSelected);

	const dispatch = useAppDispatch();

	const sortingName = ["Hot", "Meat", "Bbq sauce", "Mushrooms"];

	const changeSelectedHandler = (index: number) => {
		dispatch(
			changeSortingSelected({
				hot: index === 0 ? !checkState(0) : checkState(0),
				meat: index === 1 ? !checkState(1) : checkState(1),
				bbq: index === 2 ? !checkState(2) : checkState(2),
				mushrooms: index === 3 ? !checkState(3) : checkState(3),
			})
		);
	};

	const resetSelectedHandler = () => {
		dispatch(
			changeSortingSelected({
				hot: false,
				meat: false,
				bbq: false,
				mushrooms: false,
			})
		);
	};

	const checkState = (index: number) => {
		switch (index) {
			case 0:
				return selectedSort.hot;
			case 1:
				return selectedSort.meat;
			case 2:
				return selectedSort.bbq;
			case 3:
				return selectedSort.mushrooms;
		}
	};

	const sortingList = sortingName.map((el, index) => {
		return (
			<li className="PizzasSorting-item" key={index}>
				<span
					className={
						checkState(index)
							? "PizzasSorting-btn PizzasSorting-btn--select"
							: "PizzasSorting-btn"
					}
					onClick={() => changeSelectedHandler(index)}
				>
					{el}
				</span>
			</li>
		);
	});

	return (
		<ul className="PizzasSorting">
			<li className="PizzasSorting-item">
				<span
					className={
						!checkState(0) &&
						!checkState(1) &&
						!checkState(2) &&
						!checkState(3)
							? "PizzasSorting-btn PizzasSorting-btn--select"
							: "PizzasSorting-btn"
					}
					onClick={() => resetSelectedHandler()}
				>
					All
				</span>
			</li>
			{sortingList}
		</ul>
	);
};

export default PizzasSorting;
