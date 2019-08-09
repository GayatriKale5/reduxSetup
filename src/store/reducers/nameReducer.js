import { GET_NAMES } from '../types';

const initialState = {
    names: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NAMES:
            return {
                names: action.payload
            }

        default:
            return state
    }
}