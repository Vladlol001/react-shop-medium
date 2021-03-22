export function reducer(state, {type,payload}){
	switch(type){
		case 'SET__BUCKET': return {
			...state,
			bucket: payload || [],
			loading: false,
		};
		case 'CLOSE_ALERT': return {
			...state,
			alertName: ''
		};
		case 'TOGGLE_BUCKET': return {
			...state,
			isBacketShow: !state.isBacketShow
		};
		case 'REMOVE_FROM_BUCKET': return {
			...state,
			bucketItems: state.bucketItems.filter((item) => {
				return item.id !== payload
			}),
			isInTheBucket: false,
		};
		case 'ADD_TO_BUCKET': {
			const itemIndex = state.bucketItems.findIndex(
				(item) => item.id === payload.id
			);
			let newBucket = null;
			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1,
				};
				newBucket = [...state.bucketItems, newItem]
			} else {
				const newItem = {
					...state,
					isBacketShow: state.isBacketShow = true
				};
				return newItem
			}
			return {
				...state,
				bucketItems: newBucket,
				alertName: payload.name
			}
		};
		case 'ADD__QUANTITY': {
			let newState = state.bucketItems.find((item) => item.id === payload);
			if (newState) {
				newState = {
					id: newState.id,
					name: newState.name,
					price: newState.price,
					quantity: newState.quantity + 1,
					isInTheBucket: newState.isInTheBucket,
				};
				let changeState = state.bucketItems.map((item) => {
					if (item.id === newState.id) return (item = newState);
					return item;
				});
				return {
					...state, 
					bucketItems: changeState
				};
			}
		} break;
		case 'REMOVE__QUANTITY': {
			let newState = state.bucketItems.find((item) => item.id === payload);
			if (newState && newState.quantity > 1) {
				newState = {
					id: newState.id,
					name: newState.name,
					price: newState.price,
					quantity: newState.quantity - 1,
					isInTheBucket: newState.isInTheBucket,
				};
				let changeState = state.bucketItems.map((item) => {
					if (item.id === newState.id) return (item = newState);
					return item;
				});
				return {
					...state, 
					bucketItems: changeState
				};
			}else return {
				...state, 
				bucketItems: state.bucketItems
			};
		}break;
		default:
			return state
	}
}