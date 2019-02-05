import * as React from 'react';
import * as Immutable from 'immutable';
import {Comment, List, Segment} from 'semantic-ui-react';
import {MessageItemContainer} from '../containers/MessageItemContainer';


export interface IMessageListStateProps {
  readonly messagesIds: Immutable.List<Uuid>;
  readonly asyncChangingChannels: boolean;
}

export class MessageList extends React.PureComponent<IMessageListStateProps> {
//  endReference = new HTMLDivElement();
//
//  scrollToBottom = () => {
//    this.endReference.scrollIntoView({behavior: 'smooth'});
//  };
//
//  componentDidUpdate() {
//    this.scrollToBottom();
//  }

  render(): JSX.Element {
    return (
      <Segment loading={this.props.asyncChangingChannels}>
        <List>
          <Comment.Group>
            {this.props.messagesIds!.map((messageId) => (
              <MessageItemContainer id={messageId} key={messageId}/>
            ))}
          </Comment.Group>
          {/*<div ref={(el) => { this.endReference = el || new HTMLDivElement();}}/>*/}
        </List>
      </Segment>
    );
  }
}
