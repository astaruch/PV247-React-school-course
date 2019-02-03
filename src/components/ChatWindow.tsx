import * as React from 'react';
import {Grid} from 'semantic-ui-react';
import {MessageListContainer} from '../containers/MessageListContainer';
import {MessageFormContainer} from '../containers/MessageFormContainer';


export class ChatWindow extends React.PureComponent {

  public render(): JSX.Element {
    return (
      <Grid columns={2}
            divided={'vertically'}
            className={'chat-window'}>
        <Grid.Column>
        <Grid.Row>
          <MessageListContainer/>
        </Grid.Row>
        <Grid.Row>
          <MessageFormContainer/>
        </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          tuto bude zoznam userov
        </Grid.Column>
      </Grid>
    );
  }
}
