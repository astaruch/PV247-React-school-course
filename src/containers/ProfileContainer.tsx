import {Dispatch} from 'redux';
import {IUser} from '../models/IUser';
import {connect} from 'react-redux';
import {IProfileDispatchProps, IProfileStateProps, Profile} from '../components/Profile';
import {IMessageAppState} from '../models/IMessageApp';
import {updateUser} from '../actions/userActions';

const mapStateToProps = (state: IMessageAppState): IProfileStateProps => {
    return {
        user: state.users.currentUser!
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IProfileDispatchProps => {
    return {
        onSave: (user: IUser) => dispatch(updateUser(user))
    };
};

export const ProfileContainer = connect<IProfileStateProps, IProfileDispatchProps>(mapStateToProps, mapDispatchToProps)(Profile);
