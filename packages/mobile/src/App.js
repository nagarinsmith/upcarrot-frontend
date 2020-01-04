import React from 'react';
import {Provider} from 'mobx-react';
import RootRouter from './navigation';
import mobxStore from 'shared/src/mobx';
import api from 'shared/src/services/api';
import getStorage from './config/storage';

const storage = getStorage();
const apiService = api.create(storage);
const rootStore = mobxStore.create(
  {},
  {apiService, callNames: api.callNames, storage},
);

const App = () => (
  <Provider store={rootStore}>
    <RootRouter />
  </Provider>
);

export default App;
