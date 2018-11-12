import {Dispatch} from 'redux';
import {MESSAGE_APP_CHANNEL_CHANGE_FINISHED, MESSAGE_APP_CHANNEL_CHANGE_STARTED} from '../constants/actionTypes';
import {IChannelItem} from '../models/IChannelItem';
import {_channels} from '../common/initialData';


// SELECTING A CHANNEL
const selectingChannelStarted = (): Action<MESSAGE_APP_CHANNEL_CHANGE_STARTED> => ({
   type: MESSAGE_APP_CHANNEL_CHANGE_STARTED
});

const selectingChannelFinished = (channel: IChannelItem): Action<MESSAGE_APP_CHANNEL_CHANGE_FINISHED> => ({
    type: MESSAGE_APP_CHANNEL_CHANGE_FINISHED,
    payload: {
        id: channel.id
    }
});

export const channelChange = (channelId: Uuid): any => {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(selectingChannelStarted());
        const selectedChannel = _channels.filter((channel) => channel.id === channelId).get(0);
        if (!selectedChannel) {
            return;
        }
        console.log('Changing channel to: ', selectedChannel.name);
        dispatch(selectingChannelFinished(selectedChannel));
    };
};
