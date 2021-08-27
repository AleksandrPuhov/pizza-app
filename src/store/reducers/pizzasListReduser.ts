import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface sortingType {
	hot: boolean;
	bbq: boolean;
	mushrooms: boolean;
	meat: boolean;
}

export interface pizzaListItemType {
	id: number;
	imgName: string;
	name: string;
	textInfo: string;
	price: Array<number>;
	sortItem: sortingType;
}

export interface pizzasListInterface {
	pizzasList: Array<pizzaListItemType>;
	sortingSelected: sortingType;
}

const initialState: pizzasListInterface = {
	pizzasList: [
		{
			id: 1,
			imgName: "pepperoni.jpg",
			name: "Pepperoni",
			textInfo: "Marinara sauce, extra mozzarella, double pepperoni",
			price: [1399, 1599, 1799],
			sortItem: {
				hot: false,
				bbq: false,
				mushrooms: false,
				meat: false,
			},
		},
		{
			id: 2,
			imgName: "the-mighty-meats.jpg",
			name: "The Mighty Meats",
			textInfo: "Bacon, mozzarella, pepperoni, chicken, marinara sauce",
			price: [1399, 1599, 1799],
			sortItem: {
				hot: false,
				bbq: false,
				mushrooms: false,
				meat: true,
			},
		},
		{
			id: 3,
			imgName: "chiken-bbq.jpg",
			name: "Chicken BBQ",
			textInfo: "Extra chicken, mozzarella, bacon, red onions, bbq sauce",
			price: [1399, 1599, 1799],
			sortItem: {
				hot: false,
				bbq: true,
				mushrooms: false,
				meat: true,
			},
		},
		{
			id: 4,
			imgName: "american-hot.jpg",
			name: "American Hot",
			textInfo:
				"Jalapeno peppers, mozzarella, marinara sauce, pepperoni, red onions",
			price: [1499, 1699, 1899],
			sortItem: {
				hot: true,
				bbq: false,
				mushrooms: false,
				meat: false,
			},
		},
		{
			id: 5,
			imgName: "hawaiian.jpg",
			name: "Hawaiian",
			textInfo: "Ham, extra mozzarella, marinara sauce, pineapple",
			price: [1399, 1599, 1799],
			sortItem: {
				hot: false,
				bbq: false,
				mushrooms: false,
				meat: false,
			},
		},
		{
			id: 6,
			imgName: "fiery-bbq.jpg",
			name: "Fiery BBQ",
			textInfo:
				"Spicy beef, green peppers, pepperoni, marinara sauce, sauce bbq, mozzarella cheese, chilli peppers",
			price: [1499, 1699, 1899],
			sortItem: {
				hot: true,
				bbq: true,
				mushrooms: false,
				meat: false,
			},
		},
		{
			id: 7,
			imgName: "chicken-club.jpg",
			name: "Chicken Club",
			textInfo:
				"Bacon, red onions, mozzarella, extra chicken, creamy sauce",
			price: [1399, 1599, 1799],
			sortItem: {
				hot: false,
				bbq: false,
				mushrooms: false,
				meat: true,
			},
		},
		{
			id: 8,
			imgName: "mexican.jpg",
			name: "Mexican",
			textInfo:
				"Jalapeno pepper, cherry tomatoes, mozzarella cheese, marinara sauce, pepper bell, onion red, corn grain, spicy beef",
			price: [1499, 1699, 1899],
			sortItem: {
				hot: true,
				bbq: false,
				mushrooms: false,
				meat: false,
			},
		},
		{
			id: 9,
			imgName: "farmhouse.jpg",
			name: "Farmhouse",
			textInfo: "Marinara sauce, mushrooms, extra mozzarella, ham",
			price: [1399, 1599, 1799],
			sortItem: {
				hot: false,
				bbq: false,
				mushrooms: true,
				meat: false,
			},
		},
		{
			id: 10,
			imgName: "chicken-hot.jpg",
			name: "Chicken Hot",
			textInfo:
				"Marinara sauce, extra chicken, mozzarella, mushrooms, red onions, cherry tomatoes, green peppers, jalapeno peppers",
			price: [1399, 1599, 1799],
			sortItem: {
				hot: true,
				bbq: false,
				mushrooms: true,
				meat: true,
			},
		},
		{
			id: 11,
			imgName: "double-pepperoni.jpg",
			name: "Double Pepperoni",
			textInfo: "Double pepperoni, marinara sauce, extra mozzarella",
			price: [1499, 1699, 1899],
			sortItem: {
				hot: false,
				bbq: false,
				mushrooms: false,
				meat: false,
			},
		},
		{
			id: 12,
			imgName: "tuna-melt.jpg",
			name: "Tuna Melt",
			textInfo:
				"Sweet corn, red onions, tuna, mozzarella, marinara sauce",
			price: [1399, 1599, 1799],
			sortItem: {
				hot: false,
				bbq: false,
				mushrooms: false,
				meat: false,
			},
		},
	],
	sortingSelected: { hot: false, bbq: false, mushrooms: false, meat: false },
};

export const pizzasListReduser = createSlice({
	name: "pizzasListReduser",
	initialState,
	reducers: {
		changeSortingSelected: (state, action) => {
			state.sortingSelected = action.payload;
		},
	},
});

export const { changeSortingSelected } = pizzasListReduser.actions;

export const fullPizzasList = (state: RootState) =>
	state.pizzasListReduser.pizzasList;

export const pizzasSortingSelected = (state: RootState) =>
	state.pizzasListReduser.sortingSelected;

export default pizzasListReduser.reducer;
