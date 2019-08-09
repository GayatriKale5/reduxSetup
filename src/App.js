import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import Demo from './component/ComponentData';

const App = () => {
  return (
    <Provider store={ store }>
      <Demo/>
    </Provider>
  )
}

export default App
