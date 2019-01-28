import {connect} from 'react-redux';
import {IMessageAppDispatchProps, MessageApp} from '../components/MessageApp';
import {Dispatch} from 'redux';
import * as Immutable from 'immutable';
import {IMessageItem} from '../models/IMessageItem';
import {_messages, _users} from '../common/initialData';
import {IUser} from '../models/IUser';
import {dataLoaded} from '../actions/actionCreators';
import * as channelService from '../services/channelService';
import {channelsRetrievingEnded, channelsRetrievingStarted} from '../actions/channelActions';


async function loadMessages(): Promise<Immutable.List<IMessageItem>> {
  return _messages;
}

async function loadUsers(): Promise<Immutable.List<IUser>> {
  return _users;
}

const loadData = (): any => {
  console.log('loadData()');
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(channelsRetrievingStarted());
    const channels = await channelService.getChannels();
    dispatch(channelsRetrievingEnded(channels));
    const messages = await loadMessages();
    const users = await loadUsers();
    console.log('loadData - channels:', channels);
    dispatch(dataLoaded(channels, messages, users));
  };
};


const mapDispatchToProps = (dispatch: Dispatch): any => {
  console.log('msgAppContainer - mapDispatchToProps');
  return {
    onMount: () => dispatch(loadData())
  };
};

export const MessageAppContainer = connect<void, IMessageAppDispatchProps>(null, mapDispatchToProps)(MessageApp);
