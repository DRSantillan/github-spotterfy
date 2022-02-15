import AlertActionTypes from './Alert.types';

const AlertReducuer = (state, action) => {
	switch (action.type) {
		case AlertActionTypes.SET_ALERT:
			return action.payload;
		case AlertActionTypes.REMOVE_ALERT:
			return null;
		default:
			return state;
	}
};

export default AlertReducuer;
