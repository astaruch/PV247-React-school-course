import {IMessageAppState} from '../models/IMessageApp';
import {connect} from 'react-redux';
import {IMessageAppHeaderStateProps, MessageAppHeader} from '../components/MessageAppHeader';

const mapStateToProps = (state: IMessageAppState): IMessageAppHeaderStateProps => {
    return {
        user: state.currentUser!
    };
};

export const MessageAppHeaderContainer = connect<IMessageAppHeaderStateProps>(mapStateToProps)(MessageAppHeader);
