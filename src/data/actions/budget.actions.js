import {
    TRANSACTIONS_GET,
    TRANSACTION_ADD,
    TRANSACTION_DELETE,
} from '../constants'
import API from '../fetch'

export const fetchTransactions = () => {
    const promise = API.budget.fetchTransactions();

    return ({
        type: TRANSACTIONS_GET,
        promise,
    })

}
export const removeTransaction = (transactionId) => {
    const promise = API.budget.removeTransaction(transactionId)

    return {
        type: TRANSACTION_DELETE,
        payload: transactionId,
        promise,
        deleteMessage: 'Transakcja została usunięta'
    }

}

export const addTransaction = ({ parentCategoryId, data, color }) => {
    const promise = API.budget.addTransaction({
        parentCategoryId,
        data,
        color,
    });

    return {
        color,
        type: TRANSACTION_ADD,
        promise,
        addMessage: 'Transakcja została dodana'
    }
}

