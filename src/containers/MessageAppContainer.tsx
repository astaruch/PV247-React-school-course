import {connect} from 'react-redux';
import {IMessageAppDispatchProps, MessageApp} from '../components/MessageApp';
import {Dispatch} from 'redux';
import {loadDataFromServer} from '../actions/globalActions';

const mapDispatchToProps = (dispatch: Dispatch): any => {
  return {
    loadDataFromServer: () => dispatch(loadDataFromServer())
  };
};

export const MessageAppContainer = connect<void, IMessageAppDispatchProps>(null, mapDispatchToProps)(MessageApp);
