import {IMessageAppState} from '../models/IMessageApp';
import {connect} from 'react-redux';
import {App, IAppStateProps} from '../App';

const mapStateToProps = (state: IMessageAppState): IAppStateProps => {
    return {
        logged: state.logged,
    };
};

export const AppContainer = connect<IAppStateProps, void>(mapStateToProps)(App);
