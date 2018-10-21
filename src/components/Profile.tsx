import * as React from 'react';


export interface IProfileProps {
    nick: string;
}

export interface IProfileState {
    name: string;
    gender: string;
    city: string;
    isAdmin: boolean;
}

export class Profile extends React.PureComponent<IProfileProps, IProfileState> {

    constructor(props) {
        super(props);

        this.loadProfile(this.props.nick);
    }

    loadProfile = (nick: string) => {
        console.log('Loading profile for ', nick);
        this.state = {
            name: 'John Smith',
            gender: 'Male',
            city: 'Brno',
            isAdmin: true
        };
    };

    render(): JSX.Element {
        return (
            <div className="Profile">
                Profile for {this.props.nick}<br/>
                Name: {this.state.name}<br/>
                Gender: {this.state.gender}<br/>
                City: {this.state.city}<br/>
                {this.state.isAdmin && <strong>This user is admin</strong>}
            </div>
        );
    }

}
