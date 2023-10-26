export const PAGE_INIT = "PAGE_INIT";
export const CONTACT_CHANGE_STEP = "CONTACT_CHANGE_STEP";
export const CONTACT_SET_STEP = "CONTACT_SET_STEP";
export const CONTACT_UPDATE_DATA = "CONTACT_UPDATE_DATA";
export const CONTACT_LOADING = "CONTACT_LOADING";
export const CONTACT_GOOGLE_ADDRESS_SUGGESTIONS = "CONTACT_GOOGLE_ADDRESS_SUGGESTIONS";
export const CONTACT_UPDATE_REST = "CONTACT_UPDATE_REST";
export const CONTACT_EXIT_STEP = "CONTACT_EXIT_STEP";

export const contactChangeStep = (data) => ({
	type: CONTACT_CHANGE_STEP,
	payload: data,
});

export const contactSetStep = (data) => ({
	type: CONTACT_SET_STEP,
	payload: data,
});

export const contactExitStep = () => ({
	type: CONTACT_EXIT_STEP,
})
