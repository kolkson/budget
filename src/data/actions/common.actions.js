import {
    ALL_CATEGORIES_GET,
    BUDGETED_MAIN_CATEGORIES_GET

} from '../constants'
import API from '../fetch'

export const fetchMainCategories = () => {
    const promise = API.common.fetchMainCategories()

    return ({
        type: BUDGETED_MAIN_CATEGORIES_GET,
        promise,
    })

}

export const fetchAllCategories = () => {
    const promise = API.common.fetchAllCategories()

    return ({
        type: ALL_CATEGORIES_GET,
        promise,
    })

}