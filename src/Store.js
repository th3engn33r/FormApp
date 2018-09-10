const initialState = {
	data : [],
	email : 'admin@test.com',
	pwd : 'abc123'
}

function createStore(reducer, initialState){
	let state = initialState;

	const listeners = [];

	const getState = () => (state);

	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(l => l());
	};

	const subscribe = (listener) => (listeners.push(listener));

	return {
		subscribe,
		getState,
		dispatch
	};	
}

function reducer (state, action) {
	if (action.type === 'ADD')
		return {
			data : state.data.concat(action.data)
		}

	//No del function hence no use of slice
}

const store = createStore(reducer,initialState);

export default store;


