import {
    BUDGET_GET,
    BUDGETED_CATEGORIES_GET,
    TRANSACTIONS_GET,
    TRANSACTION_ADD,
    TRANSACTION_DELETE,
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
export const removeTransaction = ({ id }) => {
    const promise = API.budget.removeTransaction({ id })

    return {
        type: TRANSACTION_DELETE,
        promise
    }
}

export const addTransaction = ({ parentCategoryId, data, color }) => {
    const promise = API.budget.addTransaction({
        parentCategoryId,
        data,
        color,
    });

    return {
        type: TRANSACTION_ADD,
        promise,
    }
}

