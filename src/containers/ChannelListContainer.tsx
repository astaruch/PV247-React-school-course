import {IMessageAppState} from '../models/IMessageApp';
import {ChannelList, IChannelListStateProps} from '../components/ChannelList';
import {connect} from 'react-redux';

const mapStateToProps = (state: IMessageAppState): IChannelListStateProps => {
  return {
    channelIds: state.channels && state.channels.allIds || null,
  };
};
export const ChannelListContainer = connect<IChannelListStateProps, void>(mapStateToProps)(ChannelList);
