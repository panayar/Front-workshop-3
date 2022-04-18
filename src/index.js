import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  //Provider engloba la clase principal para que el store se accesible
  <Provider store={store}>
    {/* Navegacion */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
