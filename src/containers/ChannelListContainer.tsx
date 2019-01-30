import {IMessageAppState} from '../models/IMessageApp';
import {ChannelList, IChannelListDispatchProps, IChannelListStateProps} from '../components/ChannelList';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addNewChannel, cancelChannelCreation, saveNewChannel} from '../actions/channelActions';

const mapStateToProps = (state: IMessageAppState): IChannelListStateProps => {
  return {
    channelsList: state.channels!.asList,
    newChannel: state.channels.newChannel
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelListDispatchProps => {
  return {
    onAddNewChannel: () => dispatch(addNewChannel()),
    onSavingNewChannel: (name: string, order: number) => dispatch(saveNewChannel(name, order)),
    onCancelingChannelCreation: () => dispatch(cancelChannelCreation()),
  };
};
export const ChannelListContainer = connect<IChannelListStateProps, IChannelListDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelList);
