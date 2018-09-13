import { createStore } from 'redux';
import { Reducer, initalState } from './reducers';

export const ConfigureStore = () => {
  const store = createStore(
    Reducer,
    initalState
  );
  return store;
}
