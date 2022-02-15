import { createContext, useReducer } from 'react';
import AlertActionTypes from './Alert.types'

import AlertReducer from './Alert.reducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
	const INITIAL_STATE = null;

	const [state, dispatch] = useReducer(AlertReducer, INITIAL_STATE);

	const setAlert = (message, type) => {
		dispatch({
			type: AlertActionTypes.SET_ALERT,
			payload: { message, type },
		});

		setTimeout(() => dispatch({ type: AlertActionTypes.REMOVE_ALERT }), 3000);
	};

	return (
		<AlertContext.Provider value={{ alert: state, setAlert }}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
