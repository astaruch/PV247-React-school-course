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
//import {_channels} from '../common/initialData';
//import {channelSelected} from '../actions/actionCreators';

//const channelChange = (channelId: Uuid): any => {
//    return async (dispatch: Dispatch): Promise<void> => {
//        const selectedChannel = _channels.filter((channel) => channel.id === channelId).get(0);
//        if (!selectedChannel) {
//            return;
//        }
//        console.log('Changing channel to: ', selectedChannel.name);
//        dispatch(channelSelected(selectedChannel));
//    };
//};

const mapStateToProps = (state: IMessageAppState, channelProps: IChannelItemOwnProps): IChannelItemStateProps => {
  return {
    channelItem: state.channels.byId.get(channelProps.id)!,
    selected: state.selectedChannel === channelProps.id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
//        onClick: (channelId: Uuid) => dispatch(channelChange(channelId)),
    onClick: (channelId: Uuid) => dispatch(changeChannel(channelId))
  };
};
export const ChannelItemContainer = connect<IChannelItemStateProps, IChannelItemDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelItem);
