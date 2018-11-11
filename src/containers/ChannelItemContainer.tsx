import {IMessageAppState} from '../models/IMessageApp';
import {ChannelItem, IChannelItemStateProps, IChannelItemChannelProps} from '../components/ChannelItem';
import {connect} from 'react-redux';

const mapStateToProps = (state: IMessageAppState, channelProps: IChannelItemChannelProps): IChannelItemStateProps => {
    return {
        channelItem: state.channels.byId.get(channelProps.id)!,
    };
};
export const ChannelItemContainer = connect<IChannelItemStateProps, void>(mapStateToProps)(ChannelItem);
