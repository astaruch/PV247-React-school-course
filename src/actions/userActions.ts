import {Dispatch} from 'redux';
import * as userService from '../services/userService';
import {IUser} from '../models/IUser';

export const UPDATE_USER_STARTED = 'UPDATE_USER_STARTED';
export const UPDATE_USER_ENDED = 'UPDATE_USER_ENDED';

const updatingUserStarted = (): Action => ({
  type: UPDATE_USER_STARTED
});

const updatingUserEnded = (user: IUser): Action => ({
  type: UPDATE_USER_ENDED,
  payload: {
    user
  }
});

export const updateUser = (user: IUser): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    console.log('Updating user...', user);
    dispatch(updatingUserStarted());
    const updatedUser = await userService.updateUser(user.email, user.customData);
    dispatch(updatingUserEnded(updatedUser));
  };
};

