import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Button, Menu} from 'semantic-ui-react';
import {Profile} from './Profile';

interface IMessageAppHeader {
    user: string;
}

interface IMessageAppHeaderState {
    modalOpened: boolean;
}

export class MessageAppHeader extends React.PureComponent<IMessageAppHeader, IMessageAppHeaderState> {
    static propTypes = {
        user: PropTypes.string.isRequired,
    };

    state = {
        modalOpened: false
    };

    showModal = () => {
        console.log('Opening modal window with profile');
        this.setState(() => ({
                modalOpened: true
            })
        );
    };

    closeModal = () => {
        console.log('Closing modal');
        this.setState(() => ({
                modalOpened: false
            })
        );
    };

    public render(): JSX.Element {
        const open = this.state.modalOpened;
        return (
            <Menu inverted>
                <Menu.Item>
                    <img src="https://react.semantic-ui.com/logo.png"/>
                </Menu.Item>
                <Menu.Item position={'right'}>
                    <Button inverted circular icon={'user'} onClick={this.showModal}/>
                </Menu.Item>
                <Profile nick={this.props.user} onClose={this.closeModal} open={open}/>
            </Menu>
        );
    }
}
