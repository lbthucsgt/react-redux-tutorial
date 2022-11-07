import { ADDED_TODO, REMOVED_TODO } from '../actions/type'

const initialState = []
function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

function todoReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case ADDED_TODO:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    name: payload.name,
                    job: payload.job
                },
            ]
    
        case REMOVED_TODO:
            return state.filter(data => data.id !== payload)
        
        default:
            return state
    }
}
export default todoReducer
