export const fetchParentCategories = () => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/parentCategories`);

    return promise
}

export const fetchAllCategories = () => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/categories/?_expand=parentCategory`);

    return promise;
}

export const addMainCategory = ({ data }) => {
    const promise = fetch(
        `${process.env.REACT_APP_API_URL}/parentCategories`,
        {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    );

    return promise;
}

export const removeMainCategory = (mainCategoryId) => {
    const promise = fetch(
        `${process.env.REACT_APP_API_URL}/parentCategories/${mainCategoryId}`,
        {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json',
            }
        }
    );

    return promise;
}

export const addCategory = ({ parentCategoryId, data }) => {
    const promise = fetch(
        `${process.env.REACT_APP_API_URL}/parentCategories/${parentCategoryId}/categories`,
        {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    return promise
}

export const removeCategory = (categoryId) => {
    const promise = fetch(
        `${process.env.REACT_APP_API_URL}/categories/${categoryId}`,
        {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
        });
    return promise
}

