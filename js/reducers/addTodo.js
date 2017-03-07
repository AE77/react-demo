
const todo = (state, action){
	switch (action.type) {
        case 'ADD_MSG':
            return {
                id: action.id,
                text: action.text
            }
        default:
            return state
    }
}
export default addTodo;
