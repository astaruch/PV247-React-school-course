import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface IMessageItem {
    readonly id: string;
    readonly from: string;
    readonly text: string;
}

export class MessageItem extends React.Component<IMessageItem> {
    static propTypes = {
        id: PropTypes.string.isRequired,
        from: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render(): JSX.Element {
        return (
            <div className="message border-css" key={this.props.id}>
                <div className="message__message-from">
                    {this.props.from}
                </div>
                <div className="message__message-text">
                    {this.props.text}
                </div>
            </div>
        );
    }
}
