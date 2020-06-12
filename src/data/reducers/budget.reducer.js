import {
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
            const sortTransactions = action.payload.sort((a, b) => {
                a = new Date(a.date)
                b = new Date(b.date)
                return b - a
            })
            return {
                ...state,
                transactions: [...sortTransactions],
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
            const sortAddTransactions = [...state.transactions]
            sortAddTransactions.push(action.payload)
            sortAddTransactions.sort((a, b) => {
                a = new Date(a.date)
                b = new Date(b.date)
                return b - a
            })
            return {
                ...state,
                transactions: [...sortAddTransactions],
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