import {IMessageAppState} from '../models/IMessageApp';
import {
  ChannelItem,
  IChannelItemDispatchProps,
  IChannelItemOwnProps,
  IChannelItemStateProps
} from '../components/ChannelItem';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {changeChannel} from '../actions/channelActions';

const mapStateToProps = (state: IMessageAppState, channelProps: IChannelItemOwnProps): IChannelItemStateProps => {
  return {
    channel: state.channels.byId.get(channelProps.id)!,
    selected: state.selectedChannel === channelProps.id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onClick: (channelId: Uuid) => dispatch(changeChannel(channelId))
  };
};
export const ChannelItemContainer = connect<IChannelItemStateProps, IChannelItemDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelItem);
