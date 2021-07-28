import { ActionTypes } from '../constants/action-types'

const initialState = {
    contacts: []
}


export const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CONTACT_LISTS:
            return { ...state, contacts: payload }
        default:
            return state
    }
}