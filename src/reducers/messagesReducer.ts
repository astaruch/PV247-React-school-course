import * as Immutable from 'immutable';
import {IMessage, IMessageList} from '../models/IMessage';
import {combineReducers} from 'redux';
import {MESSAGES_RETRIEVING_ENDED} from '../actions/globalActions';
import {MESSAGE_SENDING_ENDED} from '../actions/messageActions';

const asMap = (prevState = Immutable.Map<Uuid, IMessage>(), action: Action): Immutable.Map<Uuid, IMessage> => {
  switch (action.type) {
    case MESSAGES_RETRIEVING_ENDED:
      return Immutable.Map(action.payload.messages.map((message: IMessage) => [message.id, message]));

    case MESSAGE_SENDING_ENDED:
      return prevState.set(action.payload.message.id, action.payload.message);

    default:
      return prevState;
  }
};

const asList = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case MESSAGES_RETRIEVING_ENDED:
      return Immutable.List(action.payload.messages.map((message: IMessage) => message.id));

    case MESSAGE_SENDING_ENDED:
      return prevState.push(action.payload.message.id, action.payload.message);

    default:
      return prevState;
  }
};

const forChannel = (prevState = Immutable.Map<Uuid, IMessageList>(), action: Action): Immutable.Map<Uuid, IMessageList> => {
  switch (action.type) {
    case MESSAGES_RETRIEVING_ENDED:
      return prevState.set(action.payload.channelId, action.payload.messages);

    case MESSAGE_SENDING_ENDED:
      return prevState.get(action.payload.channelId)!.push(action.payload.message);
    default:
      return prevState;
  }
};

export const messages = combineReducers({
  asMap,
  asList,
  forChannel
});
