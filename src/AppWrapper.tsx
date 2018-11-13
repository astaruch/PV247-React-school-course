import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {AppContainer} from './containers/AppContainer';
import {rootReducer} from './reducers/rootReducer';

// To enable redux extension - https://github.com/zalmoxisus/redux-devtools-extension#usage
const enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, enhancer);

export class AppWrapper extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}
