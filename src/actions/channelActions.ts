import {Dispatch} from 'redux';
import {IChannel, IChannelCustomData} from '../models/IChannel';
import * as Immutable from 'immutable';
import * as channelService from '../services/channelService';
import * as messageService from '../services/messageService';
import {messagesRetrievingStarted} from './messageActions';
import {messagesRetrievingEnded} from './messageActions';


export const CHANGING_CHANNEL_STARTED = 'CHANGING_CHANNEL_STARTED';
export const CHANGING_CHANNEL_ENDED = 'CHANGING_CHANNEL_ENDED';

export const CHANGING_CHANNEL_NAME_STARTED = 'CHANGING_CHANNEL_NAME_STARTED';
export const CHANGING_CHANNEL_NAME_ENDED = 'CHANGING_CHANNEL_NAME_ENDED';

export const CREATE_NEW_CHANNEL_STARTED = 'CREATE_NEW_CHANNEL_STARTED';
export const CREATE_NEW_CHANNEL_ENDED = 'CREATE_NEW_CHANNEL_ENDED';

export const DELETE_CHANNEL_STARTED = 'DELETE_CHANNEL_STARTED';
export const DELETE_CHANNEL_ENDED = 'DELETE_CHANNEL_ENDED';

export const EDIT_CHANNEL_STARTED = 'EDIT_CHANNEL_STARTED';
export const EDIT_CHANNEL_ENDED = 'EDIT_CHANNEL_ENDED';

export const JOIN_CHANNEL_STARTED = 'JOIN_CHANNEL_STARTED';
export const JOIN_CHANNEL_ENDED = 'JOIN_CHANNEL_ENDED';
export const LEAVE_CHANNEL_STARTED = 'LEAVE_CHANNEL_STARTED';
export const LEAVE_CHANNEL_ENDED = 'LEAVE_CHANNEL_ENDED';

const changingChannelStarted = (): Action => ({
  type: CHANGING_CHANNEL_STARTED
});

const changingChannelEnded = (id: Uuid): Action => ({
  type: CHANGING_CHANNEL_ENDED,
  payload: {
    id
  }
});

const changingChannelNameStarted = (id: Uuid, name: string): Action => ({
  type: CHANGING_CHANNEL_NAME_STARTED,
  payload: {
    id,
    name
  }
});

const changingChannelNameEnded = (id: Uuid): Action => ({
  type: CHANGING_CHANNEL_NAME_ENDED,
  payload: {
    id
  }
});

const creatingNewChannelStarted = (): Action => ({
  type: CREATE_NEW_CHANNEL_STARTED
});

const creatingNewChannelEnded = (channel: IChannel): Action => ({
  type: CREATE_NEW_CHANNEL_ENDED,
  payload: {
    channel
  }
});

const deleteChannelStarted = () => ({
  type: DELETE_CHANNEL_STARTED
});

const deleteChannelEnded = (id: Uuid) => ({
  type: DELETE_CHANNEL_ENDED,
  payload: {
    id
  }
});

const editingChannelStarted = (id: Uuid) => ({
  type: EDIT_CHANNEL_STARTED,
  payload: {
    id
  }
});

const editingChannelEnded = (id: Uuid) => ({
  type: EDIT_CHANNEL_ENDED,
  payload: {
    id
  }
});

const joinChannelStarted = () => ({
  type: JOIN_CHANNEL_STARTED
});

const joinChannelEnded = (channelId: Uuid, userId: Uuid, channel: IChannel) => ({
  type: JOIN_CHANNEL_ENDED,
  payload: {channelId, userId, channel}
});

const leaveChannelStarted = () => ({
  type: LEAVE_CHANNEL_STARTED
});

const leaveChannelEnded = (channelId: Uuid, userId: Uuid, channel: IChannel) => ({
  type: LEAVE_CHANNEL_ENDED,
  payload: {channelId, userId, channel}
});

export const changeChannel = (channelId: Uuid): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(changingChannelStarted());
    dispatch(messagesRetrievingStarted());
    const messages = await messageService.getMessages(channelId);
    dispatch(messagesRetrievingEnded(messages, channelId));
    dispatch(changingChannelEnded(channelId));
  };
};

export const changeChannelName = (channel: IChannel, newName: string): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    const {id, customData} = channel;
    dispatch(changingChannelNameStarted(id, newName));
    const renamedChannel = await channelService.renameChannel(id, newName, customData);
    dispatch(changingChannelNameEnded(renamedChannel.id));
    dispatch(editingChannelEnded(id));
  };
};

export const createNewChannel = (name: string, order: number, userId: Uuid): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(creatingNewChannelStarted());
    const customData = {
      order,
      usersId: Immutable.List<Uuid>([userId])
    } as IChannelCustomData;
    const newChannel = await channelService.createChannel(name || `Channel #${order}`, customData);
    dispatch(creatingNewChannelEnded(newChannel));
  };
};

export const deleteChannel = (id: Uuid): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(deleteChannelStarted());
    await channelService.deleteChannel(id);
    dispatch(deleteChannelEnded(id));
  };
};

export const startEditing = (id: Uuid): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(editingChannelStarted(id));
  };
};

export const stopEditing = (id: Uuid): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(editingChannelEnded(id));
  };
};

export const joinChannel = (channelId: Uuid, userId: Uuid, channel: IChannel): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(joinChannelStarted());
    const {id, name, customData} = channel;
    customData.usersId.push(userId);
    const joinedChannel = await channelService.joinChannel(id, name, customData);
    dispatch(joinChannelEnded(channelId, userId, joinedChannel));
  };
};

export const leaveChannel = (channelId: Uuid, userId: Uuid, channel: IChannel): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(leaveChannelStarted());
    const customData = {
      ...channel.customData,
      usersId: channel.customData.usersId.filter(_userId => {return _userId !== _userId; })
    };
    const leftChannel = await channelService.leaveChannel(channelId, channel.name, customData);
    dispatch(leaveChannelEnded(channelId, userId, leftChannel));
  };
};
