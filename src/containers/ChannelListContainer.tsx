import {IMessageAppState} from '../models/IMessageApp';
import {ChannelList, IChannelListDispatchProps, IChannelListStateProps} from '../components/ChannelList';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {createNewChannel} from '../actions/channelActions';

const mapStateToProps = (state: IMessageAppState): IChannelListStateProps => {
  return {
    channelsList: state.channels!.asList,
    asyncAddingChannel: state.spinners.addingNewChannel
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelListDispatchProps => {
  return {
    onCreateNewChannel: (name: string, order: number) => dispatch(createNewChannel(name, order)),
  };
};
export const ChannelListContainer = connect<IChannelListStateProps, IChannelListDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelList);
