export const fetchBudget = (id) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`);

    return promise;
}

export const fetchBudgetedCategories = (id) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`);

    return promise;
}

export const fetchTransactions = () => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/transactions`);

    return promise
}

export const addTransactions = ({ parentCategoryId, data }) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/parentCategories/${parentCategoryId}transactions`);

    return promise
}



