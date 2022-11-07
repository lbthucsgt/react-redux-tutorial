
import { YES_OR_NO } from '../actions/type'

const initialState = {answer : 'yes'}

function yesnoReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case YES_OR_NO:
            return {
                ...state,
                answer: payload,
            }
    
        default:
            return state
    }
}
export default yesnoReducer
