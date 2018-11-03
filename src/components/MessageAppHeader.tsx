import * as React from 'react';
import * as PropTypes from 'prop-types';
import {UserThumbnail} from './UserThumbnail';
import {Menu} from 'semantic-ui-react';

interface IMessageAppHeader {
    user: string;
}

export class MessageAppHeader extends React.PureComponent<IMessageAppHeader> {
    static propTypes = {
        user: PropTypes.string.isRequired,
    };

    public render(): JSX.Element {
        return (
            <Menu inverted>
                <Menu.Item>
                    <img src="https://react.semantic-ui.com/logo.png"/>
                </Menu.Item>
                <Menu.Item position={'right'}>
                    <UserThumbnail user={this.props.user}/>
                </Menu.Item>
            </Menu>
        );
    }
}
