
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../actions/type'

const initialState = {value : 0}

function counterReducer(state = initialState, action) {
    const { type } = action
    switch (type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            }
    
        case COUNTER_DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            }
        default:
            return state
    }
}
export default counterReducer
