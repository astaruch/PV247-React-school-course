import {IMessageApp} from '../models/IMessageApp';
import {MESSAGE_APP_SELECT_CHANNEL} from '../constants/actionTypes';

const initialState = {
    selectedChannel: 1
};

export const messageApp = (prevState = initialState, action: Action<any>): IMessageApp => {
    switch (action.type) {
        case MESSAGE_APP_SELECT_CHANNEL: {
            return Object.assign({}, prevState, {
                selectedChannel: action.payload
            });
        }
        default:
            return prevState;
    }
};
