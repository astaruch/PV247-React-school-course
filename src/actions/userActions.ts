import {Dispatch} from 'redux';
import * as userService from '../services/userService';
import {IUser} from '../models/IUser';

export const UPDATE_USER_STARTED = 'UPDATE_USER_STARTED';
export const UPDATE_USER_ENDED = 'UPDATE_USER_ENDED';

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';


const updatingUserStarted = (): Action => ({
  type: UPDATE_USER_STARTED
});

const updatingUserEnded = (user: IUser): Action => ({
  type: UPDATE_USER_ENDED,
  payload: {
    user
  }
});

const loggingOut = (): Action => ({
  type: USER_LOGGED_OUT
});

export const updateUser = (user: IUser): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    console.log('Updating user...', user);
    dispatch(updatingUserStarted());
    const updatedUser = await userService.updateUser(user.email, user.customData);
    dispatch(updatingUserEnded(updatedUser));
  };
};

export const logOutUser = (): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(loggingOut());
  };
};

