import * as React from 'react';
import {ChatWindow} from './ChatWindow';
import {Segment} from 'semantic-ui-react';
import {ChannelListContainer} from '../containers/ChannelListContainer';


export class MessageApp extends React.PureComponent<{}> {

    public render(): JSX.Element {
        return (
            <Segment.Group style={{height: '100%'}}>
                {/*<MessageAppHeader user={user}/>*/}
                <Segment.Group horizontal style={{height: '100%'}}>
                    <ChannelListContainer/>
                    <ChatWindow/>
                </Segment.Group>
            </Segment.Group>
        );
    }
}
