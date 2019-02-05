import {IMessageAppState} from '../models/IMessageApp';
import {
  ChannelItem,
  IChannelItemDispatchProps,
  IChannelItemOwnProps,
  IChannelItemStateProps
} from '../components/ChannelItem';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {
  changeChannel,
  changeChannelName,
  deleteChannel,
  leaveChannel,
  startEditing,
} from '../actions/channelActions';
import {IChannel} from '../models/IChannel';

const mapStateToProps = (state: IMessageAppState, channelProps: IChannelItemOwnProps): IChannelItemStateProps => {
  return {
    channel: state.channels.asMap.get(channelProps.id)!,
    selected: state.channels.selected === channelProps.id,
    loggedUserId: state.users.currentUser && state.users.currentUser.customData.id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onChannelChange: (channelId: Uuid) => dispatch(changeChannel(channelId)),
    onSavingChannelName: (channel: IChannel, name: string) => dispatch(changeChannelName(channel, name)),
    onDeleteChannel: (channelId: Uuid) => dispatch(deleteChannel(channelId)),
    onStartEditing: (channelId: Uuid) => dispatch(startEditing(channelId)),
    onChannelLeave: (channelId: Uuid, userId: Uuid, channel: IChannel) =>
      dispatch(leaveChannel(channelId, userId, channel)),
  };
};
export const ChannelItemContainer = connect<IChannelItemStateProps, IChannelItemDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelItem);
