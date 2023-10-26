import {
    PAGE_INIT,
    CONTACT_SET_STEP,
    CONTACT_UPDATE_DATA,
    CONTACT_LOADING,
    CONTACT_GOOGLE_ADDRESS_SUGGESTIONS,
    CONTACT_UPDATE_REST,
    CONTACT_EXIT_STEP,
} from '../store/Actions';

const initialState = {
    step: "Welcome",
    googleSuggestions: null,
    isLoading: false,
    isExit: false,
};

const ContactReducer = (state = initialState, action) => {
    switch(action.type) {
        case PAGE_INIT:
            return {
                ...state,
                step: "Welcome"
            }
        case CONTACT_SET_STEP:
            return {
                ...state,
                step: action.payload,
                isExit: false,
            }
        case CONTACT_UPDATE_DATA:
            return {
                ...state,
                [action.payload.index]: action.payload.data,
            };
        case CONTACT_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case CONTACT_GOOGLE_ADDRESS_SUGGESTIONS:
            return {
                ...state,
                googleSuggestions: action.payload,
            }
        case CONTACT_UPDATE_REST:
            return {
                ...state,
                ...action.payload,
            }
        case CONTACT_EXIT_STEP:
            return {
                ...state,
                isExit: true,
            }
        default:
            return {
                ...state,
            }
    }
}

export default ContactReducer;
