import {createContext, useReducer} from 'react'
import { reducer } from './reducer';


export const ShopContext = createContext();

const initialState = {
	bucket: [],
	bucketItems: [],
	isBacketShow: false,
	alertName: '',
	loading: true,
	isInTheBucket: false,
}

export const ContextProvider = ({children}) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.setBucket = (data) => {
		dispatch({type: 'SET__BUCKET', payload: data})
	}

	value.closeAlert = () => {
		dispatch({type: 'CLOSE_ALERT'});
	}

	value.removeFromBucket = (id) => {
		dispatch({type: 'REMOVE_FROM_BUCKET', payload: id})
	}

	value.addToBucket = (id) => {
		dispatch({type: 'ADD_TO_BUCKET', payload: id})
	}

	value.addQuantity = (id) => {
		dispatch({type: 'ADD__QUANTITY', payload: id});
	}

	value.removeQuantity = (id) => {
		dispatch({type: 'REMOVE__QUANTITY', payload: id});
	}

	value.handleBacketShow =  () => {
		dispatch({type: 'TOGGLE_BUCKET'});

	}

	return(
		<ShopContext.Provider  value={value}>
			{children}
		</ShopContext.Provider>
	)
}