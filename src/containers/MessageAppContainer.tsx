import {connect} from 'react-redux';
import {IMessageAppDispatchProps, MessageApp} from '../components/MessageApp';
import {Dispatch} from 'redux';
import {initialLoad} from '../actions/initialActions';


const mapDispatchToProps = (dispatch: Dispatch): any => {
    return {
        onMount: () => dispatch(initialLoad())
    };
};

export const MessageAppContainer = connect<void, IMessageAppDispatchProps>(null, mapDispatchToProps)(MessageApp);
