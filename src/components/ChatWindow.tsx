import * as React from 'react';
import {Grid} from 'semantic-ui-react';
import {MessageListContainer} from '../containers/MessageListContainer';


export class ChatWindow extends React.PureComponent {

    public render(): JSX.Element {
        return (
            <Grid divided={'vertically'} style={{width: '90%'}}>
                <Grid.Row>
                    <MessageListContainer/>
                </Grid.Row>
                <Grid.Row>
                    {/*<MessageFormContainer/>*/}
                </Grid.Row>
            </Grid>
        );
    }
}
