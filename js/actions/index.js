let addId= 0;
export const addMsg = (text) => {
	return {
		type: 'ADD_MSG',
		id: addId++,
		text: text
	}
}
