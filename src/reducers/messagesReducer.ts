import * as Immutable from 'immutable';
import {IMessage} from '../models/IMessage';
import {combineReducers} from 'redux';
import {MESSAGES_RETRIEVING_ENDED} from '../actions/globalActions';
import {MESSAGE_SENDING_ENDED} from '../actions/messageActions';

const asMap = (prevState = Immutable.Map<Uuid, IMessage>(), action: Action): Immutable.Map<Uuid, IMessage> => {
  switch (action.type) {
    case MESSAGES_RETRIEVING_ENDED:
      return Immutable.Map(action.payload.messages.map((message: IMessage) => [message.id, message]));

    case MESSAGE_SENDING_ENDED:
      const message = action.payload.message;
      return prevState.set(message.id, message);

    default:
      return prevState;
  }
};

const asList = (prevState = Immutable.List<Uuid>(), action: Action): Immutable.List<Uuid> => {
  switch (action.type) {
    case MESSAGES_RETRIEVING_ENDED:
      return Immutable.List(action.payload.messages.map((message: IMessage) => message.id));

    case MESSAGE_SENDING_ENDED:
      const message = action.payload.message;
      return prevState.push(message.id);

    default:
      return prevState;
  }
};

export const messages = combineReducers({
  asMap,
  asList
});
