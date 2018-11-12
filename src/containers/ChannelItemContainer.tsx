import {IMessageAppState} from '../models/IMessageApp';
import {ChannelItem, IChannelItemDispatchProps, IChannelItemOwnProps, IChannelItemStateProps} from '../components/ChannelItem';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {channelChange} from '../actions/channelActions';

const mapStateToProps = (state: IMessageAppState, channelProps: IChannelItemOwnProps): IChannelItemStateProps => {
    return {
        channelItem: state.channels.byId.get(channelProps.id)!,
        selected: state.selectedChannel === channelProps.id,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onClick: (channelId: Uuid) => dispatch(channelChange(channelId)),
    };
};
export const ChannelItemContainer = connect<IChannelItemStateProps, IChannelItemDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelItem);
