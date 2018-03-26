import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    debugger;
  return createStore(rootReducer, initialState);
}


