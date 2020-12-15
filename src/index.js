import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';
import { store, persistor } from "./redux/store";
import * as serviceWorker from './serviceWorker';

const elem = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , elem);

serviceWorker.unregister();
