import {SEND_MESSAGE} from 'redux/Actions/Type';

const initialState = {
  message: [],
};

export default global = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        message: [...state.message, action.message],
      };
    default:
      return state;
  }
};
