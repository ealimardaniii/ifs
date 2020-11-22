import {SEND_MESSAGE} from 'redux/Actions/Type';

const initialState = {
  message: ['hello'],
};

export default global = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        message: action.message,
      };
    default:
      return state;
  }
};
