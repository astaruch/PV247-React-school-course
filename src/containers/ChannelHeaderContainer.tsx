import {IMessageAppState} from '../models/IMessageApp';
import {connect} from 'react-redux';
import {ChannelHeader, IChannelHeaderStateProps} from '../components/ChannelHeader';

const mapStateToProps = (state: IMessageAppState): IChannelHeaderStateProps => {
  return {
    channel: state.channels.asMap.get(state.channels.selected)!
  };
};

export const ChannelHeaderContainer = connect<IChannelHeaderStateProps, void>(mapStateToProps)(ChannelHeader);
