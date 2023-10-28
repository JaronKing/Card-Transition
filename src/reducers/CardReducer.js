import {
    PAGE_INIT,
    SET_CARD,
    EXIT_CARD,
} from '../store/Actions';

const initialState = {
    card: "Welcome",
    googleSuggestions: null,
    isLoading: false,
    isExit: false,
};

const CardReducer = (state = initialState, action) => {
    switch(action.type) {
        case PAGE_INIT:
            return {
                ...state,
                card: "Welcome"
            }
        case SET_CARD:
            return {
                ...state,
                card: action.payload,
                isExit: false,
            }
        case EXIT_CARD:
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

export default CardReducer;
