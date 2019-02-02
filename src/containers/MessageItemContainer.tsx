import {IMessageAppState} from '../models/IMessageApp';
import {IMessageItemOwnProps, IMessageItemStateProps, MessageItem} from '../components/MessageItem';
import {connect} from 'react-redux';

const mapStateToProps = (state: IMessageAppState, ownProps: IMessageItemOwnProps): IMessageItemStateProps => {
    const message = state.messages.asMap.get(ownProps.id)!;
    const author = state.users.asMap.get(message.customData.authorId)!;
    return {message, author};
};

export const MessageItemContainer = connect<IMessageItemStateProps>(mapStateToProps)(MessageItem);
