import {
  MESSAGE_APP_MESSAGE_SUBMITTED,
  MESSAGE_APP_PROFILE_UPDATED
} from '../constants/actionTypes';
import {IUser} from '../models/IUser';
import {IMessageItem} from '../models/IMessageItem';



export const messageSubmitted = (message: IMessageItem): Action => ({
  type: MESSAGE_APP_MESSAGE_SUBMITTED,
  payload: {
    message
  }
});

export const profileUpdated = (user: IUser): Action => ({
  type: MESSAGE_APP_PROFILE_UPDATED,
  payload: {
    user
  }
});
