import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface personInterface {
	name: string;
	status: string;
	notificationsNum: number;
	avatarBGColor: string;
	avatarTextColor: string;
}

const initialState: personInterface = {
	name: "Jeremy",
	status: "User",
	notificationsNum: 3,
	avatarBGColor: "#d7f5ff",
	avatarTextColor: "#9370db",
};

export const personReduser = createSlice({
	name: "personReduser",
	initialState,
	reducers: {},
});

export const personInfoName = (state: RootState) => state.personReduser.name;

export const personInfoStatus = (state: RootState) =>
	state.personReduser.status;

export const personInfoNotifNum = (state: RootState) =>
	state.personReduser.notificationsNum;

export const personInfoAvBGColor = (state: RootState) =>
	state.personReduser.avatarBGColor;

export const personInfoAvTextColor = (state: RootState) =>
	state.personReduser.avatarTextColor;

export default personReduser.reducer;
