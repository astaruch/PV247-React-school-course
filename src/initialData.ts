import * as uuid from 'uuid';
import * as Immutable from 'immutable';
import {IUser} from './models/IUser';
import {IMessageItem} from './models/IMessageItem';
import {IChannelItem} from './models/IChannelItem';

const imgUrl1 = "https://react.semantic-ui.com/images/avatar/small/matt.jpg";
const imgUrl2 = "https://react.semantic-ui.com/images/avatar/small/elliot.jpg";
const imgUrl3 = "https://react.semantic-ui.com/images/avatar/small/jenny.jpg";

export const _users:  Immutable.List<IUser> = Immutable.List([
    {
        id: uuid(),
        name: 'Matt Brown',
        username: 'matt123',
        email: 'matt@gmail.com',
        gender: 'm',
        pictureUrl: imgUrl1
    },
    {
        id: uuid(),
        name: 'Elliot Aldersen',
        username: 'fsociety',
        email: 'elliot@e-corp.com',
        gender: 'm',
        pictureUrl: imgUrl2
    },
    {
        id: uuid(),
        name: 'Jenny Hope',
        username: 'jenn',
        email: 'jenny@gmail.com',
        gender: 'f',
        pictureUrl: imgUrl3
    }
]);

export const _channels: Immutable.List<IChannelItem> = Immutable.List([
    {
        id: uuid(),
        name: 'General',
        numberOfNewMessages: 10,
    },
    {
        id: uuid(),
        name: 'Back office',
        numberOfNewMessages: 0,
    },
    {
        id: uuid(),
        name: 'Spam',
        numberOfNewMessages: 1337,
    },
]);

export const _messages: Immutable.List<IMessageItem> = Immutable.List([
    {
        id: uuid(),
        channelId: _channels.get(0)!.id,
        from: _users.get(0)!.id,
        text: 'Ahoj',
        timestamp: 1541954645
    },
    {
        id: uuid(),
        channelId: _channels.get(0)!.id,
        from: _users.get(1)!.id,
        text: 'Nazdar',
        timestamp: 1541954945
    },
    {
        id: uuid(),
        channelId: _channels.get(1)!.id,
        from: _users.get(0)!.id,
        text: 'Co je noveho?',
        timestamp: 1541954645
    },
    {
        id: uuid(),
        channelId: _channels.get(1)!.id,
        from: _users.get(2)!.id,
        text: 'Nic moc',
        timestamp: 1541955945
    },
]);
