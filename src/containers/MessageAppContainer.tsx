import {connect} from 'react-redux';
import {MessageApp} from '../components/MessageApp';

// const mapDispatchToProps = (dispatch: Dispatch): any => {
//     return {
//         onChannelChange: (selectedChannel: number) => dispatch(selectedChannel(selectedChannel))
//     };
// };

export const MessageAppContainer = connect()(MessageApp);
