import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';

interface IUserThumbnail {
    user: string;
}

export class UserThumbnail extends React.PureComponent<IUserThumbnail> {
    static propTypes = {
        user: PropTypes.string.isRequired,
    };

    public render(): JSX.Element {
        return (
            <div className="user-thumbnail">
                <Icon inverted circular name={'user'}/>
            </div>
        );
    }
}
