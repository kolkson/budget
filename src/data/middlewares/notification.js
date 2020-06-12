import { toast } from 'react-toastify';

const notificationMiddleware = () => next => action => {
    if (action.addMessage && /(.*)_(ADD_SUCCESS)/.test(action.type)) {
        toast.success(action.addMessage)
    } else if (action.deleteMessage && /(.*)_(DELETE_SUCCESS)/.test(action.type)) {
        toast.error(action.deleteMessage)
    }
    next(action)
}

export default notificationMiddleware