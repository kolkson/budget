import {
    // ALL_CATEGORIES_GET,
    ALL_CATEGORIES_GET_REQUEST,
    ALL_CATEGORIES_GET_SUCCESS,
    ALL_CATEGORIES_GET_FAILURE,

    // BUDGETED_MAIN_CATEGORIES_GET,
    BUDGETED_MAIN_CATEGORIES_GET_REQUEST,
    BUDGETED_MAIN_CATEGORIES_GET_SUCCESS,
    BUDGETED_MAIN_CATEGORIES_GET_FAILURE,

    MAIN_CATEGORY_ADD_REQUEST,
    MAIN_CATEGORY_ADD_SUCCESS,

    CATEGORY_ADD_REQUEST,
    CATEGORY_ADD_SUCCESS,

    MAIN_CATEGORY_REMOVE_REQUEST,
    MAIN_CATEGORY_REMOVE_SUCCESS,

    LOADING_STATES,
} from '../constants'

const initalState = {
    loadingState: {},
    allCategories: [],
    parentCategories: []
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
                parentCategories: action.payload,
                loadingState: newLoadingState
            }
        case BUDGETED_MAIN_CATEGORIES_GET_FAILURE:
            delete newLoadingState.BUDGETED_MAIN_CATEGORIES_GET_REQUEST
            return {
                ...state,
                parentCategories: [],
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

        case MAIN_CATEGORY_ADD_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING
                }
            }
        case MAIN_CATEGORY_ADD_SUCCESS:
            delete newLoadingState.MAIN_CATEGORY_ADD_REQUEST
            return {
                ...state,
                parentCategories: [
                    action.payload,
                    ...state.parentCategories
                ],
                loadingState: newLoadingState
            }

        case CATEGORY_ADD_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING,
                }
            }
        case CATEGORY_ADD_SUCCESS:
            delete newLoadingState.CATEGORY_ADD_REQUEST
            return {
                ...state,


                allCategories: [
                    action.payload,
                    ...state.allCategories,
                ]


            }
        default:
            return state;
    }
}

export default common;