import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {IState} from '../common/IState';
import {selectChannel} from '../actions/actionCreators';
import {IMessageAppDispatchProps, IMessageAppStateProps, MessageApp} from '../components/MessageApp';

const mapStateToProps = (state: IState): IMessageAppStateProps => {
    return {
        selectedChannel: state.messageApp.selectedChannel
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageAppDispatchProps => {
    return {
        onChannelChange: (selectedChannel: number) => dispatch(selectChannel(selectedChannel))
    };
};

export const MessageAppContainer = connect(mapStateToProps, mapDispatchToProps)(MessageApp);
