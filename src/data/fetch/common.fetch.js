export const fetchMainCategories = () => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/mainCategories`);

    return promise
}

export const fetchAllCategories = () => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/categories/?_expand=parentCategory`);

    return promise;
}