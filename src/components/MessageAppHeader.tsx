import * as React from 'react';
import * as PropTypes from 'prop-types';
import {UserThumbnail} from './UserThumbnail';

interface IMessageAppHeader {
    user: string;
}

export class MessageAppHeader extends React.PureComponent<IMessageAppHeader> {
    static propTypes = {
        user: PropTypes.string.isRequired,
    };

    public render(): JSX.Element {
        return (
            <div className="message-app-header border-css">
                <UserThumbnail user={this.props.user}/>
            </div>
        );
    }
}
