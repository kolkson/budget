import {
    ALL_CATEGORIES_GET,
    MAIN_CATEGORIES_GET,
    MAIN_CATEGORY_ADD,
    CATEGORY_ADD,
    MAIN_CATEGORY_DELETE,
    CATEGORY_DELETE,
} from '../constants'
import API from '../fetch'

export const fetchParentCategories = () => {
    const promise = API.common.fetchParentCategories()

    return ({
        type: MAIN_CATEGORIES_GET,
        promise,
    })
}
export const addMainCategory = ({ data }) => {
    const promise = API.common.addMainCategory({
        data
    })

    return {
        type: MAIN_CATEGORY_ADD,
        promise,
        addMessage: 'Główna kategoria została dodana'
    }
}

export const removeMainCategory = (mainCategoryId) => {
    const promise = API.common.removeMainCategory(mainCategoryId)

    return {
        type: MAIN_CATEGORY_DELETE,
        payload: mainCategoryId,
        promise,
        deleteMessage: 'Główna kategoria została usunięta'
    }
}

export const addCategory = ({ parentCategoryId, data }) => {
    const promise = API.common.addCategory({
        parentCategoryId,
        data,
    });

    return {
        type: CATEGORY_ADD,
        promise,
        addMessage: 'Kategoria została dodana'
    }
}

export const removeCategory = (categoryId) => {
    const promise = API.common.removeCategory(categoryId)

    return {
        type: CATEGORY_DELETE,
        payload: categoryId,
        promise,
        deleteMessage: 'Kategoria została usunięta'
    }
}


export const fetchAllCategories = () => {
    const promise = API.common.fetchAllCategories()

    return ({
        type: ALL_CATEGORIES_GET,
        promise,
    })
}