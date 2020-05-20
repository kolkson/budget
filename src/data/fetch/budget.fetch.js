export const fetchBudget = (id) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`);

    return promise;
}

export const fetchBudgetedCategories = (id) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`);

    return promise;
}

export const fetchTransactions = () => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/transactions/?_expand=parentCategory`);

    return promise
}

export const addTransaction = ({ parentCategoryId, data, color }) => {
    const promise = fetch(
        `${process.env.REACT_APP_API_URL}/parentCategories/${parentCategoryId}/transactions`,
        {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        }, {
    });
    return promise
}


export const removeTransaction = (id) => {
    const promise = fetch(
        `${process.env.REACT_APP_API_URL}/transactions/${id}`,
        {
            method: "DELETE",
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
        }
    );

    return promise;
}


