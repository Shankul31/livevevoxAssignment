import {ActionTypes} from '../constants/action-types'


export const setContacts = (contact) => {
    return {
        type: ActionTypes.SET_CONTACT_LISTS,
        payload: contact
    }
}
export const getContacts = (contact) => {
    return {
        type: ActionTypes.GET_CONTACT_LISTS,
        payload: contact
    }
}
export const saveContact = (contact) => {
    return {
        type: ActionTypes.SAVE_CONTACT,
        payload: contact
    }
}