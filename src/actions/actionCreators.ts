import {
  MESSAGE_APP_MESSAGE_SUBMITTED,
} from '../constants/actionTypes';
import {IMessageItem} from '../models/IMessageItem';



export const messageSubmitted = (message: IMessageItem): Action => ({
  type: MESSAGE_APP_MESSAGE_SUBMITTED,
  payload: {
    message
  }
});
