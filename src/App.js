import React from 'react';
import { Provider } from 'react-redux';

import DevTools from './components/DevTools';
import Todos from './components/Todos';

import configureStore from './store/configureStore';
import configureStoreDev from './store/configureStore.dev';

import './style.less';

let store = {};
if (process.env.NODE_ENV === 'production') {
  store = configureStore();
} else {
  store = configureStoreDev();
}
// const store = configureStore();

const App = () => (
  <Provider store={store}>
    <main>
      <DevTools />
      <Todos />
    </main>
  </Provider>
);

export default App;
