import * as React from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {rootReducer} from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {AppContainer} from './containers/AppContainer';
import {loadInitialData} from './actions/actionCreators';

// To enable redux extension - https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
));


export class AppWrapper extends React.PureComponent {
    public render(): JSX.Element {
        store.dispatch(loadInitialData());
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}
