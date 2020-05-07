import {
    ALL_CATEGORIES_GET,
    ALL_CATEGORIES_GET_REQUEST,
    ALL_CATEGORIES_GET_SUCCESS,
    ALL_CATEGORIES_GET_FAILURE,

    BUDGETED_MAIN_CATEGORIES_GET,
    BUDGETED_MAIN_CATEGORIES_GET_REQUEST,
    BUDGETED_MAIN_CATEGORIES_GET_SUCCESS,
    BUDGETED_MAIN_CATEGORIES_GET_FAILURE,

    LOADING_STATES,
} from '../constants'

const initalState = {
    loadingState: {},
    allCategories: [],
    mainCategories: []
}

function common(state = initalState, action) {
    const newLoadingState = { ...state.loadingState }

    switch (action.type) {
        case BUDGETED_MAIN_CATEGORIES_GET_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING
                }
            }
        case BUDGETED_MAIN_CATEGORIES_GET_SUCCESS:
            delete newLoadingState.BUDGETED_MAIN_CATEGORIES_GET_REQUEST
            return {
                ...state,
                mainCategories: action.payload,
                loadingState: newLoadingState
            }
        case BUDGETED_MAIN_CATEGORIES_GET_FAILURE:
            delete newLoadingState.BUDGETED_MAIN_CATEGORIES_GET_REQUEST
            return {
                ...state,
                mainCategories: {},
                loadingState: newLoadingState
            }
        case ALL_CATEGORIES_GET_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING
                }

            }
        case ALL_CATEGORIES_GET_SUCCESS:
            delete newLoadingState.ALL_CATEGORIES_GET_REQUEST
            return {
                ...state,
                allCategories: action.payload,
                loadingState: newLoadingState,
            }
        case ALL_CATEGORIES_GET_FAILURE:
            delete newLoadingState.ALL_CATEGORIES_GET_REQUEST

            return {
                ...state,
                allCategories: [],
                loadingState: newLoadingState,
            }

        default:
            return state;
    }
}

export default common;