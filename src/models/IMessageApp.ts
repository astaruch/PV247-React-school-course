import {IMessageList} from './IMessage';
import {IUserList} from './IUser';
import {LOGIN_PAGE_FAILURES} from '../actions/loginActions';
import {SIGN_UP_PAGE_FAILURES} from '../actions/signUpActions';
import {IChannelList} from './IChannel';

export interface IMessageAppState {
  messages: IMessageList;
  channels: IChannelList;
  users: IUserList;
  authPageError: LOGIN_PAGE_FAILURES | SIGN_UP_PAGE_FAILURES | null;
  asyncOperationsCount: number;
}
