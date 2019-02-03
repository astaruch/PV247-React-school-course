import * as React from 'react';
import {Grid} from 'semantic-ui-react';
import {MessageListContainer} from '../containers/MessageListContainer';
import {MessageFormContainer} from '../containers/MessageFormContainer';


export class ChatWindow extends React.PureComponent {

    public render(): JSX.Element {
        return (
            <Grid divided={'vertically'} className={'chat-window-grid'}>
                <Grid.Row>
                    <MessageListContainer/>
                </Grid.Row>
                <Grid.Row>
                    <MessageFormContainer/>
                </Grid.Row>
            </Grid>
        );
    }
}
