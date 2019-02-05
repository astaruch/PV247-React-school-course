import {createSelector} from 'reselect';
import * as Immutable from 'immutable';
import {IMessageAppState} from '../models/IMessageApp';
import {IMessage} from '../models/IMessage';

const getAllMessagesId = (state: IMessageAppState): Immutable.List<Uuid> => state.messages.asList;
const getCurrentChannel = (state: IMessageAppState): Uuid => state.channels.selected;
const getAllMessages = (state: IMessageAppState): Immutable.Map<Uuid, IMessage> => state.messages.asMap;

export const getMessagesForChannel = createSelector(
  [getAllMessagesId, getCurrentChannel, getAllMessages],
  (messagesAsList, currentChannelId, allMessages): Immutable.List<Uuid> => {
    const messages = allMessages.filter(msg => {
      return msg.customData.channelId === currentChannelId;
    });
    return messagesAsList.filter(messageId => messages.has(messageId));
  }
);
