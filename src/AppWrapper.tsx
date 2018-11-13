import * as React from 'react';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {AppContainer} from './containers/AppContainer';
import {rootReducer} from './reducers/rootReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export class AppWrapper extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}
