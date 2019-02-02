import {IMessageAppState} from '../models/IMessageApp';
import {connect} from 'react-redux';
import {IMessageFormDispatchProps, IMessageFormStateProps, MessageForm} from '../components/MessageForm';

const mapStateToProps = (state: IMessageAppState): IMessageFormStateProps => {
    return {
        channelId: state.channels.selected!,
        userId: state.users.currentUser!.customData.id
    };
};

const mapDispatchToProps = (): any => {
    return {
        onMessageSubmit: () => { console.log('TODO'); }
    };
};
export const MessageFormContainer = connect<IMessageFormStateProps, IMessageFormDispatchProps>(mapStateToProps, mapDispatchToProps)(MessageForm);
