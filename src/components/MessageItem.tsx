import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Comment} from 'semantic-ui-react';

export interface IMessageItem {
    readonly id: number;
    readonly channelId: number;
    readonly from: string;
    readonly text: string;
}

export class MessageItem extends React.Component<IMessageItem> {
    static propTypes = {
        id: PropTypes.number.isRequired,
        channelId: PropTypes.number.isRequired,
        from: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render(): JSX.Element {
        return (
            <Comment key={this.props.id}>
                <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"/>
                <Comment.Content>
                    <Comment.Author>{this.props.from}</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 13:37</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        {this.props.text}
                    </Comment.Text>
                </Comment.Content>
            </Comment>
        );
    }
}
