import {
    BUDGET_GET,
    BUDGETED_CATEGORIES_GET,
    TRANSACTIONS_GET,
    // SET_SELECTED_PARENT_CATEGORY_ID,
    // BUDGET_TRANSACTION_ADD,

} from '../constants'
import API from '../fetch'
export const fetchBudget = (id) => {
    const promise = API.budget.fetchBudget(id)

    return ({
        type: BUDGET_GET,
        promise,
    })

}

export const fetchBudgetedCategories = (id) => {
    const promise = API.budget.fetchBudgetedCategories(id);

    return ({
        type: BUDGETED_CATEGORIES_GET,
        promise,
    })

}

export const fetchTransactions = () => {
    const promise = API.budget.fetchTransactions();

    return ({
        type: TRANSACTIONS_GET,
        promise,
    })

}