import {IMessageAppState} from '../models/IMessageApp';
import {
  ChannelItem,
  IChannelItemDispatchProps,
  IChannelItemOwnProps,
  IChannelItemStateProps
} from '../components/ChannelItem';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {changeChannel, changeChannelName} from '../actions/channelActions';

const mapStateToProps = (state: IMessageAppState, channelProps: IChannelItemOwnProps): IChannelItemStateProps => {
  return {
    channel: state.channels.asMap.get(channelProps.id)!,
    selected: state.channels.selected === channelProps.id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onChannelChange: (channelId: Uuid) => dispatch(changeChannel(channelId)),
    onSavingChannelName: (channelId: Uuid, name: string) => dispatch(changeChannelName(channelId, name)),
  };
};
export const ChannelItemContainer = connect<IChannelItemStateProps, IChannelItemDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelItem);
