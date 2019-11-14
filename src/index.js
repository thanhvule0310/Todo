import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import Loader from './components/UI/Loader/Loader';

const root = document.getElementById('root');

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//TODO: Check Firebase Auth
ReactDOM.render(
  <Wrapper>
    <Loader />
  </Wrapper>,
  root
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    root
  );
});

serviceWorker.unregister();
