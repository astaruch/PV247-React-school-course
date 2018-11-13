import {connect} from 'react-redux';
import {IMessageAppDispatchProps, MessageApp} from '../components/MessageApp';
import {Dispatch} from 'redux';
import * as Immutable from 'immutable';
import {IMessageItem} from '../models/IMessageItem';
import {_channels, _messages, _users} from '../common/initialData';
import {IUser} from '../models/IUser';
import {IChannelItem} from '../models/IChannelItem';
import {dataLoaded} from '../actions/actionCreators';


async function loadMessages(): Promise<Immutable.List<IMessageItem>> {
    return _messages;
}

async function loadUsers(): Promise<Immutable.List<IUser>> {
    return _users;
}

async function loadChannels(): Promise<Immutable.List<IChannelItem>> {
    return _channels;
}

const loadData = (): any => {
    return async (dispatch: Dispatch): Promise<void> => {
        const channels = await loadChannels();
        const messages = await loadMessages();
        const users = await loadUsers();

        dispatch(dataLoaded(channels, messages, users));
    };
};


const mapDispatchToProps = (dispatch: Dispatch): any => {
    return {
        onMount: () => dispatch(loadData())
    };
};

export const MessageAppContainer = connect<void, IMessageAppDispatchProps>(null, mapDispatchToProps)(MessageApp);
