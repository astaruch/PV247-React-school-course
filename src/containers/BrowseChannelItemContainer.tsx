import {IMessageAppState} from '../models/IMessageApp';
import {connect} from 'react-redux';
import {
  BrowseChannelItem,
  IBrowseChannelItemDispatchProps,
  IBrowseChannelItemStateProps
} from '../components/BrowseChannelItem';
import {IChannelItemOwnProps} from '../components/ChannelItem';
//import {Dispatch} from 'redux';

const mapStateToProps = (state: IMessageAppState, channelProps: IChannelItemOwnProps): IBrowseChannelItemStateProps => {
  return {
    channel: state.channels.asMap.get(channelProps.id)!,
  };
};

const mapDispatchToProps = (/*dispatch: Dispatch*/): IBrowseChannelItemDispatchProps => {
  return {};
};
export const BrowseChannelItemContainer = connect<IBrowseChannelItemStateProps,
  IBrowseChannelItemDispatchProps>(mapStateToProps, mapDispatchToProps)(BrowseChannelItem);
