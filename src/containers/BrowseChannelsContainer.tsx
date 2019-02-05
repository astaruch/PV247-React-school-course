import {IMessageAppState} from '../models/IMessageApp';
import {connect} from 'react-redux';
import {BrowseChannels, IBrowseChannelsStateProps} from '../components/BrowseChannels';

const mapStateToProps = (state: IMessageAppState): IBrowseChannelsStateProps => {
  return {
    allChannels: state.channels!.asList,
  };
};

export const BrowseChannelContainer = connect<IBrowseChannelsStateProps, void>(mapStateToProps)(BrowseChannels);
