import * as React from 'react';
import * as PropTypes from 'prop-types';

interface IUserThumbnail {
    user: string;
}

export class UserThumbnail extends React.PureComponent<IUserThumbnail> {
    static propTypes = {
        user: PropTypes.string.isRequired,
    };

    public render(): JSX.Element {
        return (
            <div className="UserThumbnail">
                {this.props.user}
            </div>
        );
    }
}
