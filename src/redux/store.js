import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';
import ReduxThunk from 'redux-thunk'

const store = createStore(reducers,
    compose(applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;


