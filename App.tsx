
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import saga from 'redux-saga';
 
import { appReducer }  from './src/store/reducers';
import rootSaga from './src/store/sagas';
import { Main } from './src/components/main/main';
 
// The middlewares which will be used in this App
const middlewares = [] as any;

// Initialize the saga middleware
const sagaMiddleware = saga();

middlewares.push(sagaMiddleware);

const store = createStore(
  appReducer(),
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export const App = () => {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
}