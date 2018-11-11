import {IState} from '../common/IState';
import {messageApp} from './messageApp';

export const rootReducer = (prevState = {} as IState, action: Action<any>): IState => ({
    messageApp: messageApp(prevState.messageApp, action),
});
