import {IMessageAppState} from '../models/IMessageApp';
import {ChannelList, IChannelListStateProps} from '../components/ChannelList';
import {connect} from 'react-redux';

const mapStateToProps = (state: IMessageAppState): IChannelListStateProps => {
  return {
    channelsList: state.channels && state.channels.asList,
  };
};
export const ChannelListContainer = connect<IChannelListStateProps, void>(mapStateToProps)(ChannelList);
