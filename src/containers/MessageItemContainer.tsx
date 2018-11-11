import {IMessageAppState} from '../models/IMessageApp';
import {IMessageItemOwnProps, IMessageItemStateProps, MessageItem} from '../components/MessageItem';
import {connect} from 'react-redux';

const mapStateToProps = (state: IMessageAppState, ownProps: IMessageItemOwnProps): IMessageItemStateProps => {
    const message = state.messages.byId.get(ownProps.id)!;
    const author = state.users.byId.get(message.from)!;
    return {message, author};
};

export const MessageItemContainer = connect<IMessageItemStateProps, void>(mapStateToProps)(MessageItem);
