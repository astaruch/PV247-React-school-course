import {IMessageAppState} from '../models/IMessageApp';
import {connect} from 'react-redux';
//import {Dispatch} from 'redux';
import {BrowseChannels, IBrowseChannelsDispatchProps, IBrowseChannelsStateProps} from '../components/BrowseChannels';

const mapStateToProps = (state: IMessageAppState): IBrowseChannelsStateProps => {
  return {
    allChannels: state.channels!.asList,
  };
};

const mapDispatchToProps = (/*dispatch: Dispatch*/): IBrowseChannelsDispatchProps => {
  return {
  };
};
export const BrowseChannelContainer = connect<IBrowseChannelsStateProps, IBrowseChannelsDispatchProps>(mapStateToProps, mapDispatchToProps)(BrowseChannels);
