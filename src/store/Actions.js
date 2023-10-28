export const PAGE_INIT = "PAGE_INIT";
export const CHANGE_CARD = "CHANGE_CARD";
export const EXIT_CARD = "EXIT_CARD";
export const SET_CARD = "SET_CARD";

export const changeCard = (data) => ({
	type: CHANGE_CARD,
	payload: data,
});

export const setCard = (data) => ({
	type: SET_CARD,
	payload: data,
});

export const exitCard = () => ({
	type: EXIT_CARD,
})
