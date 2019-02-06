import * as Immutable from 'immutable';

import {IMessageList} from './IMessage';
import {IUserList} from './IUser';
import {LOGIN_PAGE_FAILURES} from '../actions/loginActions';
import {SIGN_UP_PAGE_FAILURES} from '../actions/signUpActions';
import {IChannelList} from './IChannel';
import {IFileMapping} from './IFile';

export interface IMessageAppState {
  messages: IMessageList;
  channels: IChannelList;
  users: IUserList;
  files: Immutable.List<IFileMapping>;
  authPageError: LOGIN_PAGE_FAILURES | SIGN_UP_PAGE_FAILURES | null;
  spinners: {
    authPageCount: number;
    addingNewChannel: boolean;
    asyncSendingMessage: boolean;
    asyncChangingChannels: boolean;
  };
}
