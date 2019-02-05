import {IMessageAppState} from '../models/IMessageApp';
import {connect} from 'react-redux';
import {
  BrowseChannelItem,
  IBrowseChannelItemDispatchProps,
  IBrowseChannelItemStateProps
} from '../components/BrowseChannelItem';
import {IChannelItemOwnProps} from '../components/ChannelItem';
import {Dispatch} from 'redux';
import {joinChannel, leaveChannel} from '../actions/channelActions';

const mapStateToProps = (state: IMessageAppState, channelProps: IChannelItemOwnProps): IBrowseChannelItemStateProps => {
  return {
    channel: state.channels.asMap.get(channelProps.id)!,
    loggedUserId: state.users.currentUser && state.users.currentUser.customData.id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IBrowseChannelItemDispatchProps => {
  return {
    onChannelJoin: (channelId: Uuid, userId: Uuid) => dispatch(joinChannel(channelId, userId)),
    onChannelLeave: (channelId: Uuid, userId: Uuid) => dispatch(leaveChannel(channelId, userId)),
  };
};
export const BrowseChannelItemContainer = connect<IBrowseChannelItemStateProps,
  IBrowseChannelItemDispatchProps>(mapStateToProps, mapDispatchToProps)(BrowseChannelItem);
