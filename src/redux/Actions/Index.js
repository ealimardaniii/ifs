import {SEND_MESSAGE} from './type';

export const setMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});
