import {SEND_MESSAGE} from './Type';

export const setMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});
