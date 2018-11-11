import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {selectChannel} from '../actions/actionCreators';
import {MessageApp} from '../components/MessageApp';

const mapDispatchToProps = (dispatch: Dispatch): any => {
    return {
        onChannelChange: (selectedChannel: number) => dispatch(selectChannel(selectedChannel))
    };
};


export const MessageAppContainer = connect(mapDispatchToProps)(MessageApp);
