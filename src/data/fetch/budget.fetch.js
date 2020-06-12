export const fetchTransactions = () => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/transactions`);

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
        });
    return promise
}


export const removeTransaction = (transactionId) => {
    const promise = fetch(
        `${process.env.REACT_APP_API_URL}/transactions/${transactionId}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    );

    return promise;
}


