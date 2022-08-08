import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducers from './RootReducers';
import sagas from './redux/saga';

const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    RootReducers,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(sagas);

  // store.dispatch({type:"GET_COUNTRY_CODES"})

  return store;
};

export const store = configStore();