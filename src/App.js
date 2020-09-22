import React from 'react';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TEST</h1>
      </div>
    </Provider>
  );
}

export default App;
