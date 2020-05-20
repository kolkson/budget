import {
    // BUDGET_GET,
    BUDGET_GET_REQUEST,
    BUDGET_GET_SUCCESS,
    BUDGET_GET_FAILURE,

    BUDGETED_CATEGORIES_GET_REQUEST,
    BUDGETED_CATEGORIES_GET_SUCCESS,
    BUDGETED_CATEGORIES_GET_FAILURE,

    TRANSACTIONS_GET_REQUEST,
    TRANSACTIONS_GET_SUCCESS,
    TRANSACTIONS_GET_FAILURE,

    TRANSACTION_ADD_REQUEST,
    TRANSACTION_ADD_SUCCESS,

    TRANSACTION_DELETE_REQUEST,
    TRANSACTION_DELETE_SUCCESS,



    LOADING_STATES,
} from '../constants'


const initalState = {
    loadingState: {},
    budget: {},
    budgetedCategories: [],
    transactions: []
}

function budget(state = initalState, action) {
    const newLoadingState = { ...state.loadingState }

    switch (action.type) {
        case BUDGET_GET_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING
                }

            }
        case BUDGET_GET_SUCCESS:
            delete newLoadingState.BUDGET_GET_REQUEST
            return {
                ...state,
                budget: action.payload,
                loadingState: newLoadingState,
            }
        case BUDGET_GET_FAILURE:
            delete newLoadingState.BUDGET_GET_REQUEST

            return {
                ...state,
                budget: {},
                loadingState: newLoadingState,
            }
        case BUDGETED_CATEGORIES_GET_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING
                }
            }
        case BUDGETED_CATEGORIES_GET_SUCCESS:
            delete newLoadingState.BUDGETED_CATEGORIES_GET_REQUEST
            return {
                ...state,
                budgetedCategories: action.payload,
                loadingState: newLoadingState
            }
        case BUDGETED_CATEGORIES_GET_FAILURE:
            delete newLoadingState.BUDGETED_CATEGORIES_GET_REQUEST
            return {
                ...state,
                budgetedCategories: {},
                loadingState: newLoadingState
            }
        case TRANSACTIONS_GET_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING
                }
            }
        case TRANSACTIONS_GET_SUCCESS:
            delete newLoadingState.TRANSACTIONS_GET_REQUEST
            return {
                ...state,
                transactions: action.payload,
                loadingState: newLoadingState
            }
        case TRANSACTIONS_GET_FAILURE:
            delete newLoadingState.TRANSACTIONS_GET_REQUEST
            return {
                ...state,
                transactions: [],
                loadingState: newLoadingState
            }
        case TRANSACTION_ADD_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING
                }
            }
        case TRANSACTION_ADD_SUCCESS:
            delete newLoadingState.TRANSACTION_ADD_REQUEST
            return {
                ...state,


                transactions: [
                    action.payload,
                    ...state.transactions,
                ]
                ,
                loadingState: newLoadingState,
            }
        case TRANSACTION_DELETE_REQUEST:
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING
                }
            }
        case TRANSACTION_DELETE_SUCCESS:
            delete newLoadingState.TRANSACTION_DELETE_REQUEST
            console.log(action.payload)
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
                loadingState: newLoadingState
            }
        default:
            return state;
    }
}

export default budget;