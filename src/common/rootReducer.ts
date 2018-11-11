import {IState} from './IState';
import {messageApp} from '../reducers/messageApp';

export const rootReducer = (prevState = {} as IState, action: Action<any>): IState => ({
    messageApp: messageApp(prevState.messageApp, action),
});
