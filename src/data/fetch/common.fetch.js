export const fetchParentCategories = () => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/1/parentCategories`);

    return promise
}

export const fetchAllCategories = () => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/categories/?_expand=parentCategory`);

    return promise;
}