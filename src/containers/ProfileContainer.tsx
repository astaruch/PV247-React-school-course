import {Dispatch} from 'redux';
import {IUser} from '../models/IUser';
import {profileUpdated} from '../actions/actionCreators';
import {connect} from 'react-redux';
import {IProfileDispatchProps, IProfileStateProps, Profile} from '../components/Profile';
import {IMessageAppState} from '../models/IMessageApp';

const updateProfile = (user: IUser): any => {
    return async (dispatch: Dispatch): Promise<void> => {
        console.log('Saving profile ', user.name);
        dispatch(profileUpdated(user));
    };
};

const mapStateToProps = (state: IMessageAppState): IProfileStateProps => {
    return {
        user: state.currentUser!
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IProfileDispatchProps => {
    return {
        onSave: (user: IUser) => dispatch(updateProfile(user))
    };
};

export const ProfileContainer = connect<IProfileStateProps, IProfileDispatchProps>(mapStateToProps, mapDispatchToProps)(Profile);
